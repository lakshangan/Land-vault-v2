import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, CheckCircle2 } from 'lucide-react';

const categories = [
  { id: 'ALL', name: 'All pools' },
  { id: 'REAL_ESTATE', name: 'Real estate' },
  { id: 'RENEWABLE_ENERGY', name: 'Renewable energy' },
  { id: 'INFRASTRUCTURE', name: 'Infrastructure' },
  { id: 'LAND', name: 'Land' },
];

const Invest = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [minInvestment, setMinInvestment] = useState<string>('ALL');

  const [selectedPool, setSelectedPool] = useState<any>(null);
  const [investAmount, setInvestAmount] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const stats = [
    { label: 'Total Pooled TVL', value: '$12.4M' },
    { label: 'Active Pools', value: '8' },
    { label: 'Avg. Expected Return', value: '11.2%' },
    { label: 'Your Investment', value: '$0.00' },
  ];

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
      expectedReturn: '8–14% APR from appreciation',
      status: 'Open',
    },
    {
      id: 'p2',
      name: 'Berlin Tech Hub Expansion',
      type: 'INFRASTRUCTURE',
      location: 'Berlin, Germany',
      targetRaise: 2000000,
      currentRaise: 2000000,
      minInvest: 500,
      duration: '24 months',
      expectedReturn: '10–12% APR',
      status: 'Funded',
    },
    {
      id: 'p3',
      name: 'Texas Solar Array Initative',
      type: 'RENEWABLE_ENERGY',
      location: 'Texas, USA',
      targetRaise: 1500000,
      currentRaise: 1250000,
      minInvest: 250,
      duration: '36 months',
      expectedReturn: '9–15% APR',
      status: 'Open',
    },
    {
      id: 'p4',
      name: 'London Prime Residential',
      type: 'REAL_ESTATE',
      location: 'London, UK',
      targetRaise: 800000,
      currentRaise: 800000,
      minInvest: 1000,
      duration: '18 months',
      expectedReturn: '7–10% APR',
      status: 'Closed',
    }
  ];

  const toggleStatus = (status: string) => {
    setSelectedStatus(prev => 
        prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  const filteredPools = useMemo(() => {
    return pools.filter(pool => {
      const matchesCategory = selectedCategory === 'ALL' || pool.type === selectedCategory;
      const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(pool.status);
      let matchesMin = true;
      if (minInvestment === 'UNDER_500' && pool.minInvest >= 500) matchesMin = false;
      if (minInvestment === 'OVER_500' && pool.minInvest < 500) matchesMin = false;
      return matchesCategory && matchesStatus && matchesMin;
    });
  }, [selectedCategory, selectedStatus, minInvestment]);

  const getAssetColor = (assetType: string) => {
    switch (assetType) {
      case 'LAND': return 'var(--color-asset-land)';
      case 'RENEWABLE_ENERGY': return 'var(--color-asset-energy)';
      case 'INFRASTRUCTURE': return 'var(--color-asset-infra)';
      case 'TIMBER': return 'var(--color-asset-timber)';
      case 'REAL_ESTATE': return 'var(--color-asset-re)';
      default: return 'var(--color-text-muted)';
    }
  };

  return (
    <div className="flex min-h-screen bg-page">
      {/* Left Sidebar */}
      <aside className="w-[260px] border-r border-border-default bg-surface/50 h-[calc(100vh-52px)] fixed top-[52px] left-0 p-6 overflow-y-auto hidden lg:block">
        <div className="space-y-8">
            <div className="space-y-4">
                <h3 className="label-muted">Asset type</h3>
                <div className="space-y-2 text-sm text-text-secondary">
                    {categories.map(cat => (
                        <button 
                            key={cat.id} 
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`block w-full text-left py-1 transition-colors ${selectedCategory === cat.id ? 'text-accent font-medium' : 'hover:text-text-primary'}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="label-muted">Status</h3>
                <div className="space-y-2">
                    {['Open', 'Funded', 'Closed'].map(status => (
                        <label key={status} className="flex items-center gap-3 cursor-pointer group">
                            <input 
                                type="checkbox" 
                                className="hidden" 
                                checked={selectedStatus.includes(status)}
                                onChange={() => toggleStatus(status)}
                            />
                            <div className={`w-4 h-4 rounded border border-border-default flex items-center justify-center transition-colors ${selectedStatus.includes(status) ? 'bg-accent border-accent' : 'bg-card group-hover:border-text-muted'}`}>
                                {selectedStatus.includes(status) && <div className="w-1.5 h-1.5 bg-page rounded-sm" />}
                            </div>
                            <span className={`text-[13px] transition-colors ${selectedStatus.includes(status) ? 'text-text-primary' : 'text-text-muted group-hover:text-text-primary'}`}>
                                {status}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="label-muted">Min investment</h3>
                <div className="grid grid-cols-1 gap-2">
                    <button 
                        onClick={() => setMinInvestment('ALL')}
                        className={`px-3 py-2 rounded-lg border text-[12px] transition-colors text-left ${minInvestment === 'ALL' ? 'bg-accent/10 border-accent text-accent' : 'bg-card border-border-default text-text-muted hover:bg-elevated'}`}
                    >
                        Any Amount
                    </button>
                    <button 
                        onClick={() => setMinInvestment('UNDER_500')}
                        className={`px-3 py-2 rounded-lg border text-[12px] transition-colors text-left ${minInvestment === 'UNDER_500' ? 'bg-accent/10 border-accent text-accent' : 'bg-card border-border-default text-text-muted hover:bg-elevated'}`}
                    >
                        Under $500
                    </button>
                    <button 
                        onClick={() => setMinInvestment('OVER_500')}
                        className={`px-3 py-2 rounded-lg border text-[12px] transition-colors text-left ${minInvestment === 'OVER_500' ? 'bg-accent/10 border-accent text-accent' : 'bg-card border-border-default text-text-muted hover:bg-elevated'}`}
                    >
                        $500+
                    </button>
                </div>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-[260px] p-8 pb-20">
        <div className="max-w-6xl mx-auto">
            <header className="mb-10">
                <h1 className="text-3xl font-bold mb-2">Investment Pools</h1>
                <p className="text-sm text-text-secondary">Earn returns from real-world land & asset appreciation.</p>
            </header>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {stats.map((stat, i) => (
                    <div key={i} className="glass-card p-5 bg-surface/30">
                        <div className="text-[11px] text-text-muted font-medium mb-1 uppercase tracking-wider">{stat.label}</div>
                        <div className="text-2xl font-bold font-mono text-text-primary">{stat.value}</div>
                    </div>
                ))}
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredPools.map((pool) => {
                        const color = getAssetColor(pool.type);
                        const progress = (pool.currentRaise / pool.targetRaise) * 100;
                        const statusColor = pool.status === 'Open' ? 'bg-accent' : pool.status === 'Funded' ? 'bg-text-secondary' : 'bg-border-default';

                        return (
                            <motion.div
                                key={pool.id}
                                layout
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="glass-card flex flex-col group border-border-subtle hover:border-accent/30 bg-card/60 shadow-minimal transition-all"
                            >
                                <div className="h-40 bg-elevated relative overflow-hidden border-b border-border-default">
                                    <div className="absolute inset-0 bg-gradient-to-t from-page/80 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span 
                                            style={{ backgroundColor: `${color}15`, color: color, borderColor: `${color}30` }}
                                            className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider border backdrop-blur-sm"
                                        >
                                            {pool.type.replace('_', ' ')}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-page/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-border-subtle flex items-center gap-1.5">
                                        <div className={`w-1.5 h-1.5 rounded-full ${statusColor}`} />
                                        <span className="text-[10px] font-bold text-text-primary uppercase">{pool.status}</span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center text-text-muted/20 font-bold text-xl pointer-events-none">
                                        Asset Image
                                    </div>
                                </div>

                                <div className="p-5 flex-grow flex flex-col">
                                    <h3 className="text-[16px] font-semibold mb-2 line-clamp-1">{pool.name}</h3>
                                    <div className="flex items-center gap-1.5 mb-5 text-text-muted">
                                        <MapPin size={12} />
                                        <span className="text-[12px]">{pool.location}</span>
                                    </div>

                                    <div className="mb-5">
                                        <div className="flex justify-between text-xs mb-1.5">
                                            <span className="text-text-secondary font-medium">Progress</span>
                                            <span className="font-mono text-text-primary">{progress.toFixed(0)}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-border-default rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-accent rounded-full" 
                                                style={{ width: `${progress}%` }} 
                                            />
                                        </div>
                                        <div className="flex justify-between text-[11px] mt-1.5 font-mono">
                                            <span className="text-text-muted">${(pool.currentRaise/1000).toFixed(0)}k raised</span>
                                            <span className="text-text-muted">Target: ${(pool.targetRaise/1000).toFixed(0)}k</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6 flex-grow">
                                        <div>
                                            <div className="text-[10px] text-text-muted mb-0.5 uppercase tracking-wider">Min Invest</div>
                                            <div className="font-mono text-text-primary text-sm">${pool.minInvest}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-text-muted mb-0.5 uppercase tracking-wider">Duration</div>
                                            <div className="text-text-primary text-sm">{pool.duration}</div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="text-[10px] text-text-muted mb-0.5 uppercase tracking-wider">Expected Return</div>
                                            <div className="text-accent text-sm font-medium">{pool.expectedReturn}</div>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => { setSelectedPool(pool); setIsSuccess(false); setInvestAmount(pool.minInvest.toString()) }}
                                        disabled={pool.status !== 'Open'}
                                        className={`w-full py-2.5 rounded-lg font-semibold text-[13px] transition-all flex items-center justify-center ${
                                            pool.status === 'Open' ? 'bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-page' : 'bg-surface border border-border-default text-text-muted cursor-not-allowed'
                                        }`}
                                    >
                                        {pool.status === 'Open' ? 'Invest Now' : pool.status === 'Funded' ? 'Fully Funded' : 'Closed'}
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
            
            {filteredPools.length === 0 && (
                <div className="py-20 text-center text-text-muted">
                    No pools match your current filters.
                </div>
            )}
        </div>
      </main>

      {/* Invest Modal */}
      <AnimatePresence>
        {selectedPool && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-page/80 backdrop-blur-sm p-4"
            >
                <motion.div 
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    className="w-full max-w-md bg-card border border-border-default rounded-2xl shadow-xl overflow-hidden relative"
                >
                    <button 
                        onClick={() => setSelectedPool(null)}
                        className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
                    >
                        <X size={20} />
                    </button>

                    {!isSuccess ? (
                        <div className="p-8">
                            <h2 className="text-xl font-bold mb-2">Invest in Pool</h2>
                            <p className="text-sm text-text-secondary mb-8">{selectedPool.name}</p>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-text-secondary">Amount to Invest (USD)</span>
                                        <span className="text-text-primary">Min: ${selectedPool.minInvest}</span>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-primary">$</span>
                                        <input 
                                            type="number" 
                                            value={investAmount}
                                            onChange={(e) => setInvestAmount(e.target.value)}
                                            className="w-full bg-surface border border-border-default rounded-xl p-4 pl-8 font-mono text-lg focus:outline-none focus:border-accent"
                                        />
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-surface/50 border border-border-default space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-text-secondary">Expected Return</span>
                                        <span className="text-accent font-medium">{selectedPool.expectedReturn}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-secondary">Lock-up Period</span>
                                        <span className="text-text-primary">{selectedPool.duration}</span>
                                    </div>
                                    <div className="flex justify-between border-t border-border-subtle pt-3 mt-3">
                                        <span className="text-text-secondary">Platform Fee (2%)</span>
                                        <span className="text-text-primary font-mono">${(Number(investAmount) * 0.02).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between font-bold">
                                        <span className="text-text-primary">Total Total</span>
                                        <span className="text-text-primary font-mono">${(Number(investAmount) * 1.02).toFixed(2)}</span>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => setIsSuccess(true)}
                                    className="w-full py-4 rounded-xl bg-accent text-slate-900 font-bold text-[15px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                >
                                    Confirm Investment
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent"
                            >
                                <CheckCircle2 size={40} />
                            </motion.div>
                            <h2 className="text-2xl font-bold mb-2">Investment Confirmed</h2>
                            <p className="text-text-secondary mb-8">You have successfully invested ${investAmount} into {selectedPool.name}.</p>
                            
                            <button 
                                onClick={() => setSelectedPool(null)}
                                className="px-8 py-3 rounded-xl border border-border-default font-semibold text-text-primary hover:bg-surface transition-colors"
                            >
                                Done
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

export default Invest;
