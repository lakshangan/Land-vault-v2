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
        // Morphing transition logic
        setIsScrolled(latest > 50);

        // Hide on scroll down, show on scroll up logic from provided snippet
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
        { name: 'Economy', href: '#economy' },
        { name: 'Governance', href: '#governance' }
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
                padding: isScrolled ? '2rem 1rem' : '0',
                pointerEvents: 'none'
            }}>
                <motion.nav
                    layout
                    initial={{ y: -100 }}
                    animate={{
                        y: isVisible ? 0 : -150, // Hide/Show logic
                        width: isScrolled ? 'auto' : '100%',
                        height: isScrolled ? '64px' : '90px',
                        borderRadius: isScrolled ? '100px' : '0px',
                        padding: isScrolled ? '0 12px' : '0 5%',
                        background: isScrolled ? 'rgba(10, 10, 10, 0.7)' : 'rgba(5, 5, 5, 0)',
                        border: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0)',
                        boxShadow: isScrolled ? '0 20px 40px rgba(0,0,0,0.4)' : 'none'
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                        mass: 1,
                        bounce: 0.2
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
                        pointerEvents: 'auto'
                    }}
                >
                    {/* Main Navigation Container */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'space-between',
                        gap: isScrolled ? '2.5rem' : '0'
                    }}>
                        {/* Branding */}
                        <motion.div
                            layout
                            style={{
                                fontWeight: 900,
                                fontSize: isScrolled ? '0.8rem' : '1.2rem',
                                letterSpacing: '0.3em',
                                color: '#fff',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            LAND VAULT
                        </motion.div>

                        {/* Desktop Desktop Links */}
                        <motion.div
                            layout
                            className="desktop-links"
                            style={{
                                gap: isScrolled ? '4px' : '4rem',
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
                                        fontSize: isScrolled ? '0.7rem' : '0.75rem',
                                        fontWeight: 700,
                                        color: hovered === item.name || !isScrolled ? '#fff' : 'rgba(255,255,255,0.4)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.15em',
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
                                                background: 'rgba(255,255,255,0.05)',
                                                borderRadius: '100px',
                                                zIndex: -1,
                                                border: '1px solid rgba(255,255,255,0.1)'
                                            }}
                                        />
                                    )}
                                    {!isScrolled && hovered === item.name && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            style={{ position: 'absolute', bottom: -10, left: 0, right: 0, height: '1px', background: '#fff' }}
                                        />
                                    )}
                                    {item.name}
                                </a>
                            ))}
                        </motion.div>

                        {/* Launch Button / Mobile Toggle */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <motion.div layout className="desktop-links">
                                <button style={{
                                    background: isScrolled ? '#fff' : 'transparent',
                                    border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.2)',
                                    color: isScrolled ? '#000' : '#fff',
                                    padding: isScrolled ? '0.6rem 2rem' : '0.8rem 2.5rem',
                                    borderRadius: isScrolled ? '100px' : '4px',
                                    fontSize: '0.7rem',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    Lanuch App  <ChevronRight size={14} />
                                </button>
                            </motion.div>

                            <div className="mobile-toggle" onClick={() => setMobileMenuOpen(true)} style={{ color: '#fff', cursor: 'pointer', padding: '10px' }}>
                                <Menu size={24} />
                            </div>
                        </div>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(5, 5, 5, 0.98)',
                            backdropFilter: 'blur(20px)',
                            zIndex: 2000,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '3rem'
                        }}
                    >
                        <div onClick={() => setMobileMenuOpen(false)} style={{ position: 'absolute', top: '2.5rem', right: '5%', color: '#fff', cursor: 'pointer' }}>
                            <X size={32} />
                        </div>

                        <div style={{ fontWeight: 900, letterSpacing: '0.4em', color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', marginBottom: '2rem' }}>NAVIGATION_MENU</div>

                        <div className="mobile-menu-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mobile-menu-link"
                                    style={{
                                        fontSize: '1.5rem',
                                        color: '#fff',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.3em',
                                        fontWeight: 800,
                                        textDecoration: 'none'
                                    }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                marginTop: '4rem',
                                background: '#fff',
                                color: '#000',
                                border: 'none',
                                padding: '1.2rem 4rem',
                                borderRadius: '100px',
                                fontWeight: 900,
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em'
                            }}
                        >
                            Launch Terminal
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        .desktop-links { display: flex; }
        @media (min-width: 969px) {
          .mobile-toggle { display: none; }
        }
        @media (max-width: 968px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (max-width: 768px) {
            .mobile-menu-container {
                gap: 2rem !important;
            }
            .mobile-menu-link {
                font-size: 1.2rem !important;
                letter-spacing: 0.2rem !important;
            }
        }
      `}</style>
        </>
    );
}
