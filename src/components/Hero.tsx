'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const yVal = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    const stats = [
        { label: 'Total Value Locked', value: '$1.2B+' },
        { label: 'Land Fragments', value: '150K+' },
        { label: 'Active Users', value: '25K+' },
        { label: 'Supported Chains', value: '5+' },
    ];

    return (
        <section ref={containerRef} className="hero-section" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: '#050505',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Ambient Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120vw',
                height: '120vh',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
                filter: 'blur(100px)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="hero-layout">
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 style={{
                                fontSize: 'clamp(4rem, 10vw, 8rem)',
                                lineHeight: 0.9,
                                fontWeight: 900,
                                marginBottom: '2.5rem',
                                letterSpacing: '-0.05em'
                            }}>
                                Trade <br />
                                <span className="gradient-text">the Earth.</span>
                            </h1>

                            <p style={{
                                color: 'rgba(255,255,255,0.4)',
                                fontSize: '1.4rem',
                                maxWidth: '550px',
                                marginBottom: '4rem',
                                lineHeight: 1.4,
                                fontWeight: 500
                            }}>
                                The LandVault protocol bridges high-yield <span style={{ color: '#fff' }}>RWA</span> with modular <span style={{ color: '#fff' }}>DeFi</span>.
                                Secure, liquid, and institutional.
                            </p>

                            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.2)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="cta-button"
                                >
                                    Enter Protocol
                                    <div className="cta-icon">
                                        <ArrowRight size={20} />
                                    </div>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="hero-visual">
                        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                            <Cube size={260} x="50%" y="50%" color="#a855f7" delay={0} z={0} />
                            <Cube size={180} x="20%" y="30%" color="#bfff00" delay={0.5} z={40} />
                            <Cube size={140} x="80%" y="20%" color="#6366f1" delay={1.2} z={-20} />
                            <Cube size={200} x="85%" y="75%" color="#c5a059" delay={0.8} z={20} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-layout {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 1rem;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    padding: 0.4rem 1.2rem 0.4rem 0.4rem;
                    border-radius: 100px;
                    margin-bottom: 3rem;
                }
                .badge-new {
                    background: #fff;
                    color: #000;
                    padding: 0.2rem 0.8rem;
                    border-radius: 100px;
                    font-size: 0.65rem;
                    font-weight: 900;
                    text-transform: uppercase;
                }
                .badge-text {
                    color: rgba(255,255,255,0.6);
                    font-size: 0.7rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .cta-button {
                    background: #fff;
                    color: #000;
                    padding: 0.8rem 0.8rem 0.8rem 2.5rem;
                    border-radius: 100px;
                    font-weight: 900;
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    border: none;
                    cursor: pointer;
                }
                .cta-icon {
                    width: 48px;
                    height: 48px;
                    background: #000;
                    color: #fff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .hero-stats {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 3rem;
                    margin-top: -2rem;
                }
                .gradient-text {
                    background: linear-gradient(90deg, #fff, rgba(255,255,255,0.4));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                @media (max-width: 992px) {
                    .hero-layout {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    .hero-visual { display: none; }
                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-stats {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 2rem;
                        margin-top: 4rem;
                    }
                    .hero-badge { margin-left: auto; margin-right: auto; }
                    .cta-button { margin-left: auto; margin-right: auto; }
                }
            `}</style>
        </section>
    );
}

function Cube({ size, color, delay, x, y, z }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0],
                rotateX: [0, 20, 0],
                rotateY: [0, -20, 0]
            }}
            transition={{
                delay,
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            style={{
                position: 'absolute',
                top: y,
                left: x,
                width: size,
                height: size,
                transform: `translate(-50%, -50%) translateZ(${z}px)`,
                transformStyle: 'preserve-3d',
                background: `linear-gradient(135deg, ${color}33, transparent)`,
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '24px',
                boxShadow: `0 30px 60px rgba(0,0,0,0.5), inset 0 0 20px ${color}22`,
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent)' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '1px', background: 'rgba(255,255,255,0.2)' }} />
        </motion.div>
    );
}
