import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Upload,
  Coins,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const ListAsset = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    type: 'REAL_ESTATE',
    location: '',
    description: '',
    valuation: '',
    ownership: 'fractional',
    totalSupply: '100000',
    pricePerToken: '50',
    minPurchase: '100',
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const steps = [
      { num: 1, title: 'Asset Details' },
      { num: 2, title: 'Ownership Structure' },
      { num: 3, title: 'Documents' },
      { num: 4, title: 'Review & Submit' }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 pb-32">
        <header className="mb-10 text-center">
            <h1 className="text-3xl font-bold mb-3">List an Asset</h1>
            <p className="text-sm text-text-secondary">Tokenize and list your real-world asset on LandVault.</p>
        </header>

        {/* Step Indicator */}
        <div className="mb-10 flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -mt-[1px] w-full h-[2px] bg-surface z-0" />
            <div 
                className="absolute left-0 top-1/2 -mt-[1px] h-[2px] bg-accent z-0 transition-all duration-500 ease-in-out" 
                style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
            {steps.map((s) => (
                <div key={s.num} className="relative z-10 flex flex-col items-center gap-2">
                    <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors shadow-minimal ${
                            step >= s.num ? 'bg-accent text-page' : 'bg-card border border-border-default text-text-muted'
                        }`}
                    >
                        {step > s.num ? <CheckCircle2 size={16} /> : s.num}
                    </div>
                    <div className={`text-[11px] font-semibold uppercase tracking-wider absolute top-10 whitespace-nowrap transition-colors ${
                        step >= s.num ? 'text-text-primary' : 'text-text-muted'
                    }`}>
                        {s.title}
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-16">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="glass-card p-8 min-h-[460px] flex flex-col justify-between shadow-minimal border border-border-default bg-card/60"
                >
                    {step === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold mb-6">Asset Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-text-secondary">Asset Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. London Heights Residential"
                                        className="w-full bg-surface border border-border-default rounded-lg p-3 text-sm focus:outline-none focus:border-accent text-text-primary placeholder:text-text-muted/50"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-text-secondary">Asset Type</label>
                                    <select 
                                        className="w-full bg-surface border border-border-default rounded-lg p-3 text-sm focus:outline-none focus:border-accent text-text-primary appearance-none cursor-pointer"
                                        value={formData.type}
                                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                                    >
                                        <option value="REAL_ESTATE">Real Estate</option>
                                        <option value="LAND">Land</option>
                                        <option value="RENEWABLE_ENERGY">Renewable Energy</option>
                                        <option value="INFRASTRUCTURE">Infrastructure</option>
                                        <option value="TIMBER">Timber & Forestry</option>
                                    </select>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-semibold text-text-secondary">Location</label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. London, UK"
                                        className="w-full bg-surface border border-border-default rounded-lg p-3 text-sm focus:outline-none focus:border-accent text-text-primary placeholder:text-text-muted/50"
                                        value={formData.location}
                                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-semibold text-text-secondary">Description</label>
                                    <textarea 
                                        rows={3}
                                        placeholder="Detailed description of the asset..."
                                        className="w-full bg-surface border border-border-default rounded-lg p-3 text-sm focus:outline-none focus:border-accent text-text-primary placeholder:text-text-muted/50 resize-none"
                                        value={formData.description}
                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-semibold text-text-secondary">Total Valuation (USD)</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
                                        <input 
                                            type="number" 
                                            placeholder="500000"
                                            className="w-full bg-surface border border-border-default rounded-lg p-3 pl-8 text-sm mono focus:outline-none focus:border-accent text-text-primary"
                                            value={formData.valuation}
                                            onChange={(e) => setFormData({...formData, valuation: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-8">
                            <h2 className="text-xl font-bold mb-6">Ownership Structure</h2>
                            
                            <div className="space-y-3">
                                <label className="text-xs font-semibold text-text-secondary">Structure Type</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button 
                                        onClick={() => setFormData({...formData, ownership: 'fractional'})}
                                        className={`p-4 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all ${
                                            formData.ownership === 'fractional' ? 'bg-accent/10 border-accent text-accent' : 'bg-surface/50 border-border-default text-text-muted hover:text-text-primary'
                                        }`}
                                    >
                                        <Coins size={24} />
                                        <span className="text-sm font-semibold">Fractional</span>
                                    </button>
                                    <button 
                                        onClick={() => setFormData({...formData, ownership: 'full'})}
                                        className={`p-4 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all ${
                                            formData.ownership === 'full' ? 'bg-accent/10 border-accent text-accent' : 'bg-surface/50 border-border-default text-text-muted hover:text-text-primary'
                                        }`}
                                    >
                                        <Building2 size={24} />
                                        <span className="text-sm font-semibold">Full Ownership</span>
                                    </button>
                                </div>
                            </div>

                            {formData.ownership === 'fractional' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl bg-surface/30 border border-border-default">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-text-secondary">Total Token Supply</label>
                                        <input 
                                            type="number" 
                                            className="w-full bg-surface border border-border-default rounded-lg p-3 text-sm mono focus:outline-none focus:border-accent text-text-primary"
                                            value={formData.totalSupply}
                                            onChange={(e) => setFormData({...formData, totalSupply: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-text-secondary">Price per Token (USD)</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
                                            <input 
                                                type="number" 
                                                className="w-full bg-surface border border-border-default rounded-lg p-3 pl-8 text-sm mono focus:outline-none focus:border-accent text-text-primary"
                                                value={formData.pricePerToken}
                                                onChange={(e) => setFormData({...formData, pricePerToken: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-xs font-semibold text-text-secondary">Minimum Purchase (Tokens)</label>
                                        <input 
                                            type="number" 
                                            className="w-full bg-surface border border-border-default rounded-lg p-3 text-sm mono focus:outline-none focus:border-accent text-text-primary"
                                            value={formData.minPurchase}
                                            onChange={(e) => setFormData({...formData, minPurchase: e.target.value})}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-8">
                            <h2 className="text-xl font-bold mb-2">Required Documents</h2>
                            <p className="text-sm text-text-muted mb-6">Upload verified documentation for compliance and marketplace confidence.</p>
                            
                            <div className="space-y-4">
                                {[
                                    { label: 'Land Deed / Title Document', desc: 'Official proof of ownership.' },
                                    { label: 'Valuation Certificate', desc: 'Recent professional valuation report.' },
                                    { label: 'Legal Structure & Compliance', desc: 'Any SPV or DAO structuring legalities.' }
                                ].map((doc, idx) => (
                                    <div key={idx} className="border-2 border-dashed border-border-default rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-surface/30 hover:bg-surface/50 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-elevated rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                                <FileCheck size={20} className="text-text-muted group-hover:text-accent transition-colors" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-text-primary mb-1">{doc.label}</div>
                                                <div className="text-xs text-text-muted">{doc.desc}</div>
                                            </div>
                                        </div>
                                        <button className="px-4 py-2 rounded-lg bg-surface border border-border-subtle text-[12px] font-semibold text-text-primary hover:border-accent/50 transition-colors flex items-center gap-2">
                                            <Upload size={14} /> Upload
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold mb-6 text-center">Review & Submit</h2>
                            
                            <div className="max-w-xl mx-auto space-y-6">
                                <div className="p-6 rounded-xl bg-surface border border-border-default">
                                    <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">1. Details</h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-text-secondary">Name</div>
                                        <div className="text-right text-text-primary font-medium">{formData.name || 'N/A'}</div>
                                        <div className="text-text-secondary">Type</div>
                                        <div className="text-right text-text-primary font-medium">{formData.type.replace('_', ' ')}</div>
                                        <div className="text-text-secondary">Location</div>
                                        <div className="text-right text-text-primary font-medium">{formData.location || 'N/A'}</div>
                                        <div className="text-text-secondary">Valuation</div>
                                        <div className="text-right text-text-primary mono">${formData.valuation || '0'}</div>
                                    </div>
                                </div>
                                
                                <div className="p-6 rounded-xl bg-surface border border-border-default">
                                    <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">2. Structure</h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-text-secondary">Ownership</div>
                                        <div className="text-right text-text-primary font-medium capitalize">{formData.ownership}</div>
                                        {formData.ownership === 'fractional' && (
                                            <>
                                                <div className="text-text-secondary">Token Supply</div>
                                                <div className="text-right text-text-primary mono">{formData.totalSupply}</div>
                                                <div className="text-text-secondary">Price/Token</div>
                                                <div className="text-right text-text-primary mono">${formData.pricePerToken}</div>
                                                <div className="text-text-secondary">Min Purchase</div>
                                                <div className="text-right text-text-primary mono">{formData.minPurchase} Tokens</div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 5 && (
                        <div className="flex flex-col items-center justify-center min-h-[460px] text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent"
                            >
                                <CheckCircle2 size={48} />
                            </motion.div>
                            <h2 className="text-3xl font-bold mb-3">Asset Listed Successfully</h2>
                            <p className="text-text-secondary mb-10 max-w-sm">
                                {formData.name} is now available on the marketplace.
                            </p>
                            
                            <button 
                                onClick={() => navigate('/')}
                                className="btn-primary w-fit px-10"
                            >
                                Go to Marketplace
                            </button>
                        </div>
                    )}

                    {/* Navigation Footer */}
                    {step < 5 && (
                      <div className="flex justify-between items-center mt-10 pt-6 border-t border-border-subtle">
                        {step > 1 ? (
                            <button 
                                onClick={handlePrev}
                                className="px-6 py-2.5 rounded-lg border border-border-subtle text-[14px] font-semibold text-text-primary hover:bg-surface transition-colors flex items-center gap-2"
                            >
                                <ArrowLeft size={16} /> Back
                            </button>
                        ) : <div />}
                        
                        {step < 4 ? (
                            <button 
                                onClick={handleNext}
                                className="px-6 py-2.5 rounded-lg bg-white text-black text-[14px] font-bold hover:bg-white/90 transition-colors flex items-center gap-2 shadow-minimal"
                            >
                                Next Step <ArrowRight size={16} />
                            </button>
                        ) : step === 4 ? (
                            <button 
                                onClick={() => setStep(5)}
                                className="btn-primary"
                            >
                                List Asset
                            </button>
                        ) : null}
                      </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
  );
};

export default ListAsset;
