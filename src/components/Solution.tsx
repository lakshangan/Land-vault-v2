'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Database, Cpu, Globe } from 'lucide-react';

const stackLayers = [
    {
        id: "app",
        title: "AI-Powered Applications",
        desc: "The interface layer where valuation models and investor dashboards live.",
        items: ["Valuation Engine", "Yield Tracker", "Investor Portal"],
        icon: <Cpu size={24} />,
        color: "#ff2d55"
    },
    {
        id: "protocol",
        title: "Land Vault Ontology",
        desc: "The logic layer managing NFT minting, fractionalization, and legal logic.",
        items: ["ERC-721 Registry", "Fractional Vaults", "Governance"],
        icon: <Database size={24} />,
        color: "#5856d6"
    },
    {
        id: "data",
        title: "Multi-modal Data Plane",
        desc: "The base layer storing immutable geospatial records and ownership history.",
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

    const rotateX = useTransform(smoothProgress, [0, 1], [45, 30]);
    const rotateZ = useTransform(smoothProgress, [0, 1], [-30, -15]);
    const translateY = useTransform(smoothProgress, [0, 1], [100, -100]);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);

    return (
        <section ref={containerRef} className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>

                    <div style={{ paddingRight: '2rem' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1, marginBottom: '2rem' }}
                        >
                            The Land Vault <br />
                            <span style={{ color: '#bfff00' }}>Protocol Stack</span>
                        </motion.h2>

                        <p style={{ color: '#888', fontSize: '1.1rem', marginBottom: '4rem', maxWidth: '500px' }}>
                            An institutional-grade architecture bridging real asset complexity with blockchain efficiency.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {stackLayers.map((layer, i) => (
                                <motion.div
                                    key={layer.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ color: layer.color }}>{layer.icon}</div>
                                        <h3 style={{ fontSize: '0.9rem', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700 }}>
                                            {layer.title}
                                        </h3>
                                    </div>
                                    <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{layer.desc}</p>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {layer.items.map((item, idx) => (
                                            <span key={idx} style={{
                                                fontSize: '0.7rem',
                                                padding: '0.4rem 0.8rem',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(255,255,255,0.05)',
                                                borderRadius: '100px',
                                                color: '#666'
                                            }}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div style={{ position: 'relative', height: '800px', perspective: '2000px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <motion.div
                            style={{
                                width: '100%',
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
                                const offset = i * 180;

                                return (
                                    <motion.div
                                        key={layer.id}
                                        initial={{ opacity: 0, z: -200 }}
                                        whileInView={{ opacity: 1, z: i * 100 }}
                                        transition={{ duration: 1, delay: i * 0.2 }}
                                        style={{
                                            position: 'absolute',
                                            top: '20%',
                                            left: '0',
                                            width: '100%',
                                            height: '350px',
                                            background: 'rgba(5, 5, 5, 0.9)',
                                            border: `1px solid ${layer.color}33`,
                                            borderRadius: '24px',
                                            boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${layer.color}11`,
                                            backdropFilter: 'blur(10px)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transform: `translateY(${offset}px)`,
                                            zIndex
                                        }}
                                    >
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: `linear-gradient(${layer.color}05 1px, transparent 1px), linear-gradient(90deg, ${layer.color}05 1px, transparent 1px)`,
                                            backgroundSize: '20px 20px',
                                            borderRadius: '24px'
                                        }} />

                                        <div style={{ padding: '2rem', textAlign: 'center', position: 'relative' }}>
                                            <div style={{ color: layer.color, marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                                {layer.icon}
                                            </div>
                                            <div style={{ fontSize: '0.6rem', color: layer.color, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 3 }}>
                                                {layer.id}_subsystem
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
