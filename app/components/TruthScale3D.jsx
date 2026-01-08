'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// Componente da Balança 3D
function Scale({ leftWeight = 50, rightWeight = 50, leftLabel = '', rightLabel = '' }) {
    const groupRef = useRef();
    const leftPanRef = useRef();
    const rightPanRef = useRef();
    const beamRef = useRef();

    // Calcular inclinação baseada nos pesos
    const tiltAngle = useMemo(() => {
        const diff = rightWeight - leftWeight;
        // Max tilt de 15 graus
        return (diff / 100) * 0.26; // ~15 graus em radianos
    }, [leftWeight, rightWeight]);

    // Cor do glow baseada em qual lado "ganha"
    const glowColor = useMemo(() => {
        if (rightWeight > leftWeight) return '#00D9FF'; // Cyan - Bíblia ganha
        if (leftWeight > rightWeight) return '#ff6b6b'; // Vermelho
        return '#ffd700'; // Dourado - empate
    }, [leftWeight, rightWeight]);

    // Animação suave
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }

        if (beamRef.current) {
            beamRef.current.rotation.z = THREE.MathUtils.lerp(
                beamRef.current.rotation.z,
                tiltAngle,
                0.05
            );
        }

        // Ajustar altura dos pratos
        if (leftPanRef.current && rightPanRef.current) {
            const leftY = -1.5 + Math.sin(tiltAngle) * 1.2;
            const rightY = -1.5 - Math.sin(tiltAngle) * 1.2;

            leftPanRef.current.position.y = THREE.MathUtils.lerp(
                leftPanRef.current.position.y,
                leftY,
                0.05
            );
            rightPanRef.current.position.y = THREE.MathUtils.lerp(
                rightPanRef.current.position.y,
                rightY,
                0.05
            );
        }
    });

    return (
        <group ref={groupRef}>
            {/* Base da balança */}
            <mesh position={[0, -2.5, 0]}>
                <cylinderGeometry args={[0.8, 1, 0.3, 32]} />
                <meshStandardMaterial color="#C9A227" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Pilar central */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.1, 0.15, 3, 16]} />
                <meshStandardMaterial color="#C9A227" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Topo decorativo */}
            <mesh position={[0, 0.6, 0]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="#C9A227" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Viga (beam) */}
            <group ref={beamRef} position={[0, 0.3, 0]}>
                <mesh>
                    <boxGeometry args={[4, 0.1, 0.15]} />
                    <meshStandardMaterial color="#1E3A5F" metalness={0.6} roughness={0.3} />
                </mesh>

                {/* Correntes esquerda */}
                <group position={[-1.8, 0, 0]}>
                    {[0, 0.3, 0.6, 0.9].map((y, i) => (
                        <mesh key={`left-chain-${i}`} position={[0, -y - 0.2, 0]}>
                            <torusGeometry args={[0.08, 0.02, 8, 16]} />
                            <meshStandardMaterial color="#C9A227" metalness={0.7} roughness={0.3} />
                        </mesh>
                    ))}
                </group>

                {/* Correntes direita */}
                <group position={[1.8, 0, 0]}>
                    {[0, 0.3, 0.6, 0.9].map((y, i) => (
                        <mesh key={`right-chain-${i}`} position={[0, -y - 0.2, 0]}>
                            <torusGeometry args={[0.08, 0.02, 8, 16]} />
                            <meshStandardMaterial color="#C9A227" metalness={0.7} roughness={0.3} />
                        </mesh>
                    ))}
                </group>
            </group>

            {/* Prato esquerdo */}
            <Float speed={1} rotationIntensity={0} floatIntensity={0.1}>
                <group ref={leftPanRef} position={[-1.8, -1.5, 0]}>
                    <mesh>
                        <cylinderGeometry args={[0.7, 0.7, 0.1, 32]} />
                        <meshStandardMaterial
                            color="#E8D5B7"
                            metalness={0.4}
                            roughness={0.5}
                        />
                    </mesh>
                    {/* Borda decorativa */}
                    <mesh position={[0, 0.05, 0]}>
                        <torusGeometry args={[0.7, 0.03, 8, 32]} />
                        <meshStandardMaterial color="#C9A227" metalness={0.8} roughness={0.2} />
                    </mesh>
                </group>
            </Float>

            {/* Prato direito (Bíblia) */}
            <Float speed={1} rotationIntensity={0} floatIntensity={0.1}>
                <group ref={rightPanRef} position={[1.8, -1.5, 0]}>
                    <mesh>
                        <cylinderGeometry args={[0.7, 0.7, 0.1, 32]} />
                        <meshStandardMaterial
                            color="#E8D5B7"
                            metalness={0.4}
                            roughness={0.5}
                            emissive={glowColor}
                            emissiveIntensity={rightWeight > leftWeight ? 0.3 : 0}
                        />
                    </mesh>
                    {/* Borda decorativa */}
                    <mesh position={[0, 0.05, 0]}>
                        <torusGeometry args={[0.7, 0.03, 8, 32]} />
                        <meshStandardMaterial
                            color={rightWeight > leftWeight ? '#00D9FF' : '#C9A227'}
                            metalness={0.8}
                            roughness={0.2}
                            emissive={glowColor}
                            emissiveIntensity={rightWeight > leftWeight ? 0.5 : 0}
                        />
                    </mesh>

                    {/* Livro (Bíblia) no prato direito */}
                    {rightWeight > 0 && (
                        <mesh position={[0, 0.2, 0]} rotation={[0, 0.3, 0]}>
                            <boxGeometry args={[0.6, 0.15, 0.4]} />
                            <meshStandardMaterial
                                color="#1a1a2e"
                                metalness={0.3}
                                roughness={0.7}
                            />
                        </mesh>
                    )}
                </group>
            </Float>

            {/* Partículas de luz (glow effect) */}
            {rightWeight > leftWeight && (
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <pointLight
                        position={[1.8, -1, 0]}
                        color="#00D9FF"
                        intensity={2}
                        distance={3}
                    />
                </Float>
            )}
        </group>
    );
}

// Partículas de fundo
function Particles({ count = 50 }) {
    const mesh = useRef();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
            mesh.current.rotation.x = state.clock.elapsedTime * 0.03;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#C9A227"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

// Componente principal exportado
export default function TruthScale3D({
    leftWeight = 50,
    rightWeight = 80,
    leftLabel = 'Outras',
    rightLabel = 'Bíblia',
    height = '500px'
}) {
    return (
        <div style={{ width: '100%', height, position: 'relative' }}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#00D9FF" />

                <Particles count={100} />

                <Scale
                    leftWeight={leftWeight}
                    rightWeight={rightWeight}
                    leftLabel={leftLabel}
                    rightLabel={rightLabel}
                />

                <Environment preset="night" />
            </Canvas>

            {/* Labels embaixo */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 15%',
                pointerEvents: 'none'
            }}>
                <div style={{
                    textAlign: 'center',
                    color: '#E8D5B7',
                    fontFamily: 'Cinzel, serif'
                }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{leftLabel}</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>{leftWeight}%</div>
                </div>
                <div style={{
                    textAlign: 'center',
                    color: rightWeight > leftWeight ? '#00D9FF' : '#E8D5B7',
                    fontFamily: 'Cinzel, serif',
                    textShadow: rightWeight > leftWeight ? '0 0 20px rgba(0, 217, 255, 0.5)' : 'none'
                }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{rightLabel}</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>{rightWeight}%</div>
                </div>
            </div>
        </div>
    );
}
