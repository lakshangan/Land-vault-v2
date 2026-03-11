'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

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
            {/* Ambient Base Layer with Richer Dark Depth */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 50% 50%, #0a0a0c 0%, #050505 100%)',
                zIndex: -2
            }} />

            {/* Subtle Dot Grid Pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
                zIndex: -1
            }} />

            {/* Background Watermark Typography - Slightly more visible */}
            <div style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '28vw',
                fontWeight: 900,
                color: 'rgba(255, 255, 255, 0.02)',
                userSelect: 'none',
                pointerEvents: 'none',
                letterSpacing: '-0.06em',
                zIndex: -1,
                whiteSpace: 'nowrap'
            }}>
                LANDVAULT
            </div>

            {/* Drifting Data Particles - More active */}
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ 
                        x: Math.random() * 2000 - 1000, 
                        y: Math.random() * 1000, 
                        opacity: 0 
                    }}
                    animate={{ 
                        x: [null, Math.random() * 2000 - 1000],
                        y: [null, Math.random() * 1000],
                        opacity: [0, 0.15, 0]
                    }}
                    transition={{ 
                        duration: 10 + Math.random() * 15, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    style={{
                        position: 'absolute',
                        width: Math.random() * 3 + 'px',
                        height: Math.random() * 3 + 'px',
                        background: i % 2 === 0 ? '#bfff00' : '#ffffff',
                        borderRadius: '50%',
                        filter: 'blur(1px)',
                        zIndex: 0
                    }}
                />
            ))}

            {/* Vivid Ambient Background Glows */}
            <div style={{
                position: 'absolute',
                top: '0%',
                right: '5%',
                width: '1200px',
                height: '1200px',
                background: 'radial-gradient(circle, rgba(191, 255, 0, 0.12) 0%, transparent 70%)',
                filter: 'blur(150px)',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '0%',
                width: '1000px',
                height: '1000px',
                background: 'radial-gradient(circle, rgba(88, 86, 214, 0.15) 0%, transparent 70%)',
                filter: 'blur(130px)',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                top: '40%',
                left: '20%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 122, 255, 0.1) 0%, transparent 70%)',
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
                                A universal infrastructure for <span style={{ color: '#fff' }}>tokenizing</span> real-world <span style={{ color: '#fff' }}>assets.</span>
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
                        <div style={{ position: 'relative', width: '100%', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IsometricIllustration />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 6rem;
                    align-items: center;
                }
                .hero-content {
                    padding-right: 2rem;
                }
                .cta-button {
                    background: #fff;
                    color: #000;
                    padding: 0.8rem 0.8rem 0.8rem 2.8rem;
                    border-radius: 100px;
                    font-weight: 900;
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    border: none;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .cta-icon {
                    width: 52px;
                    height: 52px;
                    background: #000;
                    color: #fff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
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
                        padding-top: 4rem;
                        gap: 4rem;
                    }
                    .hero-visual { 
                        display: block; 
                        width: 100%;
                        height: 450px;
                        order: 2;
                        overflow: hidden;
                    }
                    .hero-visual > div {
                        transform: scale(0.6);
                        transform-origin: center center;
                    }
                }
                @media (max-width: 480px) {
                    .hero-visual {
                        height: 350px;
                    }
                    .hero-visual > div {
                        transform: scale(0.5);
                    }
                }
                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-right: 0;
                        order: 1;
                    }
                }

                @media (max-width: 768px) {
                    .hero-layout {
                        gap: 3rem;
                        padding-top: 2rem;
                    }
                    .cta-button {
                        padding: 0.6rem 0.6rem 0.6rem 1.8rem;
                        gap: 1.2rem;
                        font-size: 0.8rem;
                    }
                    .cta-icon {
                        width: 42px;
                        height: 42px;
                    }
                }
            `}</style>
        </section>
    );
}

function IsometricIllustration() {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            perspective: '2000px',
            transformStyle: 'preserve-3d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* The Main Base Plane */}
            <motion.div
                initial={{ rotateX: 60, rotateZ: -45, opacity: 0, scale: 0.8 }}
                animate={{ rotateX: 60, rotateZ: -45, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    width: '500px',
                    height: '500px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transformStyle: 'preserve-3d',
                    position: 'relative'
                }}
            >
                {/* Surface Grid */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />

                {/* Data Flow Lines & Particles */}
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}>
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    {/* Primary Connection Paths */}
                    <motion.path
                        d="M 100,100 Q 250,50 400,100 T 500,400"
                        stroke="rgba(191,255,0,0.15)"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Traveling Particles */}
                    {[0, 0.4, 0.8].map((delay, i) => (
                        <motion.circle
                            key={i}
                            r="3"
                            fill="#bfff00"
                            filter="url(#glow)"
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: "100%" }}
                            transition={{ duration: 3, repeat: Infinity, delay, ease: "linear" }}
                            style={{ offsetPath: "path('M 100,100 Q 250,50 400,100 T 500,400')" }}
                        />
                    ))}
                </svg>

                {/* Floating Card 1: Asset Registry */}
                <motion.div
                    animate={{ z: [30, 50, 30], rotateY: [-3, 3, -3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '5%',
                        left: '5%',
                        width: '300px',
                        height: '380px',
                        background: 'radial-gradient(circle at 0% 0%, rgba(30, 30, 35, 0.98), rgba(15, 15, 15, 1))',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '32px',
                        padding: '1.8rem',
                        boxShadow: '0 40px 80px rgba(0,0,0,0.7), inset 0 0 40px rgba(255,255,255,0.02)',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#bfff00', boxShadow: '0 0 15px #bfff00' }} />
                            <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#fff', letterSpacing: 3 }}>ASSET_REGISTRY</div>
                        </div>
                        <div style={{ padding: '4px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', fontWeight: 800 }}>LIVE_MESH</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                        {[
                            { name: 'LONDON_PRIME_01', status: 'VERIFIED', val: '84.2%', color: '#bfff00' },
                            { name: 'DUBAI_SQUARE_04', status: 'LOCKED', val: '92.8%', color: '#ffcc00' },
                            { name: 'NY_CENTRAL_09', status: 'ACTIVE', val: '76.1%', color: '#007aff' }
                        ].map((asset, i) => (
                            <div key={i} style={{
                                width: '100%',
                                background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
                                borderLeft: `3px solid ${asset.color}`,
                                borderRadius: '4px 16px 16px 4px',
                                padding: '14px 18px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                transition: 'all 0.3s ease'
                            }}>
                                <div>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#fff', marginBottom: '4px' }}>{asset.name}</div>
                                    <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700 }}>{asset.status}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 900, color: asset.color }}>{asset.val}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px', height: '70px', background: 'rgba(0,0,0,0.3)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', padding: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.5rem', fontWeight: 900, color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>
                            <span>NETWORKLOAD</span>
                            <span>24.8ms</span>
                        </div>
                        <div style={{ display: 'flex', gap: '3px', height: '100%', alignItems: 'flex-end', paddingBottom: '15px' }}>
                            {Array.from({ length: 20 }).map((_, i) => (
                                <motion.div key={i} animate={{ height: [2, 10, 2] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }} style={{ flex: 1, background: '#bfff00', opacity: 0.3, borderRadius: '1px' }} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Floating Card 2: Yield Intelligence */}
                <motion.div
                    animate={{ z: [60, 80, 60], x: [10, 30, 10] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{
                        position: 'absolute',
                        top: '60%',
                        right: '-15%',
                        width: '240px',
                        height: '200px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.9) 100%)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '32px',
                        padding: '1.5rem',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                        transformStyle: 'preserve-3d',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                >
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#000', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }} />
                            <div style={{ fontSize: '0.65rem', fontWeight: 900, color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: 3 }}>YIELD_ENGINE</div>
                        </div>
                        <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#000', letterSpacing: -2, lineHeight: 1 }}>12.8<span style={{ fontSize: '1rem', color: '#bfff00', WebkitTextStroke: '1px #000', marginLeft: '4px' }}>%</span></div>
                        <div style={{ fontSize: '0.6rem', color: 'rgba(0,0,0,0.3)', fontWeight: 800, marginTop: '5px' }}>ESTIMATED_ANNUAL_YIELD</div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', height: '45px' }}>
                        {[30, 60, 45, 80, 55, 95, 70].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 2 + i * 0.1, duration: 1.5, ease: "easeOut" }}
                                style={{ flex: 1, background: i === 5 ? '#bfff00' : '#000', borderRadius: '4px', boxShadow: i === 5 ? '0 0 15px #bfff00' : 'none' }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Tokenized Asset Fragments - High-Fidelity RWA Tokens */}
                {[1, 2, 3].map(i => (
                    <motion.div
                        key={i}
                        animate={{
                            z: [100 + i * 30, 130 + i * 30, 100 + i * 30],
                            y: [0, -40, 0],
                            rotateZ: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 12 + i, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            top: i === 1 ? '0%' : i === 2 ? '40%' : '80%',
                            left: i === 1 ? '70%' : i === 2 ? '-10%' : '100%',
                            width: '70px',
                            height: '70px',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            background: 'rgba(191,255,0,0.05)',
                            backdropFilter: 'blur(15px)',
                            border: '1px solid rgba(191,255,0,0.3)',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 0 20px rgba(191,255,0,0.1)'
                        }}>
                            {/* Inner SVG Detail */}
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <rect x="10" y="10" width="20" height="20" rx="4" stroke="#bfff00" strokeWidth="2" strokeDasharray="4 2" />
                                <circle cx="20" cy="20" r="5" fill="#bfff00" filter="blur(2px)" />
                                <path d="M5 20 H10 M30 20 H35 M20 5 V10 M20 30 V35" stroke="#bfff00" strokeWidth="1" opacity="0.5" />
                            </svg>
                            
                            {/* Orbiting Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    width: '120%',
                                    height: '120%',
                                    border: '1px dashed rgba(191,255,0,0.2)',
                                    borderRadius: '50%'
                                }}
                            />
                            
                            {/* Label */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                whiteSpace: 'nowrap'
                            }}>
                                <span style={{
                                    fontSize: '0.6rem',
                                    fontWeight: 900,
                                    color: '#bfff00',
                                    textTransform: 'uppercase',
                                    letterSpacing: 2,
                                    background: 'rgba(0,0,0,0.6)',
                                    padding: '2px 8px',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(191,255,0,0.2)'
                                }}>
                                    FRAG_{i * 42}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Ambient Floor Glow */}
                <div style={{
                    position: 'absolute',
                    bottom: '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '300px',
                    height: '100px',
                    background: 'radial-gradient(ellipse at center, rgba(191, 255, 0, 0.1) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    zIndex: -1
                }} />
            </motion.div>
        </div>
    );
}
