'use client';

import { motion } from 'framer-motion';
import { ArrowRight, LandPlot, Database, Wallet, Users, RefreshCw } from 'lucide-react';

const flowSteps = [
    { icon: <LandPlot size={32} />, text: "Land Asset", color: "#bfff00" },
    { icon: <Database size={32} />, text: "NFT Tokenization", color: "#c5a059" },
    { icon: <Wallet size={32} />, text: "Fractional Tokens", color: "#00f2ff" },
    { icon: <Users size={32} />, text: "Global Investors", color: "#fff" },
    { icon: <RefreshCw size={32} />, text: "Yield Distribution", color: "#bfff00" }
];

export default function Tokenomics() {
    return (
        <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                            The Land Vault <span style={{ color: '#bfff00' }}>Tokenomics</span> Engine
                        </h2>
                        <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                            A high-velocity economic flywheel powered by fractional liquidity and automated smart contract yields.
                        </p>
                    </motion.div>
                </div>

                <div style={{ position: 'relative', minHeight: '300px' }}>
                    {/* Animated Wave Connection behind the icons */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '5%',
                        right: '5%',
                        height: '200px',
                        transform: 'translateY(-50%)',
                        zIndex: 0
                    }}>
                        <svg width="100%" height="100%" fill="none" preserveAspectRatio="none">
                            <motion.path
                                d="M 0,100 C 200,0 400,200 600,100 S 1000,0 1200,100"
                                stroke="rgba(191,255,0,0.1)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                            />

                            {/* Animated Flow Particles */}
                            {[0, 0.2, 0.4, 0.6, 0.8].map((offset) => (
                                <motion.circle
                                    key={offset}
                                    r="3"
                                    fill="#bfff00"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        cx: ["0%", "100%"],
                                        opacity: [0, 1, 0],
                                        scale: [1, 1.5, 1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: offset * 4,
                                        ease: "linear"
                                    }}
                                    style={{ position: 'absolute' }}
                                />
                            ))}
                        </svg>
                    </div>

                    <div className="tokenomics-flow" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                        {flowSteps.map((step, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1, justifyContent: 'center' }}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.15, duration: 0.6 }}
                                    whileHover={{ y: -10, borderColor: step.color }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '1.5rem',
                                        padding: '2.5rem 1.5rem',
                                        background: '#050505',
                                        borderRadius: '24px',
                                        border: '1px solid rgba(255,255,255,0.04)',
                                        width: '180px',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                                    }}
                                >
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: `${step.color}05`,
                                        border: `1px solid ${step.color}22`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: step.color,
                                        boxShadow: `0 0 30px ${step.color}11`
                                    }}>
                                        {step.icon}
                                    </div>
                                    <span style={{ fontSize: '0.85rem', color: '#999', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, textAlign: 'center' }}>{step.text}</span>
                                </motion.div>

                                {i < flowSteps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className="arrow-divider"
                                        style={{ flexShrink: 0 }}
                                    >
                                        <ArrowRight size={20} color="#333" />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tokenomics-info" style={{
                    marginTop: '10rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2.5rem'
                }}>
                    <div className="glass" style={{ padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.02)' }}>
                        <h4 style={{ color: '#bfff00', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: 700 }}>Deep Liquidity</h4>
                        <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.6 }}>Proprietary automated market maker specialized in high-value fractional land assets.</p>
                    </div>
                    <div className="glass" style={{ padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.02)' }}>
                        <h4 style={{ color: '#c5a059', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: 700 }}>Native Yield Hub</h4>
                        <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.6 }}>Income from land agriculture and commercial use is pinned directly to token holders.</p>
                    </div>
                    <div className="glass" style={{ padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.02)' }}>
                        <h4 style={{ color: '#00f2ff', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: 700 }}>Governance DAO</h4>
                        <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.6 }}>Institutional partners vote on risk parameters and global land parcel expansion.</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 1024px) {
                    div[style*="margin-bottom: 10rem"] {
                        margin-bottom: 4rem !important;
                    }
                    div[style*="margin-top: 10rem"] {
                        margin-top: 4rem !important;
                    }
                    .tokenomics-flow {
                        flex-direction: column !important;
                        gap: 2rem !important;
                    }
                    div[style*="min-height: 300px"] svg {
                        display: none !important;
                    }
                    .arrow-divider {
                        transform: rotate(90deg) !important;
                    }
                    .tokenomics-info {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
}

