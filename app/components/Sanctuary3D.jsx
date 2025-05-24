'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, Text } from '@react-three/drei';
import { Vector3, DoubleSide, MeshStandardMaterial, TextureLoader } from 'three';

// Biblical measurements
// A cubit is approximately 18 inches or 45 cm
const CUBIT = 0.45;

// Biblically accurate desert tabernacle model based on Exodus 25-30
function SanctuaryModel({ rotate = true, showLabels = true }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (rotate && groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });
  
  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Desert Ground */}
      <mesh position={[0, -0.1, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#d2b48c" />
      </mesh>
      
      {/* Add some small rocks and sparse vegetation */}
      {Array(30).fill().map((_, i) => (
        <mesh 
          key={`rock-${i}`} 
          position={[
            (Math.random() - 0.5) * 80,
            -0.1 + Math.random() * 0.2,
            (Math.random() - 0.5) * 80
          ]}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          ]}
        >
          <boxGeometry args={[Math.random() * 0.5, Math.random() * 0.3, Math.random() * 0.5]} />
          <meshStandardMaterial color={`rgb(${150 + Math.random() * 50}, ${120 + Math.random() * 40}, ${100 + Math.random() * 30})`} roughness={0.8} />
        </mesh>
      ))}
      
      {/* Sparse vegetation */}
      {Array(15).fill().map((_, i) => (
        <mesh 
          key={`bush-${i}`} 
          position={[
            (Math.random() - 0.5) * 70,
            0,
            (Math.random() - 0.5) * 70
          ]}
        >
          <cylinderGeometry args={[0.3, 0.5, 0.5, 8]} />
          <meshStandardMaterial color="#567d46" />
        </mesh>
      ))}
      
      {/* Distant mountains */}
      <group position={[0, 0, -60]}>
        {Array(5).fill().map((_, i) => (
          <mesh 
            key={`mountain-${i}`} 
            position={[(i - 2) * 25, 5, Math.random() * 10 - 5]}
          >
            <coneGeometry args={[10 + Math.random() * 5, 20 + Math.random() * 10, 4]} />
            <meshStandardMaterial color={`rgb(${100 + Math.random() * 40}, ${80 + Math.random() * 30}, ${70 + Math.random() * 30})`} />
          </mesh>
        ))}
      </group>
      
      {/* Court Enclosure - Simple white fence/wall */}
      <group>
        {/* Rectangular enclosure 100 x 50 cubits */}
        <DesertEnclosure />
        
        {/* Bronze Altar - Simpler version */}
        <mesh position={[-20 * CUBIT, 1 * CUBIT, 0]} castShadow>
          <boxGeometry args={[5 * CUBIT, 2 * CUBIT, 5 * CUBIT]} />
          <meshStandardMaterial color="#8b4513" roughness={0.7} />
        </mesh>
        
        {/* Bronze Basin - Simpler version */}
        <mesh position={[-10 * CUBIT, 0.8 * CUBIT, 0]} castShadow>
          <cylinderGeometry args={[1.5 * CUBIT, 1.8 * CUBIT, 1.6 * CUBIT, 16]} />
          <meshStandardMaterial color="#8b4513" roughness={0.6} />
        </mesh>
      </group>
      
      {/* Tabernacle Structure - More tent-like */}
      <group position={[10 * CUBIT, 0, 0]}>
        {/* Main tent structure */}
        <DesertTabernacle />
        
        {/* Simple interior furniture */}
        <group position={[0, 0, 0]}>
          {/* Table of Showbread - simplified */}
          <mesh position={[-5 * CUBIT, 1 * CUBIT, 3 * CUBIT]} castShadow>
            <boxGeometry args={[2 * CUBIT, 1.5 * CUBIT, 1 * CUBIT]} />
            <meshStandardMaterial color="#cd7f32" roughness={0.5} />
          </mesh>
          
          {/* Lampstand - simplified */}
          <mesh position={[-5 * CUBIT, 1 * CUBIT, -3 * CUBIT]} castShadow>
            <cylinderGeometry args={[0.5 * CUBIT, 0.7 * CUBIT, 2 * CUBIT, 8]} />
            <meshStandardMaterial color="#cd7f32" roughness={0.5} />
          </mesh>
          
          {/* Altar of Incense - simplified */}
          <mesh position={[0, 1 * CUBIT, 0]} castShadow>
            <boxGeometry args={[1 * CUBIT, 1.5 * CUBIT, 1 * CUBIT]} />
            <meshStandardMaterial color="#cd7f32" roughness={0.5} />
          </mesh>
          
          {/* Ark of the Covenant - simplified */}
          <mesh position={[8 * CUBIT, 1 * CUBIT, 0]} castShadow>
            <boxGeometry args={[2.5 * CUBIT, 1.5 * CUBIT, 1.5 * CUBIT]} />
            <meshStandardMaterial color="#cd7f32" roughness={0.5} />
          </mesh>
        </group>
      </group>
      
      {/* Labels if enabled */}
      {showLabels && (
        <group>
          <ElementLabel position={[-20 * CUBIT, 4 * CUBIT, 0]} text="Bronze Altar" />
          <ElementLabel position={[-10 * CUBIT, 4 * CUBIT, 0]} text="Bronze Basin" />
          <ElementLabel position={[10 * CUBIT, 6 * CUBIT, 0]} text="Tabernacle" />
        </group>
      )}
    </group>
  );
}

