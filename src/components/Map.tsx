'use client';

import { motion, useScroll, useTransform, useSpring, useInView, animate, useMotionValue } from 'framer-motion';
import { useState, useRef, useMemo, Suspense, useEffect } from 'react';
import { ShieldCheck, TrendingUp, Zap, Globe, BarChart2 } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ─── Data ────────────────────────────────────────────────────────────────────

const rwaSectors = [
    { id: 1, name: 'Private Credit', value: '$14.2B', numVal: 14.2, growth: '+180%', pct: 40, color: '#5856d6' },
    { id: 2, name: 'U.S. Treasuries', value: '$8.9B', numVal: 8.9, growth: '+240%', pct: 25, color: '#007aff' },
    { id: 3, name: 'Commodities / Gold', value: '$6.5B', numVal: 6.5, growth: '+45%', pct: 18, color: '#ffcc00' },
    { id: 4, name: 'Real Estate', value: '$5.1B', numVal: 5.1, growth: '+92%', pct: 14, color: '#ff2d55' },
    { id: 5, name: 'Trade Finance', value: '$1.1B', numVal: 1.1, growth: '+110%', pct: 3, color: '#ff9500' },
];

const projections = [
    { year: '2023', val: 8.6, max: 30 },
    { year: '2024', val: 15.2, max: 30 },
    { year: '2025', val: 35.8, max: 30 },
    { year: '2030', val: 30, max: 30, label: '$16T target' },
];

const topStats = [
    { label: 'Market Cap', value: 35.8, suffix: 'B', prefix: '$', color: '#5856d6', growth: '+260% YoY' },
    { label: 'Active Protocols', value: 127, suffix: '+', prefix: '', color: '#007aff', growth: '' },
    { label: 'Projected 2030', value: 16, suffix: 'T', prefix: '$', color: '#ff2d55', growth: 'McKinsey Est.' },
];

// ─── Count-Up hook ───────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1.8, inView: boolean) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, target, {
            duration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate(v) { setVal(parseFloat(v.toFixed(1))); }
        });
        return controls.stop;
    }, [inView, target, duration]);
    return val;
}

// ─── 3-D Globe ──────────────────────────────────────────────────────────────

