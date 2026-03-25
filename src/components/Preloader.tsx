'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 800);
                    return 100;
                }
                const increment = Math.random() * 8 + 2;
                return Math.min(prev + increment, 100);
            });
        }, 80);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0, 
                        scale: 1.05,
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                    }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        background: '#000',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}
                >
                    {/* Background Ambient Glows */}
                    <motion.div 
                        animate={{ 
                            opacity: [0.1, 0.2, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            width: '800px',
                            height: '800px',
                            background: 'radial-gradient(circle, rgba(191, 255, 0, 0.08) 0%, transparent 70%)',
                            filter: 'blur(100px)',
                            zIndex: 0
                        }} 
                    />

                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        {/* Logo / Text Section */}
                        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-0.04em',
                                    fontFamily: '"Space Grotesk", sans-serif',
                                    color: '#fff',
                                    display: 'flex',
                                    gap: '0.2em',
                                    lineHeight: 1
                                }}
                            >
                                <span style={{ opacity: 0.2 }}>LAND</span>
                                <span style={{ opacity: 0.2 }}>PROTOCOL</span>

                                {/* Filling Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    gap: '0.2em',
                                    pointerEvents: 'none',
                                    overflow: 'hidden',
                                    clipPath: `inset(0 ${100 - progress}% 0 0)`
                                }}>
                                    <span style={{ color: '#bfff00' }}>LAND</span>
                                    <span style={{ color: '#bfff00' }}>PROTOCOL</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                color: '#fff',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                letterSpacing: '0.4em',
                                textTransform: 'uppercase',
                                marginBottom: '4rem'
                            }}
                        >
                            Infrastructure for RWAs
                        </motion.p>

                        {/* Minimal Progress Indicator */}
                        <div style={{ 
                            width: '240px', 
                            height: '2px', 
                            background: 'rgba(255,255,255,0.05)', 
                            margin: '0 auto',
                            position: 'relative',
                            borderRadius: '10px',
                            overflow: 'hidden'
                        }}>
                            <motion.div
                                style={{
                                    height: '100%',
                                    background: '#bfff00',
                                    width: `${progress}%`,
                                    boxShadow: '0 0 15px rgba(191, 255, 0, 0.5)',
                                }}
                            />
                        </div>

                        {/* Percentage */}
                        <motion.div
                            style={{
                                marginTop: '1.5rem',
                                color: '#fff',
                                opacity: 0.2,
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                fontFamily: 'monospace',
                                letterSpacing: '0.1em'
                            }}
                        >
                            {Math.round(progress)}%
                        </motion.div>
                    </div>

                    {/* Bottom Indicator */}
                    <div style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        opacity: 0.15
                    }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#fff' }} />
                        <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                            Decentralized Protocol
                        </span>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#fff' }} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

