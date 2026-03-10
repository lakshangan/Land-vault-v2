'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Database, Cpu, Globe, ArrowRight } from 'lucide-react';

const stackLayers = [
    {
        id: "app",
        title: "AI-Powered Applications",
        subtitle: "Interface [+] Valuations",
        desc: "The interface layer where high-fidelity valuation models and investor dashboards live. Orchestrated via Land Vault's proprietary AI engine for institutional monitoring.",
        capabilities: [
            { label: "ANY ASSET", desc: "Maximize context for AI-driven automations with complete flexibility in land data types." },
            { label: "ANY YIELD", desc: "Utilize high-precision engines to forecast and execute rental distributions." },
            { label: "ANY MARKET", desc: "Integrate with global liquidity pools via our multimodal bridging architecture." }
        ],
        color: "#ff2d55",
        visual: "app"
    },
    {
        id: "protocol",
        title: "Land Vault Ontology",
        subtitle: "Protocol [+] Governance",
        desc: "The logic layer managing NFT minting, fractionalization, and regulatory logic via smart contract clusters. Ensures full compliance and cryptographic immutability.",
        capabilities: [
            { label: "COMPLIANCE", desc: "Native legal-wrapping of digital deeds with instant multi-jurisdictional finality." },
            { label: "FRACTIONAL", desc: "Granular asset ownership enabled by secure, audited vault architecture." },
            { label: "SECURITY", desc: "Multi-node verification ensuring $10B+ worth of land records remain untampered." }
        ],
        color: "#5856d6",
        visual: "protocol"
    },
    {
        id: "data",
        title: "Multimodal Data Plane",
        subtitle: "Registry [+] Satellite",
        desc: "The foundation layer storing immutable geospatial records, ownership history, and high-res satellite telemetry. Leverages decentralized storage for global resilience.",
        capabilities: [
            { label: "STORAGE", desc: "Decentralized IPFS pinning and geospatial indexing for 100% data uptime." },
            { label: "TELEMETRY", desc: "Integration with orbital satellite data for real-time asset monitoring." },
            { label: "HISTORY", desc: "Cryptographic chain of custody for every square meter of tokenized land." }
        ],
        color: "#007aff",
        visual: "data"
    }
];

const TechnicalVisual = ({ type, color, isActive }: { type: string, color: string, isActive: boolean }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                animate={{
                    opacity: isActive ? 1 : 0.2,
                    scale: isActive ? 1 : 0.9,
                    y: isActive ? 0 : 20
                }}
                transition={{ duration: 0.8 }}
                style={{ width: '100%', height: '100%', position: 'relative' }}
            >
                {/* Isometric Base Grid */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '600px',
                    height: '400px',
                    border: `1px solid ${color}33`,
                    background: `linear-gradient(135deg, ${color}08 0%, transparent 100%)`,
                    transform: 'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)',
                    borderRadius: '20px',
                    boxShadow: isActive ? `0 0 80px ${color}11` : 'none'
                }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${color}11 1px, transparent 1px), linear-gradient(90deg, ${color}11 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
                </div>

                {/* Animated Inner Visuals */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
                    {type === 'app' && (
                        <div style={{ position: 'relative' }}>
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} style={{ width: '120px', height: '120px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: `2px solid ${color}`, borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Cpu size={48} color={color} />
                            </motion.div>
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: '-40px', left: '-40px', width: '200px', height: '200px', border: `1px dashed ${color}44`, borderRadius: '50%' }} />
                        </div>
                    )}
                    {type === 'protocol' && (
                        <div style={{ display: 'flex', gap: '20px' }}>
                            {[1, 2, 3].map(i => (
                                <motion.div key={i} animate={{ y: [0, -15, 0] }} transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }} style={{ width: '60px', height: '80px', background: `${color}11`, border: `1px solid ${color}`, borderRadius: '8px', position: 'relative' }}>
                                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px', height: '4px', background: color, borderRadius: '2px' }} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                    {type === 'data' && (
                        <div style={{ position: 'relative' }}>
                            <div style={{ width: '180px', height: '100px', background: `linear-gradient(to bottom, ${color}33, transparent)`, clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
                            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: 'absolute', top: '20px', left: '40px', right: '40px', height: '2px', background: color, boxShadow: `0 0 20px ${color}` }} />
                        </div>
                    )}
                </div>

                {/* HUD Label */}
                <div style={{
                    position: 'absolute',
                    top: '15%',
                    right: '15%',
                    background: 'rgba(5, 5, 5, 0.8)',
                    padding: '1rem 2rem',
                    borderRadius: '4px',
                    borderLeft: `3px solid ${color}`,
                    backdropFilter: 'blur(10px)'
                }}>
                    <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: 3, fontWeight: 900, marginBottom: '0.4rem' }}>STATUS_O_VAL</div>
                    <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 900 }}>LIT_ACTIVE</div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Solution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <section ref={containerRef} style={{ background: '#050505', position: 'relative', minHeight: '300vh' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem' }}>

                    {/* Left Sticky Content */}
                    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'sticky', top: 0 }}>
                        <div style={{ marginBottom: '4rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ background: '#fff', color: '#000', padding: '4px 12px', fontSize: '0.65rem', fontWeight: 900, borderRadius: '4px' }}>Q3 Update</div>
                                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>Protocol Infrastructure</span>
                            </div>

                            {stackLayers.map((layer, i) => {
                                const opacity = useTransform(springProgress,
                                    [i * 0.33, (i + 0.1) * 0.33, (i + 0.23) * 0.33, (i + 0.33) * 0.33],
                                    [0, 1, 1, 0]
                                );
                                const y = useTransform(springProgress,
                                    [i * 0.33, (i + 0.1) * 0.33, (i + 0.23) * 0.33, (i + 0.33) * 0.33],
                                    [20, 0, 0, -20]
                                );

                                return (
                                    <motion.div key={layer.id} style={{ position: 'absolute', width: '100%', opacity, y }}>
                                        <h2 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                                            Introducing Next-Gen <br />
                                            Interoperability: <span style={{ color: 'rgba(255,255,255,0.4)' }}>{layer.id} Plane</span>
                                        </h2>

                                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '500px' }}>
                                            Leverage AI across the enterprise with:
                                        </p>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                            {layer.capabilities.map((cap, idx) => (
                                                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'flex-start', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1 }}>
                                                        {cap.label} <ArrowRight size={12} color={layer.color} />
                                                    </div>
                                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                                        {cap.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                                            <span style={{ fontWeight: 800, borderBottom: '1px solid #fff', paddingBottom: '2px' }}>Learn More</span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Sticky Visual */}
                    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: 0 }}>
                        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                            {stackLayers.map((layer, i) => {
                                const isActive = useTransform(springProgress,
                                    [i * 0.33, (i + 0.16) * 0.33, (i + 0.33) * 0.33],
                                    [0, 1, 0]
                                );

                                // We need a way to pass the active state to the component
                                // Using a wrapper motion.div to handle the opacity transition
                                return (
                                    <motion.div
                                        key={layer.id}
                                        style={{ position: 'absolute', inset: 0, opacity: isActive }}
                                    >
                                        <TechnicalVisual type={layer.visual} color={layer.color} isActive={true} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>

            <div style={{ position: 'absolute', bottom: '2rem', left: '4rem', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', fontWeight: 800 }}>
                © 2025 LAND VAULT PROTOCOL INC.
            </div>
        </section>
    );
}
