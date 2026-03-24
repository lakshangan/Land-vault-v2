import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Filter, LayoutGrid, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AssetCard from '../../components/assets/AssetCard.tsx';

const categories = [
  { id: 'ALL', name: 'All Assets' },
  { id: 'REAL_ESTATE', name: 'Real Estate' },
  { id: 'RENEWABLE_ENERGY', name: 'Energy' },
  { id: 'INFRASTRUCTURE', name: 'Infrastructure' },
  { id: 'LAND', name: 'Land' },
];

const Marketplace = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
    const [ownershipType, setOwnershipType] = useState<string>('ALL');
    
    const assets = [
        { 
            id: '1', 
            name: 'London Prime Residential', 
            type: 'REAL_ESTATE', 
            location: 'London, UK', 
            price: 5400000, 
            ownershipType: 'Fractional', 
            status: 'AVAILABLE', 
            progress: 45,
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800&h=600'
        },
        { 
            id: '2', 
            name: 'Sahara Solar Arrays', 
            type: 'RENEWABLE_ENERGY', 
            location: 'Sahara, Egypt', 
            price: 12500000, 
            ownershipType: 'Fractional', 
            status: 'AVAILABLE', 
            progress: 82,
            image: 'https://images.unsplash.com/photo-1509391366360-1e97d5261688?auto=format&fit=crop&q=80&w=800&h=600'
        },
        { 
            id: '3', 
            name: 'Berlin Tech Hub', 
            type: 'INFRASTRUCTURE', 
            location: 'Berlin, Germany', 
            price: 8900000, 
            ownershipType: 'Fractional', 
            status: 'SOLD', 
            progress: 100,
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600'
        },
        { 
            id: '4', 
            name: 'Amazon Carbon Forestry', 
            type: 'TIMBER', 
            location: 'Manaus, Brazil', 
            price: 3200000, 
            ownershipType: 'Fractional', 
            status: 'LISTED', 
            progress: 15,
            image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800&h=600'
        }
    ];

    const toggleStatus = (status: string) => {
        setSelectedStatus(prev => 
            prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
        );
    };

    const filteredAssets = useMemo(() => {
        return assets.filter(asset => {
            const matchesCategory = selectedCategory === 'ALL' || asset.type === selectedCategory;
            const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 asset.location.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(asset.status);
            const matchesOwnership = ownershipType === 'ALL' || asset.ownershipType.toLowerCase() === ownershipType.toLowerCase();
            return matchesCategory && matchesSearch && matchesStatus && matchesOwnership;
        });
    }, [selectedCategory, searchQuery, selectedStatus, ownershipType]);

  return (
    <div className="min-h-screen bg-black pt-20 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 flex gap-8 xl:gap-12">
        {/* Modern Sidebar Filter */}
        <aside className="hidden lg:block w-[280px] shrink-0 sticky top-28 h-[calc(100vh-140px)] overflow-y-auto no-scrollbar pb-10">
            <div className="glass-card p-6 bg-gradient-to-br from-white/5 to-transparent border-white/5 space-y-10">
                {/* Categories */}
                <div className="space-y-4">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <LayoutGrid size={12} /> Asset Types
                    </h3>
                    <div className="flex flex-col gap-1">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                                    selectedCategory === cat.id 
                                    ? 'bg-accent/10 border border-accent/20 text-accent' 
                                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Status */}
                <div className="space-y-4">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <Filter size={12} /> Status
                    </h3>
                    <div className="flex flex-col gap-3 px-2">
                        {['AVAILABLE', 'SOLD', 'LISTED'].map(status => (
                            <label key={status} className="flex items-center gap-4 cursor-pointer group">
                                <input 
                                    type="checkbox" 
                                    className="hidden" 
                                    checked={selectedStatus.includes(status)}
                                    onChange={() => toggleStatus(status)}
                                />
                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                                    selectedStatus.includes(status) 
                                    ? 'bg-accent border-accent text-black' 
                                    : 'border-white/20 bg-black/50 group-hover:border-white/40'
                                }`}>
                                    {selectedStatus.includes(status) && <Check size={12} strokeWidth={4} />}
                                </div>
                                <span className={`text-xs font-bold transition-colors ${
                                    selectedStatus.includes(status) ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                                }`}>
                                    {status === 'AVAILABLE' ? 'Available' : status === 'SOLD' ? 'Fully Funded' : 'Recently Listed'}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Ownership */}
                <div className="space-y-4">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Ownership Type</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <button 
                            onClick={() => setOwnershipType('FRACTIONAL')}
                            className={`px-3 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                ownershipType === 'FRACTIONAL' 
                                ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                                : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            Fractional
                        </button>
                        <button 
                            onClick={() => setOwnershipType('FULL')}
                            className={`px-3 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                ownershipType === 'FULL' 
                                ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                                : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            Direct
                        </button>
                    </div>
                    {ownershipType !== 'ALL' && (
                        <button 
                            onClick={() => setOwnershipType('ALL')}
                            className="w-full mt-2 text-[10px] text-slate-500 hover:text-white uppercase tracking-widest font-bold transition-colors"
                        >
                           Clear Filters
                        </button>
                    )}
                </div>
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-none">
            <header className="mb-14 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="max-w-xl"
                >
                    <div className="flex items-center gap-2 text-slate-400 font-medium text-xs mb-4">
                        <LayoutGrid size={14} />
                        Discovery Terminal
                    </div>
                    <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4">Asset Market</h1>
                    <p className="text-lg text-slate-400 font-normal leading-relaxed max-w-xl">
                        Access institutional real-world assets through high-liquidity fractional containers. Powered by Base.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto"
                >
                    <div className="relative w-full sm:w-72 xl:w-80 group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-accent transition-colors" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search Assets..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 text-sm font-bold text-white focus:outline-none focus:border-accent/40 transition-all placeholder:text-slate-600"
                        />
                    </div>
                    <button 
                        onClick={() => navigate('/list')}
                        className="w-full sm:w-auto h-14 px-8 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap"
                    >
                        <Plus size={18} />
                        List Asset
                    </button>
                </motion.div>
            </header>

            {/* Mobile Category Scroll (Hidden on Desktop) */}
            <div className="lg:hidden flex items-center gap-3 overflow-x-auto no-scrollbar pb-6 mb-6 border-b border-white/5">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                            selectedCategory === cat.id 
                            ? 'bg-accent text-black' 
                            : 'bg-white/5 text-slate-400 border border-white/5'
                        }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredAssets.map((asset) => (
                        <motion.div
                            key={asset.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <AssetCard {...asset} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredAssets.length === 0 && (
                <div className="py-32 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-600 mb-6">
                        <Search size={32} />
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">No matching assets</h3>
                    <p className="text-sm text-slate-500 font-medium mb-8">Try adjusting your filters or search constraints.</p>
                    <button 
                        onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); setSelectedStatus([]); setOwnershipType('ALL'); }}
                        className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                        Reset Filters
                    </button>
                </div>
            )}
        </main>
      </div>
    </div>
  );
};

export default Marketplace;
