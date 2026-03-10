'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Target, Zap, Shield, BarChart3, ChevronRight } from 'lucide-react';

const lifecycleSteps = [
    {
        title: "High-Fidelity Curation",
        desc: "Automated ingestion engine processing geospatial telemetry, legal deeds, and verified physical asset documentation.",
        icon: <Shield size={20} />,
        color: "#5856d6",
        visual: "curation"
    },
    {
        title: "Unified Protocol Logic",
        desc: "Institutional smart contracts handling multi-node verification and instant finality for global land registries.",
        icon: <Zap size={20} />,
        color: "#ff2d55",
        visual: "logic"
    },
    {
        title: "Liquidity Orchestration",
        desc: "RWA-721 identity layer enabling deep fractionalization and liquidity pools for high-velocity capital markets.",
        icon: <Target size={20} />,
        color: "#007aff",
        visual: "liquidity"
    },
    {
        title: "Yield Intelligence",
        desc: "Real-time market distribution of rental parity and capital appreciation through automated on-chain execution.",
        icon: <BarChart3 size={20} />,
        color: "#ff9500",
        visual: "yield"
    }
];

const VisualIcon = ({ type, color }: { type: string, color: string }) => {
    switch (type) {
        case "curation":
            return (
                <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ position: 'absolute', width: '120px', height: '120px', border: `1px solid ${color}33`, borderRadius: '50%' }}
                    />
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', border: `1px solid ${color}66`, borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '20px', height: '20px', background: color, borderRadius: '4px', boxShadow: `0 0 20px ${color}` }} />
                        </div>
                    </div>
                    {[0, 120, 240].map((deg) => (
                        <motion.div
                            key={deg}
                            animate={{ rotate: deg + 360 }}
                            initial={{ rotate: deg }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            style={{ position: 'absolute', top: '50%', left: '50%', width: '100px', height: '1px' }}
                        >
                            <div style={{ position: 'absolute', right: 0, top: '-3px', width: '6px', height: '6px', background: color, borderRadius: '50%', boxShadow: `0 0 10px ${color}` }} />
                        </motion.div>
                    ))}
                    <div style={{ position: 'absolute', width: '150px', height: '150px', background: `radial-gradient(circle, ${color}11 0%, transparent 70%)` }} />
                </div>
            );
        case "logic":
            return (
                <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                            style={{
                                position: 'absolute',
                                width: '140px',
                                height: '40px',
                                border: `1px solid ${color}44`,
                                background: `linear-gradient(90deg, transparent, ${color}08, transparent)`,
                                transform: `rotateX(60deg) rotateZ(45deg) translateY(${i * -60}px)`,
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{ width: '40%', height: '2px', background: `${color}33`, borderRadius: '1px' }} />
                        </motion.div>
                    ))}
                    <div style={{ position: 'absolute', top: '20%', width: '2px', height: '100px', background: `linear-gradient(to bottom, ${color}00, ${color}, ${color}00)` }} />
                </div>
            );
        case "liquidity":
            return (
                <div style={{ position: 'relative', width: '240px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'absolute', width: '180px', height: '100px', border: `1px solid ${color}22`, background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(5px)', borderRadius: '20px', transform: 'perspective(1000px) rotateX(45deg)' }}>
                        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at center, ${color}11 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                    </div>
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ position: 'relative', zIndex: 10, padding: '1.5rem', background: 'rgba(5, 5, 5, 0.9)', border: `1px solid ${color}66`, borderRadius: '15px' }}
                    >
                        <div style={{ width: '30px', height: '30px', border: `3px solid ${color}`, borderRadius: '50%', boxShadow: `0 0 20px ${color}` }} />
                    </motion.div>
                    <div style={{ position: 'absolute', bottom: '20%', width: '200px', height: '60px', background: `radial-gradient(ellipse, ${color}15 0%, transparent 70%)` }} />
                </div>
            );
        case "yield":
            return (
                <div style={{ position: 'relative', width: '240px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ height: ['20px', '80px', '40px', '60px', '20px'] }}
                            transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                width: '12px',
                                background: `linear-gradient(to top, ${color}22, ${color})`,
                                borderRadius: '100px',
                                boxShadow: `0 0 20px ${color}33`
                            }}
                        />
                    ))}
                    <div style={{ position: 'absolute', top: '20%', right: '10%', width: '40px', height: '40px', border: `1px solid ${color}44`, borderRadius: '10px', transform: 'rotate(45deg)' }} />
                </div>
            );
        default: return null;
    }
}

export default function HowItWorks() {
    return (
        <section className="section-spacing" style={{ background: '#050505', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, marginBottom: '2.5rem' }}>
                            The <span className="accent-color">Investment</span> <br /> Lifecycle.
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                            A high-precision sequence transforming physical land into institutional-grade digital assets.
                        </p>
                    </motion.div>
                </div>

                <div className="lifecycle-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem' }}>
                    {lifecycleSteps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="lifecycle-card"
                            style={{
                                background: 'rgba(255,255,255,0.01)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '40px',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                position: 'relative'
                            }}
                            whileHover={{
                                background: 'rgba(255,255,255,0.03)',
                                borderColor: `${step.color}33`,
                                translateY: -10
                            }}
                        >
                            <div className="step-visual" style={{ height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <VisualIcon type={step.visual} color={step.color} />
                            </div>

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>
                                    {step.title}
                                </h3>
                                <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                                    {step.desc}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: step.color }}>
                                    <div style={{ background: `${step.color}15`, padding: '10px', borderRadius: '12px' }}>
                                        {step.icon}
                                    </div>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2 }}>
                                        System Active
                                    </span>
                                </div>
                            </div>

                            {/* Corner Glow */}
                            <div style={{
                                position: 'absolute',
                                top: '-20%',
                                right: '-20%',
                                width: '200px',
                                height: '200px',
                                background: `radial-gradient(circle, ${step.color}11 0%, transparent 70%)`,
                                pointerEvents: 'none'
                            }} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .lifecycle-card {
                    padding: 3.5rem;
                }
                @media (max-width: 992px) {
                    .lifecycle-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 768px) {
                    .lifecycle-card {
                        padding: 2.5rem;
                    }
                    .step-visual {
                        transform: scale(0.85);
                        height: 200px !important;
                    }
                    h2 {
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
}
