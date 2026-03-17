import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CircleDollarSign, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Percent, 
  Activity, 
  ShieldCheck, 
  Building2,
  Info,
  TrendingUp
} from 'lucide-react';

const assetsToCollateralize = [
  { id: '1', name: 'London Prime Residential', balance: '1,200 LV-LNDN', value: '$60,000', ltv: 70 },
  { id: '2', name: 'Sahara Solar Arrays', balance: '450 LV-EGPT', value: '$45,000', ltv: 65 },
];

const DeFiHub = () => {
    const [selectedAsset, setSelectedAsset] = useState<typeof assetsToCollateralize[0] | null>(null);
    const [collateralAmount, setCollateralAmount] = useState('');
    
    const borrowLimit = selectedAsset && collateralAmount 
        ? (parseFloat(collateralAmount.replace(/,/g, '')) * (selectedAsset.ltv / 100) * 48).toLocaleString() 
        : '0.00';

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-syne font-extrabold uppercase tracking-tight mb-2">DeFi Yield Hub</h1>
          <p className="text-slate-400">Collateralize your tokenized assets to borrow stablecoins or earn yield.</p>
        </div>
        <div className="flex gap-4">
            <div className="glass-card px-6 py-4 flex flex-col items-center border-primary/20 bg-primary/5">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Total Protocol TVL</span>
                <span className="text-xl font-bold font-mono tracking-tight text-primary">$35.84B</span>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Collateral & Borrowing (8/12) */}
        <div className="lg:col-span-8 flex flex-col space-y-8">
            <div className="glass-card p-8 space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-syne font-extrabold uppercase tracking-wider flex items-center gap-3">
                        <CircleDollarSign className="text-primary" />
                        Collateralize Assets
                    </h2>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
                        <ShieldCheck size={14} className="text-status-active" />
                        Audited by CertiK
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {assetsToCollateralize.map((asset) => (
                        <div 
                            key={asset.id}
                            onClick={() => setSelectedAsset(asset)}
                            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer group hover:bg-white/5 ${
                                selectedAsset?.id === asset.id ? 'border-primary bg-primary/5' : 'border-slate-800 bg-slate-900/50'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-slate-800 rounded-lg text-slate-400 group-hover:text-primary transition-colors">
                                    <Building2 size={24} />
                                </div>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{asset.ltv}% Max LTV</span>
                            </div>
                            <h3 className="text-sm font-bold text-slate-200 mb-1">{asset.name}</h3>
                            <div className="flex justify-between items-end mt-4">
                                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Your Balance</div>
                                <div className="text-lg font-mono font-bold text-white">{asset.balance}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedAsset && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-8 pt-8 border-t border-slate-800"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Collateral Amount</label>
                                <div className="relative">
                                    <input 
                                        type="number" 
                                        placeholder="0.00"
                                        value={collateralAmount}
                                        onChange={(e) => setCollateralAmount(e.target.value)}
                                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 text-xl font-bold font-mono focus:border-primary focus:outline-none"
                                    />
                                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">{selectedAsset.balance.split(' ')[1]}</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Borrow Limit (LVT)</label>
                                <div className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-5 border-dashed flex items-center justify-between">
                                    <span className="text-2xl font-bold font-mono text-primary">${borrowLimit}</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">LVT Stablecoin</span>
                                </div>
                            </div>
                        </div>
                        <button className="btn-primary w-full py-5 text-sm font-extrabold uppercase tracking-widest">
                            Confirm Collateralization
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Global Stats Group */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MiniStat label="Avg. Lending APR" value="12.42%" icon={Percent} color="primary" />
                <MiniStat label="Active Borrowers" value="8,421" icon={Activity} color="secondary" />
                <MiniStat label="Protocol Utilization" value="64.2%" icon={TrendingUp} color="info" />
            </div>
        </div>

        {/* Right: Borrowing Summary / Panel (4/12) */}
        <div className="lg:col-span-4 space-y-6">
            <div className="glass-card p-8 bg-surface/50 border-primary/10">
                <h3 className="text-lg font-syne font-extrabold uppercase tracking-wider mb-8">Lending Summary</h3>
                <div className="space-y-6">
                    <SummaryItem label="Collateral Value" value="$105,000.00" />
                    <SummaryItem label="Outstanding Debt" value="$12,400.00" />
                    <SummaryItem label="Health Factor" value="8.42" healthy />
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-status-active w-[12%]" />
                    </div>
                    <p className="text-[9px] text-slate-500 font-dm leading-relaxed flex items-start gap-2 pt-4 border-t border-slate-800">
                        <Info size={14} className="text-primary flex-shrink-0" />
                        Your Health Factor is currently in the "Safe" zone. Liquidation only occurs if your HF falls below 1.0.
                    </p>
                </div>
            </div>

            <div className="glass-card p-8">
                 <h3 className="text-lg font-syne font-extrabold uppercase tracking-wider mb-6">Action History</h3>
                 <div className="space-y-6">
                    <DeFiHistoryItem title="Supply LV-LNDN" value="+$2,400" type="supply" />
                    <DeFiHistoryItem title="Repay LVT Debt" value="-$500" type="repay" />
                    <DeFiHistoryItem title="Withdraw Collateral" value="-$1,000" type="withdraw" />
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const MiniStat = ({ label, value, icon: Icon, color }: any) => {
    const colorMap: any = {
        primary: 'text-primary bg-primary/10',
        secondary: 'text-secondary bg-secondary/10',
        info: 'text-blue-400 bg-blue-400/10'
    };
    return (
        <div className="glass-card p-6 flex flex-col items-center text-center space-y-2">
            <div className={`p-2 rounded-lg ${colorMap[color]}`}>
                <Icon size={18} />
            </div>
            <div className="text-[9px] uppercase font-bold text-slate-500 tracking-widest">{label}</div>
            <div className="text-xl font-bold font-mono tracking-tight">{value}</div>
        </div>
    );
};

const SummaryItem = ({ label, value, healthy }: any) => (
    <div className="flex justify-between items-center">
        <span className="text-xs text-slate-400 font-medium">{label}</span>
        <span className={`text-sm font-mono font-bold ${healthy ? 'text-status-active' : 'text-slate-100'}`}>{value}</span>
    </div>
);

const DeFiHistoryItem = ({ title, value, type }: any) => {
    const Icon = type === 'supply' ? ArrowUpRight : ArrowDownLeft;
    const color = type === 'supply' ? 'text-primary' : 'text-orange-400';
    return (
        <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded bg-slate-800 flex items-center justify-center ${color} opacity-40 group-hover:opacity-100 transition-opacity`}>
                    <Icon size={14} />
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-200 transition-colors uppercase tracking-widest">{title}</span>
            </div>
            <span className={`text-xs font-mono font-bold ${color}`}>{value}</span>
        </div>
    );
};

export default DeFiHub;
