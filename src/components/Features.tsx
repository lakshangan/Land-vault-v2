'use client';

import { motion } from 'framer-motion';
import { Shield, Share2, Brain, ShoppingCart, Percent, History, Map as MapIcon } from 'lucide-react';

const features = [
    { title: "Ownership Registry", desc: "Immutable on-chain record of land titles.", icon: <Shield size={22} /> },
    { title: "Fractional Investment", desc: "Buy shares of prime land from $100.", icon: <Share2 size={22} /> },
    { title: "AI Valuation", desc: "Predictive pricing models for land assets.", icon: <Brain size={22} /> },
    { title: "Global Marketplace", desc: "24/7 liquidity for real estate investors.", icon: <ShoppingCart size={22} /> },
    { title: "Yield Distribution", desc: "Native smart contract rental income.", icon: <Percent size={22} /> },
    { title: "Immutable History", desc: "Complete chain of custody transparency.", icon: <History size={22} /> },
    { title: "Geospatial Data", desc: "Interactive satellite-linked visualization.", icon: <MapIcon size={22} /> },
    { title: "Regulatory Tech", desc: "Embedded compliance for global jurisdictions.", icon: <Shield size={22} /> }
];

export default function Features() {
    return (
        <section className="section-spacing" style={{ background: '#050505', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', lineHeight: 1, fontWeight: 900 }}>
                            Everything you need to <br />
                            <span style={{ color: '#bfff00' }}>Master Land Investing</span>.
                        </h2>
                    </motion.div>
                </div>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="feature-card"
                            style={{
                                padding: '3rem 2rem',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '32px',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                height: '100%'
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                color: '#bfff00',
                                background: 'rgba(191, 255, 0, 0.05)',
                                border: '1px solid rgba(191, 255, 0, 0.1)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2rem'
                            }}>
                                {f.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 800 }}>{f.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, fontSize: '0.95rem' }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.5rem;
                }
                .feature-card:hover {
                    background: rgba(255, 255, 255, 0.04) !important;
                    border-color: rgba(191, 255, 0, 0.3) !important;
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                }
                @media (max-width: 1200px) {
                    .features-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                @media (max-width: 768px) {
                    div[style*="margin-bottom: 8rem"] {
                        margin-bottom: 4rem !important;
                    }
                    .features-grid {
                        grid-template-columns: 1fr;
                        padding: 0 1rem;
                    }
                    .feature-card {
                        padding: 2.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
