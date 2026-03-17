import { useNavigate } from 'react-router-dom';
import { MapPin, TrendingUp } from 'lucide-react';

const AssetCard = ({ id, name, type, location, yield: apy, progress, value, price, status }: any) => {
  const navigate = useNavigate();

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

  const color = getAssetColor(type);

  return (
    <div 
      onClick={() => navigate(`/assets/${id}`)}
      className="glass-card flex flex-col group cursor-pointer border-border-subtle hover:border-border-default h-full bg-surface/30 shadow-minimal active:scale-[0.99] transition-transform"
    >
      {/* Zone 1: Image & Overlay */}
      <div className="h-44 bg-elevated relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-page/60 to-transparent" />
        <div className="absolute top-4 left-4">
            <span 
              style={{ backgroundColor: `${color}15`, color: color, borderColor: `${color}30` }}
              className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider border backdrop-blur-sm"
            >
                {type.replace('_', ' ')}
            </span>
        </div>
        {status === 'ACTIVE' && (
          <div className="absolute top-4 right-4 bg-page/80 backdrop-blur-sm px-2 py-1 rounded-md border border-border-subtle flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-positive animate-pulse" />
            <span className="text-[10px] font-bold text-text-primary">LIVE</span>
          </div>
        )}
      </div>

      {/* Zone 2: Content & Stats Grid */}
      <div className="p-5 flex-grow">
        <h3 className="text-[15px] font-semibold mb-1 line-clamp-1">{name}</h3>
        <div className="flex items-center gap-1.5 mb-6 text-text-muted">
            <MapPin size={12} />
            <span className="text-[12px]">{location}</span>
        </div>

        <div className="grid grid-cols-2 gap-y-5 gap-x-4">
            <div>
                <div className="label-muted">Target yield</div>
                <div className="text-[18px] mono font-semibold" style={{ color: color }}>
                    {apy}%
                </div>
            </div>
            <div>
                <div className="label-muted">Asset value</div>
                <div className="text-[18px] mono text-text-primary font-semibold">
                    ${(value / 1000000).toFixed(1)}M
                </div>
            </div>
            <div>
                <div className="label-muted">Token price</div>
                <div className="text-[18px] mono text-text-primary font-semibold">
                    ${price}
                </div>
            </div>
            <div>
                <div className="label-muted">Min invest</div>
                <div className="text-[18px] mono text-text-primary font-semibold">
                    ${price}
                </div>
            </div>
        </div>
      </div>

      {/* Zone 3: Footer */}
      <div className="p-4 border-t border-border-subtle flex items-center justify-between bg-surface/20">
        <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_rgba(0,212,170,0.5)]" />
                <span className="text-[10px] mono text-text-muted tracking-tight">BNB CHAIN</span>
            </div>
        </div>
        <button className="h-8 px-5 rounded-lg border border-border-default text-[13px] font-semibold text-text-primary hover:bg-white/5 transition-colors">
            Invest
        </button>
      </div>
    </div>
  );
};

export default AssetCard;
