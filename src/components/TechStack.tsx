'use client';

import { motion } from 'framer-motion';

const techs = [
    { name: "BNB Chain", type: "Settlement Layer", color: "#F3BA2F" },
    { name: "ERC-721/20", type: "Token Standards", color: "#bfff00" },
    { name: "IPFS", type: "Decentralized Storage", color: "#6ACAD1" },
    { name: "AI Vision", type: "Valuation Engine", color: "#c5a059" },
    { name: "Next.js", type: "Frontend Library", color: "#fff" },
    { name: "Node.js", type: "Backend Services", color: "#339933" },
    { name: "Ethers.js", type: "Wallet Provider", color: "#2535a0" }
];

export default function TechStack() {
    return (
        <section className="section-spacing" style={{ background: '#050505', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '3rem' }}>Powering the <span style={{ color: '#bfff00' }}>Infrastructure</span></h2>
                    <p style={{ color: '#666', marginTop: '1rem' }}>Enterprise-grade technology for global land ownership.</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                    {techs.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -10 }}
                            style={{
                                padding: '2rem',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '16px',
                                width: '180px',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{
                                width: '10px',
                                height: '10px',
                                background: tech.color,
                                borderRadius: '50%',
                                margin: '0 auto 1.5rem',
                                boxShadow: `0 0 10px ${tech.color}`
                            }} />
                            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>{tech.name}</h4>
                            <p style={{ color: '#444', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1 }}>{tech.type}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Abstract Web3 Diagram Elements */}
                <div style={{ marginTop: '8rem', position: 'relative', height: '300px' }}>
                    <svg width="100%" height="100%" viewBox="0 0 1200 300">
                        <motion.path
                            d="M100,150 Q300,50 600,150 T1100,150"
                            fill="none"
                            stroke="rgba(191, 255, 0, 0.2)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                        />
                        <motion.circle cx="300" cy="90" r="4" fill="#bfff00" animate={{ r: [4, 6, 4] }} transition={{ repeat: Infinity, duration: 2 }} />
                        <motion.circle cx="600" cy="150" r="4" fill="#c5a059" animate={{ r: [4, 6, 4] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
                        <motion.circle cx="900" cy="210" r="4" fill="#6ACAD1" animate={{ r: [4, 6, 4] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />
                    </svg>
                </div>
            </div>
        </section>
    );
}
