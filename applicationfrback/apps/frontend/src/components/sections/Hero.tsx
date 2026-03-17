import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/20 blur-[120px] rounded-full opacity-30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-sm font-medium text-primary mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          RWA Infrastructure on Base Testnet
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-syne font-extrabold tracking-tight leading-[1.1] mb-8 max-w-5xl"
        >
          Infrastructure for <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
            Tokenizing Real Assets
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12"
        >
          A decentralized protocol unlocking global access to real estate, energy, 
          and infrastructure through over-collateralized tokenization and fractional ownership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link to="/marketplace" className="btn-primary flex items-center gap-2 group">
            Launch Marketplace
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="btn-outline flex items-center gap-2">
            <FileText size={20} />
            Read Whitepaper
          </button>
        </motion.div>

        {/* Live Asset Registry Ticker */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="mt-24 w-full flex flex-col items-center"
        >
            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">Live Asset Status</div>
            <div className="relative w-full overflow-hidden h-14 flex items-center">
                <div className="flex animate-scroll whitespace-nowrap gap-12 text-sm font-mono text-slate-300">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-status-verified shadow-[0_0_8px_#3B82F6]" /> LONDON_PRIME_01: VERIFIED 84.2%</span>
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-status-active shadow-[0_0_8px_#22C55E]" /> SAHARA_SOLAR: ACTIVE 92.8%</span>
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-status-pending shadow-[0_0_8px_#A855F7]" /> NY_CENTRAL_09: PENDING 76.1%</span>
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-status-locked shadow-[0_0_8px_#F59E0B]" /> DUBAI_SQUARE: LOCKED 89.2%</span>
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-status-verified shadow-[0_0_8px_#3B82F6]" /> TOKYO_HUB: VERIFIED 95.0%</span>
                    {/* Duplicate for seamless scrolling */}
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-status-verified shadow-[0_0_8px_#3B82F6]" /> LONDON_PRIME_01: VERIFIED 84.2%</span>
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-status-active shadow-[0_0_8px_#22C55E]" /> SAHARA_SOLAR: ACTIVE 92.8%</span>
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-status-pending shadow-[0_0_8px_#A855F7]" /> NY_CENTRAL_09: PENDING 76.1%</span>
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-status-locked shadow-[0_0_8px_#F59E0B]" /> DUBAI_SQUARE: LOCKED 89.2%</span>
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-status-verified shadow-[0_0_8px_#3B82F6]" /> TOKYO_HUB: VERIFIED 95.0%</span>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
