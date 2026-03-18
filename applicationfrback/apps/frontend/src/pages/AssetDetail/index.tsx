import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  MapPin, 
  ArrowLeft, 
  Info,
  Clock,
  History,
  Link as LinkIcon
} from 'lucide-react';

const AssetDetail = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('details');

    const asset = {
        name: 'London Prime Residential',
        type: 'REAL_ESTATE',
        location: 'London, UK',
        value: 2400000,
        price: 50,
        lastSalePrice: 48,
        status: 'AVAILABLE',
        owner: '0x8b3...4e9',
        description: 'London Prime Residential is a flagship asset in our portfolio. Located in the heart of Mayfair, this premium residential complex represents prime real estate. The asset is fully verified and fractionalized into 48,000 protocol-compliant fractions, making ownership simple and highly liquid.',
        color: 'var(--color-asset-re)'
    };

    const tabs = [
        { id: 'details', label: 'Details' },
        { id: 'ownership', label: 'Ownership' },
        { id: 'activity', label: 'Activity' },
        { id: 'blockchain', label: 'Blockchain Info' }
    ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 pb-32">
        <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[13px] text-text-muted hover:text-text-primary mb-8 transition-colors"
        >
            <ArrowLeft size={16} />
            Back to marketplace
        </button>

        <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: 60% */}
            <div className="lg:w-[60%] space-y-8">
                <div className="aspect-[4/3] bg-elevated rounded-2xl overflow-hidden relative border border-border-subtle">
                    <div className="absolute inset-0 bg-gradient-to-t from-page/40 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center text-text-muted opacity-20 font-geist text-2xl font-bold">
                        High-quality 3D render
                    </div>
                </div>

                <div className="pt-4 border-t border-border-subtle">
                    <div className="flex gap-6 border-b border-border-subtle overflow-x-auto no-scrollbar mb-6">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-4 text-[13px] font-medium transition-colors relative whitespace-nowrap ${
                                    activeTab === tab.id ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
                                }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[300px]">
                        {activeTab === 'details' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h2 className="text-xl font-semibold mb-4 text-text-primary">Asset overview</h2>
                                <p className="text-text-secondary leading-relaxed mb-8">
                                    {asset.description}
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    <div>
                                        <div className="text-sm text-text-muted mb-1">Property Type</div>
                                        <div className="font-medium text-text-primary">Residential</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-text-muted mb-1">Total Fractions</div>
                                        <div className="font-medium text-text-primary">48,000</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-text-muted mb-1">Year Built</div>
                                        <div className="font-medium text-text-primary">2018</div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'ownership' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 text-text-secondary">
                                <h2 className="text-xl font-semibold mb-4 text-text-primary">Fraction Holders</h2>
                                <ul className="space-y-4">
                                    <li className="flex justify-between pb-4 border-b border-border-subtle">
                                        <span className="mono">0x123...abc</span>
                                        <span className="font-medium">12% Ownership</span>
                                    </li>
                                    <li className="flex justify-between pb-4 border-b border-border-subtle">
                                        <span className="mono">0x456...def</span>
                                        <span className="font-medium">8% Ownership</span>
                                    </li>
                                    <li className="flex justify-between pb-4 border-b border-border-subtle">
                                        <span className="mono">0x789...ghi</span>
                                        <span className="font-medium">5% Ownership</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'activity' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 text-text-secondary">
                                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-text-primary">
                                    <History size={20}/>
                                    Recent Transactions
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-surface/30 p-4 rounded-xl border border-border-subtle">
                                        <div>
                                            <div className="text-sm text-text-primary font-medium">Sale</div>
                                            <div className="text-[12px] text-text-muted">2 hours ago</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-text-primary mono">100 Fractions</div>
                                            <div className="text-[12px] text-text-muted mono">@ $49.50</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'blockchain' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 text-text-secondary">
                                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-text-primary">
                                    <LinkIcon size={20}/>
                                    Contract Details
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-sm text-text-muted mb-1">Contract Address</div>
                                        <div className="mono font-medium text-text-primary break-all">0xAbC123...789XYZ</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-text-muted mb-1">Token Standard</div>
                                        <div className="mono font-medium text-text-primary">ERC-1155</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-text-muted mb-1">Network</div>
                                        <div className="font-medium text-text-primary">BNB Chain</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Column: 40% (Sticky Panel) */}
            <div className="lg:w-[40%] flex-shrink-0">
                <div className="sticky top-24 glass-card p-8 bg-surface/50 border-border-subtle shadow-minimal">
                    <header className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span 
                                style={{ backgroundColor: `${asset.color}15`, color: asset.color, borderColor: `${asset.color}30` }}
                                className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider border backdrop-blur-sm"
                            >
                                {asset.type.replace('_', ' ')}
                            </span>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-surface border border-border-subtle rounded-md">
                                <Shield size={12} className="text-positive" />
                                <span className="text-[10px] font-bold text-text-primary">VERIFIED</span>
                            </div>
                        </div>
                        <h1 className="text-3xl font-semibold mb-2">{asset.name}</h1>
                        <div className="flex items-center gap-2 mb-4 text-text-muted text-[13px]">
                            <MapPin size={14} />
                            {asset.location}
                        </div>
                        <div className="flex flex-col gap-1 border-t border-border-subtle pt-4">
                           <div className="text-sm text-text-muted">Owned by <span className="text-accent mono font-medium">{asset.owner}</span></div>
                        </div>
                    </header>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 rounded-xl bg-surface/30 border border-border-subtle">
                            <div className="text-[12px] text-text-muted mb-1 flex items-center gap-1">
                                <Clock size={12}/> Current Price
                            </div>
                            <div className="text-2xl font-bold mono text-text-primary">${asset.price.toFixed(2)}</div>
                        </div>
                        <div className="p-4 rounded-xl bg-surface/30 border border-border-subtle">
                            <div className="text-[12px] text-text-muted mb-1">Last Sale</div>
                            <div className="text-xl font-medium mono text-text-secondary">${asset.lastSalePrice.toFixed(2)}</div>
                        </div>
                    </div>

                    <div className="space-y-6 mb-8 mt-2 p-5 rounded-xl border border-border-subtle bg-page/40 shadow-inner">
                        <h3 className="text-sm font-semibold mb-4 text-text-primary border-b border-border-subtle pb-2">Buy Fractions</h3>
                        <div>
                            <div className="label-muted flex justify-between mb-2">
                                <span>Quantity</span>
                                <span className="text-[10px] text-accent">Available: 4,200</span>
                            </div>
                            <div className="relative">
                                <input 
                                    type="number" 
                                    defaultValue="10"
                                    className="w-full h-12 bg-surface/50 border border-border-subtle rounded-lg px-4 text-xl mono focus:outline-none focus:border-accent text-text-primary"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-text-muted mono">Shares</span>
                            </div>
                        </div>

                        <div className="space-y-2 pt-2">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-text-secondary">Subtotal</span>
                                <span className="mono text-text-primary">$500.00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-text-secondary flex items-center gap-1">Protocol Fee <Info size={12}/></span>
                                <span className="mono text-text-primary">$12.50</span>
                            </div>
                            <div className="pt-4 border-t border-border-subtle flex justify-between items-center">
                                <span className="text-sm font-semibold text-text-primary">Total Total</span>
                                <span className="mono text-xl text-text-primary font-bold">$512.50</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="btn-primary w-full h-12 text-sm font-bold shadow-[0_0_20px_rgba(0,212,170,0.15)] hover:shadow-[0_0_25px_rgba(0,212,170,0.25)] transition-shadow">
                            Buy Now
                        </button>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="h-12 rounded-lg border border-border-default bg-surface/30 text-sm font-semibold text-text-primary hover:bg-surface/60 transition-colors">
                                Make Offer
                            </button>
                            <button className="h-12 rounded-lg border border-border-default bg-surface/30 text-sm font-semibold text-text-primary hover:bg-surface/60 transition-colors">
                                List for Sale
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
};

export default AssetDetail;
