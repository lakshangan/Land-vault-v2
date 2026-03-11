'use client';
// Build trigger: Production readiness verified


import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, Grid } from '@react-three/drei';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

function Terrain() {
    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <Grid
                args={[100, 100]}
                sectionSize={5}
                sectionColor="#bfff00"
                sectionThickness={1.5}
                cellColor="#333"
                cellThickness={0.5}
                infiniteGrid
                fadeDistance={50}
                fadeStrength={5}
            />
        </group>
    );
}

function Particles() {
    const count = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return pos;
    }, [count]);

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geo;
    }, [positions]);

    const pointsRef = useRef<THREE.Points>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = time * 0.05;
        pointsRef.current.rotation.x = time * 0.03;
    });

    return (
        <points ref={pointsRef} geometry={geometry}>
            <pointsMaterial
                size={0.05}
                color="#bfff00"
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    );
}

function LandCube() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.y = time * 0.2;
        meshRef.current.rotation.z = time * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={[4, 0, -5]}>
                <boxGeometry args={[2, 2, 2]} />
                <MeshDistortMaterial
                    color="#bfff00"
                    speed={2}
                    distort={0.4}
                    radius={1}
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
            const targetZ = 20 + scrollY * 0.01;
            const targetY = 5 - scrollY * 0.005;
            camera.position.z = targetZ;
            camera.position.y = targetY;
            camera.lookAt(0, 0, 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [camera]);

    return (
        <>
            <color attach="background" args={['#050505']} />
            <fog attach="fog" args={['#050505', 10, 50]} />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} color="#bfff00" intensity={2} />
            <pointLight position={[-10, -10, -10]} color="#c5a059" intensity={1} />

            <Terrain />
            <Particles />
            <LandCube />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </>
    );
}

export default function ThreeBackground() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 5, 20], fov: 45 }}>
                <SceneContent />
            </Canvas>
        </div>
    );
}
