'use client';

import { motion } from 'framer-motion';
import { UserPlus, CheckCircle, Smartphone, PieChart, TrendingUp } from 'lucide-react';

const steps = [
    {
        title: "Registration",
        desc: "Land owners upload documents and verify ownership identity.",
        icon: <UserPlus />
    },
    {
        title: "Verification",
        desc: "Authorities or decentralized validators confirm authenticity.",
        icon: <CheckCircle />
    },
    {
        title: "NFT Minting",
        desc: "Each land parcel becomes a unique, on-chain NFT asset.",
        icon: <Smartphone />
    },
    {
        title: "Fractionalization",
        desc: "NFTs are split into flexible, liquid investment tokens.",
        icon: <PieChart />
    },
    {
        title: "Investment",
        desc: "Global investors buy shares and earn recurring yield.",
        icon: <TrendingUp />
    }
];

export default function HowItWorks() {
    return (
        <section className="section-spacing" style={{ position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <h2 style={{ fontSize: '3rem' }}>The <span style={{ color: '#bfff00' }}>Investment</span> Journey</h2>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Horizontal line */}
                    <div style={{
                        position: 'absolute',
                        top: '40px',
                        left: '10%',
                        right: '10%',
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, #bfff00, transparent)',
                        zIndex: -1
                    }} />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    background: '#0a0a0a',
                                    border: '1px solid #bfff00',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#bfff00',
                                    marginBottom: '2rem',
                                    boxShadow: '0 0 20px rgba(191, 255, 0, 0.2)',
                                    zIndex: 1
                                }}>
                                    {step.icon}
                                </div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#fff' }}>{step.title}</h3>
                                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5, padding: '0 1rem' }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
