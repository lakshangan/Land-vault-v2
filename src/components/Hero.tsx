'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span style={{ color: '#bfff00', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.2em', display: 'block', marginBottom: '1.5rem' }}>
                            REAL WORLD ASSET PROTOCOL
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1, marginBottom: '2rem' }}
                    >
                        Unlock Global <br />
                        <span style={{ borderBottom: '2px solid #bfff00' }}>Land Ownership</span> <br />
                        Through Blockchain
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{ fontSize: '1.2rem', color: 'var(--foreground-secondary)', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '600px' }}
                    >
                        Land Vault transforms real-world land assets into programmable digital investments — bringing transparency, liquidity, and global access to real estate.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                    >
                        <button style={{
                            background: '#bfff00',
                            color: '#000',
                            padding: '1rem 2.5rem',
                            borderRadius: '100px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            boxShadow: '0 0 20px rgba(191, 255, 0, 0.3)'
                        }}
                            onMouseOver={(e) => {
                                (e.target as HTMLElement).style.transform = 'scale(1.05)';
                                (e.target as HTMLElement).style.boxShadow = '0 0 30px rgba(191, 255, 0, 0.5)';
                            }}
                            onMouseOut={(e) => {
                                (e.target as HTMLElement).style.transform = 'scale(1)';
                                (e.target as HTMLElement).style.boxShadow = '0 0 20px rgba(191, 255, 0, 0.3)';
                            }}
                        >
                            Explore the Protocol
                        </button>
                        <button style={{
                            border: '1px solid var(--border)',
                            color: '#fff',
                            padding: '1rem 2.5rem',
                            borderRadius: '100px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            backdropFilter: 'blur(10px)',
                            transition: 'background 0.2s'
                        }}
                            onMouseOver={(e) => (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.05)'}
                            onMouseOut={(e) => (e.target as HTMLElement).style.background = 'transparent'}
                        >
                            View Demo
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Hero Stats */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '50px',
                    right: '50px',
                    display: 'flex',
                    gap: '4rem',
                    padding: '2rem',
                    borderLeft: '1px solid var(--accent)'
                }}
            >
                <div>
                    <div style={{ color: '#bfff00', fontSize: '1.5rem', fontWeight: 700 }}>$1.2B+</div>
                    <div style={{ color: '#666', fontSize: '0.8rem', textTransform: 'uppercase' }}>Assets Tokenized</div>
                </div>
                <div>
                    <div style={{ color: '#bfff00', fontSize: '1.5rem', fontWeight: 700 }}>45K+</div>
                    <div style={{ color: '#666', fontSize: '0.8rem', textTransform: 'uppercase' }}>Global Investors</div>
                </div>
            </motion.div>
        </section>
    );
}
