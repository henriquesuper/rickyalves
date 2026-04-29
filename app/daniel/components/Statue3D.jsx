'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import {
  EffectComposer,
  Bloom,
  Vignette,
  SMAA,
  ToneMapping,
} from '@react-three/postprocessing';
import { ToneMappingMode } from 'postprocessing';
import * as THREE from 'three';
import { KINGDOMS } from '../data/kingdoms';
import { useLanguage } from '../i18n/useLanguage';

// ---------- Module-scope constants (avoid re-allocating each render) ----------

const NORMAL_SCALE_VEC = new THREE.Vector2(0.35, 0.35);
const TORSO_FLATTEN = [1, 1, 0.78];

// Hammered-metal normal map. Generated once via Canvas: multi-octave height
// map -> Sobel -> packed into RGB normal. No external assets.
function buildHammeredNormalMap(size = 256) {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  const height = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let h = 0;
      h += Math.sin(x * 0.42 + Math.cos(y * 0.31) * 1.7) * 0.45;
      h += Math.sin(x * 0.13 + y * 0.17) * 0.32;
      h += Math.sin(x * 1.10) * Math.cos(y * 0.95) * 0.22;
      h += (Math.random() - 0.5) * 0.18;
      height[y * size + x] = h;
    }
  }

  const img = ctx.createImageData(size, size);
  const at = (x, y) =>
    height[((y + size) % size) * size + ((x + size) % size)];

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const tl = at(x - 1, y - 1), t = at(x, y - 1), tr = at(x + 1, y - 1);
      const  l = at(x - 1, y    ),                    r = at(x + 1, y    );
      const bl = at(x - 1, y + 1), b = at(x, y + 1), br = at(x + 1, y + 1);
      const dx = (tr + 2 * r + br) - (tl + 2 * l + bl);
      const dy = (bl + 2 * b + br) - (tl + 2 * t + tr);
      const dz = 2.0;
      const len = Math.hypot(dx, dy, dz) || 1;
      const i = (y * size + x) * 4;
      img.data[i]     = ((dx / len) * 0.5 + 0.5) * 255;
      img.data[i + 1] = ((dy / len) * 0.5 + 0.5) * 255;
      img.data[i + 2] = ((dz / len) * 0.5 + 0.5) * 255;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 2);
  tex.anisotropy = 4;
  return tex;
}

// ---------- Lathe profiles (Vector2[]) ----------

// Egg-shaped head: narrow chin -> wider cheeks -> rounded crown.
const HEAD_POINTS = (() => {
  const segs = 22;
  const pts = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const y = -0.40 + t * 0.85;
    let r;
    if (t < 0.12) r = 0.04 + (t / 0.12) * 0.26;
    else if (t < 0.42) r = 0.30 + ((t - 0.12) / 0.30) * 0.14;
    else if (t < 0.72) r = 0.44 - ((t - 0.42) / 0.30) * 0.02;
    else if (t < 0.93) r = 0.42 - ((t - 0.72) / 0.21) * 0.18;
    else r = 0.24 - ((t - 0.93) / 0.07) * 0.24;
    pts.push(new THREE.Vector2(Math.max(r, 0.001), y));
  }
  return pts;
})();

// Babylonian conical helmet with two decorative bands.
const HELMET_POINTS = [
  new THREE.Vector2(0.001, 0.00),
  new THREE.Vector2(0.42,  0.00),
  new THREE.Vector2(0.46,  0.04),
  new THREE.Vector2(0.43,  0.10),
  new THREE.Vector2(0.40,  0.14),
  new THREE.Vector2(0.42,  0.20),
  new THREE.Vector2(0.40,  0.26),
  new THREE.Vector2(0.36,  0.32),
  new THREE.Vector2(0.30,  0.42),
  new THREE.Vector2(0.18,  0.52),
  new THREE.Vector2(0.001, 0.58),
];

