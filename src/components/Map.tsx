'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const nodes = [
    { id: 1, x: '25%', y: '40%', name: 'Silicon Valley Plot', val: '$4.2M', yield: '12%', country: 'USA' },
    { id: 2, x: '45%', y: '45%', name: 'London Commercial Hub', val: '$8.5M', yield: '8.5%', country: 'UK' },
    { id: 3, x: '15%', y: '65%', name: 'Amazon Rainforest Reserve', val: '$1.2M', yield: '15%', country: 'Brazil' },
    { id: 4, x: '75%', y: '40%', name: 'Tokyo Tech District', val: '$12M', yield: '6%', country: 'Japan' },
    { id: 5, x: '60%', y: '70%', name: 'Dubai Oasis Parcel', val: '$6.7M', yield: '9.2%', country: 'UAE' },
    { id: 6, x: '85%', y: '70%', name: 'Sydney Coastal Land', val: '$3.5M', yield: '7%', country: 'Australia' }
];

export default function InteractiveMap() {
    const [activeNode, setActiveNode] = useState<any>(null);

    return (
        <section className="section-spacing" style={{ background: '#0a0a0a' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '3rem' }}>Global <span style={{ color: '#bfff00' }}>Land Liquidity</span></h2>
                    <p style={{ color: '#666', marginTop: '1rem' }}>Click on a protocol node to view tokenized asset details.</p>
                </div>

                <div style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '2/1',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '40px',
                    border: '1px solid var(--border)',
                    overflow: 'hidden'
                }}>
                    {/* Mock Map Background - Stylized Grid */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle, rgba(191,255,0,0.03) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }} />

                    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1 }}>
                        {/* Simple outline of world could go here */}
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
                                zIndex: activeNode?.id === node.id ? 10 : 1
                            }}
                            onMouseEnter={() => setActiveNode(node)}
                            onMouseLeave={() => setActiveNode(null)}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: node.id * 0.3 }}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    background: '#bfff00',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 20px #bfff00'
                                }}
                            />

                            {activeNode?.id === node.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    style={{
                                        position: 'absolute',
                                        top: '30px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '220px',
                                        padding: '1.5rem',
                                        background: '#111',
                                        border: '1px solid #bfff00',
                                        borderRadius: '12px',
                                        zIndex: 100,
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.8)'
                                    }}
                                >
                                    <div style={{ fontSize: '0.7rem', color: '#bfff00', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{node.country}</div>
                                    <div style={{ fontWeight: 700, marginBottom: '0.8rem' }}>{node.name}</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                        <span style={{ color: '#666' }}>Value:</span>
                                        <span style={{ color: '#fff' }}>{node.val}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                                        <span style={{ color: '#666' }}>Yield:</span>
                                        <span style={{ color: '#bfff00' }}>{node.yield}</span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <button style={{
                        color: '#bfff00',
                        border: '1px solid #bfff00',
                        padding: '1rem 3rem',
                        borderRadius: '100px',
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                        fontSize: '0.9rem',
                        fontWeight: 700
                    }}>
                        Explore Land Opportunities
                    </button>
                </div>
            </div>
        </section>
    );
}
