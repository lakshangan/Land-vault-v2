import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import AssetCard from '../../components/assets/AssetCard.tsx';

const categories = [
  { id: 'ALL', name: 'All Assets' },
  { id: 'REAL_ESTATE', name: 'Real Estate' },
  { id: 'RENEWABLE_ENERGY', name: 'Energy' },
  { id: 'INFRASTRUCTURE', name: 'Infrastructure' },
  { id: 'LAND', name: 'Land' },
  { id: 'TIMBER', name: 'Timber & Forestry' },
];

const Marketplace = () => {
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    
    const assets = [
        { id: '1', name: 'London Prime Residential', type: 'REAL_ESTATE', location: 'London, UK', yield: 12.4, progress: 76, value: 2400000, price: 50, status: 'VERIFIED' },
        { id: '2', name: 'Sahara Solar Arrays', type: 'RENEWABLE_ENERGY', location: 'Sahara, Egypt', yield: 15.2, progress: 92, value: 5000000, price: 100, status: 'ACTIVE' },
        { id: '3', name: 'Berlin Tech Hub', type: 'INFRASTRUCTURE', location: 'Berlin, Germany', yield: 10.8, progress: 45, value: 12000000, price: 200, status: 'LOCKED' },
        { id: '4', name: 'Amazon Carbon Forestry', type: 'TIMBER', location: 'Manaus, Brazil', yield: 18.5, progress: 12, value: 8500000, price: 75, status: 'VERIFIED' },
        { id: '5', name: 'Andes Hydro Plant', type: 'RENEWABLE_ENERGY', location: 'Cajamarca, Peru', yield: 11.2, progress: 100, value: 15000000, price: 500, status: 'ACTIVE' },
        { id: '6', name: 'Coastal Agri-Land', type: 'LAND', location: 'Valencia, Spain', yield: 9.4, progress: 62, value: 1800000, price: 25, status: 'VERIFIED' },
    ];

    const filteredAssets = selectedCategory === 'ALL' 
        ? assets 
        : assets.filter(a => a.type === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Search & Main Header */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
                <h1 className="text-4xl md:text-5xl font-syne font-extrabold mb-2 uppercase tracking-tight">Marketplace</h1>
                <p className="text-slate-400">Institutional grade real-world asset opportunities on <span className="text-primary font-bold">BASE</span>.</p>
            </div>
            <div className="relative w-full md:w-96 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                    type="text" 
                    placeholder="Search by location, asset name, or ID..." 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-all text-sm font-dm"
                />
            </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                        selectedCategory === cat.id 
                        ? 'bg-primary text-background shadow-[0_0_15px_rgba(0,212,170,0.4)]' 
                        : 'bg-slate-900/50 border border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                >
                    {cat.name}
                </button>
            ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
         {/* Sidebar Filters */}
         <aside className="w-full lg:w-64 space-y-8 flex-shrink-0">
            <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-6 text-primary">
                    <SlidersHorizontal size={18} />
                    <h3 className="text-xs font-bold uppercase tracking-widest">Filter Assets</h3>
                </div>

                <div className="space-y-8">
                    {/* Filter Group: Status */}
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest flex justify-between items-center group cursor-pointer">
                            Status
                            <ChevronDown size={14} />
                        </label>
                        <div className="space-y-2">
                            {['Active', 'Verified', 'Locked', 'Pending'].map((status) => (
                                <label key={status} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="w-4 h-4 rounded border border-slate-700 bg-slate-900 group-hover:border-primary transition-colors flex items-center justify-center p-0.5" />
                                    <span className="text-xs text-slate-400 group-hover:text-slate-100 transition-colors">{status}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Filter Group: Yield */}
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Yield Range (APY)</label>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full relative">
                            <div className="absolute h-full w-2/3 bg-primary rounded-full left-[10%]" />
                            <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-primary -translate-y-1/2 top-1/2 left-[10%] cursor-pointer shadow-[0_0_10px_rgba(0,212,170,0.5)]" />
                            <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-primary -translate-y-1/2 top-1/2 left-[76%] cursor-pointer shadow-[0_0_10px_rgba(0,212,170,0.5)]" />
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-slate-500">
                            <span>0%</span>
                            <span>30%+</span>
                        </div>
                    </div>

                    {/* Quick Stat Pill */}
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <div className="text-[10px] uppercase font-bold text-primary mb-1 tracking-tighter cursor-default">Yield Opportunity</div>
                        <p className="text-[9px] text-slate-400 leading-relaxed font-dm">
                           Assets in <span className="text-secondary font-bold">RENEWABLE_ENERGY</span> currently offer the highest risk-adjusted yield for <span className="text-white">Q1 2026</span>.
                        </p>
                    </div>
                </div>
            </div>

            <button className="w-full btn-outline py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
               <Filter size={16} />
               Apply More Filters
            </button>
         </aside>

         {/* Asset Grid */}
         <div className="flex-grow">
            <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{filteredAssets.length} Assets Found</span>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                    <span className="cursor-pointer hover:text-primary transition-colors border-b-2 border-primary text-primary">Grid View</span>
                    <span className="cursor-pointer hover:text-primary transition-colors border-b-2 border-transparent">List View</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredAssets.map((asset, idx) => (
                    <motion.div
                        key={asset.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                        <AssetCard {...asset} />
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {filteredAssets.length === 0 && (
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
                    <div className="p-6 bg-slate-900/50 rounded-full text-slate-600 mb-4 border border-slate-800">
                         <Filter size={48} />
                    </div>
                    <h3 className="text-xl font-syne font-bold uppercase tracking-widest">No Assets Found</h3>
                    <p className="text-slate-500 max-w-sm">No assets currently match your selected filters. Try clearing some constraints or browse all categories.</p>
                    <button onClick={() => setSelectedCategory('ALL')} className="btn-primary px-8 mt-4">Browse All Assets</button>
                </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default Marketplace;
