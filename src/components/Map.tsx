'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Target, Activity, ShieldCheck } from 'lucide-react';

const nodes = [
    { id: 1, x: '25%', y: '35%', name: 'Silicon Valley Plot', val: '$4.2M', yield: '12.4%', country: 'USA' },
    { id: 2, x: '47%', y: '40%', name: 'London Commercial Hub', val: '$8.5M', yield: '8.5%', country: 'UK' },
    { id: 3, x: '18%', y: '60%', name: 'Amazon Rainforest Reserve', val: '$1.2M', yield: '15.2%', country: 'Brazil' },
    { id: 4, x: '78%', y: '38%', name: 'Tokyo Tech District', val: '$12.0M', yield: '6.1%', country: 'Japan' },
    { id: 5, x: '62%', y: '65%', name: 'Dubai Oasis Parcel', val: '$6.7M', yield: '9.2%', country: 'UAE' },
    { id: 6, x: '88%', y: '68%', name: 'Sydney Coastal Land', val: '$3.5M', yield: '7.4%', country: 'Australia' }
];

export default function InteractiveMap() {
    const [activeNode, setActiveNode] = useState<any>(null);

    return (
        <section className="section-spacing" style={{ background: '#050505' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>
                            Global <span style={{ color: '#bfff00' }}>Land Liquidity</span>
                        </h2>
                        <p style={{ color: '#666', marginTop: '1.5rem', fontSize: '1.1rem' }}>
                            Real-time visualization of tokenized land protocol nodes across global jurisdictions.
                        </p>
                    </motion.div>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Side Info Panels */}
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        zIndex: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        width: '240px'
                    }}>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(191,255,0,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#bfff00', marginBottom: '0.8rem' }}>
                                <Target size={16} />
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase' }}>Protocol Status</span>
                            </div>
                            <div style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>OPERATIONAL</div>
                            <div style={{ height: '2px', width: '100%', background: '#bfff0022', marginTop: '1rem', position: 'relative' }}>
                                <motion.div
                                    animate={{ left: ['0%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    style={{ position: 'absolute', height: '100%', width: '20px', background: '#bfff00' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '20px',
                        zIndex: 10,
                        width: '260px'
                    }}>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#c5a059', marginBottom: '0.8rem' }}>
                                <Activity size={16} />
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase' }}>Asset Meta-Data</span>
                            </div>
                            <p style={{ fontSize: '0.75rem', color: '#666', lineHeight: 1.5 }}>
                                All transactions are secured via zero-knowledge proofs and IPFS pinning across 12 decentralized storage clusters.
                            </p>
                        </div>
                    </div>

                    {/* Main Map Container */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '16/9',
                        background: '#0a0a0a',
                        borderRadius: '40px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        overflow: 'hidden',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
                    }}>
                        {/* Technic Grid and Circles */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `radial-gradient(circle at center, rgba(191,255,0,0.02) 2px, transparent 0)`,
                            backgroundSize: '30px 30px'
                        }} />

                        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                            <circle cx="50%" cy="50%" r="20%" stroke="rgba(255,255,255,0.02)" fill="none" />
                            <circle cx="50%" cy="50%" r="35%" stroke="rgba(255,255,255,0.02)" fill="none" />
                            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.02)" />
                            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.02)" />

                            {/* World Map Outline SVG placeholder color */}
                            <path d="M..." fill="none" stroke="rgba(255,255,255,0.03)" />
                        </svg>

                        {nodes.map((node) => (
                            <div
                                key={node.id}
                                style={{
                                    position: 'absolute',
                                    left: node.x,
                                    top: node.y,
                                    transform: 'translate(-50%, -50%)',
                                    cursor: 'pointer',
                                    zIndex: activeNode?.id === node.id ? 20 : 1
                                }}
                                onMouseEnter={() => setActiveNode(node)}
                                onMouseLeave={() => setActiveNode(null)}
                            >
                                <div style={{ position: 'relative' }}>
                                    {/* Ping Effect */}
                                    <motion.div
                                        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: node.id * 0.3 }}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '30px',
                                            height: '30px',
                                            background: '#bfff00',
                                            borderRadius: '50%'
                                        }}
                                    />

                                    {/* Solid Node */}
                                    <motion.div
                                        animate={{ scale: activeNode?.id === node.id ? 1.2 : 1 }}
                                        style={{
                                            width: '12px',
                                            height: '12px',
                                            background: '#bfff00',
                                            borderRadius: '50%',
                                            boxShadow: '0 0 15px #bfff00',
                                            border: '2px solid #000'
                                        }}
                                    />
                                </div>

                                {activeNode?.id === node.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        style={{
                                            position: 'absolute',
                                            top: '30px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '260px',
                                            padding: '2rem',
                                            background: 'rgba(10, 10, 10, 0.95)',
                                            backdropFilter: 'blur(20px)',
                                            border: '1px solid #bfff0033',
                                            borderRadius: '20px',
                                            zIndex: 100,
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                                            <span style={{ fontSize: '0.65rem', color: '#bfff00', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>{node.country} Registry</span>
                                            <ShieldCheck size={14} color="#bfff00" />
                                        </div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>{node.name}</div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: '#666', fontSize: '0.85rem' }}>Valuation:</span>
                                                <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>{node.val}</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: '#666', fontSize: '0.85rem' }}>Est. Yield:</span>
                                                <span style={{ color: '#bfff00', fontSize: '0.9rem', fontWeight: 600 }}>{node.yield} APY</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                    <button style={{
                        color: '#bfff00',
                        border: '2px solid #bfff0033',
                        background: 'transparent',
                        padding: '1.2rem 4rem',
                        borderRadius: '100px',
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)'
                    }}
                        className="map-button"
                        onMouseOver={(e) => {
                            (e.target as HTMLElement).style.background = '#bfff00';
                            (e.target as HTMLElement).style.color = '#000';
                            (e.target as HTMLElement).style.boxShadow = '0 0 40px rgba(191,255,0,0.3)';
                        }}
                        onMouseOut={(e) => {
                            (e.target as HTMLElement).style.background = 'transparent';
                            (e.target as HTMLElement).style.color = '#bfff00';
                            (e.target as HTMLElement).style.boxShadow = 'none';
                        }}
                    >
                        Explore Land Opportunities
                    </button>
                </div>
            </div>
        </section>
    );
}
