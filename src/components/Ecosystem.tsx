'use client';

import { motion } from 'framer-motion';
import { Network, Cpu, Shield, Globe, Zap, Coins } from 'lucide-react';

const flowPoints = [
    { text: "Protocol Entry", icon: <Cpu size={20} />, color: "#ff2d55", top: "20%" },
    { text: "Validator Mesh", icon: <Shield size={20} />, color: "#5856d6", top: "60%" },
    { text: "Yield Engine", icon: <Coins size={20} />, color: "#007aff", top: "30%" },
    { text: "Market Distribution", icon: <Globe size={20} />, color: "#ff9500", top: "70%" },
    { text: "Finality", icon: <Zap size={20} />, color: "#ffcc00", top: "40%" }
];

export default function Ecosystem() {
    return (
        <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden', background: '#050505' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1 }}
                    >
                        Universal <span style={{ color: '#fff' }}>Asset</span> <br />
                        <span className="accent-color">Intelligence</span>
                    </motion.h2>
                </div>

                <div className="ecosystem-container" style={{ position: 'relative', height: '500px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Vibrant Wavy Paths - Desktop Only */}
                    <div className="desktop-visual" style={{ width: '100%', height: '100%', position: 'absolute', right: 0, overflow: 'visible' }}>
                        <svg viewBox="0 0 1200 500" preserveAspectRatio="xMaxYMid meet" style={{ position: 'absolute', width: '100%', height: '100%', right: 0, overflow: 'visible' }}>
                            <defs>
                                <linearGradient id="vibrantGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ff2d55" />
                                    <stop offset="25%" stopColor="#5856d6" />
                                    <stop offset="50%" stopColor="#007aff" />
                                    <stop offset="75%" stopColor="#ff9500" />
                                    <stop offset="100%" stopColor="#ffcc00" />
                                </linearGradient>

                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="15" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            <motion.path
                                className="desktop-only-path"
                                d="M 0,250 C 150,50 350,450 550,250 S 850,50 1200,250"
                                stroke="url(#vibrantGradient)"
                                strokeWidth="4"
                                fill="none"
                                filter="url(#glow)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                            />
                            {/* Mobile Path */}
                            <motion.path
                                className="mobile-only-path"
                                d="M 600,0 C 200,200 1000,400 600,600 S 200,800 600,1000"
                                stroke="url(#vibrantGradient)"
                                strokeWidth="4"
                                fill="none"
                                filter="url(#glow)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                style={{ display: 'none' }}
                            />
                            {/* Ghost Paths */}
                            <motion.path
                                className="desktop-only-path"
                                d="M 0,250 C 200,450 400,50 600,250 S 900,450 1200,250"
                                stroke="url(#vibrantGradient)"
                                strokeWidth="2"
                                fill="none"
                                opacity="0.2"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 3, delay: 0.5 }}
                            />
                            <motion.path
                                className="mobile-only-path"
                                d="M 600,0 C 1000,200 200,400 600,600 S 1000,800 600,1000"
                                stroke="url(#vibrantGradient)"
                                strokeWidth="2"
                                fill="none"
                                opacity="0.2"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 3, delay: 0.5 }}
                                style={{ display: 'none' }}
                            />
                        </svg>
                    </div>

                    <div className="blobs-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '100%' }}>
                        {flowPoints.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.4 }}
                                className={`flow-point-${i}`}
                                style={{
                                    position: 'absolute',
                                    left: `${(i + 1) * 16}%`,
                                    top: point.top,
                                    zIndex: 5
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: point.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        boxShadow: `0 0 30px ${point.color}`,
                                    }}>
                                        {point.icon}
                                    </div>
                                    <div style={{
                                        color: '#fff',
                                        fontSize: '0.7rem',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: 1,
                                        whiteSpace: 'nowrap',
                                        background: 'rgba(0,0,0,0.8)',
                                        padding: '4px 10px',
                                        borderRadius: '4px'
                                    }}>
                                        {point.text}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{
                        position: 'absolute',
                        right: '10%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, #ff950033 0%, #ffcc0000 70%)',
                        filter: 'blur(50px)',
                        zIndex: -1
                    }} />
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 968px) {
                    .ecosystem-container {
                        height: auto !important;
                        padding: 3rem 0;
                        min-height: 800px;
                    }
                    .desktop-visual {
                        display: block !important;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        opacity: 0.5 !important;
                    }
                    .desktop-only-path { display: none !important; }
                    .mobile-only-path { display: block !important; }
                    .desktop-visual svg {
                        width: 100%;
                        height: 1000px;
                        left: 0;
                    }
                    .blobs-wrapper {
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        gap: 5rem !important;
                        height: auto !important;
                        position: relative;
                        z-index: 2;
                    }
                    div[class^="flow-point"] {
                        position: relative !important;
                        left: 0 !important;
                        top: 0 !important;
                    }
                }
            `}</style>
        </section>
    );
}
