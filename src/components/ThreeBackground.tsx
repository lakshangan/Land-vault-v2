'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere } from '@react-three/drei';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

function Terrain() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.position.y = Math.sin(time * 0.2) * 0.5 - 2;
    });

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <mesh ref={meshRef}>
                <planeGeometry args={[100, 100, 50, 50]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>
            {/* Primary Grid Accent */}
            <gridHelper args={[100, 20, "#ff2d55", "#111"]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.01]} />
        </group>
    );
}

function FloatingOrbs() {
    const count = 15;
    const orbs = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            position: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20] as [number, number, number],
            color: ["#ff2d55", "#5856d6", "#007aff", "#ff9500"][Math.floor(Math.random() * 4)],
            speed: Math.random() * 0.5 + 0.2
        }));
    }, []);

    return (
        <>
            {orbs.map((orb, i) => (
                <Float key={i} speed={orb.speed} rotationIntensity={2} floatIntensity={2}>
                    <Sphere args={[0.2, 16, 16]} position={orb.position}>
                        <meshStandardMaterial color={orb.color} emissive={orb.color} emissiveIntensity={2} />
                    </Sphere>
                </Float>
            ))}
        </>
    );
}

function CentralAsset() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.y = time * 0.3;
        meshRef.current.rotation.x = time * 0.2;
    });

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={[6, 2, -10]}>
                <octahedronGeometry args={[3, 0]} />
                <MeshDistortMaterial
                    color="#5856d6"
                    speed={3}
                    distort={0.3}
                    radius={1}
                    emissive="#5856d6"
                    emissiveIntensity={0.5}
                    wireframe
                />
            </mesh>
        </Float>
    );
}

function SceneContent() {
    const { camera } = useThree();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            camera.position.z = 25 + scrollY * 0.005;
            camera.position.x = Math.sin(scrollY * 0.001) * 2;
            camera.lookAt(0, 0, 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [camera]);

    return (
        <>
            <color attach="background" args={['#050505']} />
            <fog attach="fog" args={['#050505', 10, 60]} />

            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} color="#ff2d55" intensity={1.5} />
            <pointLight position={[-10, -10, -10]} color="#007aff" intensity={1} />
            <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} color="#5856d6" castShadow />

            <Terrain />
            <FloatingOrbs />
            <CentralAsset />

            <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
        </>
    );
}

export default function ThreeBackground() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 5, 25], fov: 45 }}>
                <SceneContent />
            </Canvas>
        </div>
    );
}
