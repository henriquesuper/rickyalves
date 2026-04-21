'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import { KINGDOMS } from '../data/kingdoms';
import { useLanguage } from '../i18n/useLanguage';

function StatueSection({ position, args, color, metalness, roughness, active, highlighted, geometryType = 'cylinder' }) {
  const meshRef = useRef();
  const targetEmissive = highlighted ? 0.4 : active ? 0.05 : 0;
  const targetOpacity = active ? 1.0 : 0.15;

  useFrame(() => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material;
    mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, targetEmissive, 0.05);
    mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, 0.08);
  });

  const geometry = useMemo(() => {
    switch (geometryType) {
      case 'sphere':
        return <sphereGeometry args={args} />;
      case 'box':
        return <boxGeometry args={args} />;
      default:
        return <cylinderGeometry args={args} />;
    }
  }, [geometryType, args]);

  return (
    <mesh ref={meshRef} position={position} castShadow>
      {geometry}
      <meshStandardMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
        emissive={color}
        emissiveIntensity={0}
        transparent
        opacity={1}
      />
    </mesh>
  );
}

function StatueGroup({ activeKingdoms = [], highlightKingdoms = [], showRock = false }) {
  const groupRef = useRef();
  const rockRef = useRef();
  const rockProgress = useRef(0);

  const kingdoms = useMemo(() => {
    const km = {};
    KINGDOMS.forEach(k => { km[k.id] = k; });
    return km;
  }, []);

  const isActive = (id) => activeKingdoms.includes(id);
  const isHighlighted = (id) => highlightKingdoms?.includes(id);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }

    if (rockRef.current) {
      if (showRock && rockProgress.current < 1) {
        rockProgress.current = Math.min(rockProgress.current + 0.008, 1);
      } else if (!showRock && rockProgress.current > 0) {
        rockProgress.current = Math.max(rockProgress.current - 0.02, 0);
      }
      const t = rockProgress.current;
      const startX = 4, startY = 6, startZ = -2;
      const endX = 0, endY = -3.2, endZ = 0.5;
      rockRef.current.position.x = THREE.MathUtils.lerp(startX, endX, t);
      rockRef.current.position.y = THREE.MathUtils.lerp(startY, endY, t) + Math.sin(t * Math.PI) * 2;
      rockRef.current.position.z = THREE.MathUtils.lerp(startZ, endZ, t);
      rockRef.current.rotation.x = t * Math.PI * 3;
      rockRef.current.rotation.z = t * Math.PI * 2;
      rockRef.current.visible = rockProgress.current > 0.01;

      const glow = Math.sin(state.clock.elapsedTime * 3) * 0.2 + 0.5;
      rockRef.current.material.emissiveIntensity = glow * t;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Head - Gold (Babylon) */}
      <StatueSection
        position={[0, 3.8, 0]}
        args={[0.55, 0.55, 0.9, 16]}
        geometryType="sphere"
        color={kingdoms.babylon.color}
        metalness={kingdoms.babylon.material.metalness}
        roughness={kingdoms.babylon.material.roughness}
        active={isActive('babylon')}
        highlighted={isHighlighted('babylon')}
      />
      {/* Crown / head cap */}
      <StatueSection
        position={[0, 4.3, 0]}
        args={[0.15, 0.5, 0.3, 12]}
        color={kingdoms.babylon.color}
        metalness={kingdoms.babylon.material.metalness}
        roughness={kingdoms.babylon.material.roughness}
        active={isActive('babylon')}
        highlighted={isHighlighted('babylon')}
      />

      {/* Neck */}
      <StatueSection
        position={[0, 3.15, 0]}
        args={[0.25, 0.3, 0.3, 12]}
        color={kingdoms.medoPersia.color}
        metalness={kingdoms.medoPersia.material.metalness}
        roughness={kingdoms.medoPersia.material.roughness}
        active={isActive('medoPersia')}
        highlighted={isHighlighted('medoPersia')}
      />

      {/* Chest - Silver (Medo-Persia) */}
      <StatueSection
        position={[0, 2.5, 0]}
        args={[0.55, 0.75, 1.0, 12]}
        color={kingdoms.medoPersia.color}
        metalness={kingdoms.medoPersia.material.metalness}
        roughness={kingdoms.medoPersia.material.roughness}
        active={isActive('medoPersia')}
        highlighted={isHighlighted('medoPersia')}
      />
      {/* Left arm */}
      <StatueSection
        position={[-0.85, 2.2, 0]}
        args={[0.18, 0.2, 1.2, 8]}
        color={kingdoms.medoPersia.color}
        metalness={kingdoms.medoPersia.material.metalness}
        roughness={kingdoms.medoPersia.material.roughness}
        active={isActive('medoPersia')}
        highlighted={isHighlighted('medoPersia')}
      />
      {/* Right arm */}
      <StatueSection
        position={[0.85, 2.2, 0]}
        args={[0.18, 0.2, 1.2, 8]}
        color={kingdoms.medoPersia.color}
        metalness={kingdoms.medoPersia.material.metalness}
        roughness={kingdoms.medoPersia.material.roughness}
        active={isActive('medoPersia')}
        highlighted={isHighlighted('medoPersia')}
      />

      {/* Belly - Bronze (Greece) */}
      <StatueSection
        position={[0, 1.4, 0]}
        args={[0.65, 0.55, 1.1, 12]}
        color={kingdoms.greece.color}
        metalness={kingdoms.greece.material.metalness}
        roughness={kingdoms.greece.material.roughness}
        active={isActive('greece')}
        highlighted={isHighlighted('greece')}
      />
      {/* Waist taper */}
      <StatueSection
        position={[0, 0.7, 0]}
        args={[0.45, 0.55, 0.4, 12]}
        color={kingdoms.greece.color}
        metalness={kingdoms.greece.material.metalness}
        roughness={kingdoms.greece.material.roughness}
        active={isActive('greece')}
        highlighted={isHighlighted('greece')}
      />

      {/* Left leg - Iron (Rome) */}
      <StatueSection
        position={[-0.3, -0.5, 0]}
        args={[0.22, 0.25, 2.0, 8]}
        color={kingdoms.rome.color}
        metalness={kingdoms.rome.material.metalness}
        roughness={kingdoms.rome.material.roughness}
        active={isActive('rome')}
        highlighted={isHighlighted('rome')}
      />
      {/* Right leg */}
      <StatueSection
        position={[0.3, -0.5, 0]}
        args={[0.22, 0.25, 2.0, 8]}
        color={kingdoms.rome.color}
        metalness={kingdoms.rome.material.metalness}
        roughness={kingdoms.rome.material.roughness}
        active={isActive('rome')}
        highlighted={isHighlighted('rome')}
      />

      {/* Left foot - Iron & Clay (Divided Kingdoms) */}
      <StatueSection
        position={[-0.3, -1.7, 0.1]}
        args={[0.25, 0.22, 0.5, 8]}
        color={kingdoms.divided.color}
        metalness={kingdoms.divided.material.metalness}
        roughness={kingdoms.divided.material.roughness}
        active={isActive('divided')}
        highlighted={isHighlighted('divided')}
      />
      {/* Right foot */}
      <StatueSection
        position={[0.3, -1.7, 0.1]}
        args={[0.25, 0.22, 0.5, 8]}
        color={kingdoms.divided.color}
        metalness={kingdoms.divided.material.metalness}
        roughness={kingdoms.divided.material.roughness}
        active={isActive('divided')}
        highlighted={isHighlighted('divided')}
      />

      {/* Base pedestal */}
      <mesh position={[0, -2.1, 0]} receiveShadow>
        <cylinderGeometry args={[1.2, 1.4, 0.3, 24]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Rock / Stone (God's Kingdom) */}
      <mesh ref={rockRef} visible={false} castShadow>
        <dodecahedronGeometry args={[0.6, 1]} />
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

export default function Statue3D({ activeKingdoms = [], highlightKingdoms = [], showRock = false }) {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 1, 8], fov: 40 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#8888ff" />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffd700" />

        <StatueGroup
          activeKingdoms={activeKingdoms}
          highlightKingdoms={highlightKingdoms}
          showRock={showRock}
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

        <Environment preset="night" />
      </Canvas>

      {/* Hint overlay */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none">
        <p className="text-[10px] text-white/20 select-none">{t.ui.rotateHint}</p>
      </div>
    </div>
  );
}
