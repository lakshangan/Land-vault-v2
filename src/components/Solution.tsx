'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Database, Cpu, Globe, ArrowRight } from 'lucide-react';

const stackLayers = [
    {
        id: "app",
        title: "AI-Powered Applications",
        desc: "The interface layer where valuation models and investor dashboards live.",
        items: ["Valuation Engine", "Yield Tracker", "Investor Portal"],
        icon: <Cpu size={24} />,
        color: "#bfff00"
    },
    {
        id: "protocol",
        title: "Land Vault Ontology",
        desc: "The logic layer managing NFT minting, fractionalization, and legal logic.",
        items: ["ERC-721 Registry", "Fractional Vaults", "Governance"],
        icon: <Database size={24} />,
        color: "#c5a059"
    },
    {
        id: "data",
        title: "Multi-modal Data Plane",
        desc: "The base layer storing immutable geospatial records and ownership history.",
        items: ["IPFS Storage", "Geospatial Index", "Oracle Network"],
        icon: <Globe size={24} />,
        color: "#00f2ff"
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

    const rotateX = useTransform(smoothProgress, [0, 1], [40, 25]);
    const rotateZ = useTransform(smoothProgress, [0, 1], [-25, -10]);
    const translateY = useTransform(smoothProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '8rem', alignItems: 'flex-start' }}>
                    <div style={{ paddingRight: '2rem', paddingTop: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '2.5rem' }}>
                                The Land Vault <br />
                                <span className="accent-color">Protocol Stack</span>
                            </h2>
                            <p style={{ color: '#888', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '4rem' }}>
                                An institutional-grade architecture bridging real asset complexity with blockchain efficiency.
                            </p>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            {stackLayers.map((layer, i) => (
                                <motion.div
                                    key={layer.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.2rem' }}>
                                        <div style={{
                                            color: layer.color,
                                            background: `${layer.color}11`,
                                            padding: '12px',
                                            borderRadius: '12px',
                                            boxShadow: `0 0 20px ${layer.color}22`
                                        }}>
                                            {layer.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.2rem', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>
                                            {layer.title}
                                        </h3>
                                    </div>
                                    <p style={{ color: '#777', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.6 }}>{layer.desc}</p>
                                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                        {layer.items.map((item, idx) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    fontSize: '0.75rem',
                                                    padding: '0.6rem 1.2rem',
                                                    background: 'rgba(255,255,255,0.03)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    borderRadius: '100px',
                                                    color: '#999',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem'
                                                }}
                                            >
                                                {item} <ArrowRight size={10} />
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div style={{ position: 'relative', height: '900px', width: '100%', perspective: '2500px' }}>
                        <motion.div
                            style={{
                                width: '100%',
                                height: '100%',
                                transformStyle: 'preserve-3d',
                                rotateX,
                                rotateZ,
                                y: translateY
                            }}
                        >
                            {stackLayers.map((layer, i) => {
                                const zIndex = stackLayers.length - i;
                                const offset = i * 180;

                                return (
                                    <motion.div
                                        key={layer.id}
                                        initial={{ opacity: 0, z: -300 }}
                                        whileInView={{ opacity: 1, z: i * 100 }}
                                        transition={{ duration: 1.2, delay: i * 0.3 }}
                                        style={{
                                            position: 'absolute',
                                            top: '15%',
                                            left: '0',
                                            width: '100%',
                                            height: '400px',
                                            background: 'rgba(5, 5, 5, 0.9)',
                                            border: `1px solid ${i === 0 ? layer.color : 'rgba(255,255,255,0.1)'}`,
                                            borderRadius: '24px',
                                            boxShadow: i === 0
                                                ? `0 0 80px ${layer.color}15, 0 40px 100px rgba(0,0,0,0.8)`
                                                : '0 40px 100px rgba(0,0,0,0.8)',
                                            backdropFilter: 'blur(16px)',
                                            overflow: 'hidden',
                                            transform: `translateY(${offset}px)`,
                                            zIndex
                                        }}
                                    >
                                        {/* SVG Grid Interior */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: `linear-gradient(${layer.color}08 1px, transparent 1px), linear-gradient(90deg, ${layer.color}08 1px, transparent 1px)`,
                                            backgroundSize: '40px 40px',
                                            opacity: 1
                                        }} />

                                        <div style={{ padding: '3.5rem', position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginBottom: '3rem'
                                            }}>
                                                <div style={{ color: layer.color, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    {layer.icon}
                                                    <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>{layer.id}_subsystem</span>
                                                </div>
                                                <div style={{ fontSize: '0.6rem', color: '#333', fontFamily: 'monospace' }}>
                                                    ADDR: 0x{Math.random().toString(16).slice(2, 10).toUpperCase()}
                                                </div>
                                            </div>

                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', flex: 1 }}>
                                                {[1, 2, 3, 4, 5, 6].map(n => (
                                                    <div key={n} style={{
                                                        background: 'rgba(255,255,255,0.01)',
                                                        border: '1px solid rgba(255,255,255,0.04)',
                                                        borderRadius: '12px',
                                                        position: 'relative',
                                                        overflow: 'hidden'
                                                    }}>
                                                        <motion.div
                                                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                                                            transition={{ duration: 2, repeat: Infinity, delay: n * 0.2 }}
                                                            style={{ position: 'absolute', inset: 0, background: layer.color, opacity: 0.1 }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ width: '40%', height: '4px', background: '#111', borderRadius: '2px', overflow: 'hidden' }}>
                                                    <motion.div
                                                        animate={{ width: ['0%', '100%'] }}
                                                        transition={{ duration: 3, repeat: Infinity }}
                                                        style={{ height: '100%', background: layer.color }}
                                                    />
                                                </div>
                                                <div style={{ fontSize: '0.65rem', color: '#666' }}>SYNCED_LATENCY: 12ms</div>
                                            </div>
                                        </div>

                                        {/* Glowing vertical scan line */}
                                        <motion.div
                                            animate={{ left: ['-10%', '110%'] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                bottom: 0,
                                                width: '2px',
                                                background: `linear-gradient(to bottom, transparent, ${layer.color}, transparent)`,
                                                boxShadow: `0 0 20px ${layer.color}`,
                                                zIndex: 2,
                                                opacity: 0.4
                                            }}
                                        />
                                    </motion.div>
                                );
                            })}

                            {/* Enhanced Connecting Lines */}
                            <svg
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    pointerEvents: 'none',
                                    zIndex: -1,
                                    transform: 'translateZ(-100px)'
                                }}
                            >
                                {[0.2, 0.5, 0.8].map((x, idx) => (
                                    <motion.path
                                        key={idx}
                                        d={`M ${x * 400} 200 L ${x * 400} 800`}
                                        stroke="rgba(191, 255, 0, 0.15)"
                                        strokeWidth="1"
                                        strokeDasharray="10,10"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: idx * 0.3 }}
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
