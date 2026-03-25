'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const problems = [
    "Fragmented Ownership",
    "Illiquid Investments",
    "Scaling Challenges",
    "Frequent Market Outages",
    "Slow Settlement",
    "Lack of Transparency",
    "High Entry Barriers",
    "Compliance Complexities"
];

const solutions = [
    "Full Asset Liquidity",
    "Global Accessibility",
    "Instant Settlement",
    "Transparent Records"
];

const ITEM_HEIGHT = 40;
const DIAGRAM_HEIGHT = 650;

export default function ProtocolFlow() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Calculate absolute Y positions
    const getLeftY = (i: number) => {
        if (problems.length === 1) return DIAGRAM_HEIGHT / 2 - ITEM_HEIGHT / 2;
        return i * ((DIAGRAM_HEIGHT - ITEM_HEIGHT) / (problems.length - 1));
    };

    const getRightY = (i: number) => {
        const startY = 150;
        const endY = DIAGRAM_HEIGHT - 150;
        if (solutions.length === 1) return DIAGRAM_HEIGHT / 2 - ITEM_HEIGHT / 2;
        return startY + i * ((endY - startY - ITEM_HEIGHT) / (solutions.length - 1));
    };

    return (
        <section className="section-spacing" style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>
                
                {/* Responsive Wrapper */}
                <div style={{ width: '100%', overflowX: isMobile ? 'auto' : 'visible' }}>
                    <div style={{ 
                        minWidth: isMobile ? '900px' : '100%', 
                        position: 'relative', 
                        height: `${DIAGRAM_HEIGHT}px`,
                        marginTop: '4rem'
                    }}>

                        {/* Text Content Overlay */}
                        <div style={{ position: 'absolute', top: 0, right: '0%', width: '45%', zIndex: 10 }}>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                                    Stop problems <br/> before they <br/> start
                                </h2>
                            </motion.div>
                        </div>

                        <div style={{ position: 'absolute', bottom: '20px', right: '0%', width: '40%', zIndex: 10 }}>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#bfff00', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: 2 }}>
                                    Land Protocol
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                                    Land Protocol aims to proactively manage and mitigate traditional asset challenges, ensuring that your digital investments remain perfectly reliable, universally accessible, and infinitely scalable—crucial for maintaining a competitive edge in today's tokenized market.
                                </p>
                            </motion.div>
                        </div>

                        {/* Background SVG for connector lines */}
                        <svg 
                            viewBox={`0 0 100 ${DIAGRAM_HEIGHT}`} 
                            preserveAspectRatio="none" 
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
                        >
                            <defs>
                                <linearGradient id="leftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ff2d55" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#5856d6" stopOpacity="0.2" />
                                </linearGradient>
                                <linearGradient id="rightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#5856d6" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#bfff00" stopOpacity="0.8" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Left paths connecting problems to center */}
                            {problems.map((_, i) => {
                                const y = getLeftY(i) + ITEM_HEIGHT / 2;
                                return (
                                    <motion.path
                                        key={`l-${i}`}
                                        d={`M 26 ${y} C 40 ${y}, 35 ${DIAGRAM_HEIGHT/2}, 45 ${DIAGRAM_HEIGHT/2}`}
                                        fill="none"
                                        stroke="url(#leftGrad)"
                                        strokeWidth="1.5"
                                        vectorEffect="non-scaling-stroke"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeInOut' }}
                                    />
                                );
                            })}

                            {/* Right paths connecting center to solutions */}
                            {solutions.map((_, i) => {
                                const y = getRightY(i) + ITEM_HEIGHT / 2;
                                return (
                                    <motion.path
                                        key={`r-${i}`}
                                        d={`M 55 ${DIAGRAM_HEIGHT/2} C 65 ${DIAGRAM_HEIGHT/2}, 60 ${y}, 74 ${y}`}
                                        fill="none"
                                        stroke="url(#rightGrad)"
                                        strokeWidth="1.5"
                                        vectorEffect="non-scaling-stroke"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: 'easeInOut' }}
                                    />
                                );
                            })}
                        </svg>

                        {/* Left Column (Problems) */}
                        <div style={{ position: 'absolute', left: 0, top: 0, width: '26%', height: '100%', zIndex: 2 }}>
                            {problems.map((text, i) => (
                                <motion.div
                                    key={`prob-${i}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    style={{
                                        position: 'absolute',
                                        top: `${getLeftY(i)}px`,
                                        width: '100%',
                                        height: `${ITEM_HEIGHT}px`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0 1rem',
                                        background: 'rgba(255, 45, 85, 0.05)',
                                        border: '1px solid rgba(255, 45, 85, 0.4)',
                                        borderRadius: '100px',
                                        color: '#fff',
                                        fontSize: '0.85rem',
                                        fontWeight: 500,
                                        gap: '0.5rem',
                                        boxShadow: '0 0 15px rgba(255, 45, 85, 0.1)',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    <AlertCircle size={14} color="#ff2d55" />
                                    {text}
                                </motion.div>
                            ))}
                        </div>

                        {/* Center Column (Graphic) */}
                        <div style={{ position: 'absolute', left: '45%', top: '50%', transform: 'translateY(-50%)', width: '10%', zIndex: 5, display: 'flex', justifyContent: 'center' }}>
                            <motion.div 
                                style={{
                                    width: '180px',
                                    height: '220px',
                                    position: 'relative'
                                }}
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                {/* Abstract Core Graphic representing the protocol */}
                                <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 40px rgba(88, 86, 214, 0.4))' }}>
                                    {/* Central Hexagon Background */}
                                    <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="rgba(88,86,214,0.15)" stroke="rgba(88,86,214,0.4)" strokeWidth="0.5" />
                                    
                                    {/* 3D Cubes Arrangement */}
                                    {[
                                        { cx: 50, cy: 35, c: '#bfff00' },
                                        { cx: 35, cy: 50, c: '#fff' },
                                        { cx: 65, cy: 50, c: '#777' },
                                        { cx: 50, cy: 65, c: '#aaa' },
                                    ].map((cube, i) => (
                                        <g key={i} transform={`translate(${cube.cx - 50}, ${cube.cy - 50})`}>
                                            <motion.g 
                                                animate={{ 
                                                    y: [-2, 2, -2] 
                                                }}
                                                transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                                            >
                                                {/* Top face */}
                                                <polygon points="50,42 58,46 50,50 42,46" fill={cube.c} stroke="rgba(0,0,0,0.5)" strokeWidth="0.5"/>
                                                {/* Left face */}
                                                <polygon points="42,46 50,50 50,58 42,54" fill={cube.c} opacity="0.6" stroke="rgba(0,0,0,0.5)" strokeWidth="0.5"/>
                                                {/* Right face */}
                                                <polygon points="50,50 58,46 58,54 50,58" fill={cube.c} opacity="0.3" stroke="rgba(0,0,0,0.5)" strokeWidth="0.5"/>
                                            </motion.g>
                                        </g>
                                    ))}
                                </svg>
                            </motion.div>
                        </div>

                        {/* Right Column (Solutions) */}
                        <div style={{ position: 'absolute', right: 0, top: 0, width: '26%', height: '100%', zIndex: 2 }}>
                            {solutions.map((text, i) => (
                                <motion.div
                                    key={`sol-${i}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.05 }}
                                    style={{
                                        position: 'absolute',
                                        top: `${getRightY(i)}px`,
                                        width: '100%',
                                        height: `${ITEM_HEIGHT}px`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0 1.5rem',
                                        background: 'rgba(191, 255, 0, 0.05)',
                                        border: '1px solid rgba(191, 255, 0, 0.4)',
                                        borderRadius: '100px',
                                        color: '#fff',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        gap: '0.6rem',
                                        boxShadow: '0 0 20px rgba(191, 255, 0, 0.1)',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    <CheckCircle2 size={16} color="#bfff00" />
                                    {text}
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
