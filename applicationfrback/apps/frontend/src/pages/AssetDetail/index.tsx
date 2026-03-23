import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  MapPin, 
  ArrowLeft, 
  ShieldCheck,
  TrendingUp,
  Share2,
  Heart,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AssetDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('details');

    const assets = {
        '1': {
            name: 'London Prime Residential',
            type: 'REAL_ESTATE',
            location: 'London, UK',
            value: 5400000,
            price: 50,
            lastSalePrice: 48,
            status: 'AVAILABLE',
            owner: '0x8b3...4e9',
            description: 'London Prime Residential is a flagship asset in our portfolio. Located in the heart of Mayfair, this premium residential complex represents prime real estate. The asset is fully verified and fractionalized into 108,000 protocol-compliant fractions, making ownership simple and highly liquid.',
            color: '#EC4899',
            image: '/assets/london.png'
        },
        '2': {
            name: 'Sahara Solar Arrays',
            type: 'RENEWABLE_ENERGY',
            location: 'Sahara, Egypt',
            value: 12500000,
            price: 100,
            lastSalePrice: 95,
            status: 'AVAILABLE',
            owner: '0x2a1...7f3',
            description: 'Massive solar energy production facility in the Sahara desert. High yield potential with long-term government power purchase agreements.',
            color: '#10B981',
            image: '/assets/solar.png'
        },
    };

    const asset = (assets as any)[id || '1'] || assets['1'];

    const tabs = [
        { id: 'details', label: 'Details' },
        { id: 'ownership', label: 'Ownership' },
        { id: 'activity', label: 'Activity' },
        { id: 'blockchain', label: 'Blockchain' }
    ];

  return (
    <div className="min-h-screen bg-black">
        {/* Cinematic Header */}
        <div className="relative h-[50vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
            <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                src={asset.image} 
                alt="" 
                className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 max-w-7xl mx-auto w-full">
                <motion.button 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white mb-8 transition-colors group w-fit"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to marketplace
                </motion.button>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span 
                                style={{ backgroundColor: `${asset.color}20`, color: asset.color, borderColor: `${asset.color}40` }}
                                className="px-3 py-1 rounded-full text-[9px] font-black tracking-[0.2em] border backdrop-blur-xl uppercase"
                            >
                                {asset.type.replace('_', ' ')}
                            </span>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full">
                                <ShieldCheck size={12} className="text-emerald-400" />
                                <span className="text-[9px] font-black text-white/90 tracking-widest uppercase">Verified Asset</span>
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">{asset.name}</h1>
                        <div className="flex items-center gap-4 text-slate-400">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                                <MapPin size={14} className="text-accent" />
                                {asset.location}
                            </div>
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                Base Sepolia
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-3"
                    >
                        <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                            <Heart size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                            <Share2 size={20} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-12 py-16">
            <div className="flex flex-col lg:flex-row gap-16">
                {/* Left Column */}
                <div className="lg:w-[60%]">
                    <div className="flex gap-10 border-b border-white/5 mb-10 overflow-x-auto no-scrollbar">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${
                                    activeTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-white'
                                }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div 
                                        layoutId="tabUnderline"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" 
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'details' && (
                                <motion.div 
                                    key="details"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-10"
                                >
                                    <div>
                                        <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Investment Thesis</h3>
                                        <p className="text-lg text-slate-300 leading-relaxed font-medium">
                                            {asset.description}
                                        </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                                        {[
                                            { label: 'Asset Valuation', value: `$${asset.value.toLocaleString()}` },
                                            { label: 'Fractional Tokens', value: '108,000' },
                                            { label: 'Protocol ID', value: `LV-${id?.padStart(4, '0')}` },
                                            { label: 'Compliance', value: 'ERC-1155 RWA' },
                                            { label: 'Yield Type', value: 'Rental Income' },
                                            { label: 'Settlement', value: 'T+0 Instant' },
                                        ].map((item, i) => (
                                            <div key={i}>
                                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                                                <div className="text-lg font-black text-white">{item.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'blockchain' && (
                                <motion.div 
                                    key="blockchain"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-8"
                                >
                                    {[
                                        { label: 'Registry Contract', value: '0x3234...9821' },
                                        { label: 'Vault Contract', value: '0x9482...4410' },
                                        { label: 'Asset Metadata IPFS', value: 'QmXoyp...3221' },
                                    ].map((item, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all">
                                            <div>
                                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                                                <div className="text-sm font-mono font-bold text-white/90">{item.value}</div>
                                            </div>
                                            <ExternalLink size={18} className="text-slate-500 group-hover:text-accent" />
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Column: Order Panel */}
                <div className="lg:w-[40%]">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="sticky top-32 glass-card p-10 bg-gradient-to-br from-white/10 to-transparent border-white/10 shadow-2xl backdrop-blur-3xl rounded-[2.5rem]"
                    >
                        <div className="flex justify-between items-end mb-10">
                            <div>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Price per fraction</div>
                                <div className="text-5xl font-black text-white font-mono tracking-tighter">${asset.price.toFixed(2)}</div>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-1 text-emerald-400 font-bold mb-1">
                                    <TrendingUp size={14} />
                                    <span>+14.2%</span>
                                </div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Est. APY</div>
                            </div>
                        </div>

                        <div className="space-y-10 mb-10">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                                    <span>Order Quantity</span>
                                    <span className="text-accent">MAX: 4,200</span>
                                </div>
                                <div className="relative group">
                                    <input 
                                        type="number" 
                                        defaultValue="100"
                                        className="w-full h-20 bg-black/40 border border-white/10 group-hover:border-accent/40 rounded-3xl px-8 text-3xl font-black font-mono focus:outline-none transition-all text-white"
                                    />
                                    <span className="absolute right-8 top-1/2 -translate-y-1/2 text-xs font-black text-slate-600 uppercase tracking-widest pointer-events-none">Fractions</span>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-3xl p-6 space-y-4 border border-white/5">
                                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                                    <span className="text-slate-500">Service Fee (2.5%)</span>
                                    <span className="text-white">$125.00</span>
                                </div>
                                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                                    <span className="text-slate-500">Network Fee</span>
                                    <span className="text-blue-400">Base Sepolia</span>
                                </div>
                                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                    <span className="text-xs font-black text-white uppercase tracking-[0.2em]">Total Order</span>
                                    <span className="text-2xl font-black text-accent font-mono">$5,125.00</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full h-18 py-5 rounded-3xl bg-white text-black font-black text-sm hover:scale-[1.02] flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95">
                            Execute Transaction <ChevronRight size={20} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AssetDetail;
