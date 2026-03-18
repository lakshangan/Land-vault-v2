import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AssetCard from '../../components/assets/AssetCard.tsx';

const categories = [
  { id: 'ALL', name: 'All assets' },
  { id: 'REAL_ESTATE', name: 'Real estate' },
  { id: 'RENEWABLE_ENERGY', name: 'Renewable energy' },
  { id: 'INFRASTRUCTURE', name: 'Infrastructure' },
  { id: 'LAND', name: 'Land' },
  { id: 'TIMBER', name: 'Timber & forestry' },
];

const Marketplace = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
    
    const stats = [
        { label: 'Total Assets Listed', value: '1,240' },
        { label: 'Total TVL', value: '$24.5M' },
        { label: 'Assets Sold', value: '890' },
    ];

    const assets = [
        { id: '1', name: 'London Prime Residential', type: 'REAL_ESTATE', location: 'London, UK', price: 50, ownershipType: 'Fractional', status: 'AVAILABLE', progress: 45 },
        { id: '2', name: 'Sahara Solar Arrays', type: 'RENEWABLE_ENERGY', location: 'Sahara, Egypt', price: 100, ownershipType: 'Fractional', status: 'AVAILABLE', progress: 82 },
        { id: '3', name: 'Berlin Tech Hub', type: 'INFRASTRUCTURE', location: 'Berlin, Germany', price: 2000, ownershipType: 'Fractional', status: 'SOLD', progress: 100 },
        { id: '4', name: 'Amazon Carbon Forestry', type: 'TIMBER', location: 'Manaus, Brazil', price: 75, ownershipType: 'Fractional', status: 'LISTED', progress: 15 },
        { id: '5', name: 'Andes Hydro Plant', type: 'RENEWABLE_ENERGY', location: 'Cajamarca, Peru', price: 15000000, ownershipType: 'Full', status: 'AVAILABLE' },
        { id: '6', name: 'Coastal Agri-Land', type: 'LAND', location: 'Valencia, Spain', price: 250, ownershipType: 'Fractional', status: 'SOLD', progress: 100 },
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
            return matchesCategory && matchesSearch && matchesStatus;
        });
    }, [selectedCategory, searchQuery, selectedStatus]);

  return (
    <div className="flex min-h-screen bg-page">
      {/* Fixed Sidebar */}
      <aside className="w-[260px] border-r border-border-subtle bg-surface/50 h-[calc(100vh-52px)] fixed top-[52px] left-0 p-6 overflow-y-auto hidden lg:block">
        <div className="space-y-8">
            <div className="space-y-4">
                <h3 className="label-muted">Status</h3>
                <div className="space-y-2">
                    {['AVAILABLE', 'SOLD', 'LISTED'].map(status => (
                        <label key={status} className="flex items-center gap-3 cursor-pointer group">
                            <input 
                                type="checkbox" 
                                className="hidden" 
                                checked={selectedStatus.includes(status)}
                                onChange={() => toggleStatus(status)}
                            />
                            <div className={`w-4 h-4 rounded border border-border-default flex items-center justify-center transition-colors ${selectedStatus.includes(status) ? 'bg-accent border-accent' : 'bg-card group-hover:border-text-muted'}`}>
                                {selectedStatus.includes(status) && <div className="w-1.5 h-1.5 bg-slate-900 rounded-sm" />}
                            </div>
                            <span className={`text-[13px] transition-colors ${selectedStatus.includes(status) ? 'text-text-primary' : 'text-text-muted group-hover:text-text-primary'}`}>
                                {status.charAt(0) + status.slice(1).toLowerCase()}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="label-muted">Ownership</h3>
                <div className="grid grid-cols-2 gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-card border border-border-default text-[11px] text-text-primary hover:bg-elevated transition-colors">Fractional</button>
                    <button className="px-3 py-1.5 rounded-lg bg-card border border-border-default text-[11px] text-text-muted hover:bg-elevated transition-colors">Full</button>
                </div>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-[260px] p-8 pb-20">
        <div className="max-w-6xl mx-auto">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-3xl mb-1">Marketplace</h1>
                    <p className="text-sm text-text-secondary">Discover institutional-grade fractional real-world assets.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={14} />
                        <input 
                            type="text" 
                            placeholder="Search assets..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-10 bg-surface border border-border-subtle rounded-lg pl-9 pr-4 text-[13px] focus:outline-none focus:border-accent transition-all"
                        />
                    </div>
                    <button 
                        onClick={() => navigate('/tokenize')}
                        className="btn-primary h-10 px-4 gap-2 text-[13px]"
                    >
                        <Plus size={16} />
                        List your asset
                    </button>
                </div>
            </header>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {stats.map((stat, i) => (
                    <div key={i} className="glass-card p-5 bg-surface/30 flex items-center justify-between border-border-default hover:border-accent/30 transition-colors">
                        <div>
                            <div className="text-[11px] text-text-muted font-medium mb-1 uppercase tracking-wider">{stat.label}</div>
                            <div className="text-2xl font-bold font-mono text-text-primary">{stat.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-6 border-b border-border-subtle mb-10 overflow-x-auto no-scrollbar">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`pb-3 text-[13px] font-medium transition-all relative whitespace-nowrap ${
                            selectedCategory === cat.id ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
                        }`}
                    >
                        {cat.name}
                        {selectedCategory === cat.id && (
                            <motion.div 
                                layoutId="catTab"
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" 
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredAssets.map((asset) => (
                        <motion.div
                            key={asset.id}
                            layout
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                        >
                            <AssetCard {...asset} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredAssets.length === 0 && (
                <div className="py-20 text-center">
                    <div className="text-text-muted mb-2">No assets match your search or filters.</div>
                    <button 
                        onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); setSelectedStatus([]); }}
                        className="text-accent text-[13px] font-medium hover:underline"
                    >
                        Reset all filters
                    </button>
                </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
