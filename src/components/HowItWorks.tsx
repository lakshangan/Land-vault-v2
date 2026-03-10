'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, CheckCircle, Database, LayoutGrid, BarChart3, ChevronRight } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Registration",
        sub: "Data Ingestion",
        desc: "Land owners initiate the process by uploading high-fidelity geospatial data, legal deeds, and verified IDs into our encrypted ingestion engine.",
        icon: <UserPlus size={24} />,
        color: "#bfff00",
        stats: { label: "Ingestion Privacy", val: "ZKP Secured" }
    },
    {
        id: "02",
        title: "Verification",
        sub: "Asset Audit",
        desc: "Our decentralized validator network conducts a multi-node audit of the land titles against global records to ensure absolute authenticity.",
        icon: <CheckCircle size={24} />,
        color: "#c5a059",
        stats: { label: "Validation Speed", val: "Instant-Finality" }
    },
    {
        id: "03",
        title: "NFT Minting",
        sub: "On-Chain Identity",
        desc: "Once verified, the land parcel is minted as a programmable ERC-721 NFT, embedding all legal metadata and physical coordinates directly into the contract.",
        icon: <Database size={24} />,
        color: "#00f2ff",
        stats: { label: "Minting Standard", val: "RWA-721" }
    },
    {
        id: "04",
        title: "Fractionalization",
        sub: "Liquidity Unlock",
        desc: "The protocol splits the RWA-NFT into thousands of ERC-20 fractional tokens, allowing global investors to acquire shares for as little as $100.",
        icon: <LayoutGrid size={24} />,
        color: "#fff",
        stats: { label: "Liquidity Ratio", val: "Deep AMM" }
    },
    {
        id: "05",
        title: "Yield Markets",
        sub: "Marketplace Execution",
        desc: "Investment shares are listed on the global marketplace. Rental yields and land appreciation are automatically distributed via smart contracts.",
        icon: <BarChart3 size={24} />,
        color: "#bfff00",
        stats: { label: "Payout Frequency", val: "Daily/Native" }
    }
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="section-spacing" style={{ background: '#050505', position: 'relative' }}>
            <div className="container">
                <div style={{ marginBottom: '10rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, marginBottom: '2.5rem' }}>
                            The <span className="accent-color">Investment</span> <br /> Lifecycle.
                        </h2>
                        <p style={{ color: '#666', fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.6 }}>
                            A high-precision sequence transforming physical land into institutional-grade digital assets.
                        </p>
                    </motion.div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '80px 1fr 1.2fr',
                                padding: '4rem',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '32px',
                                alignItems: 'center',
                                gap: '4rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            whileHover={{
                                background: 'rgba(255,255,255,0.04)',
                                borderColor: step.color + '33',
                                scale: 1.01
                            }}
                        >
                            <div style={{ fontSize: '3rem', fontWeight: 900, color: step.color, opacity: 0.2 }}>
                                {step.id}
                            </div>

                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ color: step.color, background: `${step.color}11`, padding: '10px', borderRadius: '10px' }}>
                                        {step.icon}
                                    </div>
                                    <span style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>{step.title}</span>
                                </div>
                                <h4 style={{ fontSize: '0.8rem', color: step.color, textTransform: 'uppercase', letterSpacing: 2, marginBottom: '1rem' }}>
                                    {step.sub}
                                </h4>
                                <p style={{ color: '#777', lineHeight: 1.7, fontSize: '1.05rem' }}>{step.desc}</p>
                            </div>

                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <div style={{
                                    flex: 1,
                                    background: '#0a0a0a',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '20px',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{ fontSize: '0.65rem', color: '#444', textTransform: 'uppercase', letterSpacing: 1, marginBottom: '0.5rem' }}>
                                        {step.stats.label}
                                    </div>
                                    <div style={{ color: step.color, fontSize: '1.4rem', fontWeight: 700 }}>
                                        {step.stats.val}
                                    </div>
                                </div>

                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    color: '#444'
                                }}>
                                    <ChevronRight />
                                </div>
                            </div>

                            {/* Decorative accent for the card */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '100px',
                                height: '100px',
                                background: `radial-gradient(circle at top right, ${step.color}11, transparent 70%)`
                            }} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background connecting line dots */}
            <div style={{
                position: 'absolute',
                left: 'calc(50% + 400px)',
                top: '20%',
                bottom: '10%',
                width: '1px',
                borderLeft: '1px dashed rgba(255,255,255,0.05)',
                zIndex: 0
            }} />
        </section>
    );
}
