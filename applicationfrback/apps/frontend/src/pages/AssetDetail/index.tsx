import { useParams, useNavigate } from 'react-router-dom';
import { 
  Shield, 
  FileText, 
  MapPin, 
  ArrowLeft, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const chartData = [
  { name: 'Jan', yield: 8.2 },
  { name: 'Feb', yield: 8.5 },
  { name: 'Mar', yield: 8.4 },
  { name: 'Apr', yield: 9.1 },
  { name: 'May', yield: 10.2 },
  { name: 'Jun', yield: 12.4 },
];

const AssetDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const asset = {
        name: 'London Prime Residential',
        type: 'REAL_ESTATE',
        location: 'London, UK',
        yield: 12.4,
        value: 2400000,
        price: 50,
        status: 'VERIFIED',
        description: 'London Prime Residential is a flagship asset in our RWA portfolio. Located in the heart of Mayfair, this premium residential complex generates stable rental yield through long-term high-net-worth tenants. The asset is fully verified and tokenized into 48,000 protocol-compliant fractions.',
        color: 'var(--color-asset-re)'
    };

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
            <div className="flex-grow space-y-12">
                <header>
                    <div className="flex items-center gap-3 mb-4">
                        <span 
                            style={{ backgroundColor: `${asset.color}15`, color: asset.color, borderColor: `${asset.color}30` }}
                            className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider border"
                        >
                            {asset.type.replace('_', ' ')}
                        </span>
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-surface border border-border-subtle rounded-md">
                            <Shield size={12} className="text-positive" />
                            <span className="text-[10px] font-bold text-text-primary">VERIFIED</span>
                        </div>
                    </div>
                    <h1 className="text-4xl mb-2">{asset.name}</h1>
                    <div className="flex items-center gap-2 text-text-muted text-[13px]">
                        <MapPin size={14} />
                        {asset.location}
                    </div>
                </header>

                <div className="aspect-video bg-elevated rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-page/40 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center text-text-muted opacity-20 font-geist text-2xl font-bold">
                        Asset image showcase
                    </div>
                </div>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Asset overview</h2>
                    <p className="text-text-secondary leading-relaxed max-w-2xl">
                        {asset.description}
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-card p-6">
                        <h3 className="text-sm font-semibold mb-6">Yield history</h3>
                        <div className="h-48 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis dataKey="name" stroke="#64748B" fontSize={10} axisLine={false} tickLine={false} />
                                    <YAxis hide />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#0E1117', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                        itemStyle={{ color: '#00D4AA' }}
                                    />
                                    <Area type="monotone" dataKey="yield" stroke="#00D4AA" strokeWidth={2} fillOpacity={0.1} fill="#00D4AA" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="glass-card p-6">
                        <h3 className="text-sm font-semibold mb-6">Legal documents</h3>
                        <div className="space-y-3">
                            {['Title deed', 'Valuation report', 'Compliance audit'].map(doc => (
                                <div key={doc} className="flex items-center justify-between p-3 rounded-lg bg-surface/50 border border-border-subtle group hover:border-border-default transition-all cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <FileText size={16} className="text-text-muted group-hover:text-text-primary" />
                                        <span className="text-[12px] text-text-primary">{doc}</span>
                                    </div>
                                    <ExternalLink size={12} className="text-text-muted" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Right Column: 40% (Sticky Panel) */}
            <div className="lg:w-96 flex-shrink-0">
                <div className="sticky top-24 glass-card p-8 bg-surface/50">
                    <h3 className="text-lg font-semibold mb-6">Purchase tokens</h3>
                    
                    <div className="space-y-6 mb-8">
                        <div>
                            <div className="label-muted flex justify-between">
                                <span>Amount</span>
                                <span className="text-[10px] text-accent">Available: 4,200</span>
                            </div>
                            <div className="relative">
                                <input 
                                    type="number" 
                                    placeholder="0"
                                    className="w-full h-12 bg-page border border-border-subtle rounded-lg px-4 text-xl mono focus:outline-none focus:border-accent"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-text-muted mono">LV-LNDN</span>
                            </div>
                        </div>

                        <div className="space-y-3 p-4 rounded-xl bg-page/50 border border-border-subtle">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-text-secondary">Token price</span>
                                <span className="mono text-text-primary">$50.00</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-text-secondary">Subtotal</span>
                                <span className="mono text-text-primary">$0.00</span>
                            </div>
                            <div className="pt-3 border-t border-border-subtle flex justify-between items-center">
                                <span className="text-[11px] font-semibold text-text-primary">Total settlement</span>
                                <span className="mono text-accent font-bold">$0.00</span>
                            </div>
                        </div>
                    </div>

                    <button className="btn-primary w-full h-12 gap-2 shadow-minimal">
                        Confirm investment
                    </button>

                    <div className="mt-6 flex items-start gap-2 p-3 rounded-lg bg-surface/80 border border-border-subtle">
                        <Info size={14} className="text-text-muted shrink-0 mt-0.5" />
                        <p className="text-[10px] text-text-secondary leading-relaxed">
                            Investments in RWAs carry liquidity risks. Tokens are locked for 7 days post-purchase before they can be used in DeFiHub.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AssetDetail;
