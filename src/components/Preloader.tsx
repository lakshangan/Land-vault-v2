'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Network } from 'lucide-react';

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
                return prev + Math.random() * 8;
            });
        }, 120);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)', transition: { duration: 1, ease: "easeInOut" } }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 10000,
                        background: '#050505',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* Central Logo HUD HUD HUD */}
                    <div style={{ position: 'relative', width: 120, height: 120, marginBottom: '4rem' }}>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                border: '1px dashed rgba(255,255,255,0.1)',
                                borderRadius: '50%'
                            }}
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                inset: '10%',
                                border: '1px solid rgba(88,86,214,0.3)',
                                borderRadius: '50%'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: '25%',
                            background: 'linear-gradient(135deg, #ff2d55, #5856d6)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            boxShadow: '0 0 40px rgba(88,86,214,0.3)'
                        }}>
                            <Network size={32} />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ textAlign: 'center' }}
                    >
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', letterSpacing: 6, marginBottom: '1rem' }}>
                            LAND VAULT
                        </h2>
                        <div style={{ width: 250, height: '1px', background: 'rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                            <motion.div
                                style={{
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, #ff2d55, transparent)',
                                    width: '40%',
                                    position: 'absolute',
                                    left: `${progress}%`,
                                    transform: 'translateX(-50%)'
                                }}
                            />
                        </div>
                        <p style={{ marginTop: 15, color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: 2 }}>
                            Initializing Protocol Layer... {Math.round(progress)}%
                        </p>
                    </motion.div>

                    {/* Background Ambient Glow */}
                    <div style={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, #5856d611 0%, transparent 70%)',
                        filter: 'blur(100px)',
                        zIndex: -1
                    }} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
