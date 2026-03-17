import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Building2, TrendingUp, FileText, ShieldCheck, SearchCode, Rocket } from 'lucide-react';

const steps = [
  { id: 1, name: 'Asset Overview', icon: Building2 },
  { id: 2, name: 'Valuation & Yield', icon: TrendingUp },
  { id: 3, name: 'Docs & IPFS', icon: FileText },
  { id: 4, name: 'Compliance', icon: ShieldCheck },
  { id: 5, name: 'Review', icon: SearchCode },
  { id: 6, name: 'Tokenize', icon: Rocket },
];

const TokenizeWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    category: 'REAL_ESTATE',
    location: '',
    valuationUSD: '',
    yieldAPY: '',
    tokenPrice: '50',
    jurisdiction: 'UK',
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto pb-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-syne font-extrabold mb-4 uppercase tracking-tight">Tokenize Asset</h1>
        <p className="text-slate-400">Transform your real-world assets into institutional-grade digital instruments on 
          <span className="text-primary font-bold ml-1">BASE Testnet</span>.
        </p>
      </div>

      {/* Progress Stepper */}
      <div className="relative mb-20">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-500" 
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
        
        <div className="relative z-10 flex justify-between">
          {steps.map((step) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;

            return (
              <div key={step.id} className="flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isCompleted ? 'bg-primary border-primary text-background' :
                    isActive ? 'bg-background border-primary text-primary shadow-[0_0_15px_rgba(0,212,170,0.3)]' :
                    'bg-background border-slate-800 text-slate-500'
                  }`}
                >
                  {isCompleted ? <Check size={20} /> : <Icon size={20} />}
                </div>
                <span className={`absolute mt-14 text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-primary' : 'text-slate-500'}`}>
                  {step.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="glass-card p-10 min-h-[400px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-syne font-extrabold border-l-4 border-primary pl-4 uppercase tracking-wider">Asset Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">Asset Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. London Heights Residential"
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 font-dm focus:border-primary outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">Category</label>
                    <select 
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 font-dm focus:border-primary outline-none appearance-none"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                      <option value="REAL_ESTATE">Real Estate</option>
                      <option value="RENEWABLE_ENERGY">Renewable Energy</option>
                      <option value="INFRASTRUCTURE">Infrastructure</option>
                      <option value="LAND">Land</option>
                      <option value="TIMBER">Timber</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">Asset Location / Address</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 12 Mayfair St, London, UK"
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 font-dm focus:border-primary outline-none"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-syne font-extrabold border-l-4 border-primary pl-4 uppercase tracking-wider">Valuation & Financials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">Total Valuation (USD)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-mono font-bold">$</span>
                      <input 
                        type="number" 
                        placeholder="0.00"
                        className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 pl-8 font-mono focus:border-primary outline-none"
                        value={formData.valuationUSD}
                        onChange={(e) => setFormData({...formData, valuationUSD: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">Projected APY (%)</label>
                    <div className="relative">
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-mono font-bold">%</span>
                      <input 
                        type="number" 
                        placeholder="0.0"
                        className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 pr-8 font-mono focus:border-primary outline-none"
                        value={formData.yieldAPY}
                        onChange={(e) => setFormData({...formData, yieldAPY: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">Token Price (USD)</label>
                    <input 
                      type="number" 
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 font-mono focus:border-primary outline-none"
                      value={formData.tokenPrice}
                      onChange={(e) => setFormData({...formData, tokenPrice: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-syne font-extrabold border-l-4 border-primary pl-4 uppercase tracking-wider">Document Upload (IPFS)</h2>
                <div className="space-y-6">
                  <DocumentUploadItem icon={ShieldCheck} name="Title Deed / Ownership Certificate" required />
                  <DocumentUploadItem icon={TrendingUp} name="Professional Valuation Report" required />
                  <DocumentUploadItem icon={FileText} name="Legal Compliance Audit" required />
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Rocket size={20} />
                    </div>
                    <p className="text-xs text-slate-400">Documents will be encrypted and pinned to <span className="text-primary font-bold">IPFS</span> for decentralized verification on Base Testnet.</p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-syne font-extrabold border-l-4 border-primary pl-4 uppercase tracking-wider">Compliance & KYC</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">Legal Jurisdiction</label>
                    <input 
                      type="text" 
                      placeholder="e.g. United Kingdom"
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 focus:border-primary outline-none"
                      value={formData.jurisdiction}
                      onChange={(e) => setFormData({...formData, jurisdiction: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">Regulation Entity</label>
                    <input 
                      type="text" 
                      placeholder="e.g. FCA / SEC / ADGM"
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 focus:border-primary outline-none"
                    />
                  </div>
                  <div className="md:col-span-2 p-6 glass-card border-status-verified/20 bg-status-verified/5 flex items-start gap-4">
                    <ShieldCheck className="text-status-verified mt-1" size={24} />
                    <div>
                        <h4 className="font-bold text-slate-200 mb-1">KYC/AML Requirements</h4>
                        <p className="text-sm text-slate-400">By proceeding, you agree that this asset meets the regulatory requirements of the selected jurisdiction. Institutional investors will undergo Sumsub verification.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-syne font-extrabold border-l-4 border-primary pl-4 uppercase tracking-wider">Final Review</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ReviewItem label="Asset Name" value={formData.name || 'Not Set'} />
                  <ReviewItem label="Category" value={formData.category} />
                  <ReviewItem label="Total Valuation" value={`$${formData.valuationUSD || '0'}`} />
                  <ReviewItem label="Target APY" value={`${formData.yieldAPY || '0'}%`} />
                  <ReviewItem label="Legal Jurisdiction" value={formData.jurisdiction} />
                  <div className="md:col-span-2 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">On-Chain Deployment Target</div>
                    <div className="text-sm font-mono text-primary">Base Sepolia Testnet (Chain ID: 84532)</div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-6">
                 <div className="relative">
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-background z-10 relative"
                    >
                        <Check size={48} strokeWidth={3} />
                    </motion.div>
                    <motion.div 
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inset-0 bg-primary rounded-full z-0"
                    />
                 </div>
                 <div>
                    <h2 className="text-3xl font-syne font-extrabold uppercase tracking-tight mb-2">Asset Tokenized!</h2>
                    <p className="text-slate-400 max-w-sm mx-auto">
                        "{formData.name}" has been successfully registered as an <span className="text-primary font-bold">RWA NFT</span> and fractionalized on Base Sepolia.
                    </p>
                 </div>
                 <div className="flex gap-4">
                    <button onClick={() => window.location.href = '/'} className="btn-outline px-6 text-xs uppercase tracking-widest">Go to Marketplace</button>
                    <button className="btn-primary px-6 text-xs uppercase tracking-widest">View on Basescan</button>
                 </div>
              </div>
            )}

            {currentStep > 6 && (() => {
                const StepIcon = steps[currentStep-1].icon;
                return (
                  <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      <StepIcon size={40} />
                    </div>
                    <h2 className="text-2xl font-syne font-extrabold">{steps[currentStep-1].name}</h2>
                    <p className="text-slate-400 max-w-md">Processing your institutional request on <span className="text-primary font-bold">BASE</span>.</p>
                  </div>
                );
              })()}
          </motion.div>
        </AnimatePresence>

        {currentStep < 6 && (
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-800">
            <button 
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-opacity ${currentStep === 1 ? 'opacity-0' : 'opacity-100'}`}
            >
              <ChevronLeft size={20} />
              Back
            </button>
            
            <button 
              onClick={nextStep}
              className="btn-primary flex items-center gap-2 px-8 py-3"
            >
              {currentStep === 5 ? 'Tokenize Asset' : 'Continue'}
              {currentStep < 5 && <ChevronRight size={20} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const DocumentUploadItem = ({ icon: Icon, name, required }: any) => (
  <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-lg group hover:border-primary/50 transition-colors cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
        <Icon size={20} />
      </div>
      <div>
        <div className="text-sm font-bold text-slate-200">{name}</div>
        <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
          {required ? 'Required' : 'Optional'} • Single PDF / ZIP
        </div>
      </div>
    </div>
    <div className="text-[10px] font-bold text-primary uppercase tracking-widest py-1.5 px-3 bg-primary/10 rounded group-hover:bg-primary group-hover:text-background transition-all">
      Upload
    </div>
  </div>
);

const ReviewItem = ({ label, value }: any) => (
  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">{label}</div>
    <div className="text-sm font-bold text-slate-100">{value}</div>
  </div>
);

export default TokenizeWizard;
