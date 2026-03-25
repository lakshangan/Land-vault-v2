'use client';

import { motion } from 'framer-motion';

const phases = [
    {
        title: "Phase 1: Protocol Infrastructure",
        desc: "Core protocol deployment and land tokenization infrastructure launch. Initial pilot plots in US/UK.",
        status: "Completed",
        date: "Q4 2025"
    },
    {
        title: "Phase 2: Asset Tokenization",
        desc: "Scaling tokenization across real estate and renewable energy assets. Integration with institutional asset managers.",
        status: "Active",
        date: "Q1 2026"
    },
    {
        title: "Phase 3: Fractional Investment",
        desc: "Launch of the global fractional investment marketplace. Automated revenue distribution and asset monitoring.",
        status: "Upcoming",
        date: "Q3 2026"
    },
    {
        title: "Phase 4: Global RWA Marketplace",
        desc: "Expansion into emerging infrastructure markets. Universal liquidity layer connecting on-chain investors with physical assets.",
        status: "Planning",
        date: "2027"
    }
];

export default function Roadmap() {
    return (
        <section className="section-spacing" style={{ background: '#0a0a0a' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <h2 style={{ fontSize: '3rem' }}>The <span style={{ color: '#bfff00' }}>Path</span> Forward</h2>
                </div>

                <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '1px',
                        background: 'linear-gradient(to bottom, transparent, rgba(191,255,0,0.3), transparent)',
                        transform: 'translateX(-50%)'
                    }} />

                    {phases.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                display: 'flex',
                                justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                                width: '50%',
                                marginLeft: i % 2 === 0 ? '0' : '50%',
                                padding: '2rem',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                textAlign: i % 2 === 0 ? 'right' : 'left',
                                maxWidth: '400px',
                                padding: '2rem',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '24px'
                            }}>
                                <span style={{ color: '#bfff00', fontSize: '0.8rem', fontWeight: 600 }}>{phase.date}</span>
                                <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{phase.title}</h3>
                                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>{phase.desc}</p>
                                <div style={{
                                    marginTop: '1.5rem',
                                    fontSize: '0.7rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: 1,
                                    color: phase.status === "Active" ? '#bfff00' : '#444'
                                }}>
                                    ● {phase.status}
                                </div>
                            </div>

                            {/* Node on line */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                [i % 2 === 0 ? 'right' : 'left']: '-5px',
                                width: '10px',
                                height: '10px',
                                background: phase.status === "Active" ? '#bfff00' : '#333',
                                borderRadius: '50%',
                                boxShadow: phase.status === "Active" ? '0 0 15px #bfff00' : 'none',
                                transform: 'translateY(-50%)',
                                zIndex: 5
                            }} />
                        </motion.div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    div[style*="width: 1px"] {
                        left: 20px !important;
                        transform: none !important;
                    }
                    div[style*="width: 50%"] {
                        width: 100% !important;
                        margin-left: 0 !important;
                        padding: 1.5rem 0 1.5rem 50px !important;
                        justify-content: flex-start !important;
                    }
                    div[style*="text-align: right"] {
                        text-align: left !important;
                    }
                    div[style*="left: -5px"], div[style*="right: -5px"] {
                        left: 15px !important;
                        right: auto !important;
                    }
                }
            `}</style>
        </section>
    );
}
