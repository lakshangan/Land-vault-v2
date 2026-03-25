'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Share2, Brain, ShoppingCart, Percent, Zap, Building2, LandPlot } from 'lucide-react';

const features = [
    { title: "Real Estate Tokenization", desc: "Tokenize land, buildings, and property assets into on-chain investment instruments.", icon: <Building2 size={22} /> },
    { title: "Renewable Energy Assets", desc: "Invest in solar farms, wind energy, and infrastructure producing real-world value.", icon: <Zap size={22} /> },
    { title: "Infrastructure Investments", desc: "Access logistics facilities, telecom towers, and industrial assets.", icon: <LandPlot size={22} /> },
    { title: "Fractional Ownership", desc: "Divide large assets into smaller tokens accessible to global investors.", icon: <Share2 size={22} /> },
    { title: "Global Asset Marketplace", desc: "Buy, sell, and manage tokenized assets across blockchain networks.", icon: <ShoppingCart size={22} /> },
    { title: "AI Asset Valuation", desc: "Advanced analytics provide valuation insights and investment intelligence.", icon: <Brain size={22} /> },
    { title: "On-Chain Ownership Registry", desc: "Transparent ownership records secured through blockchain technology.", icon: <Shield size={22} /> },
    { title: "Automated Revenue Distribution", desc: "Smart contracts distribute income from assets directly to token holders.", icon: <Percent size={22} /> }
];

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const headerY = useTransform(smoothProgress, [0, 1], [150, 0]);
    const headerOpacity = useTransform(smoothProgress, [0, 0.8], [0, 1]);

    const gridY = useTransform(smoothProgress, [0, 1], [200, 0]);
    const gridOpacity = useTransform(smoothProgress, [0, 0.9], [0, 1]);

    return (
        <section ref={containerRef} className="section-spacing" style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.div style={{ opacity: headerOpacity, y: headerY }}>
                        <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', lineHeight: 1, fontWeight: 900 }}>
                            Infrastructure for the <br />
                            <span style={{ color: '#bfff00' }}>Tokenized Economy</span>
                        </h2>
                    </motion.div>
                </div>

                <motion.div className="features-grid" style={{ opacity: gridOpacity, y: gridY }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
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
                </motion.div>
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
