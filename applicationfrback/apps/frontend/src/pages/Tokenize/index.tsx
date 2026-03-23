import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Upload,
  Coins,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Globe,
  Info
} from 'lucide-react';
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { CONTRACTS } from '../../config/contracts';
import { parseUnits } from 'viem';

const ListAsset = () => {
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();
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

  const { data: hash, writeContract, isPending: isMinting, error: mintError } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleMint = async () => {
      if (!isConnected) return;
      
      try {
          writeContract({
              address: CONTRACTS.ASSET_REGISTRY.address,
              abi: CONTRACTS.ASSET_REGISTRY.abi,
              functionName: 'mintAsset',
              args: [
                  address,
                  formData.type,
                  parseUnits(formData.valuation || '0', 6), // Assuming 6 decimals for valuation (USD)
                  JSON.stringify({
                      name: formData.name,
                      location: formData.location,
                      description: formData.description
                  })
              ],
          });
      } catch (err) {
          console.error("Minting failed", err);
      }
  };

  useEffect(() => {
    if (isConfirmed) {
      setStep(5);
    }
  }, [isConfirmed]);

  const steps = [
      { num: 1, title: 'Asset Details' },
      { num: 2, title: 'Ownership Structure' },
      { num: 3, title: 'Documents' },
      { num: 4, title: 'Review & Submit' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pb-32">
        <header className="mb-14 text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-4"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Base Sepolia Testnet
            </motion.div>
            <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Tokenize Your Asset</h1>
            <p className="text-sm text-text-secondary max-w-lg mx-auto leading-relaxed">
                Transform physical value into digital liquidity. Securely tokenize and distribute real-world assets on LandVault.
            </p>
        </header>

        {/* Step Indicator */}
        <div className="mb-14 flex items-center justify-between relative max-w-2xl mx-auto">
            <div className="absolute left-0 top-1/2 -mt-[1px] w-full h-[1px] bg-white/5 z-0" />
            <div 
                className="absolute left-0 top-1/2 -mt-[1px] h-[2px] bg-gradient-to-r from-accent to-emerald-400 z-0 transition-all duration-700 ease-in-out shadow-[0_0_10px_rgba(33,255,188,0.3)]" 
                style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
            {steps.map((s) => (
                <div key={s.num} className="relative z-10 flex flex-col items-center gap-3">
                    <motion.div 
                        initial={false}
                        animate={{
                            scale: step >= s.num ? 1.1 : 1,
                            backgroundColor: step > s.num ? '#21FFBC' : (step === s.num ? '#21FFBC' : '#0F1115'),
                            color: step >= s.num ? '#000000' : '#4B5563',
                            borderColor: step >= s.num ? '#21FFBC' : '#1F2937'
                        }}
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black transition-all border select-none"
                    >
                        {step > s.num ? <CheckCircle2 size={18} strokeWidth={3} /> : s.num}
                    </motion.div>
                    <div className={`text-[10px] font-bold uppercase tracking-[0.2em] absolute top-12 whitespace-nowrap transition-all ${
                        step >= s.num ? 'text-text-primary' : 'text-text-muted'
                    }`}>
                        {s.title}
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-20">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="glass-card p-10 min-h-[500px] flex flex-col justify-between shadow-2xl border border-white/5 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] pointer-events-none rounded-full" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

                    {step === 1 && (
                        <div className="space-y-8 relative z-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-1">Asset Identity</h2>
                                <p className="text-xs text-text-muted">General information about your tangible property.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Asset Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. London Prime Development"
                                        className="w-full bg-surface/50 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-accent/50 focus:ring-4 focus:ring-accent/5 transition-all text-text-primary placeholder:text-text-muted/30"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Category</label>
                                    <div className="relative">
                                        <select 
                                            className="w-full bg-surface/50 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-accent/50 transition-all text-text-primary appearance-none cursor-pointer pr-10"
                                            value={formData.type}
                                            onChange={(e) => setFormData({...formData, type: e.target.value})}
                                        >
                                            <option value="REAL_ESTATE">Residential Estate</option>
                                            <option value="LAND">Commercial Land</option>
                                            <option value="RENEWABLE_ENERGY">Solar/Wind Farm</option>
                                            <option value="INFRASTRUCTURE">Industrial Hub</option>
                                            <option value="TIMBER">Natural Capital</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                            <ArrowRight size={16} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Location</label>
                                    <div className="relative">
                                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                                        <input 
                                            type="text" 
                                            placeholder="London, United Kingdom"
                                            className="w-full bg-surface/50 border border-white/10 rounded-xl p-4 pl-12 text-sm focus:outline-none focus:border-accent/50 transition-all text-text-primary placeholder:text-text-muted/30"
                                            value={formData.location}
                                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Abstract Description</label>
                                    <textarea 
                                        rows={3}
                                        placeholder="Detailed technical and financial overview..."
                                        className="w-full bg-surface/50 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-accent/50 transition-all text-text-primary placeholder:text-text-muted/30 resize-none"
                                        value={formData.description}
                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Current Market Valuation (USD)</label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent font-bold">$</span>
                                        <input 
                                            type="number" 
                                            placeholder="5,000,000"
                                            className="w-full bg-surface/50 border border-accent/20 rounded-xl p-4 pl-10 text-lg mono font-bold focus:outline-none focus:border-accent transition-all text-text-primary"
                                            value={formData.valuation}
                                            onChange={(e) => setFormData({...formData, valuation: e.target.value})}
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/5">
                                            <span className="text-[10px] font-bold text-text-muted uppercase">Verified</span>
                                            <FileCheck size={12} className="text-emerald-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-10 relative z-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-1">Financial Architecture</h2>
                                <p className="text-xs text-text-muted">Define how the asset tokens will be structured and distributed.</p>
                            </div>
                            
                            <div className="flex flex-col gap-6">
                                <label className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Distribution Strategy</label>
                                <div className="grid grid-cols-2 gap-6">
                                    <button 
                                        onClick={() => setFormData({...formData, ownership: 'fractional'})}
                                        className={`p-6 rounded-2xl border-2 flex flex-col gap-4 transition-all group relative overflow-hidden ${
                                            formData.ownership === 'fractional' ? 'bg-accent/5 border-accent shadow-[0_0_30px_rgba(33,255,188,0.1)]' : 'bg-surface/30 border-white/5 hover:border-white/10'
                                        }`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                                            formData.ownership === 'fractional' ? 'bg-accent text-black' : 'bg-elevated text-text-muted group-hover:bg-white/5'
                                        }`}>
                                            <Coins size={24} />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-sm font-bold text-text-primary mb-1">Fractionalized</div>
                                            <div className="text-[11px] text-text-muted leading-relaxed">Divide asset into thousands of liquid ERC-20 tokens.</div>
                                        </div>
                                    </button>
                                    <button 
                                        onClick={() => setFormData({...formData, ownership: 'full'})}
                                        className={`p-6 rounded-2xl border-2 flex flex-col gap-4 transition-all group relative overflow-hidden ${
                                            formData.ownership === 'full' ? 'bg-accent/5 border-accent shadow-[0_0_30px_rgba(33,255,188,0.1)]' : 'bg-surface/30 border-white/5 hover:border-white/10'
                                        }`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                                            formData.ownership === 'full' ? 'bg-accent text-black' : 'bg-elevated text-text-muted group-hover:bg-white/5'
                                        }`}>
                                            <Building2 size={24} />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-sm font-bold text-text-primary mb-1">Direct Transfer</div>
                                            <div className="text-[11px] text-text-muted leading-relaxed">Full 1:1 ownership transfer via a single NFT entity.</div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {formData.ownership === 'fractional' && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-3xl bg-surface/40 border border-white/5 backdrop-blur-md"
                                >
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Total Supply</label>
                                        <input 
                                            type="number" 
                                            className="w-full bg-black/30 border border-white/5 rounded-xl p-4 text-lg mono font-bold focus:outline-none focus:border-accent transition-all text-text-primary"
                                            value={formData.totalSupply}
                                            onChange={(e) => setFormData({...formData, totalSupply: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Unit Price (USD)</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent font-bold">$</span>
                                            <input 
                                                type="number" 
                                                className="w-full bg-black/30 border border-white/5 rounded-xl p-4 pl-10 text-lg mono font-bold focus:outline-none focus:border-accent transition-all text-text-primary"
                                                value={formData.pricePerToken}
                                                onChange={(e) => setFormData({...formData, pricePerToken: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-8 relative z-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-1">Legal Verification</h2>
                                <p className="text-xs text-text-muted">Ensure all regulatory requirements are met via document attestations.</p>
                            </div>
                            
                            <div className="space-y-4">
                                {[
                                    { label: 'Title Deed & Registry', desc: 'Proof of legal ownership and clear title.' },
                                    { label: 'Appraisal Report', desc: 'Authorized valuation within 90 days.' },
                                    { label: 'Insurance Policy', desc: 'Coverage documentation for the asset.' }
                                ].map((doc, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        whileHover={{ x: 5 }}
                                        className="border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 hover:bg-white/10 transition-all cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 bg-black/40 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-accent/40 transition-all">
                                                <FileCheck size={24} className="text-text-muted group-hover:text-accent transition-all" />
                                            </div>
                                            <div>
                                                <div className="text-base font-bold text-text-primary mb-1">{doc.label}</div>
                                                <div className="text-[11px] text-text-muted font-medium">{doc.desc}</div>
                                            </div>
                                        </div>
                                        <button className="px-6 py-2.5 rounded-xl bg-white text-black text-[12px] font-black hover:bg-white/90 transition-all flex items-center gap-2 whitespace-nowrap">
                                            <Upload size={16} /> Upload Case
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-10 relative z-10">
                            <div className="text-center">
                                <h2 className="text-3xl font-extrabold mb-1 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent tracking-tight">On-Chain Confirmation</h2>
                                <p className="text-xs text-text-muted">Review the cryptographic parameters of your asset listing.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-widest mb-4">
                                        <Info size={12} /> Registry Specs
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-text-muted font-medium">Asset Name</span>
                                            <span className="text-text-primary font-bold">{formData.name || 'Untitled'}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-text-muted font-medium">Network</span>
                                            <span className="text-text-primary font-bold flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                Base Sepolia
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-text-muted font-medium">Market Value</span>
                                            <span className="text-accent font-bold mono text-sm">${formData.valuation || '0'}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-4">
                                        <Building2 size={12} /> Economics
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-text-muted font-medium">Structure</span>
                                            <span className="text-text-primary font-bold capitalize">{formData.ownership}</span>
                                        </div>
                                        {formData.ownership === 'fractional' && (
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-text-muted font-medium">Tokenization</span>
                                                <span className="text-text-primary font-bold mono">{formData.totalSupply} Units</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-text-muted font-medium">Gas Limit</span>
                                            <span className="text-text-primary font-bold">Auto</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {mintError && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs text-center max-w-md mx-auto"
                                >
                                    Error: {mintError.message.slice(0, 100)}...
                                </motion.div>
                            )}
                        </div>
                    )}

                    {step === 5 && (
                        <div className="flex flex-col items-center justify-center min-h-[500px] text-center relative z-10">
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                className="w-28 h-28 rounded-3xl bg-gradient-to-br from-accent to-emerald-400 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(33,255,188,0.3)] text-black"
                            >
                                <CheckCircle2 size={56} strokeWidth={2.5} />
                            </motion.div>
                            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">On-Chain Settlement Complete</h2>
                            <p className="text-text-secondary mb-12 max-w-sm mx-auto leading-relaxed">
                                Your RWA has been cryptographically secured and listed. Transactions are now live on Base Sepolia.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <button 
                                    onClick={() => navigate('/')}
                                    className="px-10 py-4 rounded-2xl bg-white text-black font-black text-sm hover:scale-[1.02] transition-all"
                                >
                                    Explore Marketplace
                                </button>
                                <button 
                                    onClick={() => window.open(`https://sepolia.basescan.org/tx/${hash}`, '_blank')}
                                    className="flex items-center justify-center gap-2 px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-text-primary font-bold text-sm hover:bg-white/10 transition-all"
                                >
                                    View on Basescan
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Navigation Footer */}
                    {step < 5 && (
                      <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5 relative z-10">
                        {step > 1 ? (
                            <button 
                                onClick={handlePrev}
                                disabled={isMinting || isConfirming}
                                className="flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-white/10 text-sm font-bold text-text-primary hover:bg-white/5 transition-all disabled:opacity-30"
                            >
                                <ArrowLeft size={18} /> Previous
                            </button>
                        ) : <div />}
                        
                        {step < 4 ? (
                            <button 
                                onClick={handleNext}
                                className="flex items-center gap-2 px-10 py-3.5 rounded-2xl bg-white text-black text-sm font-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02]"
                            >
                                Continue <ArrowRight size={18} />
                            </button>
                        ) : step === 4 ? (
                            <button 
                                onClick={handleMint}
                                disabled={isMinting || isConfirming || !isConnected}
                                className={`px-12 py-4 rounded-2xl font-black text-sm transition-all flex items-center gap-3 ${
                                    isMinting || isConfirming 
                                    ? 'bg-accent/20 text-accent cursor-wait' 
                                    : 'bg-accent text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(33,255,188,0.2)]'
                                }`}
                            >
                                {isMinting || isConfirming ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Settling On-Chain...
                                    </>
                                ) : !isConnected ? (
                                    'Connect Wallet to Tokenize'
                                ) : (
                                    'Initialize Tokenization'
                                )}
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
