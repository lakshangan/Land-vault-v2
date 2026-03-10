'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Database, Cpu, Globe, Share2, Layers } from 'lucide-react';

const stackLayers = [
    {
        id: "app",
        title: "AI-Powered Applications",
        desc: "The interface layer where valuation models and investor dashboards live.",
        items: ["Valuation Engine", "Yield Tracker", "Investor Portal"],
        icon: <Cpu size={20} />,
        color: "#bfff00"
    },
    {
        id: "protocol",
        title: "Land Vault Ontology",
        desc: "The logic layer managing NFT minting, fractionalization, and legal logic.",
        items: ["ERC-721 Registry", "Fractional Vaults", "Governance"],
        icon: <Database size={20} />,
        color: "#c5a059"
    },
    {
        id: "data",
        title: "Multi-modal Data Plane",
        desc: "The base layer storing immutable geospatial records and ownership history.",
        items: ["IPFS Storage", "Geospatial Index", "Oracle Network"],
        icon: <Globe size={20} />,
        color: "#00f2ff"
    }
];

export default function Solution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [45, 30]);
    const rotateZ = useTransform(scrollYProgress, [0, 1], [-30, -15]);

    return (
        <section ref={containerRef} className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'center' }}>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                                The Land Vault <br />
                                <span style={{ color: '#bfff00' }}>Protocol Stack</span>
                            </h2>
                            <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '3rem' }}>
                                Leverage a highly interoperable, multi-layered architecture designed for institutional real estate liquidity.
                            </p>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {stackLayers.map((layer, i) => (
                                <motion.div
                                    key={layer.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ color: layer.color }}>{layer.icon}</div>
                                        <h3 style={{ fontSize: '1.1rem', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>
                                            {layer.title}
                                        </h3>
                                    </div>
                                    <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{layer.desc}</p>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        {layer.items.map((item, idx) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    fontSize: '0.75rem',
                                                    padding: '0.4rem 1rem',
                                                    background: 'rgba(255,255,255,0.03)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    borderRadius: '100px',
                                                    color: '#aaa'
                                                }}
                                            >
                                                {item} →
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div style={{ position: 'relative', height: '800px', width: '100%', perspective: '2000px' }}>
                        <motion.div
                            style={{
                                width: '100%',
                                height: '100%',
                                transformStyle: 'preserve-3d',
                                rotateX,
                                rotateZ,
                            }}
                        >
                            {stackLayers.map((layer, i) => (
                                <motion.div
                                    key={layer.id}
                                    initial={{ opacity: 0, z: -200 }}
                                    whileInView={{ opacity: 1, z: i * 150 }}
                                    transition={{ duration: 1, delay: i * 0.3 }}
                                    style={{
                                        position: 'absolute',
                                        top: '20%',
                                        left: '10%',
                                        width: '100%',
                                        height: '350px',
                                        background: 'rgba(5, 5, 5, 0.8)',
                                        border: `1px solid ${i === 0 ? '#bfff00' : 'rgba(255,255,255,0.1)'}`,
                                        borderRadius: '20px',
                                        boxShadow: i === 0 ? '0 0 50px rgba(191, 255, 0, 0.15)' : '0 20px 40px rgba(0,0,0,0.5)',
                                        backdropFilter: 'blur(10px)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Grid background for the panel */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage: `radial-gradient(circle, ${layer.color}22 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px',
                                        opacity: 0.3
                                    }} />

                                    <div style={{ padding: '2.5rem', position: 'relative', zIndex: 1 }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: '2rem'
                                        }}>
                                            <div style={{ color: layer.color }}>{layer.icon}</div>
                                            <div style={{ fontSize: '0.65rem', color: '#444', textTransform: 'uppercase', letterSpacing: 2 }}>{layer.id}://layer_{3 - i}</div>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                            {[1, 2, 3, 4].map(n => (
                                                <div key={n} style={{
                                                    height: '40px',
                                                    background: 'rgba(255,255,255,0.02)',
                                                    border: '1px solid rgba(255,255,255,0.05)',
                                                    borderRadius: '8px'
                                                }} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Scan line effect */}
                                    <motion.div
                                        animate={{ top: ['-10%', '110%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: `linear-gradient(90deg, transparent, ${layer.color}, transparent)`,
                                            opacity: 0.5,
                                            zIndex: 2
                                        }}
                                    />
                                </motion.div>
                            ))}

                            {/* Connecting lines between layers */}
                            <svg
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    pointerEvents: 'none',
                                    zIndex: 0,
                                    transform: 'translateZ(-50px)'
                                }}
                            >
                                <motion.path
                                    d="M200,300 L200,600 M500,300 L500,600"
                                    stroke="rgba(191, 255, 0, 0.1)"
                                    strokeWidth="1"
                                    strokeDasharray="5,5"
                                />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
