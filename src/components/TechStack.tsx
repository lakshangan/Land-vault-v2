'use client';

import { motion } from 'framer-motion';

const techs = [
    { name: "BNB Chain", type: "Smart Contract Infrastructure", color: "#F3BA2F" },
    { name: "ERC-721", type: "Asset NFT Standard", color: "#bfff00" },
    { name: "ERC-20", type: "Fractional Ownership Tokens", color: "#00f2ff" },
    { name: "IPFS", type: "Decentralized Document Storage", color: "#6ACAD1" },
    { name: "Solidity", type: "Smart Contract Logic", color: "#363636" },
    { name: "Node.js", type: "Backend Infrastructure", color: "#339933" },
    { name: "React / Next.js", type: "Web Interface", color: "#61DAFB" },
    { name: "Ethers.js", type: "Blockchain Interaction Layer", color: "#2535a0" }
];

export default function TechStack() {
    return (
        <section className="section-spacing" style={{ background: '#050505', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900 }}>Powered by <span style={{ color: '#bfff00' }}>Web3 Infrastructure</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', fontSize: '1.1rem' }}>Built on a scalable stack designed for real-world asset tokenization.</p>
                    </motion.div>
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
