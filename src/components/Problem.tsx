'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Lock, Globe, EyeOff } from 'lucide-react';

const problems = [
    {
        title: "Document Fraud",
        desc: "Land fraud and tampered records cost billions annually in legal disputes.",
        icon: <AlertTriangle size={32} color="#bfff00" />
    },
    {
        title: "Illiquidity",
        desc: "Real estate is famously illiquid, with exit timelines often taking months or years.",
        icon: <Lock size={32} color="#bfff00" />
    },
    {
        title: "Market Barriers",
        desc: "Limited global investment access prevents small investors from high-yield land beta.",
        icon: <Globe size={32} color="#bfff00" />
    },
    {
        title: "Opacity",
        desc: "Lack of transparency in ownership leads to significant risk for institutional buyers.",
        icon: <EyeOff size={32} color="#bfff00" />
    }
];

export default function Problem() {
    return (
        <section className="section-spacing" style={{ background: '#0a0a0a' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        style={{ color: '#c5a059', letterSpacing: 2, fontSize: '0.8rem', textTransform: 'uppercase' }}
                    >
                        THE CURRENT LANDSCAPE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3rem', marginTop: '1rem' }}
                    >
                        The Land System is <span style={{ color: '#bfff00' }}>Broken</span>.
                    </motion.h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {problems.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{ padding: '3rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>{p.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.title}</h3>
                            <p style={{ color: '#666', lineHeight: 1.6 }}>{p.desc}</p>

                            {/* Subtle accent line */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '0%',
                                height: '2px',
                                background: '#bfff00',
                                transition: 'width 0.3s'
                            }}
                                className="accent-line" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .glass:hover .accent-line {
          width: 100% !important;
        }
      `}</style>
        </section>
    );
}
