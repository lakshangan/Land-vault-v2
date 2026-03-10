'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: 'var(--nav-height)',
                display: 'flex',
                alignItems: 'center',
                zIndex: 100,
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: 2, color: '#bfff00' }}>
                    LAND VAULT
                </div>

                <div style={{ display: 'flex', gap: '3rem', fontSize: '0.9rem', color: '#aaa' }}>
                    {['Protocol', 'Assets', 'Economy', 'Governance'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{ transition: 'color 0.2s' }}
                            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#fff'}
                            onMouseOut={(e) => (e.target as HTMLElement).style.color = '#aaa'}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <button style={{
                    border: '1px solid rgba(191, 255, 0, 0.3)',
                    color: '#bfff00',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '100px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.3s'
                }}
                    onMouseOver={(e) => {
                        (e.target as HTMLElement).style.background = '#bfff00';
                        (e.target as HTMLElement).style.color = '#000';
                    }}
                    onMouseOut={(e) => {
                        (e.target as HTMLElement).style.background = 'transparent';
                        (e.target as HTMLElement).style.color = '#bfff00';
                    }}
                >
                    Launch App
                </button>
            </div>
        </motion.nav>
    );
}
