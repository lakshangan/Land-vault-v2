import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Subtle dark radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full z-10 pointer-events-none" />

        {/* Modern minimal grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4rem_4rem] z-20 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs font-medium text-slate-300 mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          RWA Infrastructure on Base
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-semibold tracking-tight leading-tight mb-8 max-w-5xl text-white"
        >
          The future of <br />
          <span className="text-white/60">real world assets</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-normal leading-relaxed"
        >
          Access global institutional-grade real estate, energy,
          and infrastructure through on-chain fractional ownership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button
            onClick={() => navigate('/marketplace')}
            className="h-14 px-8 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all flex items-center gap-2 group active:scale-95"
          >
            Launch Marketplace
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="h-14 px-8 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all backdrop-blur-md active:scale-95">
            Documentation
          </button>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
