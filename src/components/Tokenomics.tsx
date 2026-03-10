'use client';

import { motion } from 'framer-motion';
import { ArrowRight, LandPlot, Database, Wallet, Users, RefreshCw } from 'lucide-react';

const flowSteps = [
    { icon: <LandPlot />, text: "Land Asset" },
    { icon: <Database />, text: "NFT Tokenization" },
    { icon: <Wallet />, text: "Fractional Tokens" },
    { icon: <Users />, text: "Global Investors" },
    { icon: <RefreshCw />, text: "Yield Distribution" }
];

export default function Tokenomics() {
    return (
        <section className="section-spacing">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <h2 style={{ fontSize: '3rem' }}>The <span style={{ color: '#bfff00' }}>Economic</span> Engine</h2>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    {flowSteps.map((step, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.2 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}
                            >
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '24px',
                                    background: 'rgba(191, 255, 0, 0.05)',
                                    border: '1px solid rgba(191, 255, 0, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#bfff00'
                                }}>
                                    {step.icon}
                                </div>
                                <span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 500 }}>{step.text}</span>
                            </motion.div>

                            {i < flowSteps.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 + 0.1 }}
                                >
                                    <ArrowRight color="#333" />
                                </motion.div>
                            )}
                        </div>
                    ))}

                    {/* Animated data flow */}
                    <div style={{
                        position: 'absolute',
                        top: '50px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        zIndex: -1
                    }}>
                        <motion.div
                            animate={{ x: ['0%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            style={{
                                width: '100px',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, #bfff00, transparent)'
                            }}
                        />
                    </div>
                </div>

                <div style={{
                    marginTop: '6rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem'
                }}>
                    <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
                        <h4 style={{ color: '#bfff00', marginBottom: '1rem' }}>Zero Slippage</h4>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>Proprietary AMM for fractional land assets ensures deep liquidity.</p>
                    </div>
                    <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
                        <h4 style={{ color: '#bfff00', marginBottom: '1rem' }}>Yield Harvesting</h4>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>Income generated from land use is automatically swapped to stablecoins.</p>
                    </div>
                    <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
                        <h4 style={{ color: '#bfff00', marginBottom: '1rem' }}>Governance</h4>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>Token holders vote on asset management and expansion strategies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
