'use client';

import { motion } from 'framer-motion';
import { UserPlus, CheckCircle, Database, LayoutGrid, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
    {
        title: "Registration",
        desc: "Land owners upload verified geospatial data and legal documentation.",
        icon: <UserPlus size={28} />
    },
    {
        title: "Verification",
        desc: "Decentralized validators confirm asset authenticity and titles.",
        icon: <CheckCircle size={28} />
    },
    {
        title: "NFT Minting",
        desc: "Land parcels are minted as immutable ERC-721 protocol assets.",
        icon: <Database size={28} />
    },
    {
        title: "Fractionalization",
        desc: "Assets are split into highly liquid, yield-bearing fractional tokens.",
        icon: <LayoutGrid size={28} />
    },
    {
        title: "Yield Markets",
        desc: "Global investors buy shares and earn distributed rental yields.",
        icon: <BarChart3 size={28} />
    }
];

export default function HowItWorks() {
    return (
        <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                            The <span style={{ color: '#bfff00' }}>Investment</span> Lifecycle
                        </h2>
                        <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                            Seamlessly bridge physical land metadata to the global decentralized finance ecosystem.
                        </p>
                    </motion.div>
                </div>

                <div style={{ position: 'relative', minHeight: '400px' }}>
                    {/* Advanced Path Connection */}
                    <div style={{
                        position: 'absolute',
                        top: '60px',
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        zIndex: 0
                    }}>
                        <svg width="100%" height="150" fill="none" preserveAspectRatio="none">
                            <motion.path
                                d="M 0,20 Q 250,150 500,20 T 1000,20"
                                stroke="rgba(191,255,0,0.15)"
                                strokeWidth="2"
                                strokeDasharray="10,12"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M 0,20 Q 250,150 500,20 T 1000,20"
                                stroke="#bfff00"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />
                        </svg>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                                style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    marginBottom: '2.5rem',
                                    position: 'relative'
                                }}>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            borderRadius: '50%',
                                            border: '1px dashed rgba(191,255,0,0.3)'
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        inset: '10px',
                                        borderRadius: '50%',
                                        background: '#0a0a0a',
                                        border: '1px solid rgba(191,255,0,0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#bfff00',
                                        boxShadow: '0 0 40px rgba(191,255,0,0.1)',
                                        zIndex: 2
                                    }}>
                                        {step.icon}
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: -15,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: '#bfff00',
                                        color: '#000',
                                        fontSize: '0.65rem',
                                        fontWeight: 900,
                                        padding: '4px 12px',
                                        borderRadius: '4px',
                                        zIndex: 3
                                    }}>
                                        0{i + 1}
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.2rem', color: '#fff', letterSpacing: 1, fontWeight: 700 }}>{step.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, padding: '0 10%' }}>{step.desc}</p>

                                {i < steps.length - 1 && (
                                    <div style={{ position: 'absolute', right: '-15%', top: '60px', opacity: 0.2 }}>
                                        <ArrowRight size={20} color="#bfff00" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative large circles for atmosphere */}
            <div style={{ position: 'absolute', top: '10%', left: '0', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(191,255,0,0.03) 0%, transparent 70%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '0', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(197,160,89,0.03) 0%, transparent 70%)', zIndex: 0 }} />
        </section>
    );
}
