import { useNavigate } from 'react-router-dom';
import { MapPin, TrendingUp } from 'lucide-react';

const AssetCard = ({ id, name, type, location, yield: apy, progress, value, price, status }: any) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/assets/${id}`)}
      className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
    >
      <div className="h-48 bg-slate-800 relative group-hover:scale-105 transition-transform duration-500 overflow-hidden">
        {/* Mock asset image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 opacity-80" />
        <div className="absolute top-4 left-4">
            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                type === 'REAL_ESTATE' ? 'bg-asset-realestate/20 text-asset-realestate' :
                type === 'RENEWABLE_ENERGY' ? 'bg-asset-energy/20 text-asset-energy' :
                'bg-asset-infra/20 text-asset-infra'
            }`}>
                {type.replace('_', ' ')}
            </span>
        </div>
        <div className="absolute top-4 right-4">
            <span className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] bg-slate-900 border border-white/5 font-bold uppercase tracking-widest ${
                status === 'ACTIVE' ? 'text-status-active' :
                status === 'VERIFIED' ? 'text-status-verified' :
                'text-status-locked'
            }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${
                    status === 'ACTIVE' ? 'bg-status-active' :
                    status === 'VERIFIED' ? 'bg-status-verified' :
                    'bg-status-locked'
                } animate-pulse`} />
                {status}
            </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-syne font-extrabold mb-2 group-hover:text-primary transition-colors">{name}</h3>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 font-dm font-bold uppercase tracking-wide">
            <MapPin size={12} className="text-primary" />
            {location}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
                <div className="text-[10px] uppercase font-bold text-slate-500 mb-1 tracking-widest">Target Yield</div>
                <div className="text-lg font-bold text-primary flex items-center gap-1 font-mono">
                    {apy}%
                    <TrendingUp size={14} />
                </div>
            </div>
            <div>
                <div className="text-[10px] uppercase font-bold text-slate-500 mb-1 tracking-widest">Asset Value</div>
                <div className="text-lg font-bold font-mono">
                    ${(value / 1000000).toFixed(1)}M
                </div>
            </div>
        </div>

        <div className="mb-6">
            <div className="flex justify-between items-end mb-2">
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Progress</div>
                <div className="text-[10px] font-bold text-primary font-mono">{progress}%</div>
            </div>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Share Price <span className="text-white font-bold ml-1 font-mono">${price}</span></div>
                <div className="flex items-center gap-1 text-[7px] font-bold text-blue-400 uppercase tracking-tighter">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.6)]" />
                   BASE SEPOLIA
                </div>
            </div>
            <button className="px-5 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-widest border border-primary text-primary hover:bg-primary hover:text-background transition-all group-hover:bg-primary group-hover:text-background shadow-[0_0_10px_rgba(0,212,170,0.2)]">
                Invest
            </button>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
