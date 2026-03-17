import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Building2, 
  TrendingUp, 
  FileText, 
  ShieldCheck, 
  SearchCode, 
  Rocket,
  Upload
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  { id: 1, name: 'Asset type', icon: Building2 },
  { id: 2, name: 'Basic info', icon: Building2 },
  { id: 3, name: 'Financials', icon: TrendingUp },
  { id: 4, name: 'Documents', icon: FileText },
  { id: 5, name: 'Compliance', icon: ShieldCheck },
  { id: 6, name: 'Review', icon: SearchCode },
];

const TokenizeWizard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    type: 'REAL_ESTATE',
    location: '',
    valuation: '',
    apy: '',
    tokenPrice: '50',
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 pb-32">
        <header className="mb-12 text-center">
            <h1 className="text-3xl mb-2">Tokenize your asset</h1>
            <p className="text-sm text-text-secondary">Onboard your real-world property to the institutional liquidity mesh.</p>
        </header>

        {/* Minimalist Progress Stepper */}
        <div className="flex items-center justify-between mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border-subtle -translate-y-1/2 z-0" />
            <div 
                className="absolute top-1/2 left-0 h-[1px] bg-accent -translate-y-1/2 z-0 transition-all duration-500" 
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            {steps.map(step => (
                <div key={step.id} className="relative z-10 flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${
                        currentStep > step.id ? 'bg-accent text-slate-900 shadow-minimal' :
                        currentStep === step.id ? 'bg-page border border-accent text-accent' :
                        'bg-page border border-border-default text-text-muted'
                    }`}>
                        {currentStep > step.id ? <Check size={14} strokeWidth={3} /> : step.id}
                    </div>
                </div>
            ))}
        </div>

        <div className="glass-card p-10 min-h-[460px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold mb-6">Select asset type</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {['REAL_ESTATE', 'RENEWABLE_ENERGY', 'INFRASTRUCTURE', 'LAND', 'TIMBER'].map(t => (
                                    <button 
                                        key={t}
                                        onClick={() => setFormData({...formData, type: t})}
                                        className={`p-6 rounded-xl border text-left transition-all ${
                                            formData.type === t ? 'bg-accent/5 border-accent' : 'bg-surface/30 border-border-default hover:border-text-muted'
                                        }`}
                                    >
                                        <div className="text-[13px] font-medium text-text-primary">{t.replace('_', ' ')}</div>
                                        <div className="text-[10px] text-text-muted mt-1">Institutional verification required</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold mb-6">Basic information</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="label-muted">Legal asset name</label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. London Heights Residential"
                                        className="w-full bg-surface border border-border-subtle rounded-lg p-3 text-sm focus:outline-none focus:border-accent"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="label-muted">Physical location</label>
                                    <input 
                                        type="text" 
                                        placeholder="Full address or GPS coordinates"
                                        className="w-full bg-surface border border-border-subtle rounded-lg p-3 text-sm focus:outline-none focus:border-accent"
                                        value={formData.location}
                                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold mb-6">Financial profile</h2>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="label-muted">Estimated valuation (USD)</label>
                                    <input 
                                        type="text" 
                                        placeholder="0.00"
                                        className="w-full bg-surface border border-border-subtle rounded-lg p-3 text-sm mono focus:outline-none focus:border-accent"
                                        value={formData.valuation}
                                        onChange={(e) => setFormData({...formData, valuation: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="label-muted">Target annual yield (%)</label>
                                    <input 
                                        type="text" 
                                        placeholder="0.0%"
                                        className="w-full bg-surface border border-border-subtle rounded-lg p-3 text-sm mono focus:outline-none focus:border-accent"
                                        value={formData.apy}
                                        onChange={(e) => setFormData({...formData, apy: e.target.value})}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 6 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold mb-6">Final review</h2>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                <div>
                                    <div className="label-muted">Legal name</div>
                                    <div className="text-sm text-text-primary">{formData.name || 'Untitled'}</div>
                                </div>
                                <div>
                                    <div className="label-muted">Asset type</div>
                                    <div className="text-sm text-text-primary">{formData.type}</div>
                                </div>
                                <div>
                                    <div className="label-muted">Valuation</div>
                                    <div className="text-sm mono text-text-primary">${formData.valuation}</div>
                                </div>
                                <div>
                                    <div className="label-muted">Yield</div>
                                    <div className="text-sm mono text-accent">{formData.apy}% APY</div>
                                </div>
                            </div>
                            <div className="mt-8 p-4 rounded-xl bg-accent/5 border border-accent/20 flex gap-4">
                                <ShieldCheck size={20} className="text-accent shrink-0" />
                                <p className="text-[11px] text-text-secondary">
                                    I confirm that the asset information provided is legally accurate and that I have the authority to tokenize this property.
                                </p>
                            </div>
                        </div>
                    )}

                    {currentStep !== 1 && currentStep !== 2 && currentStep !== 3 && currentStep !== 6 && (
                        <div className="py-20 text-center">
                            <div className="text-text-muted mb-2">{steps.find(s => s.id === currentStep)?.name} setup is being prepared.</div>
                            <p className="text-xs text-text-muted">Standard legal workflows are being optimized for Base Sepolia.</p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-12 pt-8 border-t border-border-subtle">
                <button 
                    onClick={prevStep}
                    className={`flex items-center gap-2 text-[13px] font-semibold transition-all ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-text-muted hover:text-text-primary'}`}
                >
                    <ChevronLeft size={16} />
                    Back
                </button>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate('/')}
                        className="text-[13px] text-text-muted hover:text-text-primary"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={currentStep === 6 ? () => navigate('/') : nextStep}
                        className="btn-primary h-10 px-6 gap-2 text-[13px]"
                    >
                        {currentStep === 6 ? 'Submit for verification' : 'Continue'}
                        {currentStep < 6 && <ChevronRight size={16} />}
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TokenizeWizard;
