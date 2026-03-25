'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);

        if (latest > lastScrollY && latest > 500) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(latest);
    });

    const navItems = [
        { name: 'Protocol', href: '#protocol' },
        { name: 'Assets', href: '#assets' },
        { name: 'Economy', href: '#economy' }
    ];

    return (
        <>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                zIndex: 1000,
                padding: isScrolled ? '1.5rem 1rem' : '0',
                pointerEvents: 'none'
            }}>
                <motion.nav
                    layout
                    initial={{ y: -100 }}
                    animate={{
                        y: isVisible ? 0 : -150,
                        width: isScrolled ? 'auto' : '100%',
                        maxWidth: isScrolled ? '900px' : '100%',
                        height: isScrolled ? '64px' : '90px',
                        borderRadius: isScrolled ? '100px' : '0px',
                        padding: isScrolled ? '0 1.5rem' : '0 5%',
                        background: isScrolled ? 'rgba(10, 10, 10, 0.85)' : 'rgba(0, 0, 0, 0)',
                        border: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0)',
                        boxShadow: isScrolled ? '0 20px 40px rgba(0,0,0,0.6)' : 'none'
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                        mass: 1
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
                        pointerEvents: 'auto'
                    }}
                >
                    <div className="nav-container" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '2rem'
                    }}>
                        {/* Left: Branding */}
                        <div style={{ flexShrink: 0 }}>
                            <motion.div
                                layout
                                style={{
                                    fontWeight: 900,
                                    fontSize: isScrolled ? '0.75rem' : '1rem',
                                    letterSpacing: '0.4em',
                                    color: '#fff',
                                    textTransform: 'uppercase',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                LAND PROTOCOL
                            </motion.div>
                        </div>

                        {/* Right Section: Links + CTA */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', marginLeft: 'auto' }}>
                            {/* Desktop Menu Links */}
                            <div className="desktop-links" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: isScrolled ? '2rem' : '3rem'
                            }}>
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onMouseEnter={() => setHovered(item.name)}
                                        onMouseLeave={() => setHovered(null)}
                                        style={{
                                            position: 'relative',
                                            padding: '0.5rem 0',
                                            fontSize: '0.65rem',
                                            fontWeight: 700,
                                            color: hovered === item.name || !isScrolled ? '#fff' : 'rgba(255,255,255,0.4)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.2em',
                                            transition: 'color 0.3s ease',
                                            textDecoration: 'none',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {item.name}
                                        {hovered === item.name && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                style={{
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: '1px',
                                                    background: '#fff'
                                                }}
                                            />
                                        )}
                                    </a>
                                ))}
                            </div>

                            {/* Launch Button */}
                            <div className="desktop-links">
                                <button style={{
                                    background: isScrolled ? '#fff' : 'transparent',
                                    border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.2)',
                                    color: isScrolled ? '#000' : '#fff',
                                    padding: isScrolled ? '0.6rem 1.6rem' : '0.75rem 2.2rem',
                                    borderRadius: '100px',
                                    fontSize: '0.65rem',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap'
                                }}>
                                    Launch App <ChevronRight size={14} />
                                </button>
                            </div>

                            {/* Mobile Hamburger Toggle - ONLY visible on mobile */}
                            <div className="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>
                                <Menu size={24} color="#fff" />
                            </div>
                        </div>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(5, 5, 5, 0.98)',
                            backdropFilter: 'blur(25px)',
                            zIndex: 2000,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '2.5rem 5%',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
                            <div style={{ fontWeight: 900, letterSpacing: '0.4em', color: '#fff', fontSize: '0.8rem' }}>LAND PROTOCOL</div>
                            <div onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', cursor: 'pointer' }}>
                                <X size={32} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        fontSize: '2rem',
                                        color: '#fff',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.2em',
                                        fontWeight: 900,
                                        textDecoration: 'none'
                                    }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>

                        <div style={{ marginTop: 'auto', paddingBottom: '2rem' }}>
                            <button style={{
                                width: '100%',
                                background: '#fff',
                                color: '#000',
                                border: 'none',
                                padding: '1.2rem',
                                borderRadius: '12px',
                                fontWeight: 900,
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em'
                            }}>
                                Launch Terminal
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                /* Default visibility: Desktop links shown, Toggle hidden */
                .desktop-links {
                    display: flex !important;
                }
                .mobile-toggle {
                    display: none !important;
                    cursor: pointer;
                    padding: 8px;
                }

                @media (max-width: 968px) {
                    /* Mobile visibility: Toggle shown, Desktop links hidden */
                    .desktop-links {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: flex !important;
                        align-items: center;
                    }
                    .nav-container {
                        gap: 1rem !important;
                    }
                }
            `}</style>
        </>
    );
}