// Slightly flared neck (concave middle).
const NECK_POINTS = [
  new THREE.Vector2(0.20, -0.18),
  new THREE.Vector2(0.18, -0.05),
  new THREE.Vector2(0.17,  0.05),
  new THREE.Vector2(0.21,  0.18),
];

// Upper torso: chest taper to neck base. Shoulders are added separately as spheres.
const UPPER_TORSO_POINTS = [
  new THREE.Vector2(0.45, -0.70),
  new THREE.Vector2(0.49, -0.45),
  new THREE.Vector2(0.52, -0.18),
  new THREE.Vector2(0.50,  0.10),
  new THREE.Vector2(0.42,  0.40),
  new THREE.Vector2(0.34,  0.52),
  new THREE.Vector2(0.25,  0.60),
];

// Lower torso: belly + hip flare, matches upper torso radius at the silver/bronze seam.
const LOWER_TORSO_POINTS = [
  new THREE.Vector2(0.50, -0.65),
  new THREE.Vector2(0.46, -0.45),
  new THREE.Vector2(0.51, -0.20),
  new THREE.Vector2(0.48,  0.05),
  new THREE.Vector2(0.45,  0.30),
  new THREE.Vector2(0.45,  0.50),
];

// Pedestal: short cylinder with chamfered top.
const PEDESTAL_POINTS = [
  new THREE.Vector2(0.001, 0.00),
  new THREE.Vector2(1.40,  0.00),
  new THREE.Vector2(1.45,  0.05),
  new THREE.Vector2(1.40,  0.10),
  new THREE.Vector2(1.32,  0.25),
  new THREE.Vector2(1.28,  0.30),
  new THREE.Vector2(1.20,  0.32),
  new THREE.Vector2(0.001, 0.32),
];

// Foot footprint (top-down silhouette) - rotated into XZ plane at runtime.
const FOOT_SHAPE = (() => {
  const s = new THREE.Shape();
  s.moveTo(-0.13, -0.18);
  s.bezierCurveTo(-0.16,  0.00, -0.16,  0.25, -0.10, 0.42);
  s.bezierCurveTo(-0.05,  0.50,  0.05,  0.50,  0.10, 0.42);
  s.bezierCurveTo( 0.16,  0.25,  0.16,  0.00,  0.13, -0.18);
  s.lineTo(-0.13, -0.18);
  return s;
})();

// Stylized square-ish beard (Babylonian iconography).
const BEARD_SHAPE = (() => {
  const s = new THREE.Shape();
  s.moveTo(-0.18,  0.06);
  s.bezierCurveTo(-0.22, -0.08, -0.20, -0.22, -0.10, -0.30);
  s.bezierCurveTo(-0.04, -0.33,  0.04, -0.33,  0.10, -0.30);
  s.bezierCurveTo( 0.20, -0.22,  0.22, -0.08,  0.18,  0.06);
  s.lineTo(-0.18, 0.06);
  return s;
})();

// Memoized geometry args (stable refs avoid R3F re-creating geometry every frame).
const HEAD_ARGS = [HEAD_POINTS, 32];
const HELMET_ARGS = [HELMET_POINTS, 28];
const NECK_ARGS = [NECK_POINTS, 20];
const UPPER_TORSO_ARGS = [UPPER_TORSO_POINTS, 32];
const LOWER_TORSO_ARGS = [LOWER_TORSO_POINTS, 32];
const PEDESTAL_ARGS = [PEDESTAL_POINTS, 48];

const FOOT_EXTRUDE_OPTS = {
  depth: 0.10,
  bevelEnabled: true,
  bevelThickness: 0.025,
  bevelSize: 0.025,
  bevelSegments: 2,
  curveSegments: 18,
};
const FOOT_ARGS = [FOOT_SHAPE, FOOT_EXTRUDE_OPTS];

const BEARD_EXTRUDE_OPTS = {
  depth: 0.16,
  bevelEnabled: true,
  bevelThickness: 0.02,
  bevelSize: 0.02,
  bevelSegments: 3,
  curveSegments: 16,
};
const BEARD_ARGS = [BEARD_SHAPE, BEARD_EXTRUDE_OPTS];

