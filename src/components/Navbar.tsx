'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Network, ChevronRight } from 'lucide-react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) setScrolled(true);
        else setScrolled(false);
    });

    const navItems = [
        { name: 'Protocol', href: '#protocol' },
        { name: 'Assets', href: '#assets' },
        { name: 'Economy', href: '#economy' },
        { name: 'Governance', href: '#governance' }
    ];

    return (
        <div style={{
            position: 'fixed',
            top: '2rem',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '0 1rem'
        }}>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{
                    height: '64px',
                    padding: '0 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'rgba(10, 10, 10, 0.6)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    borderRadius: '100px', // The "Cylinder" / Pill shape
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: scrolled ? '0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.02)' : '0 10px 30px rgba(0,0,0,0.2)',
                    transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                    width: 'max-content'
                }}
            >
                {/* Brand Logo - Cylindrical Icon */}
                <div style={{ paddingLeft: '1rem', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        background: 'linear-gradient(135deg, #ff2d55, #5856d6)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 0 15px rgba(88,86,214,0.4)'
                    }}>
                        <Network size={18} />
                    </div>
                </div>

                {/* Separator */}
                <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />

                {/* Navigation Links */}
                <div style={{ display: 'flex', gap: '4px' }}>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onMouseEnter={() => setHovered(item.name)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                position: 'relative',
                                padding: '0.6rem 1.5rem',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: hovered === item.name ? '#fff' : 'rgba(255,255,255,0.5)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                transition: 'color 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                zIndex: 1
                            }}
                        >
                            {hovered === item.name && (
                                <motion.div
                                    layoutId="nav-glow"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '100px',
                                        zIndex: -1,
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Launch Button - The Outer Pill */}
                <div style={{ paddingRight: '4px' }}>
                    <button style={{
                        background: '#fff',
                        color: '#000',
                        padding: '0.6rem 1.8rem',
                        borderRadius: '100px',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
                        boxShadow: '0 10px 20px rgba(255,255,255,0.1)'
                    }}
                        className="nav-cta-pill"
                    >
                        Terminal <ChevronRight size={14} />
                    </button>
                </div>
            </motion.nav>

            <style jsx>{`
        .nav-cta-pill:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(255,255,255,0.2);
        }
      `}</style>
        </div>
    );
}
