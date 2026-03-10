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
        <section ref={containerRef} className="solution-section" style={{ position: 'relative' }}>
            <div className="container">
                <div className="solution-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'flex-start' }}>

                    {/* Left Text Column - More Compact */}
                    <div className="solution-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="solution-header"
                            style={{ marginBottom: '6rem' }}
                        >
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, marginBottom: '2rem' }}>
                                The Land Vault <br />
                                <span className="accent-color">Protocol Stack</span>
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '450px' }}>
                                A multi-layered, institutional-grade architecture designed for high-velocity real estate liquidity.
                            </p>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }} className="layers-container">
                            {stackLayers.map((layer, i) => (
                                <motion.div
                                    key={layer.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ margin: "-20%" }}
                                    className="layer-card"
                                    style={{ minHeight: '300px' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
                                        <div style={{
                                            color: layer.color,
                                            background: `${layer.color}15`,
                                            padding: '12px',
                                            borderRadius: '12px',
                                            boxShadow: `0 0 30px ${layer.color}15`
                                        }}>
                                            {layer.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.3rem', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 900 }}>
                                            {layer.title}
                                        </h3>
                                    </div>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7, maxWidth: '450px' }}>{layer.desc}</p>
                                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                        {layer.items.map((item, idx) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    fontSize: '0.75rem',
                                                    padding: '0.6rem 1.4rem',
                                                    background: 'rgba(255,255,255,0.02)',
                                                    border: '1px solid rgba(255,255,255,0.06)',
                                                    borderRadius: '100px',
                                                    color: 'rgba(255,255,255,0.6)',
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
                    <div className="solution-visual" style={{
                        position: 'sticky',
                        top: '20vh',
                        height: '60vh',
                        display: 'flex',
                        alignItems: 'center',
                        perspective: '3000px'
                    }}>
                        <motion.div
                            style={{
                                width: '100%',
                                maxHeight: '500px',
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
                                    [100, 0, -100]
                                );

                                return (
                                    <motion.div
                                        key={layer.id}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '450px',
                                            background: 'rgba(10, 10, 10, 0.98)',
                                            border: `1px solid ${layer.color}55`,
                                            borderRadius: '32px',
                                            boxShadow: `0 40px 100px rgba(0,0,0,0.8), 0 0 60px ${layer.color}10`,
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

                                        <div style={{ padding: '4rem', position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4rem' }}>
                                                <div style={{ color: layer.color, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    {layer.icon}
                                                    <span style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 3 }}>{layer.id}_INFRASTRUCTURE</span>
                                                </div>
                                                <div style={{
                                                    padding: '5px 12px',
                                                    background: `${layer.color}15`,
                                                    color: layer.color,
                                                    fontSize: '0.6rem',
                                                    fontWeight: 900,
                                                    borderRadius: '4px',
                                                    letterSpacing: 2
                                                }}>
                                                    ACTIVE
                                                </div>
                                            </div>

                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', flex: 1 }}>
                                                {[1, 2, 3, 4, 5, 6].map(n => (
                                                    <div key={n} style={{
                                                        background: 'rgba(255,255,255,0.01)',
                                                        border: '1px solid rgba(255,255,255,0.03)',
                                                        borderRadius: '16px',
                                                        position: 'relative'
                                                    }}>
                                                        <motion.div
                                                            animate={{ opacity: [0.05, 0.15, 0.05] }}
                                                            transition={{ duration: 2.5, repeat: Infinity, delay: n * 0.4 }}
                                                            style={{ position: 'absolute', inset: 0, background: layer.color, borderRadius: 'inherit' }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ width: '100%', height: '1px', background: `linear-gradient(90deg, ${layer.color}33, transparent)` }} />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Restored Connecting SVG Lines */}
                            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: -1 }}>
                                {[0.3, 0.5, 0.7].map((x, idx) => (
                                    <motion.path
                                        key={idx}
                                        d={`M ${x * 600} -500 L ${x * 600} 1500`}
                                        stroke="rgba(191, 255, 0, 0.1)"
                                        strokeWidth="1"
                                        strokeDasharray="10,10"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: idx * 0.2 }}
                                    />
                                ))}
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .solution-section {
                    min-height: 180vh;
                    padding: 10rem 0;
                }
                @media (max-width: 992px) {
                    .solution-section {
                        min-height: auto !important;
                        padding: 6rem 0 !important;
                    }
                    .solution-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    .solution-visual {
                        display: none !important;
                    }
                    .solution-header {
                        margin-bottom: 4rem !important;
                        text-align: center;
                    }
                    .solution-header p {
                        margin: 0 auto;
                    }
                    .layers-container {
                        gap: 4rem !important;
                    }
                    .layer-card {
                        min-height: auto !important;
                        background: rgba(255,255,255,0.02);
                        padding: 2rem;
                        border-radius: 20px;
                        border: 1px solid rgba(255,255,255,0.05);
                    }
                }
            `}</style>
        </section>
    );
}
