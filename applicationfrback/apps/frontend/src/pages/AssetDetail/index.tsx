import { useParams } from 'react-router-dom';
import { Shield, FileText } from 'lucide-react';

const AssetDetail = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _id } = useParams();

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Content */}
        <div className="flex-grow">
            <div className="mb-12">
                <h1 className="text-4xl md:text-6xl font-syne font-extrabold mb-4">London Prime Residential</h1>
                <div className="flex gap-4 mb-8">
                    <span className="px-3 py-1 bg-asset-realestate/20 text-asset-realestate rounded-full text-[10px] font-bold uppercase tracking-widest">REAL ESTATE</span>
                    <span className="px-3 py-1 bg-status-verified/20 text-status-verified rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <Shield size={12} />
                        VERIFIED BY LANDVAULT
                    </span>
                </div>
            </div>

            <div className="h-[400px] bg-slate-800 rounded-xl mb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-700 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-syne font-extrabold text-4xl uppercase opacity-20">Asset Image Carousel</div>
            </div>

            <div className="space-y-12">
                <div>
                    <h2 className="text-2xl font-syne font-extrabold mb-4 border-l-4 border-primary pl-4">Asset Overview</h2>
                    <p className="text-slate-400 leading-relaxed max-w-3xl">
                        London Prime Residential is a flagship asset in our RWA portfolio. 
                        Located in the heart of Mayfair, this premium residential complex 
                        generates stable rental yield through long-term high-net-worth tenants. 
                        The asset is fully verified and tokenized into 50k fractions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="glass-card p-6">
                        <div className="text-[10px] uppercase font-bold text-slate-500 mb-2">Total Value</div>
                        <div className="text-2xl font-syne font-extrabold">$2,400,000</div>
                    </div>
                    <div className="glass-card p-6">
                        <div className="text-[10px] uppercase font-bold text-slate-500 mb-2">Yield APY</div>
                        <div className="text-2xl font-syne font-extrabold text-primary">12.4%</div>
                    </div>
                    <div className="glass-card p-6">
                        <div className="text-[10px] uppercase font-bold text-slate-500 mb-2">Token Price</div>
                        <div className="text-2xl font-syne font-extrabold font-mono">$48</div>
                    </div>
                    <div className="glass-card p-6">
                        <div className="text-[10px] uppercase font-bold text-slate-500 mb-2">Min Investment</div>
                        <div className="text-2xl font-syne font-extrabold">$10</div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-syne font-extrabold mb-6 border-l-4 border-primary pl-4">Verified Documents</h2>
                    <div className="space-y-4">
                        <DocumentItem name="Title Deed (Verified)" date="March 2026" />
                        <DocumentItem name="Valuation Certificate" date="Feb 2026" />
                        <DocumentItem name="Legal Compliance Report" date="March 2026" />
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column - Sticky Invest Panel */}
        <div className="lg:w-96 flex-shrink-0">
            <div className="sticky top-32 glass-card p-8 bg-surface/80 border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <h3 className="text-xl font-syne font-extrabold mb-6">Invest in Asset</h3>
                
                <div className="space-y-6 mb-8">
                    <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-2 uppercase font-bold tracking-wider">Amount of Tokens</div>
                        <div className="relative">
                            <input 
                                type="number" 
                                placeholder="0.00" 
                                className="w-full bg-slate-900 border border-border rounded-lg p-4 font-mono text-xl focus:border-primary focus:outline-none"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold uppercase tracking-widest text-xs">LV-LNDN</div>
                        </div>
                    </div>

                    <div className="p-4 bg-slate-900 rounded-lg space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">USD Value</span>
                            <span className="font-bold font-mono">$0.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Expected APY</span>
                            <span className="text-primary font-bold">12.4%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Total Purchase</span>
                            <span className="font-bold font-mono">$0.00</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <button className="btn-primary w-full py-4 text-sm font-extrabold uppercase tracking-widest shadow-[0_0_20px_rgba(0,212,170,0.3)]">
                        Invest Now
                    </button>
                    <p className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-widest">
                        SECURED BY BNB CHAIN SMART CONTRACTS
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const DocumentItem = ({ name, date }: { name: string, date: string }) => (
    <div className="flex items-center justify-between p-5 bg-slate-900/50 border border-white/5 rounded-lg group hover:border-white/10 transition-colors">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-400">
                <FileText size={20} />
            </div>
            <div>
                <div className="font-bold text-slate-200">{name}</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">{date}</div>
            </div>
        </div>
        <button className="text-[10px] font-bold text-primary px-3 py-1.5 bg-primary/10 rounded-full hover:bg-primary/20 transition-all uppercase tracking-widest">
            View on IPFS
        </button>
    </div>
);

export default AssetDetail;
