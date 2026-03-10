'use client';

import { motion } from 'framer-motion';
import { Shield, Share2, Brain, ShoppingCart, Percent, History, Map as MapIcon } from 'lucide-react';

const features = [
    { title: "Ownership Registry", desc: "Immutable on-chain record of land titles.", icon: <Shield /> },
    { title: "Fractional Investment", desc: "Buy shares of prime land from $100.", icon: <Share2 /> },
    { title: "AI Valuation", desc: "Predictive pricing models for land assets.", icon: <Brain /> },
    { title: "Global Marketplace", desc: "24/7 liquidity for real estate investors.", icon: <ShoppingCart /> },
    { title: "Yield Distribution", desc: "Native smart contract rental income.", icon: <Percent /> },
    { title: "Immutable History", desc: "Complete chain of custody transparency.", icon: <History /> },
    { title: "Geospatial Data", desc: "Interactive satellite-linked visualization.", icon: <MapIcon /> }
];

export default function Features() {
    return (
        <section className="section-spacing">
            <div className="container">
                <div style={{ marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '3rem' }}>Everything you need to <br /> <span style={{ color: '#bfff00' }}>Master Land Investing</span>.</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{
                                scale: 1.02,
                                borderColor: '#bfff00',
                                boxShadow: '0 0 30px rgba(191, 255, 0, 0.1)'
                            }}
                            style={{
                                padding: '2.5rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '24px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                color: '#bfff00',
                                marginBottom: '1.5rem'
                            }}>
                                {f.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff' }}>{f.title}</h3>
                            <p style={{ color: '#666', lineHeight: 1.6 }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
