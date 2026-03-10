'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Database, Cpu, Globe } from 'lucide-react';

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
        desc: "The logic layer managing NFT minting, fractionalization, and regulatory logic via smart contract clusters. Ensures full compliance and immutability.",
        items: ["ERC-721 Registry", "Fractional Vaults", "Governance"],
        icon: <Database size={24} />,
        color: "#5856d6"
    },
    {
        id: "data",
        title: "Multi-modal Data Plane",
        desc: "The base layer storing immutable geospatial records, ownership history, and high-res satellite telemetry on decentralized storage.",
        items: ["IPFS Storage", "Geospatial Index", "Oracle Network"],
        icon: <Globe size={24} />,
        color: "#007aff"
    }
];

export default function Solution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const smoothProgress = useSpring(scrollYProgress, springConfig);

    // Reverting to scroll-linked 3D animations
    const rotateX = useTransform(smoothProgress, [0, 1], [40, 20]);
    const rotateZ = useTransform(smoothProgress, [0, 1], [-25, -10]);
    const containerTranslateY = useTransform(smoothProgress, [0, 1], [50, -50]);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);

    return (
        <section ref={containerRef} className="section-spacing" style={{ position: 'relative', minHeight: '300vh' }}>
            <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1.2fr', gap: '8rem', alignItems: 'flex-start' }}>

                    {/* Left Text Column - Scrolls Naturally */}
                    <div style={{ paddingBottom: '20vh' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ marginBottom: '10rem' }}
                        >
                            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1, marginBottom: '2.5rem' }}>
                                The Land Vault <br />
                                <span className="accent-color">Protocol Stack</span>
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.25rem', lineHeight: 1.6, maxWidth: '500px' }}>
                                A multi-layered, institutional-grade architecture designed for high-velocity real estate liquidity.
                            </p>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15rem' }}>
                            {stackLayers.map((layer, i) => (
                                <motion.div
                                    key={layer.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ margin: "-20%" }}
                                    style={{ minHeight: '400px' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                        <div style={{
                                            color: layer.color,
                                            background: `${layer.color}15`,
                                            padding: '16px',
                                            borderRadius: '16px',
                                            boxShadow: `0 0 40px ${layer.color}22`
                                        }}>
                                            {layer.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', letterSpacing: 4, textTransform: 'uppercase', fontWeight: 900 }}>
                                            {layer.title}
                                        </h3>
                                    </div>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.15rem', marginBottom: '3rem', lineHeight: 1.8, maxWidth: '500px' }}>{layer.desc}</p>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        {layer.items.map((item, idx) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    fontSize: '0.8rem',
                                                    padding: '0.7rem 1.6rem',
                                                    background: 'rgba(255,255,255,0.02)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    borderRadius: '100px',
                                                    color: 'rgba(255,255,255,0.7)',
                                                    letterSpacing: 1,
                                                    fontWeight: 700
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

                    {/* Right Column - Sticky Visual Container */}
                    <div style={{
                        position: 'sticky',
                        top: '15vh',
                        height: '70vh',
                        display: 'flex',
                        alignItems: 'center',
                        perspective: '3000px'
                    }}>
                        <motion.div
                            style={{
                                width: '100%',
                                maxHeight: '600px',
                                transformStyle: 'preserve-3d',
                                rotateX,
                                rotateZ,
                                y: containerTranslateY,
                                scale
                            }}
                        >
                            {stackLayers.map((layer, i) => {
                                const zIndex = stackLayers.length - i;

                                // Content lifting based on scroll
                                const yOffset = useTransform(smoothProgress,
                                    [(i - 1) * 0.33, i * 0.33, (i + 1) * 0.33],
                                    [150, 0, -150]
                                );

                                return (
                                    <motion.div
                                        key={layer.id}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '500px',
                                            background: 'rgba(10, 10, 10, 0.98)',
                                            border: `1px solid ${layer.color}66`,
                                            borderRadius: '40px',
                                            boxShadow: `0 40px 100px rgba(0,0,0,0.8), 0 0 60px ${layer.color}15`,
                                            backdropFilter: 'blur(30px)',
                                            overflow: 'hidden',
                                            zIndex,
                                            y: yOffset,
                                            opacity: useTransform(smoothProgress,
                                                [(i - 1) * 0.33, i * 0.33, (i + 1) * 0.33],
                                                [0.1, 1, 0.1]
                                            )
                                        }}
                                    >
                                        {/* Inner HUD Grid */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: `radial-gradient(circle at center, ${layer.color}11 1px, transparent 1px)`,
                                            backgroundSize: '40px 40px'
                                        }} />

                                        <div style={{ padding: '4.5rem', position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5rem' }}>
                                                <div style={{ color: layer.color, display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                                                    {layer.icon}
                                                    <span style={{ fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 4 }}>{layer.id}_INFRASTRUCTURE</span>
                                                </div>
                                                <div style={{
                                                    padding: '6px 14px',
                                                    background: `${layer.color}15`,
                                                    color: layer.color,
                                                    fontSize: '0.65rem',
                                                    fontWeight: 900,
                                                    borderRadius: '4px',
                                                    letterSpacing: 2
                                                }}>
                                                    LIT_ACTIVE
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
                                                            animate={{ opacity: [0.05, 0.2, 0.05] }}
                                                            transition={{ duration: 2.5, repeat: Infinity, delay: n * 0.4 }}
                                                            style={{ position: 'absolute', inset: 0, background: layer.color, borderRadius: 'inherit' }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ width: '100%', height: '1px', background: `linear-gradient(90deg, ${layer.color}44, transparent)` }} />
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