const FOOT_ROT = [Math.PI / 2, 0, 0];

// Override palettes for the divided-kingdom feet (iron top / clay sole).
const IRON_OVERRIDE = {
  color: '#3d3d3d',
  metalness: 0.7,
  roughness: 0.4,
  clearcoat: 0.15,
};
const CLAY_OVERRIDE = {
  color: '#a8632c',
  metalness: 0.05,
  roughness: 0.85,
  clearcoat: 0,
};

// ---------- StatueSection: generic mesh wrapper with fade animation ----------

function StatueSection({
  kingdomId,
  kingdoms,
  active,
  highlighted,
  position,
  rotation,
  scale,
  normalMap,
  override,
  children,
}) {
  const meshRef = useRef();
  const k = kingdoms[kingdomId];
  const targetEmissive = highlighted ? 0.4 : active ? 0.05 : 0;
  const targetOpacity = active ? 1.0 : 0.15;

  useFrame(() => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material;
    const list = Array.isArray(mat) ? mat : [mat];
    list.forEach((m) => {
      m.emissiveIntensity = THREE.MathUtils.lerp(
        m.emissiveIntensity,
        targetEmissive,
        0.05,
      );
      m.opacity = THREE.MathUtils.lerp(m.opacity, targetOpacity, 0.08);
    });
  });

  const color = override?.color ?? k.color;
  const metalness = override?.metalness ?? k.material.metalness;
  const roughness = override?.roughness ?? k.material.roughness;
  const clearcoat =
    override?.clearcoat ?? (metalness > 0.7 ? 0.35 : 0);

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      castShadow
      receiveShadow
    >
      {children}
      <meshPhysicalMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
        clearcoat={clearcoat}
        clearcoatRoughness={0.3}
        normalMap={normalMap}
        normalScale={NORMAL_SCALE_VEC}
        envMapIntensity={1.4}
        emissive={color}
        emissiveIntensity={0}
        transparent
        opacity={1}
      />
    </mesh>
  );
}

// ---------- StatueGroup: assembled humanoid ----------

