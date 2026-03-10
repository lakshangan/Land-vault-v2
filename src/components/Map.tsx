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

    // Expansion Effect
    const width = useTransform(springProgress, [0, 1], ["80%", "100%"]);
    const borderRadius = useTransform(springProgress, [0, 1], ["48px", "0px"]);
    const scale = useTransform(springProgress, [0, 1], [0.95, 1]);
    const opacity = useTransform(springProgress, [0, 0.4], [0, 1]);

    return (
        <section ref={containerRef} style={{
            background: 'radial-gradient(circle at 50% 50%, #0a0a0f 0%, #050505 100%)', // Subtle deep blue-black gradient
            minHeight: '140vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Ambient Shades */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(88, 86, 214, 0.05) 0%, transparent 70%)',
                filter: 'blur(100px)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(255, 45, 85, 0.03) 0%, transparent 70%)',
                filter: 'blur(100px)',
                pointerEvents: 'none'
            }} />

            <motion.div
                style={{
                    width,
                    borderRadius,
                    scale,
                    opacity,
                    background: 'linear-gradient(135deg, rgba(15, 15, 20, 0.95) 0%, rgba(5, 5, 5, 0.98) 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 50px 150px rgba(0,0,0,0.9), inset 0 0 40px rgba(255,255,255,0.02)'
                }}
            >
                {/* Section Content */}
                <div style={{ padding: '10rem 4rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 0.9, marginBottom: '2rem', fontWeight: 800 }}>
                                Global <span style={{
                                    background: 'linear-gradient(90deg, #5856d6, #007aff)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textShadow: '0 0 30px rgba(88,86,214,0.1)'
                                }}>Land Liquidity</span>
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
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
                                borderRadius: '16px',
                                background: 'rgba(255,255,255,0.02)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#5856d6', opacity: 0.8 }}>
                                    <Globe size={14} />
                                    <span style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase' }}>Jurisdiction Mesh</span>
                                </div>
                                <div style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 900, letterSpacing: -0.5 }}>42_ACTIVE_NODES</div>
                                <div style={{ width: '40px', height: '2px', background: '#5856d6' }} />
                            </div>
                        </div>

                        {/* Map Background with Enhanced Grid */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.04) 1px, transparent 0)`,
                            backgroundSize: '40px 40px',
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
                                        animate={{ scale: [1, 3.5], opacity: [0.5, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, delay: node.id * 0.4 }}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '18px',
                                            height: '18px',
                                            background: node.color,
                                            borderRadius: '50%',
                                            filter: 'blur(2px)'
                                        }}
                                    />
                                    <motion.div
                                        whileHover={{ scale: 1.6 }}
                                        style={{
                                            width: '12px',
                                            height: '12px',
                                            background: node.color,
                                            borderRadius: '50%',
                                            boxShadow: `0 0 25px ${node.color}`,
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
                                            bottom: '35px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '300px',
                                            padding: '2.5rem',
                                            background: 'rgba(5, 5, 5, 0.98)',
                                            backdropFilter: 'blur(40px)',
                                            border: `1px solid ${node.color}66`,
                                            borderRadius: '28px',
                                            zIndex: 100,
                                            boxShadow: '0 40px 80px rgba(0,0,0,0.9)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.8rem' }}>
                                            <span style={{ fontSize: '0.65rem', color: node.color, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 3 }}>REGISTRY_NODE</span>
                                            <ShieldCheck size={14} color={node.color} />
                                        </div>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '1.8rem', color: '#fff', letterSpacing: -0.5 }}>{node.name}</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 800 }}>VALUATION</span>
                                                <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 900 }}>{node.val}</span>
                                            </div>
                                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 800 }}>EST. YIELD</span>
                                                <span style={{ color: node.color, fontSize: '0.85rem', fontWeight: 900 }}>{node.yield} APY</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '12rem' }}>
                        <button style={{
                            background: '#fff',
                            color: '#000',
                            padding: '1.4rem 4.5rem',
                            borderRadius: '100px',
                            fontWeight: 900,
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: 4,
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            boxShadow: '0 20px 40px rgba(255,255,255,0.1)'
                        }}
                            className="map-primary-btn"
                        >
                            Open Protocol terminal
                        </button>
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
                .map-primary-btn:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 30px 60px rgba(255,255,255,0.2);
                }
                @media (max-width: 992px) {
                    section {
                        min-height: 100vh !important;
                    }
                    div[style*="aspect-ratio"] {
                        aspect-ratio: 1/1 !important;
                        height: 400px !important;
                    }
                    div[style*="HUD Overlays"] {
                        position: relative !important;
                        top: 0 !important;
                        left: 0 !important;
                        margin-bottom: 2rem;
                        align-items: center;
                    }
                    .map-primary-btn {
                        padding: 1.2rem 3rem !important;
                        font-size: 0.75rem !important;
                        letter-spacing: 2px !important;
                    }
                }
            `}</style>

        </section>
    );
}
