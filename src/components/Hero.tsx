'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
    return (
        <section style={{ 
            minHeight: '100vh', 
            background: '#000', 
            position: 'relative', 
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px'
        }}>
            {/* Background Ambient Effects */}
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

            <div style={{ position: 'relative', zIndex: 1, width: '100%', padding: '0 5%' }}>
                <div className="hero-layout">

                    {/* ── Left: Text Content ── */}
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Eyebrow badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15, duration: 0.8 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(191,255,0,0.06)',
                                    border: '1px solid rgba(191,255,0,0.2)',
                                    borderRadius: '100px',
                                    padding: '7px 18px',
                                    marginBottom: '2rem'
                                }}
                            >
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#bfff00', display: 'inline-block', boxShadow: '0 0 8px #bfff00' }} />
                                <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#bfff00', textTransform: 'uppercase', letterSpacing: '0.15em' }}>RWA Protocol · On-chain Now</span>
                            </motion.div>

                            {/* Headline */}
                            <h1 style={{
                                fontSize: 'clamp(3rem, 5.5vw, 5.2rem)',
                                lineHeight: 1.02,
                                fontWeight: 900,
                                marginBottom: '0',
                                letterSpacing: '-0.04em',
                                color: '#fff'
                            }}>
                                Infrastructure<br />
                                for Tokenizing<br />
                                <span style={{
                                    background: 'linear-gradient(90deg, #bfff00 0%, rgba(191,255,0,0.5) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Real-World</span>{' '}
                                <span style={{ color: '#fff' }}>Assets.</span>
                            </h1>

                            {/* Divider + Subtext */}
                            <div style={{ display: 'flex', gap: '1.4rem', alignItems: 'flex-start', marginTop: '2.5rem' }}>
                                <div style={{ width: '2px', flexShrink: 0, alignSelf: 'stretch', background: 'linear-gradient(to bottom, #bfff00, transparent)', borderRadius: '4px' }} />
                                <p style={{
                                    color: 'rgba(255,255,255,0.45)',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.7,
                                    fontWeight: 400,
                                    margin: 0
                                }}>
                                    A decentralized protocol unlocking global access to real estate, energy, and infrastructure through tokenization and fractional ownership.
                                </p>
                            </div>

                        </motion.div>
                    </div>

                    {/* ── Right: Visual ── */}
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
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 3rem;
                    align-items: center;
                    min-height: calc(100vh - 80px);
                    padding: 4rem 0;
                }
                .hero-content {
                    z-index: 2;
                }
                .hero-visual {
                    position: relative;
                    z-index: 1;
                }

                @media (max-width: 992px) {
                    .hero-layout {
                        grid-template-columns: 1fr;
                        text-align: center;
                        padding: 4rem 0;
                        gap: 3rem;
                        min-height: auto;
                    }
                    .hero-visual {
                        width: 100%;
                        height: 420px;
                        order: 2;
                        overflow: hidden;
                    }
                    .hero-visual > div {
                        transform: scale(0.6);
                        transform-origin: center center;
                    }
                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        order: 1;
                    }
                }
                @media (max-width: 480px) {
                    .hero-visual { height: 300px; }
                    .hero-visual > div { transform: scale(0.5); }
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

                {/* Vertical Data Lines */}
                <svg width="500" height="500" style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}>
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    
                    <motion.path
                        d="M 100,100 Q 250,50 400,100 T 500,400"
                        stroke="rgba(191, 255, 0, 0.2)"
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

                {/* Floating Elements: RWA Tokens */}
                {[
                    { top: '10%', right: '10%', size: 40, delay: 0 },
                    { bottom: '15%', left: '15%', size: 30, delay: 2 },
                    { top: '40%', left: '-10%', size: 45, delay: 1.5 }
                ].map((token, i) => (
                    <motion.div
                        key={i}
                        animate={{ 
                            y: [0, -20, 0],
                            rotate: [0, 360],
                            z: [100, 150, 100]
                        }}
                        transition={{ 
                            duration: 10, 
                            repeat: Infinity, 
                            delay: token.delay 
                        }}
                        style={{
                            position: 'absolute',
                            top: token.top,
                            bottom: token.bottom,
                            left: token.left,
                            right: token.right,
                            width: token.size,
                            height: token.size,
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '12px',
                            backdropFilter: 'blur(5px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.6rem',
                            fontWeight: 900,
                            color: '#fff',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        RWA
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