function StatueGroup({ activeKingdoms = [], highlightKingdoms = [], showRock = false }) {
  const groupRef = useRef();
  const rockRef = useRef();
  const rockProgress = useRef(0);

  const kingdoms = useMemo(() => {
    const km = {};
    KINGDOMS.forEach((k) => { km[k.id] = k; });
    return km;
  }, []);

  const normalMap = useMemo(() => buildHammeredNormalMap(256), []);

  // Irregular rock: icosahedron with per-vertex noise displacement.
  const rockGeom = useMemo(() => {
    const geom = new THREE.IcosahedronGeometry(0.55, 1);
    const pos = geom.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const noise =
        0.18 *
        ((Math.sin(v.x * 4.1) + Math.cos(v.y * 5.3) + Math.sin(v.z * 3.7)) /
          3);
      v.multiplyScalar(1 + noise);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    geom.computeVertexNormals();
    return geom;
  }, []);

  const isActive = (id) => activeKingdoms.includes(id);
  const isHighlighted = (id) => highlightKingdoms?.includes(id);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }

    if (rockRef.current) {
      if (showRock && rockProgress.current < 1) {
        rockProgress.current = Math.min(rockProgress.current + 0.008, 1);
      } else if (!showRock && rockProgress.current > 0) {
        rockProgress.current = Math.max(rockProgress.current - 0.02, 0);
      }
      const t = rockProgress.current;
      const startX = 4, startY = 6, startZ = -2;
      const endX = 0, endY = -2.30, endZ = 0.55;
      rockRef.current.position.x = THREE.MathUtils.lerp(startX, endX, t);
      rockRef.current.position.y =
        THREE.MathUtils.lerp(startY, endY, t) + Math.sin(t * Math.PI) * 2;
      rockRef.current.position.z = THREE.MathUtils.lerp(startZ, endZ, t);
      rockRef.current.rotation.x = t * Math.PI * 3;
      rockRef.current.rotation.z = t * Math.PI * 2;
      rockRef.current.visible = rockProgress.current > 0.01;

      const glow = Math.sin(state.clock.elapsedTime * 3) * 0.2 + 0.5;
      rockRef.current.material.emissiveIntensity = glow * t;
    }
  });

  // Cached active/highlight booleans for each kingdom.
  const babylonActive = isActive('babylon');
  const babylonHL = isHighlighted('babylon');
  const medoActive = isActive('medoPersia');
  const medoHL = isHighlighted('medoPersia');
  const greeceActive = isActive('greece');
  const greeceHL = isHighlighted('greece');
  const romeActive = isActive('rome');
  const romeHL = isHighlighted('rome');
  const dividedActive = isActive('divided');
  const dividedHL = isHighlighted('divided');

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* ============== HEAD - Babylon (gold) ============== */}
      <StatueSection
        kingdomId="babylon"
        kingdoms={kingdoms}
        active={babylonActive}
        highlighted={babylonHL}
        position={[0, 3.0, 0]}
        normalMap={normalMap}
      >
        <latheGeometry args={HEAD_ARGS} />
      </StatueSection>

      {/* Babylonian helmet/crown (sits atop head) */}
      <StatueSection
        kingdomId="babylon"
        kingdoms={kingdoms}
        active={babylonActive}
        highlighted={babylonHL}
        position={[0, 3.0, 0]}
        normalMap={normalMap}
      >
        <latheGeometry args={HELMET_ARGS} />
      </StatueSection>

      {/* Square ceremonial beard hanging from chin */}
      <StatueSection
        kingdomId="babylon"
        kingdoms={kingdoms}
        active={babylonActive}
        highlighted={babylonHL}
        position={[0, 2.55, 0.05]}
        normalMap={normalMap}
      >
        <extrudeGeometry args={BEARD_ARGS} />
      </StatueSection>

      {/* ============== NECK - Medo-Persia (silver) ============== */}
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[0, 2.40, 0]}
        normalMap={normalMap}
      >
        <latheGeometry args={NECK_ARGS} />
      </StatueSection>

      {/* ============== UPPER TORSO - chest tapered to neck (silver) ============== */}
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[0, 1.95, 0]}
        scale={TORSO_FLATTEN}
        normalMap={normalMap}
      >
        <latheGeometry args={UPPER_TORSO_ARGS} />
      </StatueSection>

      {/* Shoulder caps (silver) */}
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[-0.62, 2.32, 0]}
        normalMap={normalMap}
      >
        <sphereGeometry args={[0.22, 24, 18]} />
      </StatueSection>
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[0.62, 2.32, 0]}
        normalMap={normalMap}
      >
        <sphereGeometry args={[0.22, 24, 18]} />
      </StatueSection>

      {/* ============== ARMS - left (silver) ============== */}
      {/* Upper arm */}
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[-0.66, 2.05, 0.02]}
        rotation={[0, 0, 0.06]}
        normalMap={normalMap}
      >
        <capsuleGeometry args={[0.13, 0.50, 8, 16]} />
      </StatueSection>
      {/* Elbow */}
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[-0.69, 1.78, 0.04]}
        normalMap={normalMap}
      >
        <sphereGeometry args={[0.14, 16, 14]} />
      </StatueSection>
      {/* Forearm (slight forward + inward bend) */}
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[-0.66, 1.43, 0.10]}
        rotation={[-0.08, 0, -0.05]}
        normalMap={normalMap}
      >
        <capsuleGeometry args={[0.11, 0.55, 8, 16]} />
      </StatueSection>
      {/* Hand */}
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[-0.61, 1.05, 0.16]}
        normalMap={normalMap}
      >
        <sphereGeometry args={[0.13, 16, 12]} />
      </StatueSection>

      {/* ============== ARMS - right (silver) ============== */}
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[0.66, 2.05, 0.02]}
        rotation={[0, 0, -0.06]}
        normalMap={normalMap}
      >
        <capsuleGeometry args={[0.13, 0.50, 8, 16]} />
      </StatueSection>
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[0.69, 1.78, 0.04]}
        normalMap={normalMap}
      >
        <sphereGeometry args={[0.14, 16, 14]} />
      </StatueSection>
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[0.66, 1.43, 0.10]}
        rotation={[-0.08, 0, 0.05]}
        normalMap={normalMap}
      >
        <capsuleGeometry args={[0.11, 0.55, 8, 16]} />
      </StatueSection>
      <StatueSection
        kingdomId="medoPersia"
        kingdoms={kingdoms}
        active={medoActive}
        highlighted={medoHL}
        position={[0.61, 1.05, 0.16]}
        normalMap={normalMap}
      >
        <sphereGeometry args={[0.13, 16, 12]} />
      </StatueSection>

      {/* ============== LOWER TORSO - belly + hips (bronze) ============== */}
      <StatueSection
        kingdomId="greece"
        kingdoms={kingdoms}
        active={greeceActive}
        highlighted={greeceHL}
        position={[0, 0.80, 0]}
        scale={TORSO_FLATTEN}
        normalMap={normalMap}
      >
        <latheGeometry args={LOWER_TORSO_ARGS} />
      </StatueSection>

      {/* ============== LEGS - Rome (iron), subtle contrapposto ============== */}
      {/* Right leg (planted) */}
      <StatueSection
        kingdomId="rome"
        kingdoms={kingdoms}
        active={romeActive}
        highlighted={romeHL}
        position={[0.24, -0.45, 0]}
        normalMap={normalMap}
      >
        <capsuleGeometry args={[0.20, 0.70, 8, 16]} />
      </StatueSection>
      <StatueSection
        kingdomId="rome"
        kingdoms={kingdoms}
        active={romeActive}
        highlighted={romeHL}
        position={[0.24, -1.00, 0]}
        normalMap={normalMap}
      >
        <sphereGeometry args={[0.18, 18, 14]} />
      </StatueSection>
      <StatueSection
        kingdomId="rome"
        kingdoms={kingdoms}
        active={romeActive}
        highlighted={romeHL}
        position={[0.24, -1.55, 0]}
        normalMap={normalMap}
      >
        <capsuleGeometry args={[0.17, 0.76, 8, 16]} />
      </StatueSection>

      {/* Left leg (subtle outward tilt) */}
      <StatueSection
        kingdomId="rome"
        kingdoms={kingdoms}
        active={romeActive}
        highlighted={romeHL}
        position={[-0.26, -0.45, 0.02]}
        rotation={[0, 0, -0.04]}
        normalMap={normalMap}
      >
        <capsuleGeometry args={[0.20, 0.70, 8, 16]} />
      </StatueSection>
      <StatueSection
        kingdomId="rome"
        kingdoms={kingdoms}
        active={romeActive}
        highlighted={romeHL}
        position={[-0.28, -1.00, 0.05]}
        normalMap={normalMap}
      >
        <sphereGeometry args={[0.18, 18, 14]} />
      </StatueSection>
      <StatueSection
        kingdomId="rome"
        kingdoms={kingdoms}
        active={romeActive}
        highlighted={romeHL}
        position={[-0.30, -1.55, 0.04]}
        rotation={[0, 0, 0.02]}
        normalMap={normalMap}
      >
        <capsuleGeometry args={[0.17, 0.76, 8, 16]} />
      </StatueSection>

      {/* ============== FEET - Divided Kingdoms (iron top + clay sole) ============== */}
      {/* Right foot - iron top */}
      <StatueSection
        kingdomId="divided"
        kingdoms={kingdoms}
        active={dividedActive}
        highlighted={dividedHL}
        position={[0.24, -2.10, 0]}
        rotation={FOOT_ROT}
        normalMap={normalMap}
        override={IRON_OVERRIDE}
      >
        <extrudeGeometry args={FOOT_ARGS} />
      </StatueSection>
      {/* Right foot - clay sole */}
      <StatueSection
        kingdomId="divided"
        kingdoms={kingdoms}
        active={dividedActive}
        highlighted={dividedHL}
        position={[0.24, -2.20, 0]}
        rotation={FOOT_ROT}
        normalMap={normalMap}
        override={CLAY_OVERRIDE}
      >
        <extrudeGeometry args={FOOT_ARGS} />
      </StatueSection>

      {/* Left foot - iron top */}
      <StatueSection
        kingdomId="divided"
        kingdoms={kingdoms}
        active={dividedActive}
        highlighted={dividedHL}
        position={[-0.30, -2.10, 0]}
        rotation={FOOT_ROT}
        normalMap={normalMap}
        override={IRON_OVERRIDE}
      >
        <extrudeGeometry args={FOOT_ARGS} />
      </StatueSection>
      {/* Left foot - clay sole */}
      <StatueSection
        kingdomId="divided"
        kingdoms={kingdoms}
        active={dividedActive}
        highlighted={dividedHL}
        position={[-0.30, -2.20, 0]}
        rotation={FOOT_ROT}
        normalMap={normalMap}
        override={CLAY_OVERRIDE}
      >
        <extrudeGeometry args={FOOT_ARGS} />
      </StatueSection>

      {/* Pedestal (chamfered stone) */}
      <mesh position={[0, -2.62, 0]} receiveShadow>
        <latheGeometry args={PEDESTAL_ARGS} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.15} roughness={0.85} />
      </mesh>

      {/* Rock / Stone (God's Kingdom) */}
      <mesh ref={rockRef} visible={false} castShadow geometry={rockGeom}>
        <meshStandardMaterial
          color="#FFFFFF"
          metalness={0.3}
          roughness={0.5}
          emissive="#FFFFFF"
          emissiveIntensity={0}
        />
      </mesh>
    </group>
  );
}

