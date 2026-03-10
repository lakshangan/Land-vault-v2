'use client';

import { motion } from 'framer-motion';
import { Target, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

export default function Hero() {
    return (
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ maxWidth: '900px', position: 'relative', zIndex: 10 }}>

                    {/* Tagline / HUD HUD HUD */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}
                    >
                        <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
                        <span style={{
                            color: 'var(--accent)',
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase'
                        }}>
                            TRANSFORMING GLOBAL LAND ASSETS
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ fontSize: 'clamp(3.5rem, 9vw, 6.5rem)', lineHeight: 0.9, marginBottom: '2.5rem', fontWeight: 700 }}
                    >
                        The New Frontier <br />
                        <span style={{
                            background: 'linear-gradient(90deg, #ff2d55, #5856d6, #007aff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 30px rgba(88,86,214,0.2)'
                        }}>
                            of Land Equity.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{
                            fontSize: '1.25rem',
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: 1.6,
                            marginBottom: '4rem',
                            maxWidth: '650px',
                            fontWeight: 400
                        }}
                    >
                        Land Vault is the institutional-grade bridge between physical world land assets and decentralized liquid finance. We tokenize land parcels into programmable, yield-bearing fractional tokens.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}
                    >
                        <button style={{
                            background: '#fff',
                            color: '#000',
                            padding: '1.2rem 3.5rem',
                            borderRadius: '4px',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            boxShadow: '0 20px 40px rgba(255,255,255,0.1)'
                        }}>
                            Explore the Protocol <ArrowRight size={18} />
                        </button>
                        <button style={{
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#fff',
                            padding: '1.2rem 3rem',
                            borderRadius: '4px',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
                        }}
                            className="hero-secondary-btn"
                        >
                            Learn More
                        </button>
                    </motion.div>
                </div>

                {/* Global Stats HUD HUD HUD */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '80px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '6rem',
                        padding: '2rem 4rem',
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.02) 0%, transparent 100%)',
                        borderRadius: '100px',
                        backdropFilter: 'blur(5px)',
                        width: 'max-content'
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ff2d55', marginBottom: '0.3rem', justifyContent: 'center' }}>
                            <ShieldCheck size={14} />
                            <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1 }}>Secured Value</div>
                        </div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>$1.42B+</div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#5856d6', marginBottom: '0.3rem', justifyContent: 'center' }}>
                            <Globe size={14} />
                            <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1 }}>Global Parcels</div>
                        </div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>12,480+</div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#007aff', marginBottom: '0.3rem', justifyContent: 'center' }}>
                            <Target size={14} />
                            <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1 }}>Protocol Nodes</div>
                        </div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>42 Nodes</div>
                    </div>
                </motion.div>

                {/* Floating background details for extra cinematic feel */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, #5856d611 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    pointerEvents: 'none'
                }} />
            </div>

            <style jsx>{`
        .hero-secondary-btn:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-2px);
        }
      `}</style>
        </section>
    );
}
