'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Database, Cpu, Globe, ArrowRight } from 'lucide-react';

const stackLayers = [
    {
        id: "app",
        title: "AI-Powered Applications",
        desc: "The interface layer where valuation models and investor dashboards live. High-fidelity dashboards for institutional monitoring.",
        items: ["Valuation Engine", "Yield Tracker", "Investor Portal"],
        icon: <Cpu size={24} />,
        color: "#ff2d55"
    },
    {
        id: "protocol",
        title: "Land Vault Ontology",
        desc: "The logic layer managing NFT minting, fractionalization, and regulatory logic via smart contract clusters.",
        items: ["ERC-721 Registry", "Fractional Vaults", "Governance"],
        icon: <Database size={24} />,
        color: "#5856d6"
    },
    {
        id: "data",
        title: "Multi-modal Data Plane",
        desc: "The base layer storing immutable geospatial records, ownership history, and high-res satellite telemetry.",
        items: ["IPFS Storage", "Geospatial Index", "Oracle Network"],
        icon: <Globe size={24} />,
        color: "#007aff"
    }
];

export default function Solution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const smoothProgress = useSpring(scrollYProgress, springConfig);

    const rotateX = useTransform(smoothProgress, [0, 1], [40, 20]);
    const rotateZ = useTransform(smoothProgress, [0, 1], [-25, -10]);
    const translateY = useTransform(smoothProgress, [0, 1], [50, -50]);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);

    return (
        <section ref={containerRef} className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem', alignItems: 'center' }}>

                    {/* Left Text Column */}
                    <div style={{ zIndex: 10 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1, marginBottom: '2.5rem' }}>
                                The Land Vault <br />
                                <span className="accent-color">Protocol Stack</span>
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '6rem', maxWidth: '600px' }}>
                                A multi-layered, institutional-grade architecture designed for high-velocity real estate liquidity.
                            </p>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                            {stackLayers.map((layer, i) => (
                                <motion.div
                                    key={layer.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                        <div style={{
                                            color: layer.color,
                                            background: `${layer.color}15`,
                                            padding: '14px',
                                            borderRadius: '14px',
                                            boxShadow: `0 0 30px ${layer.color}22`
                                        }}>
                                            {layer.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 900 }}>
                                            {layer.title}
                                        </h3>
                                    </div>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: '500px' }}>{layer.desc}</p>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        {layer.items.map((item, idx) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    fontSize: '0.75rem',
                                                    padding: '0.6rem 1.4rem',
                                                    background: 'rgba(255,255,255,0.02)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    borderRadius: '100px',
                                                    color: 'rgba(255,255,255,0.6)',
                                                    letterSpacing: 1,
                                                    fontWeight: 600
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right 3D Visual Column */}
                    <div style={{ position: 'relative', height: '1100px', perspective: '3000px', display: 'flex', alignItems: 'center' }}>
                        <motion.div
                            style={{
                                width: '100%',
                                maxWidth: '650px',
                                height: '100%',
                                transformStyle: 'preserve-3d',
                                rotateX,
                                rotateZ,
                                y: translateY,
                                scale
                            }}
                        >
                            {stackLayers.map((layer, i) => {
                                const zIndex = stackLayers.length - i;
                                const offset = i * 240;

                                return (
                                    <motion.div
                                        key={layer.id}
                                        initial={{ opacity: 0, z: -500 }}
                                        whileInView={{ opacity: 1, z: i * 180 }}
                                        transition={{ duration: 1.5, delay: i * 0.4 }}
                                        style={{
                                            position: 'absolute',
                                            top: '5%',
                                            left: '0',
                                            width: '100%',
                                            height: '500px',
                                            background: 'rgba(10, 10, 10, 0.98)',
                                            border: `1px solid ${layer.color}55`,
                                            borderRadius: '40px',
                                            boxShadow: `0 50px 120px rgba(0,0,0,0.9), 0 0 60px ${layer.color}15`,
                                            backdropFilter: 'blur(30px)',
                                            overflow: 'hidden',
                                            transform: `translateY(${offset}px)`,
                                            zIndex
                                        }}
                                    >
                                        {/* Inner HUD Grid */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: `radial-gradient(circle, ${layer.color}11 1px, transparent 1px)`,
                                            backgroundSize: '40px 40px'
                                        }} />

                                        <div style={{ padding: '4.5rem', position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5rem' }}>
                                                <div style={{ color: layer.color, display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                                                    {layer.icon}
                                                    <span style={{ fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 4 }}>{layer.id}_CORE_MODULE</span>
                                                </div>
                                                <div style={{
                                                    padding: '6px 14px',
                                                    background: `${layer.color}11`,
                                                    color: layer.color,
                                                    fontSize: '0.6rem',
                                                    fontWeight: 900,
                                                    borderRadius: '4px',
                                                    letterSpacing: 1
                                                }}>
                                                    ACTIVE_SYNC
                                                </div>
                                            </div>

                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', flex: 1 }}>
                                                {[1, 2, 3, 4, 5, 6].map(n => (
                                                    <div key={n} style={{
                                                        background: 'rgba(255,255,255,0.01)',
                                                        border: '1px solid rgba(255,255,255,0.04)',
                                                        borderRadius: '20px',
                                                        position: 'relative'
                                                    }}>
                                                        <motion.div
                                                            animate={{ opacity: [0.05, 0.25, 0.05] }}
                                                            transition={{ duration: 3, repeat: Infinity, delay: n * 0.4 }}
                                                            style={{ position: 'absolute', inset: 0, background: layer.color, borderRadius: 'inherit' }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ width: '150px', height: '1px', background: layer.color + '44' }} />
                                                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', letterSpacing: 1 }}>METRICS_VERIFIED_256BIT</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Data Flow Connecting Lines */}
                            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: -1 }}>
                                {[0.3, 0.7].map((x, idx) => (
                                    <motion.path
                                        key={idx}
                                        d={`M ${x * 600} 100 L ${x * 600} 1000`}
                                        stroke="rgba(255,255,255,0.05)"
                                        strokeWidth="1"
                                        strokeDasharray="8,8"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2 }}
                                    />
                                ))}
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
