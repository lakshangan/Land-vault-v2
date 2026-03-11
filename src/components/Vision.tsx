'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronRight, ArrowUpRight, Zap } from 'lucide-react';

export default function Vision() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax logic for floating elements
    const elementY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const elementY2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

    return (
        <section ref={containerRef} className="section-spacing" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient Background Glows */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-10%',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
                filter: 'blur(100px)',
                pointerEvents: 'none'
            }} />

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }}>

                    {/* Left Content Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '0.5rem 1.2rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '100px',
                                marginBottom: '2.5rem'
                            }}>
                                <Zap size={14} color="#a855f7" />
                                <span style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.6)' }}>Our Vision</span>
                            </div>

                            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 0.9, marginBottom: '3rem', fontWeight: 900, letterSpacing: '-0.03em' }}>
                                Simplifying <br />
                                <span style={{
                                    background: 'linear-gradient(90deg, #a855f7, #6366f1)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Land Investment</span>
                            </h2>

                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.25rem', lineHeight: 1.6, maxWidth: '540px', marginBottom: '4rem' }}>
                                Transforming the world's most illiquid asset class into a programmable, accessible, and high-velocity digital economy. One parcel at a time.
                            </p>

                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    style={{
                                        background: '#fff',
                                        color: '#000',
                                        padding: '1.2rem 3rem',
                                        borderRadius: '100px',
                                        fontWeight: 800,
                                        fontSize: '0.85rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.8rem'
                                    }}
                                >
                                    Get Started <ChevronRight size={18} />
                                </motion.button>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', color: 'rgba(255,255,255,0.8)' }}>
                                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Read Whitepaper</span>
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual Column (Pinterest Style) */}
                    <div style={{ position: 'relative', height: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        {/* 3D Path SVG */}
                        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" style={{ position: 'absolute', opacity: 0.3 }}>
                            <path d="M50 400C150 450 450 350 550 400C650 450 550 550 450 500" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="80" strokeLinecap="round" />
                            <path d="M50 400C150 450 450 350 550 400C650 450 550 550 450 500" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2" strokeDasharray="10 20" />
                        </svg>

                        {/* Floating "Token" Rings */}
                        <motion.div
                            style={{ y: elementY1, rotate }}
                            className="floating-asset"
                        >
                            <div style={{
                                width: '280px',
                                height: '280px',
                                borderRadius: '50%',
                                border: '6px solid #a855f7',
                                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 80px rgba(168, 85, 247, 0.3)',
                                position: 'relative'
                            }}>
                                <div style={{
                                    width: '180px',
                                    height: '180px',
                                    borderRadius: '40px',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(20px)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem'
                                }}>
                                    <div style={{ width: '40px', height: '40px', background: '#fff', borderRadius: '50%' }} />
                                    <div style={{ width: '80px', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
                                </div>

                                {/* Orbiting Detail */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    style={{ position: 'absolute', width: '340px', height: '340px', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '50%' }}
                                >
                                    <div style={{ position: 'absolute', top: '50%', left: '-5px', width: '10px', height: '10px', background: '#a855f7', borderRadius: '50%', boxShadow: '0 0 15px #a855f7' }} />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Secondary Floating Coins */}
                        <motion.div
                            style={{ y: elementY2, position: 'absolute', bottom: '15%', right: '10%' }}
                        >
                            <div style={{
                                width: '120px',
                                height: '120px',
                                background: 'rgba(10,10,10,0.8)',
                                border: '2px solid rgba(99, 102, 241, 0.5)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                            }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '4px solid #6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ width: '20px', height: '20px', background: '#6366f1', borderRadius: '50%' }} />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ y: elementY1, position: 'absolute', top: '15%', left: '0' }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(10,10,10,0.8)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <div style={{ width: '10px', height: '10px', background: '#fff', borderRadius: '50%', opacity: 0.5 }} />
                            </div>
                        </motion.div>

                        {/* Text Label on visual */}
                        <motion.div
                            style={{ position: 'absolute', bottom: '25%', left: '15%', zIndex: 10 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className="glass" style={{ padding: '0.8rem 1.5rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2 }}>
                                PROXY_ASSET_L1
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            <style jsx>{`
                .floating-asset {
                    transform-style: preserve-3d;
                    perspective: 1000px;
                }
                @media (max-width: 992px) {
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    div[style*="height: 700px"] {
                        display: none !important;
                    }
                    p {
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    div[style*="display: flex; gap: 2rem"] {
                        justify-content: center !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                }
            `}</style>
        </section>
    );
}
