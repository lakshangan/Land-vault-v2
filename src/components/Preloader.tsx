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
                const increment = Math.random() * 8;
                return Math.min(prev + increment, 100);
            });
        }, 150);

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
                        filter: 'blur(10px)',
                        transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }
                    }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        background: '#0a0a0b',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* Minimal Center Logo/Text */}
                    <div style={{ position: 'relative' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{
                                fontSize: '0.6rem',
                                letterSpacing: '0.6em',
                                color: 'rgba(255,255,255,0.4)',
                                textTransform: 'uppercase',
                                marginBottom: '1.5rem',
                                fontWeight: 900
                            }}>
                                Establishing Protocol
                            </div>

                            <h2 style={{
                                fontSize: '1.8rem',
                                fontWeight: 900,
                                color: '#fff',
                                letterSpacing: '0.4em',
                                textTransform: 'uppercase',
                                margin: 0
                            }}>
                                LAND VAULT
                            </h2>
                        </motion.div>

                        {/* Cinematic Scan Line */}
                        <motion.div
                            animate={{
                                left: ['-10%', '110%'],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                width: '2px',
                                background: 'linear-gradient(to bottom, transparent, #5856d6, transparent)',
                                boxShadow: '0 0 15px #5856d6',
                                pointerEvents: 'none'
                            }}
                        />
                    </div>

                    {/* Minimal Progress indicator */}
                    <div style={{
                        position: 'absolute',
                        bottom: '15vh',
                        width: '280px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '1px',
                            background: 'rgba(255,255,255,0.05)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <motion.div
                                animate={{ width: `${progress}%` }}
                                transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                                style={{
                                    height: '100%',
                                    background: '#5856d6',
                                    boxShadow: '0 0 10px #5856d6',
                                }}
                            />
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            fontFamily: 'monospace',
                            fontSize: '0.6rem',
                            color: 'rgba(255,255,255,0.3)',
                            letterSpacing: '1px'
                        }}>
                            <span>SYSTEM_INIT</span>
                            <span style={{ color: 'rgba(255,255,255,0.6)' }}>{Math.round(progress)}%</span>
                        </div>
                    </div>

                    {/* Ambient Glow */}
                    <div style={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(88, 86, 214, 0.05) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
