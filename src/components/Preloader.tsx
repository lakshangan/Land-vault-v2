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
                    setTimeout(() => setLoading(false), 1000);
                    return 100;
                }
                return prev + Math.random() * 5;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 1000,
                        background: '#050505',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* Animated Cube Placeholder / Logo */}
                    <div style={{ position: 'relative', width: 200, height: 200 }}>
                        <motion.div
                            animate={{
                                rotateX: [0, 180, 360],
                                rotateY: [0, 180, 360],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                border: '2px solid #bfff00',
                                boxShadow: '0 0 40px rgba(191, 255, 0, 0.3)',
                            }}
                        />
                        {/* Inner particles effect could go here */}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ marginTop: 40, textAlign: 'center' }}
                    >
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 300, color: '#bfff00', letterSpacing: 4 }}>
                            LAND VAULT
                        </h2>
                        <p style={{ marginTop: 10, color: '#666', fontSize: '0.9rem', fontStyle: 'italic' }}>
                            “Tokenizing the World’s Land Assets”
                        </p>
                    </motion.div>

                    <div style={{ width: 200, height: 2, background: '#111', marginTop: 30, position: 'relative' }}>
                        <motion.div
                            style={{
                                height: '100%',
                                background: '#bfff00',
                                width: `${progress}%`,
                                boxShadow: '0 0 10px #bfff00',
                            }}
                        />
                    </div>

                    <p style={{ marginTop: 10, color: '#bfff00', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                        {Math.round(progress)}%
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
