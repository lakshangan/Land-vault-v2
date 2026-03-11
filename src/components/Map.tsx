'use client';

import { motion, useScroll, useTransform, useSpring, useInView, animate } from 'framer-motion';
import { useState, useRef, useMemo, Suspense, useEffect } from 'react';
import { ShieldCheck, TrendingUp, BarChart2, Globe } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ─── Static data ─────────────────────────────────────────────────────────────

const rwaSectors = [
    { id: 1, name: 'Private Credit',     value: '$14.2B', growth: '+180%', pct: 40, color: '#bfff00' },
    { id: 2, name: 'U.S. Treasuries',    value: '$8.9B',  growth: '+240%', pct: 25, color: '#007aff' },
    { id: 3, name: 'Commodities / Gold', value: '$6.5B',  growth: '+45%',  pct: 18, color: '#ffcc00' },
    { id: 4, name: 'Real Estate',        value: '$5.1B',  growth: '+92%',  pct: 14, color: '#ff2d55' },
    { id: 5, name: 'Trade Finance',      value: '$1.1B',  growth: '+110%', pct: 3,  color: '#ff9500' },
];

// Globe callout nodes — x/y are percentages over the canvas container
const globeNodes = [
    { id: 1, x: '34%', y: '28%', label: 'North America', value: '$12.4B', color: '#bfff00',  lx: '4%',   ly: '14%' },
    { id: 2, x: '51%', y: '30%', label: 'Europe / UK',   value: '$9.1B',  color: '#007aff',  lx: '62%',  ly: '6%'  },
    { id: 3, x: '72%', y: '35%', label: 'Asia Pacific',  value: '$7.8B',  color: '#ff9500',  lx: '80%',  ly: '20%' },
    { id: 4, x: '55%', y: '62%', label: 'Middle East',   value: '$3.9B',  color: '#ffcc00',  lx: '68%',  ly: '75%' },
    { id: 5, x: '25%', y: '68%', label: 'Latin America', value: '$2.6B',  color: '#ff2d55',  lx: '2%',   ly: '78%' },
];

const topStats = [
    {
        label: 'Market Cap',
        value: 35.8, suffix: 'B', prefix: '$',
        sub: '+260% YoY Growth',
        icon: <TrendingUp size={16} />,
        accent: '#bfff00',
        bars: [18, 25, 30, 22, 38, 45, 52, 48, 60, 72, 80, 100],
    },
    {
        label: 'Active Protocols',
        value: 127, suffix: '+', prefix: '',
        sub: '84 new this year',
        icon: <Globe size={16} />,
        accent: '#007aff',
        bars: [20, 35, 28, 50, 42, 60, 55, 73, 80, 85, 95, 100],
    },
    {
        label: 'Projected 2030',
        value: 16, suffix: 'T', prefix: '$',
        sub: 'McKinsey & BCG Est.',
        icon: <BarChart2 size={16} />,
        accent: '#ff2d55',
        bars: [5, 10, 18, 25, 35, 48, 55, 65, 75, 85, 92, 100],
    },
];

// ─── Count-up ─────────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1.8, inView: boolean) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!inView) return;
        const c = animate(0, target, {
            duration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate(v) { setVal(parseFloat(v.toFixed(target < 100 ? 1 : 0))); },
        });
        return c.stop;
    }, [inView, target, duration]);
    return val;
}

// ─── Premium Stat Card ────────────────────────────────────────────────────────

