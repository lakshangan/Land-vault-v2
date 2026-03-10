'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

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
                    padding: '0 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    background: 'rgba(10, 10, 10, 0.6)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    borderRadius: '100px',
                    border: '1px solid aria(255, 255, 255, 0.08)',
                    boxShadow: scrolled ? '0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.02)' : '0 10px 30px rgba(0,0,0,0.2)',
                    transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                    width: 'max-content'
                }}
            >
                {/* Brand Text - No Logo Icon */}
                <div style={{ paddingLeft: '1.5rem', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        fontWeight: 900,
                        fontSize: '0.85rem',
                        letterSpacing: '0.25em',
                        color: '#fff',
                        textTransform: 'uppercase'
                    }}>
                        LAND VAULT
                    </div>
                </div>

                {/* Dynamic Separator */}
                <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', marginLeft: '0.5rem' }} />

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
                                padding: '0.6rem 1.4rem',
                                fontSize: '0.72rem',
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
                                        background: 'rgba(255,255,255,0.04)',
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

                {/* Launch Button */}
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
          transform: scale(1.04);
          box-shadow: 0 15px 30px rgba(255,255,255,0.2);
        }
      `}</style>
        </div>
    );
}
