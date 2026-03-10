'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useRef } from 'react';
import { Target, Activity, ShieldCheck, Globe } from 'lucide-react';

const nodes = [
    { id: 1, x: '25%', y: '35%', name: 'Silicon Valley Plot', val: '$4.2M', yield: '12.4%', country: 'USA', color: "#ff2d55" },
    { id: 2, x: '47%', y: '40%', name: 'London Commercial Hub', val: '$8.5M', yield: '8.5%', country: 'UK', color: "#5856d6" },
    { id: 3, x: '18%', y: '60%', name: 'Amazon Rainforest Reserve', val: '$1.2M', yield: '15.2%', country: 'Brazil', color: "#007aff" },
    { id: 4, x: '78%', y: '38%', name: 'Tokyo Tech District', val: '$12.0M', yield: '6.1%', country: 'Japan', color: "#ff9500" },
    { id: 5, x: '62%', y: '65%', name: 'Dubai Oasis Parcel', val: '$6.7M', yield: '9.2%', country: 'UAE', color: "#ffcc00" },
    { id: 6, x: '88%', y: '68%', name: 'Sydney Coastal Land', val: '$3.5M', yield: '7.4%', country: 'Australia', color: "#ff2d55" }
];

export default function InteractiveMap() {
    const [activeNode, setActiveNode] = useState<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

    // Expansion Effect: Starts as a card, becomes full-width section
    const width = useTransform(springProgress, [0, 1], ["80%", "100%"]);
    const borderRadius = useTransform(springProgress, [0, 1], ["40px", "0px"]);
    const scale = useTransform(springProgress, [0, 1], [0.95, 1]);
    const opacity = useTransform(springProgress, [0, 0.4], [0, 1]);

    return (
        <section ref={containerRef} style={{ background: '#050505', minHeight: '120vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                style={{
                    width,
                    borderRadius,
                    scale,
                    opacity,
                    background: '#0a0a0a',
                    border: '1px solid rgba(255,255,255,0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.8)'
                }}
            >
                {/* Section Content */}
                <div style={{ padding: '8rem 4rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 0.9, marginBottom: '2rem' }}>
                                Global <span style={{
                                    background: 'linear-gradient(90deg, #ff2d55, #5856d6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Land Liquidity</span>
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                                Real-time visualization of tokenized land protocol nodes across global jurisdictions.
                            </p>
                        </motion.div>
                    </div>

                    <div style={{ position: 'relative', width: '100%', aspectRatio: '21/9', margin: '0 auto' }}>

                        {/* HUD Overlays */}
                        <div style={{
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            zIndex: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            pointerEvents: 'none'
                        }}>
                            <div style={{
                                padding: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.02)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#5856d6', marginBottom: '0.8rem' }}>
                                    <Globe size={16} />
                                    <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase' }}>Jurisdiction Mesh</span>
                                </div>
                                <div style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 800 }}>42 ACTIVE REGIONS</div>
                            </div>
                        </div>

                        {/* Map Background with Grid */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.03) 1px, transparent 0)`,
                            backgroundSize: '40px 40px',
                            borderRadius: '24px'
                        }} />

                        {/* Interactive Data Points */}
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
                                    <motion.div
                                        animate={{ scale: [1, 3], opacity: [0.4, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: node.id * 0.3 }}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '20px',
                                            height: '20px',
                                            background: node.color,
                                            borderRadius: '50%'
                                        }}
                                    />
                                    <motion.div
                                        whileHover={{ scale: 1.5 }}
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            background: node.color,
                                            borderRadius: '50%',
                                            boxShadow: `0 0 20px ${node.color}`,
                                            border: '2px solid #000'
                                        }}
                                    />
                                </div>

                                {activeNode?.id === node.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        style={{
                                            position: 'absolute',
                                            bottom: '30px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '280px',
                                            padding: '2rem',
                                            background: 'rgba(5, 5, 5, 0.98)',
                                            backdropFilter: 'blur(30px)',
                                            border: `1px solid ${node.color}55`,
                                            borderRadius: '24px',
                                            zIndex: 100,
                                            boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                            <span style={{ fontSize: '0.65rem', color: node.color, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2 }}>{node.country} NODE</span>
                                            <ShieldCheck size={14} color={node.color} />
                                        </div>
                                        <div style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.5rem', color: '#fff' }}>{node.name}</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontWeight: 600 }}>VALUATION:</span>
                                                <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 800 }}>{node.val}</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontWeight: 600 }}>YIELD:</span>
                                                <span style={{ color: node.color, fontSize: '0.8rem', fontWeight: 800 }}>{node.yield} APY</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '10rem' }}>
                        <button style={{
                            background: '#fff',
                            color: '#000',
                            padding: '1.2rem 4rem',
                            borderRadius: '100px',
                            fontWeight: 800,
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: 3,
                            transition: 'all 0.3s ease'
                        }}
                            className="map-action-btn"
                        >
                            Explore Registry
                        </button>
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
                .map-action-btn:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(255,255,255,0.1);
                }
            `}</style>
        </section>
    );
}