// ---------- Top-level component ----------

export default function Statue3D({
  activeKingdoms = [],
  highlightKingdoms = [],
  showRock = false,
}) {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 1, 8], fov: 40 }}
        shadows
        gl={{
          antialias: false,
          alpha: true,
          toneMapping: THREE.NoToneMapping,
        }}
        style={{ background: 'transparent' }}
      >
        {/* Key light - warm, casts shadows */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={2.5}
          color="#ffd9a8"
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-near={0.1}
          shadow-camera-far={30}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={6}
          shadow-camera-bottom={-4}
          shadow-bias={-0.0003}
        />
        {/* Fill light - cool blue */}
        <directionalLight
          position={[-5, 4, -3]}
          intensity={0.6}
          color="#6688ff"
        />
        {/* Rim light - back, narrow spot */}
        <spotLight
          position={[0, 4, -6]}
          angle={0.5}
          penumbra={0.6}
          intensity={1.5}
          color="#ffffff"
          distance={20}
        />
        {/* Subtle gold accent above head */}
        <pointLight position={[0, 5, 1]} intensity={0.3} color="#ffd700" />
        <ambientLight intensity={0.15} />

        <StatueGroup
          activeKingdoms={activeKingdoms}
          highlightKingdoms={highlightKingdoms}
          showRock={showRock}
        />

        <ContactShadows
          position={[0, -2.65, 0]}
          opacity={0.55}
          scale={6}
          blur={2.6}
          far={4}
          resolution={1024}
        />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={5}
          maxDistance={14}
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 0.75}
          autoRotate={false}
        />

        <Environment preset="warehouse" background={false} />

        <EffectComposer multisampling={0}>
          <Bloom
            intensity={0.55}
            luminanceThreshold={0.78}
            luminanceSmoothing={0.2}
            mipmapBlur
          />
          <Vignette eskil={false} offset={0.4} darkness={0.55} />
          <SMAA />
          <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        </EffectComposer>
      </Canvas>

      {/* Hint overlay */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none">
        <p className="text-[10px] text-white/20 select-none">{t.ui.rotateHint}</p>
      </div>
    </div>
  );
}
