'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';

const team = [
    { name: "Julian V.", role: "Founder & CEO", origin: "Goldman Sachs" },
    { name: "Elena K.", role: "CTO", origin: "Ethereum Foundation" },
    { name: "Marcus L.", role: "Head of Real Estate", origin: "BlackRock" },
    { name: "Sarah J.", role: "Legal Counsel", origin: "Wachtell Lipton" }
];

export function Team() {
    return (
        <section className="section-spacing">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>The <span style={{ color: '#bfff00' }}>Architects</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', fontSize: '1.1rem' }}>Builders designing the infrastructure for tokenized real-world assets.</p>
                    </motion.div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{
                                width: '120px',
                                height: '120px',
                                background: 'linear-gradient(45deg, #111, #222)',
                                borderRadius: '50%',
                                margin: '0 auto 2rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* Placeholder for member photo */}
                                <div style={{ fontSize: '2rem', color: '#444' }}>{member.name[0]}</div>
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                            <p style={{ color: '#bfff00', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>{member.role}</p>
                            <p style={{ color: '#444', fontSize: '0.75rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>{member.origin}</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', color: '#666' }}>
                                <Twitter size={16} style={{ cursor: 'pointer' }} />
                                <Linkedin size={16} style={{ cursor: 'pointer' }} />
                                <Github size={16} style={{ cursor: 'pointer' }} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function FinalCTA() {
    return (
        <section className="section-spacing" style={{ position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(191, 255, 0, 0.05) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1.1, marginBottom: '2.5rem', fontWeight: 900 }}>
                        The Future of Real-World <br /> Assets is <span style={{ color: '#bfff00' }}>On-Chain</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                        Join the infrastructure powering the next generation of tokenized real-world investments.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '4rem' }}>
                        <button style={{
                            background: '#bfff00',
                            color: '#000',
                            padding: '1.2rem 3.5rem',
                            borderRadius: '100px',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            boxShadow: '0 0 30px rgba(191, 255, 0, 0.3)',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            Launch App
                        </button>
                        <button style={{
                            border: '1px solid var(--border)',
                            color: '#fff',
                            padding: '1.2rem 3.5rem',
                            borderRadius: '100px',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            backdropFilter: 'blur(10px)'
                        }}>
                            Read Whitepaper
                        </button>
                    </div>
                </motion.div>
            </div>

            <div style={{ marginTop: '10rem', color: '#444', fontSize: '0.8rem', letterSpacing: 2 }}>
                © 2026 LAND PROTOCOL. ALL RIGHTS RESERVED.
            </div>
        </section>
    );
}
