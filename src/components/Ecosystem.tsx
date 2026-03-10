'use client';

import { motion } from 'framer-motion';
import { Wallet, Building2, Scale, Users, LineChart, Globe } from 'lucide-react';

const nodes = [
    { icon: <Wallet size={24} />, label: "Web3 Wallets" },
    { icon: <Building2 size={24} />, label: "Real Estate Agencies" },
    { icon: <Scale size={24} />, label: "Regulatory Bodies" },
    { icon: <Users size={24} />, label: "Institutional Liquidity" },
    { icon: <LineChart size={24} />, label: "DeFi Markets" },
    { icon: <Globe size={24} />, label: "Global Exchanges" }
];

export default function Ecosystem() {
    return (
        <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span style={{
                                color: '#bfff00',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                letterSpacing: 3,
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '1.5rem'
                            }}>
                                INTEGRATIONS UNLEASHED
                            </span>
                            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1, marginBottom: '2rem' }}>
                                Universal <br /> <span style={{ color: '#fff', textShadow: '0 0 30px rgba(255,255,255,0.2)' }}>Liquidity Hub</span>
                            </h2>
                            <p style={{ color: '#666', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '500px' }}>
                                Automate land asset flows, sync with global investors, and keep your real estate portfolio on-chain — effortlessly.
                            </p>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <button style={{
                                    background: '#fff',
                                    color: '#000',
                                    padding: '1rem 2rem',
                                    borderRadius: '4px',
                                    fontWeight: 600,
                                    fontSize: '0.9rem'
                                }}>
                                    Explore Integrations
                                </button>
                                <button style={{
                                    border: '1px solid var(--border)',
                                    color: '#fff',
                                    padding: '1rem 2rem',
                                    borderRadius: '4px',
                                    fontWeight: 600,
                                    fontSize: '0.9rem'
                                }}>
                                    Contact →
                                </button>
                            </div>

                            <div style={{ marginTop: '6rem' }}>
                                <p style={{ color: '#444', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1, marginBottom: '2rem' }}>
                                    Trusted by thousands of modern investors.
                                </p>
                                <div style={{ display: 'flex', gap: '3rem', opacity: 0.3, filter: 'grayscale(100%)' }}>
                                    {/* Logo Placeholders */}
                                    <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>LOGOIPSUM</div>
                                    <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>LOGOIPSUM</div>
                                    <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>LOGOIPSUM</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div style={{ position: 'relative', height: '600px', width: '100%' }}>
                        {/* Background Grid */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'radial-gradient(circle, rgba(191,255,0,0.05) 1px, transparent 1px)',
                            backgroundSize: '30px 30px',
                            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                        }} />

                        {/* Central Hub */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '180px',
                                height: '180px',
                                borderRadius: '50%',
                                background: '#0a0a0a',
                                border: '2px solid rgba(191,255,0,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                zIndex: 10,
                                boxShadow: '0 0 60px rgba(191, 255, 0, 0.1)'
                            }}
                        >
                            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#fff', letterSpacing: 1 }}>
                                LAND VAULT <br /> HUB
                            </div>

                            {/* Pulsing ring */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                style={{
                                    position: 'absolute',
                                    inset: -10,
                                    border: '1px solid #bfff00',
                                    borderRadius: '50%'
                                }}
                            />
                        </motion.div>

                        {/* Spokes and Nodes */}
                        {nodes.map((node, i) => {
                            const angle = (i * 360) / nodes.length;
                            const radius = 220;
                            const x = Math.cos((angle * Math.PI) / 180) * radius;
                            const y = Math.sin((angle * Math.PI) / 180) * radius;

                            return (
                                <div key={i} style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                                }}>
                                    {/* Connecting Line (Path) */}
                                    <svg style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '300px',
                                        height: '300px',
                                        overflow: 'visible',
                                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                                        pointerEvents: 'none'
                                    }}>
                                        <motion.path
                                            d="M 150 150 L 50 150"
                                            fill="none"
                                            stroke="rgba(191,255,0,0.2)"
                                            strokeWidth="1"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, delay: i * 0.1 }}
                                        />
                                        {/* Animated particle flow */}
                                        <motion.circle
                                            r="2"
                                            fill="#bfff00"
                                            animate={{ cx: [150, 50] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                            cy="150"
                                        />
                                    </svg>

                                    <motion.div
                                        whileHover={{ scale: 1.1, borderColor: '#bfff00' }}
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            background: '#111',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            zIndex: 5,
                                            position: 'relative',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        {node.icon}

                                        {/* Label on hover */}
                                        <div className="node-label" style={{
                                            position: 'absolute',
                                            top: '70px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            whiteSpace: 'nowrap',
                                            fontSize: '0.7rem',
                                            color: '#888',
                                            textTransform: 'uppercase',
                                            letterSpacing: 1
                                        }}>
                                            {node.label}
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .node-label {
          opacity: 0;
          transition: opacity 0.3s;
        }
        div:hover .node-label {
          opacity: 1;
        }
      `}</style>
        </section>
    );
}
