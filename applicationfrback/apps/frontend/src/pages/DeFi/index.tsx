import { useState } from 'react';
import { 
  Zap, 
  Droplets, 
  Vault as VaultIcon, 
  Coins,
  ShieldCheck,
  ArrowUpRight,
  Info
} from 'lucide-react';

const DeFiHub = () => {
    const [activeTab, setActiveTab] = useState('lend-borrow');
    
    const tabs = [
        { id: 'lend-borrow', name: 'Lend & borrow', icon: Zap },
        { id: 'liq-pools', name: 'Liquidity pools', icon: Droplets },
        { id: 'vaults', name: 'ERC-4626 vaults', icon: VaultIcon },
        { id: 'stablecoin', name: 'LVT stablecoin', icon: Coins },
    ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 pb-20">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl mb-1">DeFi Hub</h1>
          <p className="text-sm text-text-secondary">Advanced financial tooling for your real-world asset holdings.</p>
        </div>
        <div className="px-4 py-2 rounded-lg bg-surface border border-border-subtle flex items-center gap-3">
          <ShieldCheck size={16} className="text-accent" />
          <span className="text-[11px] font-semibold text-text-primary uppercase tracking-wider">Protocol TVL: <span className="mono text-white ml-2">$35.84B</span></span>
        </div>
      </header>

      {/* Module Navigation Tabs */}
      <div className="flex items-center gap-8 border-b border-border-subtle mb-10 overflow-x-auto no-scrollbar">
          {tabs.map(tab => (
              <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 text-[13px] font-medium transition-all relative flex items-center gap-2 whitespace-nowrap ${
                      activeTab === tab.id ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
                  }`}
              >
                  <tab.icon size={14} />
                  {tab.name}
                  {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
                  )}
              </button>
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
              {activeTab === 'lend-borrow' && <LendBorrowView />}
              {activeTab !== 'lend-borrow' && (
                  <div className="glass-card py-20 text-center">
                      <div className="text-text-muted mb-2">The {tabs.find(t => t.id === activeTab)?.name} module is coming soon to Base Sepolia.</div>
                      <p className="text-xs text-text-muted">Currently undergoing security auditing by CertiK.</p>
                  </div>
              )}
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-4 space-y-6">
              <div className="glass-card p-6 bg-surface/50">
                  <h3 className="text-base font-semibold mb-6">Positions summary</h3>
                  <div className="space-y-4">
                      <div className="flex justify-between items-center text-[12px]">
                          <span className="text-text-secondary">Total supply</span>
                          <span className="mono text-text-primary font-bold">$105,000.00</span>
                      </div>
                      <div className="flex justify-between items-center text-[12px]">
                          <span className="text-text-secondary">Total borrow</span>
                          <span className="mono text-text-primary font-bold">$12,400.00</span>
                      </div>
                      <div className="pt-4 border-t border-border-subtle flex justify-between items-center">
                          <span className="text-text-secondary text-xs">Health factor</span>
                          <span className="mono text-positive font-bold">2.44</span>
                      </div>
                      <div className="h-1 w-full bg-border-subtle rounded-full overflow-hidden">
                          <div className="h-full bg-positive w-[60%]" />
                      </div>
                  </div>
              </div>

              <div className="glass-card p-6">
                  <h4 className="text-sm font-semibold mb-4">Risk parameters</h4>
                  <div className="p-4 rounded-xl bg-surface border border-border-subtle flex gap-3">
                      <Info size={16} className="text-accent shrink-0" />
                      <p className="text-[11px] text-text-secondary leading-relaxed">
                          Base Sepolia testnet parameters: Max LTV is 75% for Real Estate and 60% for Timber/Land. 
                          Liquidation threshold is 80%.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

const LendBorrowView = () => (
    <div className="space-y-8">
        <div className="glass-card p-6">
            <h2 className="text-lg font-semibold mb-6">Lend & borrow against RWA tokens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { name: 'London Prime Residential', balance: '1,200 LV-LNDN', value: '$60,000', ltv: '75%' },
                    { name: 'Sahara Solar Arrays', balance: '450 LV-EGPT', value: '$45,000', ltv: '65%' }
                ].map(asset => (
                    <div key={asset.name} className="p-5 rounded-xl border border-border-default bg-surface/30 hover:bg-white/5 transition-all cursor-pointer group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-text-primary font-medium text-[13px]">{asset.name}</div>
                            <span className="text-[10px] text-text-muted mono uppercase">{asset.ltv} Max LTV</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="label-muted">Wallet balance</div>
                                <div className="text-sm mono text-text-primary font-semibold">{asset.balance}</div>
                            </div>
                            <button className="text-[11px] text-accent font-semibold group-hover:underline flex items-center gap-1">
                                Supply <ArrowUpRight size={12} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="glass-card p-6">
            <h2 className="text-lg font-semibold mb-6">Borrow stablecoins</h2>
            <div className="p-8 rounded-xl bg-surface/50 border border-border-default border-dashed text-center">
                <div className="text-text-muted text-sm mb-4">Select an asset from your collateral to calculate borrow capacity.</div>
                <div className="text-2xl mono text-text-primary opacity-30">$0.00</div>
            </div>
        </div>
    </div>
);

export default DeFiHub;
