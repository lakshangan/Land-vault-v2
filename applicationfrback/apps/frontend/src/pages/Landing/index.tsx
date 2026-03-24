import { motion } from 'framer-motion';
import Hero from '../../components/sections/Hero';
import { TrendingUp, Globe, ShieldCheck, Zap } from 'lucide-react';

const Landing = () => {
  return (
    <div className="bg-black">
      <Hero />
      
      <section className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <StatCard 
                label="Global Liquidity" 
                value="$35.8B" 
                delta="+12% YoY" 
                icon={<Globe size={20} className="text-blue-400" />}
                delay={0.1}
            />
            <StatCard 
                label="Yield Generated" 
                value="$1.2M" 
                delta="Direct Payouts" 
                icon={<TrendingUp size={20} className="text-accent" />}
                delay={0.2}
            />
            <StatCard 
                label="Tokenized Assets" 
                value="12K+" 
                delta="Verified" 
                icon={<ShieldCheck size={20} className="text-purple-400" />}
                delay={0.3}
            />
            <StatCard 
                label="Settlement Time" 
                value="< 2s" 
                delta="Base Sepolia" 
                icon={<Zap size={20} className="text-amber-400" />}
                delay={0.4}
            />
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-16 md:p-20 bg-gradient-to-b from-white/[0.03] to-transparent border-white/5 rounded-[2rem]"
            >
                <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight">Ready to tokenize?</h2>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-normal">Join the institutional-grade RWA protocol on Base. Start listing or investing in fractional real-world value today.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="h-14 px-8 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all active:scale-95" onClick={() => window.location.href = '/list'}>List Asset</button>
                    <button className="h-14 px-8 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all backdrop-blur-md active:scale-95" onClick={() => window.location.href = '/marketplace'}>Explore Market</button>
                </div>
            </motion.div>
      </section>
    </div>
  );
};

const StatCard = ({ label, value, delta, icon, delay }: { label: string, value: string, delta: string, icon: any, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="glass-card p-8 group hover:bg-white/[0.04] transition-all relative overflow-hidden rounded-2xl"
    >
        <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all">
            {icon}
        </div>
        <div className="text-[13px] text-slate-400 font-medium mb-1">{label}</div>
        <div className="text-3xl font-semibold text-white tracking-tight mb-2">{value}</div>
        <div className="text-xs font-medium text-emerald-400">{delta}</div>
        
        {/* Subtle hover line */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500/50 transition-all duration-500 group-hover:w-full" />
    </motion.div>
);

export default Landing;
