'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const layers = [
    { title: "Digital Land Identity", desc: "Verified geospatial data mapped to digital certificates." },
    { title: "Land NFT Tokenization", desc: "Legal ownership rights minted as unique ERC-721 tokens." },
    { title: "Fractional Ownership", desc: "Splitting prime land into high-liquidity ERC-20 shares." },
    { title: "Yield Distribution", desc: "Automated smart contract payouts from land revenue." },
    { title: "Global Land Marketplace", desc: "A decentralized ecosystem for land asset trading." }
];

export default function Solution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="section-spacing" style={{ position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <motion.h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
                            The Land Vault <br /> <span style={{ color: '#bfff00' }}>Protocol Stack</span>
                        </motion.h2>
                        <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '4rem' }}>
                            Our multi-layered architecture bridges the gap between physical soil and digital liquidity.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {layers.map((layer, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{
                                        padding: '1.5rem',
                                        borderLeft: '2px solid rgba(191, 255, 0, 0.2)',
                                        background: 'rgba(255, 255, 255, 0.02)'
                                    }}
                                >
                                    <h3 style={{ color: '#bfff00', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{layer.title}</h3>
                                    <p style={{ color: '#666' }}>{layer.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div style={{ position: 'relative', height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        {layers.map((_, i) => (
                            <motion.div
                                key={i}
                                style={{
                                    width: '80%',
                                    height: '60px',
                                    background: 'rgba(191, 255, 0, 0.1)',
                                    border: '1px solid #bfff00',
                                    borderRadius: '8px',
                                    transform: `perspective(1000px) rotateX(60deg) translateY(${i * -60}px)`,
                                    position: 'absolute',
                                    zIndex: layers.length - i,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                animate={{
                                    y: [i * -60, (i * -60) - 10, i * -60],
                                    opacity: [0.3, 1, 0.3]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.5
                                }}
                            >
                                <div style={{ color: '#bfff00', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                                    LAYER {layers.length - i}
                                </div>
                            </motion.div>
                        ))}

                        {/* Connecting line */}
                        <div style={{
                            position: 'absolute',
                            top: '20%',
                            bottom: '20%',
                            left: '50%',
                            width: '1px',
                            background: 'linear-gradient(to bottom, transparent, #bfff00, transparent)',
                            zIndex: 0
                        }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