// Component for element labels
function ElementLabel({ position, text, color = "#ffffff", scale = 1 }) {
  return (
    <group position={position}>
      <Text
        color={color}
        fontSize={0.5 * scale}
        maxWidth={10}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

// Desert Tabernacle tent structure
function DesertTabernacle() {
  return (
    <group>
      {/* Tent base/foundation */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[30 * CUBIT, 0.1 * CUBIT, 10 * CUBIT]} />
        <meshStandardMaterial color="#d2c5a8" />
      </mesh>
      
      {/* Main tent structure - central ridge tent shape */}
      <group>
        {/* Side walls */}
        <mesh position={[0, 2.5 * CUBIT, -5 * CUBIT]} rotation={[0, 0, 0]}>
          <planeGeometry args={[30 * CUBIT, 5 * CUBIT]} />
          <meshStandardMaterial color="#e8e0d0" side={DoubleSide} />
        </mesh>
        
        <mesh position={[0, 2.5 * CUBIT, 5 * CUBIT]} rotation={[0, 0, 0]}>
          <planeGeometry args={[30 * CUBIT, 5 * CUBIT]} />
          <meshStandardMaterial color="#e8e0d0" side={DoubleSide} />
        </mesh>
        
        {/* Front wall with entrance */}
        <mesh position={[-15 * CUBIT, 2.5 * CUBIT, 0]} rotation={[0, Math.PI/2, 0]}>
          <planeGeometry args={[10 * CUBIT, 5 * CUBIT]} />
          <meshStandardMaterial color="#e8e0d0" side={DoubleSide} />
        </mesh>
        
        {/* Back wall */}
        <mesh position={[15 * CUBIT, 2.5 * CUBIT, 0]} rotation={[0, Math.PI/2, 0]}>
          <planeGeometry args={[10 * CUBIT, 5 * CUBIT]} />
          <meshStandardMaterial color="#e8e0d0" side={DoubleSide} />
        </mesh>
        
        {/* Roof - two sloped panels */}
        <mesh position={[0, 5 * CUBIT, -2.5 * CUBIT]} rotation={[Math.PI/4, 0, 0]}>
          <planeGeometry args={[30 * CUBIT, 7 * CUBIT]} />
          <meshStandardMaterial color="#9c8866" side={DoubleSide} />
        </mesh>
        
        <mesh position={[0, 5 * CUBIT, 2.5 * CUBIT]} rotation={[-Math.PI/4, 0, 0]}>
          <planeGeometry args={[30 * CUBIT, 7 * CUBIT]} />
          <meshStandardMaterial color="#9c8866" side={DoubleSide} />
        </mesh>
        
        {/* Entrance flap/curtain */}
        <mesh position={[-15 * CUBIT, 2.5 * CUBIT, 0]} rotation={[0, Math.PI/2, 0]}>
          <planeGeometry args={[10 * CUBIT, 5 * CUBIT]} />
          <meshStandardMaterial color="#8a6642" side={DoubleSide} transparent opacity={0.9} />
        </mesh>
        
        {/* Interior divider */}
        <mesh position={[5 * CUBIT, 2.5 * CUBIT, 0]} rotation={[0, Math.PI/2, 0]}>
          <planeGeometry args={[10 * CUBIT, 5 * CUBIT]} />
          <meshStandardMaterial color="#614b36" side={DoubleSide} transparent opacity={0.8} />
        </mesh>
      </group>
      
      {/* Support poles at corners */}
      {[
        [-15, -5], [-15, 5], [15, -5], [15, 5]
      ].map((pos, idx) => (
        <mesh 
          key={`pole-${idx}`} 
          position={[pos[0] * CUBIT, 2.5 * CUBIT, pos[1] * CUBIT]} 
          castShadow
        >
          <cylinderGeometry args={[0.3 * CUBIT, 0.3 * CUBIT, 5 * CUBIT, 8]} />
          <meshStandardMaterial color="#614b36" />
        </mesh>
      ))}
      
      {/* Ridge pole */}
      <mesh position={[0, 6 * CUBIT, 0]} rotation={[0, Math.PI/2, 0]} castShadow>
        <cylinderGeometry args={[0.3 * CUBIT, 0.3 * CUBIT, 30 * CUBIT, 8]} />
        <meshStandardMaterial color="#614b36" />
      </mesh>
      
      {/* Guy ropes/supports */}
      {[
        [-15, -6], [-15, 6], [15, -6], [15, 6]
      ].map((pos, idx) => (
        <mesh 
          key={`rope-${idx}`} 
          position={[
            (pos[0] - Math.sign(pos[0]) * 3) * CUBIT, 
            3 * CUBIT, 
            pos[1] * CUBIT
          ]}
          rotation={[
            0,
            0,
            Math.atan2(3, 3) * Math.sign(pos[0])
          ]}
        >
          <cylinderGeometry args={[0.05 * CUBIT, 0.05 * CUBIT, 4.5 * CUBIT, 8]} />
          <meshStandardMaterial color="#d6c6a5" />
        </mesh>
      ))}
    </group>
  );
}

// Component for the Desert Enclosure (white wall/fence)
function DesertEnclosure() {
  return (
    <group>
      {/* Simple white wall panels around perimeter */}
      
      {/* North side wall */}
      <mesh position={[0, 1.25 * CUBIT, -25 * CUBIT]} rotation={[0, 0, 0]}>
        <boxGeometry args={[100 * CUBIT, 2.5 * CUBIT, 0.2 * CUBIT]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      
      {/* South side wall */}
      <mesh position={[0, 1.25 * CUBIT, 25 * CUBIT]} rotation={[0, 0, 0]}>
        <boxGeometry args={[100 * CUBIT, 2.5 * CUBIT, 0.2 * CUBIT]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      
      {/* West side wall */}
      <mesh position={[-50 * CUBIT, 1.25 * CUBIT, 0]} rotation={[0, Math.PI/2, 0]}>
        <boxGeometry args={[50 * CUBIT, 2.5 * CUBIT, 0.2 * CUBIT]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      
      {/* East side wall parts (with entrance) */}
      <mesh position={[50 * CUBIT, 1.25 * CUBIT, -15 * CUBIT]} rotation={[0, Math.PI/2, 0]}>
        <boxGeometry args={[20 * CUBIT, 2.5 * CUBIT, 0.2 * CUBIT]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      
      <mesh position={[50 * CUBIT, 1.25 * CUBIT, 15 * CUBIT]} rotation={[0, Math.PI/2, 0]}>
        <boxGeometry args={[20 * CUBIT, 2.5 * CUBIT, 0.2 * CUBIT]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      
      {/* Entrance curtain (colored) */}
      <mesh position={[50 * CUBIT, 1.25 * CUBIT, 0]} rotation={[0, Math.PI/2, 0]}>
        <boxGeometry args={[10 * CUBIT, 2.5 * CUBIT, 0.1 * CUBIT]} />
        <meshStandardMaterial color="#8a6642" opacity={0.9} transparent />
      </mesh>
      
      {/* Support posts around perimeter */}
      {Array(22).fill().map((_, i) => (
        <mesh 
          key={`post-n-${i}`}
          position={[(i * 5 - 50 + 2.5) * CUBIT, 1.25 * CUBIT, -25 * CUBIT]}
          castShadow
        >
          <cylinderGeometry args={[0.15 * CUBIT, 0.15 * CUBIT, 2.5 * CUBIT, 8]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
      ))}
      
      {Array(22).fill().map((_, i) => (
        <mesh 
          key={`post-s-${i}`}
          position={[(i * 5 - 50 + 2.5) * CUBIT, 1.25 * CUBIT, 25 * CUBIT]}
          castShadow
        >
          <cylinderGeometry args={[0.15 * CUBIT, 0.15 * CUBIT, 2.5 * CUBIT, 8]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
      ))}
      
      {Array(12).fill().map((_, i) => (
        <mesh 
          key={`post-w-${i}`}
          position={[-50 * CUBIT, 1.25 * CUBIT, (i * 5 - 25 + 2.5) * CUBIT]}
          castShadow
        >
          <cylinderGeometry args={[0.15 * CUBIT, 0.15 * CUBIT, 2.5 * CUBIT, 8]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
      ))}
      
      {Array(12).fill().map((_, i) => {
        // Skip posts at the entrance
        if (i > 4 && i < 7) return null;
        
        return (
          <mesh 
            key={`post-e-${i}`}
            position={[50 * CUBIT, 1.25 * CUBIT, (i * 5 - 25 + 2.5) * CUBIT]}
            castShadow
          >
            <cylinderGeometry args={[0.15 * CUBIT, 0.15 * CUBIT, 2.5 * CUBIT, 8]} />
            <meshStandardMaterial color="#8b4513" />
          </mesh>
        );
      })}
    </group>
  );
}

function Scene({ rotate }) {
  // Add state for labels
  const [showLabels, setShowLabels] = useState(true);

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={1.5} 
        castShadow 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      
      <Suspense fallback={null}>
        <SanctuaryModel rotate={rotate} showLabels={showLabels} />
        <Environment preset="sunset" />
        
        {/* Toggle for labels */}
        <group position={[-20, 15, 0]}>
          <Text
            color="white"
            fontSize={0.8}
            maxWidth={10}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
            onClick={() => setShowLabels(!showLabels)}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}
          >
            {showLabels ? "Hide Labels" : "Show Labels"}
          </Text>
        </group>
      </Suspense>
      
      <OrbitControls 
        enablePan={true} 
        enableZoom={true} 
        enableRotate={true} 
        minPolarAngle={Math.PI / 6} 
        maxPolarAngle={Math.PI * 0.7}
        maxDistance={70}
      />
    </>
  );
}

export default function Sanctuary3D({ rotate = true, height = "600px" }) {
  return (
    <div style={{ width: '100%', height, position: 'relative' }}>
      <Canvas 
        shadows 
        camera={{ position: [0, 20, 40], fov: 45 }}
        dpr={[1, 2]}
      >
        <Scene rotate={rotate} />
      </Canvas>
    </div>
  );
} 