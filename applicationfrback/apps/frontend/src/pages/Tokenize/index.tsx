import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Upload,
  Calendar,
  Tag,
  ArrowRight
} from 'lucide-react';

const ListAsset = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    duration: '7_days',
    ownership: 'fractional'
  });

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 pb-32">
        <header className="mb-12 text-center">
            <h1 className="text-3xl font-bold mb-3">List an Asset for Sale</h1>
            <p className="text-sm text-text-secondary">Post your real-world asset on the Land Vault marketplace in seconds.</p>
        </header>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 min-h-[460px] flex flex-col justify-between shadow-minimal border border-border-default bg-card/60"
        >
            <div className="space-y-8">
                {/* Image Upload Area */}
                <div className="border-2 border-dashed border-border-default rounded-xl p-8 flex flex-col items-center justify-center text-center bg-surface/30 hover:bg-surface/50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-elevated rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Upload size={20} className="text-text-muted group-hover:text-accent transition-colors" />
                    </div>
                    <div className="text-sm font-semibold text-text-primary mb-1">Upload high-quality image</div>
                    <div className="text-xs text-text-muted">JPG, PNG, WebP up to 10MB</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-text-secondary flex items-center gap-1.5">
                            <Building2 size={14} />
                            Asset Name
                        </label>
                        <input 
                            type="text" 
                            placeholder="e.g. London Heights Residential"
                            className="w-full bg-surface border border-border-default rounded-lg p-3 text-sm focus:outline-none focus:border-accent text-text-primary placeholder:text-text-muted/50"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-text-secondary flex items-center gap-1.5">
                            <MapPin size={14} />
                            Location
                        </label>
                        <input 
                            type="text" 
                            placeholder="e.g. London, UK"
                            className="w-full bg-surface border border-border-default rounded-lg p-3 text-sm focus:outline-none focus:border-accent text-text-primary placeholder:text-text-muted/50"
                            value={formData.location}
                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                        />
                    </div>
                </div>

                <div className="border-t border-border-subtle pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-text-secondary flex items-center gap-1.5">
                            <Tag size={14} />
                            Set Price
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
                            <input 
                                type="number" 
                                placeholder="0.00"
                                className="w-full bg-surface border border-border-default rounded-lg p-3 pl-8 text-sm mono focus:outline-none focus:border-accent text-text-primary"
                                value={formData.price}
                                onChange={(e) => setFormData({...formData, price: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-text-secondary flex items-center gap-1.5">
                            <Calendar size={14} />
                            Duration
                        </label>
                        <select 
                            className="w-full bg-surface border border-border-default rounded-lg p-3 text-sm focus:outline-none focus:border-accent text-text-primary appearance-none cursor-pointer"
                            value={formData.duration}
                            onChange={(e) => setFormData({...formData, duration: e.target.value})}
                        >
                            <option value="3_days">3 Days</option>
                            <option value="7_days">7 Days</option>
                            <option value="14_days">14 Days</option>
                            <option value="1_month">1 Month</option>
                            <option value="6_months">6 Months</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2 pb-2">
                    <label className="text-xs font-semibold text-text-secondary">Ownership Type</label>
                    <div className="grid grid-cols-2 gap-4">
                        <button 
                            onClick={() => setFormData({...formData, ownership: 'fractional'})}
                            className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                                formData.ownership === 'fractional' ? 'bg-accent/10 border-accent text-accent' : 'bg-surface/50 border-border-default text-text-muted hover:text-text-primary'
                            }`}
                        >
                            Fractional
                        </button>
                        <button 
                            onClick={() => setFormData({...formData, ownership: 'full'})}
                            className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                                formData.ownership === 'full' ? 'bg-accent/10 border-accent text-accent' : 'bg-surface/50 border-border-default text-text-muted hover:text-text-primary'
                            }`}
                        >
                            Full Ownership
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-10 pt-8 border-t border-border-subtle">
                <div className="flex justify-between text-sm py-2 px-4 rounded-lg bg-surface/50 border border-border-subtle">
                    <span className="text-text-secondary">Expected marketplace fee</span>
                    <span className="mono font-medium text-text-primary">2.5%</span>
                </div>
                <button 
                    onClick={() => navigate('/')}
                    className="btn-primary w-full h-14 text-[15px] font-bold shadow-[0_0_20px_rgba(0,212,170,0.15)] flex justify-center items-center gap-2 hover:shadow-[0_0_25px_rgba(0,212,170,0.25)]"
                >
                    Complete Listing
                    <ArrowRight size={18} />
                </button>
                <button 
                    onClick={() => navigate('/')}
                    className="text-sm font-semibold text-text-muted hover:text-text-primary transition-colors text-center py-2"
                >
                    Cancel
                </button>
            </div>
        </motion.div>
    </div>
  );
};

export default ListAsset;
