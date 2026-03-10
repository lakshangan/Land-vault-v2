'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Lock, Globe, EyeOff } from 'lucide-react';

const problems = [
    {
        title: "Document Fraud",
        desc: "Land fraud and tampered records cost billions annually in legal disputes.",
        icon: <AlertTriangle size={32} color="#bfff00" />
    },
    {
        title: "Illiquidity",
        desc: "Real estate is famously illiquid, with exit timelines often taking months or years.",
        icon: <Lock size={32} color="#bfff00" />
    },
    {
        title: "Market Barriers",
        desc: "Limited global investment access prevents small investors from high-yield land beta.",
        icon: <Globe size={32} color="#bfff00" />
    },
    {
        title: "Opaque",
        desc: "Lack of transparency in ownership and valuations leads to high risk for institutional buyers.",
        icon: <EyeOff size={32} color="#bfff00" />
    }
];

export default function Problem() {
    return (
        <section className="section-spacing" style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
            {/* High-end decorative ambient glow */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-10%',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(191, 255, 0, 0.03) 0%, transparent 70%)',
                filter: 'blur(120px)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{ color: '#c5a059', letterSpacing: 5, fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase' }}>
                            Critical Infrastructure Gaps
                        </span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginTop: '1.5rem', fontWeight: 900, letterSpacing: '-0.03em' }}>
                            The Land System is <span style={{ color: '#bfff00' }}>Broken</span>.
                        </h2>
                    </motion.div>
                </div>

                <div className="problem-grid">
                    {problems.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className={`problem-card ${p.title === 'Opaque' ? 'opaque-card' : ''}`}
                            style={{
                                background: 'rgba(255, 255, 255, 0.015)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '40px',
                                padding: '4rem 3rem',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                backdropFilter: 'blur(20px)',
                                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2.5rem',
                                border: '1px solid rgba(255, 255, 255, 0.05)'
                            }}>
                                <motion.div
                                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                >
                                    {p.icon}
                                </motion.div>
                            </div>

                            <h3 style={{
                                fontSize: '2rem',
                                marginBottom: '1.5rem',
                                fontWeight: 900,
                                color: '#fff',
                                letterSpacing: '-0.02em'
                            }}>
                                {p.title}
                            </h3>

                            <p style={{
                                color: p.title === "Opaque" ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
                                lineHeight: 1.8,
                                fontSize: '1.1rem',
                                fontWeight: p.title === "Opaque" ? 600 : 400,
                                maxWidth: '90%'
                            }}>
                                {p.desc}
                            </p>

                            {/* Corner Glow for the Opaque card */}
                            {p.title === 'Opaque' && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '100px',
                                    height: '100px',
                                    background: 'radial-gradient(circle at 100% 0%, rgba(191, 255, 0, 0.1) 0%, transparent 70%)',
                                    borderRadius: '0 40px 0 0',
                                    pointerEvents: 'none'
                                }} />
                            )}

                            <div className="card-shine" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .problem-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .problem-card:hover {
                    background: rgba(255, 255, 255, 0.03) !important;
                    border-color: rgba(255, 255, 255, 0.1) !important;
                    transform: translateY(-12px) scale(1.02);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.5);
                }
                .opaque-card {
                    background: rgba(255, 255, 255, 0.04) !important;
                    border-color: rgba(191, 255, 0, 0.2) !important;
                    box-shadow: inset 0 0 40px rgba(191, 255, 0, 0.05);
                }
                .card-shine {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.02) 50%, transparent 60%);
                    background-size: 200% 200%;
                    background-position: 100% 100%;
                    transition: background-position 0.8s ease;
                    pointer-events: none;
                }
                .problem-card:hover .card-shine {
                    background-position: 0% 0%;
                }
                @media (max-width: 992px) {
                    .problem-grid {
                        grid-template-columns: 1fr;
                        padding: 0 1rem;
                    }
                    .problem-card {
                        padding: 3rem 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
