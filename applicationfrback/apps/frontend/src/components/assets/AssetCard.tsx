import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AssetCard = ({ id, name, type, location, ownershipType, price, status, progress = 0, image }: any) => {
  const navigate = useNavigate();

  const getAssetColor = (assetType: string) => {
    switch (assetType) {
      case 'LAND': return '#F59E0B'; // Amber
      case 'RENEWABLE_ENERGY': return '#10B981'; // Emerald
      case 'INFRASTRUCTURE': return '#6366F1'; // Indigo
      case 'TIMBER': return '#84CC16'; // Lime
      case 'REAL_ESTATE': return '#EC4899'; // Pink
      default: return '#94A3B8'; // Slate
    }
  };

  const color = getAssetColor(type);

  return (
    <motion.div 
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onClick={() => navigate(`/assets/${id}`)}
      className="glass-card flex flex-col group cursor-pointer border-white/5 hover:border-white/20 h-full bg-gradient-to-br from-white/5 to-white/[0.02] shadow-2xl backdrop-blur-md overflow-hidden"
    >
      {/* Zone 1: Image & Overlay */}
      <div className="h-56 relative overflow-hidden">
        {image ? (
            <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
        ) : (
            <div className="w-full h-full bg-elevated animate-pulse" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute top-4 left-4">
            <span 
              style={{ backgroundColor: `${color}20`, color: color, borderColor: `${color}40` }}
              className="px-3 py-1 rounded-full text-[9px] font-black tracking-[0.15em] border backdrop-blur-xl uppercase"
            >
                {type.replace('_', ' ')}
            </span>
        </div>
        
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${status === 'AVAILABLE' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' : status === 'SOLD' ? 'bg-slate-500' : 'bg-amber-400'}`} />
          <span className="text-[9px] font-black text-white/90 uppercase tracking-wider">{status}</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Valuation</span>
                <span className="text-xl font-black text-white font-mono tracking-tight">${price.toLocaleString()}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={20} />
            </div>
        </div>
      </div>

      {/* Zone 2: Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-accent transition-colors">{name}</h3>
        </div>
        
        <div className="flex items-center gap-1.5 mb-6 text-slate-400">
            <MapPin size={12} className="text-accent/60" />
            <span className="text-[11px] font-medium tracking-wide font-mono uppercase">{location}</span>
        </div>

        {ownershipType === 'Fractional' && (
            <div className="mt-auto space-y-3">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-slate-500">Subscription</span>
                    <span className="text-accent">{progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent to-emerald-400 rounded-full shadow-[0_0_10px_rgba(33,255,188,0.3)]" 
                    />
                </div>
            </div>
        )}
      </div>

      {/* Zone 3: Footer */}
      <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between bg-black/20">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
            </div>
            <span className="text-[10px] font-black text-blue-400/80 uppercase tracking-widest">Base Sepolia</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5">
            <ShieldCheck size={12} className="text-emerald-400" />
            <span className="text-[9px] font-bold text-white/50 uppercase">Verified</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AssetCard;
