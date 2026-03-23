import { useState } from 'react';
import { 
  ArrowUpRight, 
  Wallet,
  TrendingUp,
  Briefcase,
  PieChart,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { useAccount } from 'wagmi';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState<'ASSETS' | 'INVESTMENTS'>('ASSETS');

  const stats = [
    { label: 'Portfolio Value', value: '$124,500.00', icon: <PieChart size={18} />, color: 'text-accent' },
    { label: 'Total Assets', value: '4', icon: <Briefcase size={18} />, color: 'text-blue-400' },
    { label: 'Yield Earned', value: '+$8,450.00', icon: <TrendingUp size={18} />, color: 'text-emerald-400', positive: true },
    { label: 'Verified RWAs', value: '100%', icon: <ShieldCheck size={18} />, color: 'text-purple-400' },
  ];

  const holdings = [
    { id: 1, name: 'London Prime Residential', type: 'Real Estate', tokens: '200', value: '$10,000.00', change: '+4.2%', color: '#EC4899', image: '/assets/london.png' },
    { id: 2, name: 'Sahara Solar Arrays', type: 'Renewable Energy', tokens: '50', value: '$5,000.00', change: '+1.8%', color: '#10B981', image: '/assets/solar.png' },
    { id: 3, name: 'Berlin Tech Hub', type: 'Infrastructure', tokens: '100', value: '$20,000.00', change: '+2.5%', color: '#6366F1', image: '/assets/berlin.png' },
    { id: 4, name: 'Amazon Carbon Forestry', type: 'Timber', tokens: 'Full', value: '$15,000.00', change: '+0.0%', color: '#84CC16', image: '/assets/amazon.png' },
  ];

  const investments = [
    { id: 'p1', name: 'Chennai Agricultural Land Pool', amount: '$5,000.00', value: '$5,400.00', remaining: '8 months', status: 'Active', apr: '12.4%' },
    { id: 'p2', name: 'Texas Solar Array Initative', amount: '$2,500.00', value: '$2,650.00', remaining: '24 months', status: 'Active', apr: '9.8%' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 pb-32">
      <motion.header 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
            <h1 className="text-4xl font-black mb-4 tracking-tight">Institutional Portfolio</h1>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Wallet size={16} className="text-accent" />
                </div>
                <span className="font-mono text-sm font-bold text-white/90">
                    {isConnected ? `${address?.slice(0,6)}...${address?.slice(-4)}` : 'Connect Wallet'}
                </span>
                <div className="ml-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            </div>
        </div>
        <div className="flex gap-3">
            <button className="px-6 py-3 rounded-2xl bg-white text-black font-black text-sm hover:scale-[1.02] transition-all flex items-center gap-2">
                Withdraw Funds <ArrowUpRight size={18} />
            </button>
        </div>
      </motion.header>

      {/* Stats Bar */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {stats.map((stat, i) => (
          <motion.div 
            variants={item}
            key={i} 
            className="glass-card p-6 bg-gradient-to-br from-white/5 to-transparent border-white/5 hover:border-white/10 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {stat.icon}
            </div>
            <div className="text-[10px] text-slate-500 font-black mb-2 uppercase tracking-[0.2em]">{stat.label}</div>
            <div className={`text-3xl font-black font-mono tracking-tight ${stat.color || 'text-white'}`}>
                {stat.value}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center gap-10 border-b border-white/5 mb-10">
        {[
            { id: 'ASSETS', label: 'Real-World holdings', icon: <Briefcase size={16} /> },
            { id: 'INVESTMENTS', label: 'Yield strategies', icon: <TrendingUp size={16} /> }
        ].map((tab) => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-5 text-xs font-black uppercase tracking-[0.15em] transition-all relative flex items-center gap-2 ${
                    activeTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-white'
                }`}
            >
                {tab.icon}
                {tab.label}
                {activeTab === tab.id && (
                    <motion.div 
                        layoutId="activePortfolioTab"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_10px_rgba(33,255,188,0.5)]" 
                    />
                )}
            </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="glass-card bg-white/[0.02] border-white/5 overflow-hidden"
        >
            {activeTab === 'ASSETS' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-white/[0.03] border-b border-white/5">
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">Asset Entity</th>
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Type</th>
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Holding</th>
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Market Value</th>
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Performance</th>
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Settlement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {holdings.map((asset) => (
                        <tr key={asset.id} className="hover:bg-white/[0.04] transition-all group">
                          <td className="py-6 px-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/10 group-hover:border-accent/40 transition-all">
                                    <img src={asset.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-white group-hover:text-accent transition-colors">{asset.name}</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">BASE SEPOLIA</div>
                                </div>
                            </div>
                          </td>
                          <td className="py-6 px-8 text-center">
                            <span 
                                style={{ color: asset.color, backgroundColor: `${asset.color}15`, borderColor: `${asset.color}30` }}
                                className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border"
                            >
                                {asset.type}
                            </span>
                          </td>
                          <td className="py-6 px-8 text-right">
                            <span className="font-mono text-sm font-bold text-white/90">{asset.tokens} Units</span>
                          </td>
                          <td className="py-6 px-8 text-right">
                            <span className="font-mono text-sm font-black text-white">{asset.value}</span>
                          </td>
                          <td className="py-6 px-8 text-right">
                            <div className="flex items-center justify-end gap-1.5 text-emerald-400 font-mono text-sm font-bold">
                                <TrendingUp size={14} />
                                {asset.change}
                            </div>
                          </td>
                          <td className="py-6 px-8 text-right">
                              <div className="flex items-center justify-end gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                                <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all">
                                    <ExternalLink size={16} />
                                </button>
                                <button className="px-5 py-2.5 rounded-xl bg-accent text-black font-black text-[11px] uppercase tracking-wider hover:scale-105 transition-all">
                                    Trade
                                </button>
                              </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            )}

            {activeTab === 'INVESTMENTS' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-white/[0.03] border-b border-white/5">
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">Strategy Name</th>
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">APR</th>
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Principal</th>
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Maturity</th>
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Status</th>
                        <th className="py-5 px-8 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {investments.map((inv) => (
                        <tr key={inv.id} className="hover:bg-white/[0.04] transition-all group">
                          <td className="py-6 px-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                    <TrendingUp size={20} />
                                </div>
                                <span className="text-sm font-black text-white">{inv.name}</span>
                            </div>
                          </td>
                          <td className="py-6 px-8 text-center text-emerald-400 font-mono font-black text-sm">
                            {inv.apr}
                          </td>
                          <td className="py-6 px-8 text-right font-mono font-bold text-white/90">
                            {inv.amount}
                          </td>
                          <td className="py-6 px-8 text-right text-slate-400 font-mono text-xs">
                            {inv.remaining}
                          </td>
                          <td className="py-6 px-8 text-center">
                            <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widist bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                                {inv.status}
                            </span>
                          </td>
                          <td className="py-6 px-8 text-right">
                              <div className="flex items-center justify-end gap-3">
                                <button className="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                                    Compounding
                                </button>
                                <button className="px-5 py-2.5 rounded-xl border border-white/10 text-white font-black text-[11px] uppercase tracking-wider hover:bg-white/5 transition-all">
                                    Exit Pool
                                </button>
                              </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
