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
    const borderRadius = useTransform(springProgress, [0, 1], ["100px", "100px"]); // Maintain 100px rounded corners at all times
    const scale = useTransform(springProgress, [0, 1], [0.95, 1]);
    const opacity = useTransform(springProgress, [0, 0.4], [0, 1]);

    return (
        <section ref={containerRef} style={{
            background: '#000', // Pure black
            minHeight: '140vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Ambient Shades - subtle glows on black */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '20%',
                width: '700px',
                height: '700px',
                background: 'radial-gradient(circle, rgba(88, 86, 214, 0.08) 0%, transparent 70%)',
                filter: 'blur(120px)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(191, 255, 0, 0.05) 0%, transparent 70%)',
                filter: 'blur(120px)',
                pointerEvents: 'none'
            }} />

            <motion.div
                style={{
                    width,
                    borderRadius,
                    scale,
                    opacity,
                    background: '#ffffff', // Clean white for the expanding panel
                    border: '1px solid rgba(0,0,0,0.04)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 60px 120px rgba(0,0,0,0.3)',
                    transformStyle: 'preserve-3d'
                }}
            >
                {/* Section Content */}
                <div style={{ padding: '10rem 4rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 0.9, marginBottom: '2rem', fontWeight: 900, color: '#000', letterSpacing: '-0.03em' }}>
                                Global <span style={{
                                    background: 'linear-gradient(90deg, #5856d6, #007aff)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>Land Liquidity</span>
                            </h2>
                            <p style={{ color: 'rgba(0,0,0,0.45)', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6, fontWeight: 500 }}>
                                Real-time visualization of tokenized land protocol nodes across global jurisdictions.
                            </p>
                        </motion.div>
                    </div>

                    <div style={{ position: 'relative', width: '100%', aspectRatio: '21/9', margin: '0 auto' }}>

                        {/* HUD Overlays - Premium Glassmorphism on White */}
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
                                padding: '1.8rem',
                                border: '1px solid rgba(0,0,0,0.05)',
                                backdropFilter: 'blur(30px)',
                                borderRadius: '24px',
                                background: 'rgba(255,255,255,0.7)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.6rem',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#5856d6' }}>
                                    <Globe size={14} />
                                    <span style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase' }}>Jurisdiction Mesh</span>
                                </div>
                                <div style={{ fontSize: '1.8rem', color: '#000', fontWeight: 900, letterSpacing: -1 }}>42_ACTIVE_NODES</div>
                                <div style={{ width: '40px', height: '3px', background: '#5856d6', borderRadius: '2px' }} />
                            </div>
                        </div>

                        {/* Map Background with Very Subtle Grid */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.08) 1.5px, transparent 0)`,
                            backgroundSize: '50px 50px',
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
                                        animate={{ scale: [1, 3.5], opacity: [0.3, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: node.id * 0.4 }}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '20px',
                                            height: '20px',
                                            background: node.color,
                                            borderRadius: '50%',
                                            filter: 'blur(4px)'
                                        }}
                                    />
                                    <motion.div
                                        whileHover={{ scale: 1.8 }}
                                        style={{
                                            width: '14px',
                                            height: '14px',
                                            background: node.color,
                                            borderRadius: '50%',
                                            boxShadow: `0 0 20px ${node.color}44`,
                                            border: '3px solid #fff',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                </div>

                                {activeNode?.id === node.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        style={{
                                            position: 'absolute',
                                            bottom: '40px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '320px',
                                            padding: '2.5rem',
                                            background: '#ffffff',
                                            backdropFilter: 'blur(40px)',
                                            border: `1px solid rgba(0,0,0,0.06)`,
                                            borderRadius: '32px',
                                            zIndex: 100,
                                            boxShadow: '0 40px 80px rgba(0,0,0,0.12)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                            <span style={{ fontSize: '0.65rem', color: node.color, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 3 }}>REGISTRY_NODE</span>
                                            <ShieldCheck size={16} color={node.color} />
                                        </div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '2rem', color: '#000', letterSpacing: -0.5 }}>{node.name}</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ color: 'rgba(0,0,0,0.4)', fontSize: '0.75rem', fontWeight: 800 }}>VALUATION</span>
                                                <span style={{ color: '#000', fontSize: '0.85rem', fontWeight: 900 }}>{node.val}</span>
                                            </div>
                                            <div style={{ height: '1px', background: 'rgba(0,0,0,0.04)' }} />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ color: 'rgba(0,0,0,0.4)', fontSize: '0.75rem', fontWeight: 800 }}>EST. YIELD</span>
                                                <span style={{ color: node.color, fontSize: '0.85rem', fontWeight: 900 }}>{node.yield} APY</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '14rem' }}>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: '#000',
                                color: '#fff',
                                padding: '1.5rem 5rem',
                                borderRadius: '100px',
                                fontWeight: 900,
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: 4,
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            className="map-primary-btn"
                        >
                            Open Protocol terminal
                        </motion.button>
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
