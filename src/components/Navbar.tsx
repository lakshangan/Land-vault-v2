'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Network } from 'lucide-react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) setScrolled(true);
        else setScrolled(false);
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
                zIndex: 1000,
                transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #ff2d55, #5856d6)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff'
                    }}>
                        <Network size={18} />
                    </div>
                    <div style={{
                        fontWeight: 800,
                        fontSize: '1rem',
                        letterSpacing: '0.2em',
                        color: '#fff',
                        textTransform: 'uppercase'
                    }}>
                        LAND VAULT
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    gap: '3.5rem',
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.5)',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '0.1em'
                }}>
                    {['Protocol', 'Assets', 'Economy', 'Governance'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{ transition: 'all 0.3s ease' }}
                            className="nav-link"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <button style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#fff',
                    padding: '0.75rem 2rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)'
                }}
                    className="nav-cta"
                >
                    Launch Terminal
                </button>
            </div>

            <style jsx>{`
        .nav-link:hover {
          color: #fff;
          text-shadow: 0 0 20px rgba(255,255,255,0.3);
          transform: translateY(-1px);
        }
        .nav-cta:hover {
          background: #fff;
          color: #000;
          box-shadow: 0 10px 30px rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }
      `}</style>
        </motion.nav>
    );
}
