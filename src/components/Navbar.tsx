'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) setIsScrolled(true);
        else setIsScrolled(false);
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
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            zIndex: 1000,
            padding: isScrolled ? '1.5rem 1rem' : '0'
        }}>
            <motion.nav
                layout
                initial={{ y: -100 }}
                animate={{
                    y: 0,
                    width: isScrolled ? 'auto' : '100%',
                    height: isScrolled ? '64px' : '80px',
                    borderRadius: isScrolled ? '100px' : '0px',
                    padding: isScrolled ? '0 12px' : '0 4rem',
                    background: isScrolled ? 'rgba(10, 10, 10, 0.6)' : 'rgba(5, 5, 5, 0)',
                    borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0)',
                    boxShadow: isScrolled ? '0 20px 40px rgba(0,0,0,0.4)' : 'none'
                }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    bounce: 0.3,
                    duration: 0.8
                }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
                    WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
                    position: 'relative'
                }}
            >
                {/* Container for content */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-between',
                    gap: isScrolled ? '1.5rem' : '4rem'
                }}>
                    {/* Brand Text */}
                    <motion.div
                        layout
                        style={{
                            fontWeight: 900,
                            fontSize: isScrolled ? '0.8rem' : '1rem',
                            letterSpacing: '0.25em',
                            color: '#fff',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        LAND VAULT
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div
                        layout
                        style={{
                            display: 'flex',
                            gap: isScrolled ? '8px' : '4rem',
                            alignItems: 'center'
                        }}
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onMouseEnter={() => setHovered(item.name)}
                                onMouseLeave={() => setHovered(null)}
                                style={{
                                    position: 'relative',
                                    padding: isScrolled ? '0.6rem 1.4rem' : '0.5rem 0',
                                    fontSize: isScrolled ? '0.7rem' : '0.85rem',
                                    fontWeight: 700,
                                    color: hovered === item.name || !isScrolled ? '#fff' : 'rgba(255,255,255,0.4)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    transition: 'color 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    zIndex: 1
                                }}
                            >
                                {isScrolled && hovered === item.name && (
                                    <motion.div
                                        layoutId="nav-glow"
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'rgba(255,255,255,0.06)',
                                            borderRadius: '100px',
                                            zIndex: -1,
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {!isScrolled && hovered === item.name && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        style={{
                                            position: 'absolute',
                                            bottom: -4,
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: '#fff'
                                        }}
                                    />
                                )}
                                {item.name}
                            </a>
                        ))}
                    </motion.div>

                    {/* Action Button */}
                    <motion.div layout>
                        <button style={{
                            background: isScrolled ? '#fff' : 'transparent',
                            border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.2)',
                            color: isScrolled ? '#000' : '#fff',
                            padding: isScrolled ? '0.6rem 1.8rem' : '0.8rem 2.2rem',
                            borderRadius: isScrolled ? '100px' : '4px',
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
                            boxShadow: isScrolled ? '0 10px 20px rgba(255,255,255,0.1)' : 'none'
                        }}
                            className="nav-cta-dynamic"
                        >
                            Terminal <ChevronRight size={14} />
                        </button>
                    </motion.div>
                </div>
            </motion.nav>

            <style jsx>{`
        .nav-cta-dynamic:hover {
          transform: scale(1.04);
          background: #fff;
          color: #000;
          border-color: #fff;
        }
      `}</style>
        </div>
    );
}
