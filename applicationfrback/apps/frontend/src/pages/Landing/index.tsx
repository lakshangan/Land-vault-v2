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
      <section className="py-40 px-6 max-w-5xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-20 bg-gradient-to-br from-white/5 to-transparent border-white/5"
            >
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">READY TO<br/>TOKENIZE?</h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium">Join the institutional-grade RWA protocol on Base. Start listing or investing in fractional real-world value today.</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="btn-primary" onClick={() => window.location.href = '/list'}>List Asset</button>
                    <button className="btn-outline" onClick={() => window.location.href = '/marketplace'}>Explore Market</button>
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
        className="glass-card p-8 group hover:bg-white/[0.05] transition-all relative overflow-hidden"
    >
        <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all">
            {icon}
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-2">{label}</div>
        <div className="text-4xl font-black text-white tracking-tighter mb-1">{value}</div>
        <div className="text-xs font-bold text-accent uppercase tracking-widest">{delta}</div>
        
        {/* Subtle hover line */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full" />
    </motion.div>
);

export default Landing;