function StatCard({ label, value, suffix, prefix, sub, icon, accent, bars, delay }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const display = useCountUp(value, 1.8, inView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            style={{
                flex: 1,
                background: '#000',
                border: `1px solid ${accent}22`,
                borderRadius: '28px',
                padding: '2.4rem 2.2rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'border-color 0.3s ease',
            }}
        >
            {/* Glow sweep */}
            <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at top left, ${accent}0d 0%, transparent 60%)`,
                pointerEvents: 'none',
            }} />

            {/* Top accent line */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            }} />

            {/* Icon + Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: accent, marginBottom: '1.4rem' }}>
                {icon}
                <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.18em' }}>{label}</span>
            </div>

            {/* Big number */}
            <div style={{ fontSize: 'clamp(2.6rem, 4vw, 3.8rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>
                {prefix}{display}{suffix}
            </div>

            {/* Sub label */}
            <div style={{ fontSize: '0.75rem', color: accent, fontWeight: 700, marginTop: '0.5rem', opacity: 0.85 }}>{sub}</div>

            {/* Mini sparkline */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '36px', marginTop: '1.8rem' }}>
                {bars.map((h: number, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: delay + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            flex: 1,
                            background: i === bars.length - 1 ? accent : `${accent}44`,
                            borderRadius: '3px',
                            boxShadow: i === bars.length - 1 ? `0 0 8px ${accent}` : 'none',
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
}

// ─── 3-D Globe (dark, visible) ────────────────────────────────────────────────

function EarthGlobe() {
    const outerRef = useRef<THREE.Points>(null);
    const innerRef = useRef<THREE.Points>(null);
    const ringRef  = useRef<THREE.Mesh>(null);

    const outer = useMemo(() => {
        const n = 3200;
        const pos = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
            const phi   = Math.acos(-1 + (2 * i) / n);
            const theta = Math.sqrt(n * Math.PI) * phi;
            const r = 2.6;
            pos[i * 3]     = r * Math.cos(theta) * Math.sin(phi);
            pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, []);

    const inner = useMemo(() => {
        const n = 900;
        const pos = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
            const phi   = Math.acos(-1 + (2 * i) / n);
            const theta = Math.sqrt(n * Math.PI) * phi;
            const r = 1.7;
            pos[i * 3]     = r * Math.cos(theta) * Math.sin(phi);
            pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame(({ clock }) => {
        const t = clock.elapsedTime;
        if (outerRef.current) outerRef.current.rotation.y =  t * 0.10;
        if (innerRef.current) innerRef.current.rotation.y = -t * 0.06;
        if (ringRef.current)  ringRef.current.rotation.z  =  t * 0.04;
    });

    return (
        <group>
            {/* Dark filled sphere so particles are visible against it */}
            <Sphere args={[2.55, 64, 64]}>
                <meshBasicMaterial color="#050505" />
            </Sphere>

            {/* Outer dot shell – lime/bright */}
            <Points ref={outerRef} positions={outer} stride={3}>
                <PointMaterial transparent color="#bfff00" size={0.04} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
            </Points>

            {/* Inner shell – blue */}
            <Points ref={innerRef} positions={inner} stride={3}>
                <PointMaterial transparent color="#007aff" size={0.025} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
            </Points>

            {/* Equatorial ring */}
            <mesh ref={ringRef} rotation={[Math.PI / 2.3, 0, 0]}>
                <torusGeometry args={[2.85, 0.007, 2, 220]} />
                <meshBasicMaterial color="#bfff00" transparent opacity={0.15} />
            </mesh>

            {/* Atmosphere shell */}
            <Sphere args={[2.72, 64, 64]}>
                <MeshDistortMaterial color="#bfff00" transparent opacity={0.012} distort={0.2} speed={1.2} />
            </Sphere>
        </group>
    );
}

// ─── SVG Callout Overlay ──────────────────────────────────────────────────────

function GlobeCallouts() {
    return (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
                {globeNodes.map((node) => (
                    <g key={node.id}>
                        <motion.line
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ duration: 1, delay: node.id * 0.2 }}
                            x1={node.x} y1={node.y} x2={node.lx} y2={node.ly}
                            stroke={node.color}
                            strokeWidth="1"
                            strokeDasharray="4 3"
                        />
                        {/* Dot on globe surface */}
                        <motion.circle
                            initial={{ r: 0, opacity: 0 }}
                            animate={{ r: 4, opacity: 1 }}
                            transition={{ duration: 0.5, delay: node.id * 0.2 + 0.8 }}
                            cx={node.x} cy={node.y}
                            fill={node.color}
                            style={{ filter: `drop-shadow(0 0 6px ${node.color})` }}
                        />
                        {/* Pulse ring */}
                        <motion.circle
                            animate={{ r: [4, 12], opacity: [0.6, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: node.id * 0.4 }}
                            cx={node.x} cy={node.y}
                            fill="none"
                            stroke={node.color}
                            strokeWidth="1"
                        />
                    </g>
                ))}
            </svg>

            {/* Floating label cards */}
            {globeNodes.map((node) => (
                <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: node.id * 0.2 + 0.9 }}
                    style={{
                        position: 'absolute',
                        left: node.lx,
                        top: node.ly,
                        transform: 'translate(-50%, -50%)',
                        background: 'rgba(0,0,0,0.85)',
                        border: `1px solid ${node.color}44`,
                        borderRadius: '12px',
                        padding: '8px 14px',
                        whiteSpace: 'nowrap',
                        backdropFilter: 'blur(20px)',
                        boxShadow: `0 0 20px ${node.color}22`,
                    }}
                >
                    <div style={{ fontSize: '0.55rem', fontWeight: 900, color: node.color, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2px' }}>{node.label}</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{node.value}</div>
                </motion.div>
            ))}
        </div>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function InteractiveMap() {
    const [activeSector, setActiveSector] = useState<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'center center'] });
    const spring = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
    const width        = useTransform(spring, [0, 1], ['84%', '100%']);
    const scale        = useTransform(spring, [0, 1], [0.88, 1]);
    const opacity      = useTransform(spring, [0, 0.35], [0, 1]);

    return (
        <section ref={containerRef} style={{
            background: '#000',
            minHeight: '175vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Ambient glows */}
            <div style={{ position: 'absolute', top: '-5%', left: '5%',    width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(191,255,0,0.06) 0%, transparent 60%)',    filter: 'blur(160px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-5%', right: '0%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(0,122,255,0.07) 0%, transparent 65%)', filter: 'blur(130px)', pointerEvents: 'none' }} />

            <motion.div style={{
                width, scale, opacity,
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '60px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 100px 200px rgba(0,0,0,0.7)',
            }}>
                {/* Subtle noise */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', opacity: 0.03, pointerEvents: 'none', zIndex: 0 }} />

                <div style={{ position: 'relative', zIndex: 1, padding: '7rem 5rem 6rem' }}>

                    {/* ── Headline ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ textAlign: 'center', marginBottom: '5rem' }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(191,255,0,0.06)', border: '1px solid rgba(191,255,0,0.15)', borderRadius: '100px', padding: '8px 20px', marginBottom: '2rem' }}>
                            <Globe size={12} color="#bfff00" />
                            <span style={{ fontSize: '0.65rem', fontWeight: 900, color: '#bfff00', textTransform: 'uppercase', letterSpacing: 3 }}>On-Chain Asset Intelligence · Q1 2026</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.8rem, 6vw, 5.8rem)', lineHeight: 0.9, fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', marginBottom: '2rem' }}>
                            The $16 Trillion<br />
                            <span style={{ background: 'linear-gradient(110deg, #bfff00 30%, rgba(191,255,0,0.4))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>RWA Revolution</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontWeight: 400 }}>
                            Real-World Asset tokenization is transforming capital markets — Land Vault sits at the centre of this tectonic shift.
                        </p>
                    </motion.div>

                    {/* ── 3 Stat Cards ── */}
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '5rem' }}>
                        {topStats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.12} />)}
                    </div>

                    {/* ── 2-col: Sectors left | Globe right ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', minHeight: '580px', alignItems: 'center' }}>

                        {/* Left – Sector breakdown */}
                        <div>
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
                                    <BarChart2 size={13} color="rgba(255,255,255,0.3)" />
                                    <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.3)' }}>TVL by Sector</span>
                                </div>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>Total Value Locked — Q1 2026</div>
                            </div>

                            {rwaSectors.map((sector, i) => (
                                <motion.div
                                    key={sector.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.08 }}
                                    onMouseEnter={() => setActiveSector(sector)}
                                    onMouseLeave={() => setActiveSector(null)}
                                    style={{
                                        padding: '1.4rem 1.8rem',
                                        borderRadius: '18px',
                                        border: `1px solid ${activeSector?.id === sector.id ? sector.color + '40' : 'rgba(255,255,255,0.05)'}`,
                                        background: activeSector?.id === sector.id ? sector.color + '08' : 'rgba(255,255,255,0.02)',
                                        cursor: 'pointer',
                                        marginBottom: '0.6rem',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.7rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: sector.color, boxShadow: `0 0 8px ${sector.color}` }} />
                                            <span style={{ fontSize: '0.87rem', fontWeight: 700, color: '#fff' }}>{sector.name}</span>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: '0.92rem', fontWeight: 900, color: sector.color }}>{sector.value}</span>
                                            <span style={{ fontSize: '0.6rem', color: '#00e676', fontWeight: 800, marginLeft: '8px' }}>{sector.growth}</span>
                                        </div>
                                    </div>
                                    <div style={{ height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${sector.pct}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, delay: 0.3 + i * 0.08 }}
                                            style={{ height: '100%', background: sector.color, borderRadius: '10px', boxShadow: `0 0 8px ${sector.color}66` }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right – 3D Globe with callouts */}
                        <div style={{ position: 'relative', height: '580px', borderRadius: '40px', background: '#000', overflow: 'visible' }}>
                            {/* Dark background for the globe so dots pop */}
                            <div style={{ position: 'absolute', inset: 0, borderRadius: '40px', background: 'radial-gradient(ellipse at center, #0d0d1a 0%, #000 70%)', overflow: 'hidden' }}>
                                {/* subtle grid */}
                                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                            </div>

                            <Canvas camera={{ position: [0, 0, 7], fov: 42 }} style={{ borderRadius: '40px', position: 'relative', zIndex: 1 }}>
                                <ambientLight intensity={0.3} />
                                <pointLight position={[8, 8, 8]} intensity={2} color="#bfff00" />
                                <pointLight position={[-6, -4, -4]} intensity={1} color="#007aff" />
                                <Suspense fallback={null}>
                                    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
                                        <EarthGlobe />
                                    </Float>
                                </Suspense>
                                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
                            </Canvas>

                            {/* SVG callout lines + label cards */}
                            <div style={{ position: 'absolute', inset: 0, zIndex: 2, borderRadius: '40px', overflow: 'visible', pointerEvents: 'none' }}>
                                <GlobeCallouts />
                            </div>

                            {/* Live badge */}
                            <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px', background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', backdropFilter: 'blur(20px)', whiteSpace: 'nowrap' }}>
                                <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00e676' }} />
                                <span style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Live Protocol Mesh · 42 Active Nodes</span>
                            </div>
                        </div>
                    </div>

                    {/* ── CTA Row ── */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '5rem', padding: '2.5rem 3.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '28px', gap: '2rem' }}>
                        <div>
                            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>Ready to tokenize your assets?</div>
                            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Join 127+ protocols already building on Land Vault.</div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
                            <motion.button
                                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(191,255,0,0.3)' }}
                                whileTap={{ scale: 0.97 }}
                                style={{ background: '#bfff00', color: '#000', padding: '1.1rem 2.6rem', borderRadius: '100px', fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 3, border: 'none', cursor: 'pointer' }}
                            >
                                Start Building
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.06)' }}
                                whileTap={{ scale: 0.97 }}
                                style={{ background: 'transparent', color: '#fff', padding: '1.1rem 2.6rem', borderRadius: '100px', fontWeight: 700, fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer' }}
                            >
                                View Data
                            </motion.button>
                        </div>
                    </div>

                </div>
            </motion.div>

            <style jsx>{`
                @media (max-width: 1100px) {
                    div[style*="gridTemplateColumns: '1fr 1.5fr'"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
