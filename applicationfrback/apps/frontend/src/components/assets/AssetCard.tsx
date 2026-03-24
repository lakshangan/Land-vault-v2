import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AssetCard = ({ id, name, type, location, ownershipType, price, status, progress = 0, image }: any) => {
  const navigate = useNavigate();

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
              className="px-3 py-1 rounded-full text-[11px] font-medium border backdrop-blur-md bg-white/10 text-white border-white/20 capitalize shadow-none"
            >
                {type.replace('_', ' ').toLowerCase()}
            </span>
        </div>
        
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${status === 'AVAILABLE' ? 'bg-emerald-500' : status === 'SOLD' ? 'bg-slate-400' : 'bg-amber-500'}`} />
          <span className="text-[11px] font-medium text-white/90 capitalize">{status.toLowerCase()}</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-medium text-white/60">Valuation</span>
                <span className="text-xl font-semibold text-white tracking-tight">${price.toLocaleString()}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 shadow-none border-none">
                <ArrowUpRight size={16} />
            </div>
        </div>
      </div>

      {/* Zone 2: Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-medium text-white leading-tight">{name}</h3>
        </div>
        
        <div className="flex items-center gap-1.5 mb-6 text-slate-400">
            <MapPin size={12} className="text-emerald-500/60" />
            <span className="text-[13px] font-normal">{location}</span>
        </div>

        {ownershipType === 'Fractional' && (
            <div className="mt-auto space-y-2">
                <div className="flex justify-between text-[12px] font-medium">
                    <span className="text-slate-500">Subscription</span>
                    <span className="text-emerald-500">{progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-emerald-500 rounded-full" 
                    />
                </div>
            </div>
        )}
      </div>

      {/* Zone 3: Footer */}
      <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between bg-white/[0.01]">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[12px] font-medium text-slate-400">Base Sepolia</span>
        </div>
        <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span className="text-[12px] font-medium text-slate-400">Verified</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AssetCard;
