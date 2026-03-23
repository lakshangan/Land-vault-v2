import { motion } from 'framer-motion';
import { ChevronRight, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
            src="/assets/hero.png" 
            alt="LandVault" 
            className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs font-black uppercase tracking-[0.2em] text-accent mb-10 shadow-[0_0_20px_rgba(33,255,188,0.15)]"
        >
          <Activity size={14} className="animate-pulse" />
          RWA Infrastructure / Base Sepolia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12 max-w-6xl text-white"
        >
          THE FUTURE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            OF ASSETS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-300 max-w-3xl mb-16 font-medium leading-relaxed"
        >
          Access global institutional-grade real estate, energy, 
          and infrastructure through on-chain fractional ownership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <button 
            onClick={() => navigate('/marketplace')}
            className="h-16 px-10 rounded-2xl bg-white text-black font-black text-sm hover:scale-[1.05] transition-all flex items-center gap-3 group shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
          >
            Launch Marketplace
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="h-16 px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-sm hover:bg-white/10 transition-all backdrop-blur-md active:scale-95">
            Documentation
          </button>
        </motion.div>

        {/* Floating Stat Card (Bottom Right) */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 right-10 hidden xl:flex flex-col gap-4 p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-2xl text-left"
        >
            <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Live Protocol Data</span>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total TVL</div>
                    <div className="text-2xl font-black text-white">$142.8M</div>
                </div>
                <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Yield APY</div>
                    <div className="text-2xl font-black text-accent">14.2%</div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
