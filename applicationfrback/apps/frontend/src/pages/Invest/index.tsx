import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, CheckCircle2, ShieldCheck, ChevronRight, Activity } from 'lucide-react';

const categories = [
  { id: 'ALL', name: 'All pools' },
  { id: 'REAL_ESTATE', name: 'Real estate' },
  { id: 'RENEWABLE_ENERGY', name: 'Renewable energy' },
  { id: 'INFRASTRUCTURE', name: 'Infrastructure' },
  { id: 'LAND', name: 'Land' },
];

const Invest = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedPool, setSelectedPool] = useState<any>(null);
  const [investAmount, setInvestAmount] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const pools = [
    {
      id: 'p1',
      name: 'Chennai Agricultural Land Pool',
      type: 'LAND',
      location: 'Chennai, India',
      targetRaise: 500000,
      currentRaise: 350000,
      minInvest: 100,
      duration: '12 months',
      expectedReturn: '14.2% APR',
      status: 'Open',
      image: '/assets/amazon.png', // Reusing placeholder
      color: '#10B981'
    },
    {
      id: 'p2',
      name: 'Berlin Tech Hub Expansion',
      type: 'INFRASTRUCTURE',
      location: 'Berlin, Germany',
      targetRaise: 2000000,
      currentRaise: 1850000,
      minInvest: 500,
      duration: '24 months',
      expectedReturn: '11.8% APR',
      status: 'Open',
      image: '/assets/berlin.png',
      color: '#6366F1'
    },
    {
      id: 'p3',
      name: 'Sahara Solar Infrastructure',
      type: 'RENEWABLE_ENERGY',
      location: 'Sahara, Egypt',
      targetRaise: 1500000,
      currentRaise: 1250000,
      minInvest: 250,
      duration: '36 months',
      expectedReturn: '15.5% APR',
      status: 'Open',
      image: '/assets/solar.png',
      color: '#F59E0B'
    }
  ];

  const filteredPools = useMemo(() => {
    return pools.filter(pool => selectedCategory === 'ALL' || pool.type === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-black pt-20 px-8 pb-32">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="flex items-center gap-2 text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                    <Activity size={14} />
                    Yield Generation
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">INVESTMENT POOLS</h1>
                <p className="text-xl text-slate-400 max-w-2xl font-medium">Earn institutional-grade returns through on-chain collateralized debt and asset appreciation.</p>
            </motion.div>

            <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="flex gap-4 p-2 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl"
            >
                {stats.map((stat, i) => (
                    <div key={i} className="px-6 py-4 border-r border-white/5 last:border-0 text-center">
                        <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
                        <div className="text-lg font-black text-white font-mono">{stat.value}</div>
                    </div>
                ))}
            </motion.div>
        </header>

        <div className="flex gap-4 mb-12 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
                <button 
                    key={cat.id} 
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                        selectedCategory === cat.id 
                        ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                        : 'bg-white/5 border border-white/10 text-slate-500 hover:bg-white/10'
                    }`}
                >
                    {cat.name}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
                {filteredPools.map((pool, i) => {
                    const progress = (pool.currentRaise / pool.targetRaise) * 100;
                    return (
                        <motion.div
                            key={pool.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card flex flex-col group overflow-hidden"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <img src={pool.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <span 
                                        style={{ backgroundColor: `${pool.color}20`, color: pool.color, borderColor: `${pool.color}40` }}
                                        className="px-3 py-1 rounded-full text-[9px] font-black tracking-[0.2em] border backdrop-blur-xl uppercase"
                                    >
                                        {pool.type.replace('_', ' ')}
                                    </span>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-2 text-white/60 text-[10px] font-black uppercase tracking-widest mb-2">
                                        <MapPin size={12} className="text-accent" />
                                        {pool.location}
                                    </div>
                                    <h3 className="text-2xl font-black text-white tracking-tight">{pool.name}</h3>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col gap-8">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Target Raise</div>
                                            <div className="text-xl font-black text-white font-mono">${(pool.targetRaise/1000).toFixed(0)}K</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Expected APY</div>
                                            <div className="text-xl font-black text-accent font-mono">{pool.expectedReturn}</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                className="h-full bg-accent" 
                                            />
                                        </div>
                                        <div className="flex justify-between text-[9px] font-black text-slate-600 uppercase tracking-widest">
                                            <span>{progress.toFixed(0)}% Funded</span>
                                            <span>{pool.duration} Term</span>
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => { setSelectedPool(pool); setIsSuccess(false); setInvestAmount(pool.minInvest.toString()) }}
                                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white text-black transition-all flex items-center justify-center gap-2 active:scale-95 group"
                                >
                                    Enter Pool <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
      </div>

      {/* Modern Modal Overlay */}
      <AnimatePresence>
        {selectedPool && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
            >
                <motion.div 
                    initial={{ scale: 0.9, y: 40 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 40 }}
                    className="w-full max-w-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden relative backdrop-blur-3xl"
                >
                    <button 
                        onClick={() => setSelectedPool(null)}
                        className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors z-10"
                    >
                        <X size={24} />
                    </button>

                    {!isSuccess ? (
                        <div className="p-12">
                            <h2 className="text-4xl font-black text-white tracking-tighter mb-2">PARTICIPATE</h2>
                            <p className="text-slate-400 font-medium mb-12 uppercase text-[11px] tracking-[0.3em]">{selectedPool.name}</p>

                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                                        <span>Contribution Amount (USD)</span>
                                        <span className="text-accent">MIN: ${selectedPool.minInvest}</span>
                                    </div>
                                    <div className="relative group">
                                        <span className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl font-black text-white/20">$</span>
                                        <input 
                                            type="number" 
                                            value={investAmount}
                                            onChange={(e) => setInvestAmount(e.target.value)}
                                            className="w-full h-24 bg-black/40 border border-white/10 group-hover:border-accent/40 rounded-[2rem] px-14 text-4xl font-black font-mono focus:outline-none transition-all text-white"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                        <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Expected APY</div>
                                        <div className="text-xl font-black text-accent">{selectedPool.expectedReturn}</div>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                        <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Settlement</div>
                                        <div className="text-xl font-black text-white">Instant</div>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => setIsSuccess(true)}
                                    className="w-full h-20 rounded-[2rem] bg-white text-black font-black text-sm uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-95 transition-all"
                                >
                                    Confirm Contribution
                                </button>
                                
                                <div className="flex items-center justify-center gap-2 text-[10px] font-black text-white/30 uppercase tracking-widest">
                                    <ShieldCheck size={14} className="text-blue-400" />
                                    Secured by Base Sepolia Proof-of-Asset
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-16 text-center flex flex-col items-center justify-center min-h-[500px]">
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                                className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-accent to-emerald-400 flex items-center justify-center mb-10 text-black shadow-[0_20px_40px_rgba(33,255,188,0.3)]"
                            >
                                <CheckCircle2 size={56} />
                            </motion.div>
                            <h2 className="text-5xl font-black text-white tracking-tighter mb-4">SUCCESS</h2>
                            <p className="text-xl text-slate-400 font-medium mb-12">Transaction processed on Base Sepolia.<br/>Your position is now active.</p>
                            
                            <button 
                                onClick={() => setSelectedPool(null)}
                                className="px-12 h-16 rounded-3xl border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95"
                            >
                                Close Terminal
                            </button>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const stats = [
    { label: 'Total TVL', value: '$12.4M' },
    { label: 'Avg Yield', value: '11.8%' },
    { label: 'Your Capital', value: '$0.00' },
];

export default Invest;