function EarthGlobe() {
    const outerRef = useRef<THREE.Points>(null);
    const innerRef = useRef<THREE.Points>(null);
    const ringRef = useRef<THREE.Mesh>(null);

    const particlesOuter = useMemo(() => {
        const n = 3000;
        const pos = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
            const phi = Math.acos(-1 + (2 * i) / n);
            const theta = Math.sqrt(n * Math.PI) * phi;
            const r = 2.5;
            pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
            pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, []);

    const particlesInner = useMemo(() => {
        const n = 800;
        const pos = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
            const phi = Math.acos(-1 + (2 * i) / n);
            const theta = Math.sqrt(n * Math.PI) * phi;
            const r = 1.6;
            pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
            pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame(({ clock }) => {
        if (outerRef.current) outerRef.current.rotation.y = clock.elapsedTime * 0.12;
        if (innerRef.current) innerRef.current.rotation.y = -clock.elapsedTime * 0.07;
        if (ringRef.current) ringRef.current.rotation.z = clock.elapsedTime * 0.05;
    });

    return (
        <group>
            {/* Outer dot shell — black on white */}
            <Points ref={outerRef} positions={particlesOuter} stride={3}>
                <PointMaterial
                    transparent
                    color="#000000"
                    size={0.042}
                    sizeAttenuation
                    depthWrite={false}
                    opacity={0.22}
                    blending={THREE.NormalBlending}
                />
            </Points>

            {/* Inner denser shell — slightly lighter */}
            <Points ref={innerRef} positions={particlesInner} stride={3}>
                <PointMaterial
                    transparent
                    color="#000000"
                    size={0.028}
                    sizeAttenuation
                    depthWrite={false}
                    opacity={0.1}
                    blending={THREE.NormalBlending}
                />
            </Points>

            {/* Equatorial ring — black hairline */}
            <mesh ref={ringRef} rotation={[Math.PI / 2.2, 0, 0]}>
                <torusGeometry args={[2.82, 0.006, 2, 240]} />
                <meshBasicMaterial color="#000000" transparent opacity={0.15} />
            </mesh>

            {/* Second tilted ring */}
            <mesh rotation={[Math.PI / 3.5, Math.PI / 6, 0]}>
                <torusGeometry args={[2.82, 0.004, 2, 240]} />
                <meshBasicMaterial color="#000000" transparent opacity={0.08} />
            </mesh>
        </group>
    );
}

// ─── Stat Card ───────────────────────────────────────────────────────────────

function StatCard({ label, value, suffix, prefix, color, growth, delay, index }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const displayVal = useCountUp(value, 1.6, inView);

    const icons: Record<string, React.ReactNode> = {
        'Market Cap': <TrendingUp size={14} />,
        'Active Protocols': <Zap size={14} />,
        'Projected 2030': <Globe size={14} />,
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
            style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '1.8rem',
                padding: '2rem 2.4rem',
                borderRadius: '24px',
                border: '1px solid rgba(0,0,0,0.07)',
                background: index === 1 ? '#000' : '#fff',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Coloured left accent */}
            <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '3px', background: color, borderRadius: '100px' }} />

            {/* Big number */}
            <div style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: index === 1 ? '#fff' : '#000',
                fontVariantNumeric: 'tabular-nums',
                flexShrink: 0,
            }}>
                {prefix}{displayVal}{suffix}
            </div>

            {/* Divider */}
            <div style={{ width: '1px', alignSelf: 'stretch', background: index === 1 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' }} />

            {/* Label + growth */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.35rem', color: index === 1 ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>
                    {icons[label]}
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{label}</span>
                </div>
                <div style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: color,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>{growth}</div>
            </div>
        </motion.div>
    );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function InteractiveMap() {
    const [activeSector, setActiveSector] = useState<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'center center'] });
    const spring = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
    const width = useTransform(spring, [0, 1], ['82%', '100%']);
    const scale = useTransform(spring, [0, 1], [0.88, 1]);
    const opacity = useTransform(spring, [0, 0.35], [0, 1]);
    const borderRadius = useTransform(spring, [0, 1], ['80px', '60px']);

    return (
        <section ref={containerRef} style={{
            background: '#000',
            minHeight: '170vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* ── ambient glows ── */}
            <div style={{ position: 'absolute', top: '-10%', left: '5%', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(88,86,214,0.12) 0%, transparent 70%)', filter: 'blur(160px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-5%', right: '0%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(0,122,255,0.07) 0%, transparent 70%)', filter: 'blur(130px)', pointerEvents: 'none' }} />

            <motion.div style={{
                width, scale, opacity, borderRadius,
                background: '#ffffff',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 100px 200px rgba(0,0,0,0.45)',
            }}>
                {/* ── subtle noise texture overlay ── */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', opacity: 0.02, pointerEvents: 'none', zIndex: 0 }} />

                <div style={{ position: 'relative', zIndex: 1, padding: '8rem 5rem 6rem' }}>

                    {/* ── Headline ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ textAlign: 'center', marginBottom: '5rem' }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(88,86,214,0.06)', border: '1px solid rgba(88,86,214,0.15)', borderRadius: '100px', padding: '8px 20px', marginBottom: '2rem' }}>
                            <Globe size={12} color="#5856d6" />
                            <span style={{ fontSize: '0.65rem', fontWeight: 900, color: '#5856d6', textTransform: 'uppercase', letterSpacing: 3 }}>On-Chain Asset Intelligence</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)', lineHeight: 0.88, fontWeight: 900, color: '#000', letterSpacing: '-0.04em', marginBottom: '2rem' }}>
                            The $16 Trillion<br />
                            <span style={{ background: 'linear-gradient(110deg, #5856d6 30%, #007aff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                RWA Revolution
                            </span>
                        </h2>
                        <p style={{ color: 'rgba(0,0,0,0.45)', fontSize: '1.2rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.65, fontWeight: 500 }}>
                            Real-World Asset tokenization is transforming global capital markets — Land Vault is positioned at the center of this $16 trillion wave.
                        </p>
                    </motion.div>

                    {/* ── 3 Top Stat Cards ── */}
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '5rem' }}>
                        {topStats.map((s, i) => (
                            <StatCard key={s.label} {...s} delay={i * 0.1} index={i} />
                        ))}
                    </div>

                    {/* ── Main 2-col layout ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'center', minHeight: '620px' }}>

                        {/* Left: Sector Breakdown */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                                    <BarChart2 size={14} color="#000" />
                                    <span style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(0,0,0,0.4)' }}>TVL by Sector</span>
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.5)', fontWeight: 500 }}>Total Value Locked — Q1 2026</div>
                            </div>

                            {rwaSectors.map((sector, i) => (
                                <motion.div
                                    key={sector.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    onMouseEnter={() => setActiveSector(sector)}
                                    onMouseLeave={() => setActiveSector(null)}
                                    style={{
                                        padding: '1.4rem 1.8rem',
                                        borderRadius: '20px',
                                        border: `1px solid ${activeSector?.id === sector.id ? sector.color + '30' : 'rgba(0,0,0,0.04)'}`,
                                        background: activeSector?.id === sector.id ? sector.color + '06' : 'transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s ease'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.7rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: sector.color, boxShadow: `0 0 8px ${sector.color}66` }} />
                                            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#000' }}>{sector.name}</span>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span style={{ fontSize: '0.95rem', fontWeight: 900, color: sector.color }}>{sector.value}</span>
                                            <span style={{ fontSize: '0.6rem', color: '#00c853', fontWeight: 800, marginLeft: '8px' }}>{sector.growth}</span>
                                        </div>
                                    </div>
                                    {/* Progress bar */}
                                    <div style={{ height: '4px', background: 'rgba(0,0,0,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${sector.pct}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                            style={{ height: '100%', background: sector.color, borderRadius: '10px', boxShadow: `0 0 10px ${sector.color}55` }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right: 3D Globe — no background tint, white canvas */}
                        <div style={{ position: 'relative', height: '620px', borderRadius: '40px' }}>
                            <Canvas camera={{ position: [0, 0, 7], fov: 42 }} style={{ borderRadius: '40px' }} gl={{ alpha: true }}>
                                <ambientLight intensity={1.2} />
                                <Suspense fallback={null}>
                                    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
                                        <EarthGlobe />
                                    </Float>
                                </Suspense>
                                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.45} enablePan={false} />
                            </Canvas>

                            {/* Sector hover info */}
                            {activeSector && (
                                <motion.div
                                    key={activeSector.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '30px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '300px',
                                        padding: '1.6rem 2rem',
                                        background: 'rgba(255,255,255,0.9)',
                                        backdropFilter: 'blur(30px)',
                                        border: `1px solid ${activeSector.color}33`,
                                        borderRadius: '24px',
                                        boxShadow: `0 20px 40px rgba(0,0,0,0.12), 0 0 0 1px ${activeSector.color}22`,
                                        textAlign: 'center',
                                    }}
                                >
                                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '0.8rem', color: activeSector.color }}>
                                        <ShieldCheck size={13} />
                                        <span style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase' }}>Sector Intelligence</span>
                                    </div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000', marginBottom: '0.3rem' }}>{activeSector.name}</div>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: activeSector.color, letterSpacing: -1 }}>{activeSector.value}</div>
                                    <div style={{ fontSize: '0.65rem', color: '#00c853', fontWeight: 800 }}>{activeSector.growth} YoY</div>
                                </motion.div>
                            )}

                            {/* Live badge */}
                            <div style={{ position: 'absolute', top: '24px', left: '24px', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '100px', backdropFilter: 'blur(10px)' }}>
                                <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00c853' }} />
                                <span style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)' }}>Live Protocol Mesh</span>
                            </div>

                            {/* Growth badge */}
                            <div style={{ position: 'absolute', top: '24px', right: '24px', padding: '8px 16px', background: '#000', color: '#fff', borderRadius: '100px', fontSize: '0.6rem', fontWeight: 900, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                                +260% YoY
                            </div>
                        </div>
                    </div>

                    {/* ── CTA Row ── */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6rem', padding: '3rem 4rem', background: '#000', borderRadius: '32px', gap: '2rem' }}>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>Ready to tokenize your assets?</div>
                            <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>Join 127+ protocols already on Land Vault.</div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
                            <motion.button
                                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(191,255,0,0.3)' }}
                                whileTap={{ scale: 0.97 }}
                                style={{ background: '#bfff00', color: '#000', padding: '1.2rem 2.8rem', borderRadius: '100px', fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 3, border: 'none', cursor: 'pointer' }}
                            >
                                Start Building
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                style={{ background: 'transparent', color: '#fff', padding: '1.2rem 2.8rem', borderRadius: '100px', fontWeight: 700, fontSize: '0.85rem', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer' }}
                            >
                                View Data
                            </motion.button>
                        </div>
                    </div>

                </div>
            </motion.div>

            <style jsx>{`
                @media (max-width: 1100px) {
                    div[style*="gridTemplateColumns: '1fr 1.4fr'"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
