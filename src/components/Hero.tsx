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
                    }
                    .hero-visual { display: none; }
                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-right: 0;
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
                    animate={{ z: [40, 60, 40], rotateY: [-5, 5, -5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        width: '320px',
                        height: '400px',
                        background: 'radial-gradient(circle at 0% 0%, rgba(30, 30, 35, 0.98), rgba(15, 15, 15, 1))',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '32px',
                        padding: '2rem',
                        boxShadow: '0 60px 120px rgba(0,0,0,0.7), inset 0 0 40px rgba(255,255,255,0.02)',
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
                    animate={{ z: [80, 100, 80], x: [10, 25, 10] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '-5%',
                        width: '260px',
                        height: '220px',
                        background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                        borderRadius: '32px',
                        padding: '2rem',
                        boxShadow: '0 50px 100px rgba(0,0,0,0.5)',
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

                {/* Tokenized Asset Fragments - Elevated Glowing Nodes */}
                {[1, 2, 3].map(i => (
                    <motion.div
                        key={i}
                        animate={{
                            z: [60 + i * 30, 90 + i * 30, 60 + i * 30],
                            y: [0, -40, 0],
                            rotateY: [0, 180, 360]
                        }}
                        transition={{ duration: 8 + i, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            top: `${15 + i * 20}%`,
                            left: `${80 - i * 15}%`,
                            width: '40px',
                            height: '40px',
                            background: 'rgba(191,255,0,0.1)',
                            backdropFilter: 'blur(12px)',
                            border: '2px solid #bfff00',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 30px rgba(191,255,0,0.3), inset 0 0 15px rgba(191,255,0,0.2)',
                        }}
                    >
                        <div style={{ width: '12px', height: '12px', background: '#bfff00', borderRadius: '2px', filter: 'blur(1px)' }} />
                        <div style={{ position: 'absolute', top: '-25px', color: '#bfff00', fontSize: '0.5rem', fontWeight: 900, whiteSpace: 'nowrap', letterSpacing: 2 }}>
                            FRAG_{i * 12}
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
