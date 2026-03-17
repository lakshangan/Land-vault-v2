import React from 'react';
import { Landmark, Zap, TowerControl as Tower, Trees, Building2 } from 'lucide-react';

const YieldPage = () => {
  const assets = [
    { id: 1, name: 'London Prime Residential', type: 'REAL_ESTATE', incomeSource: 'Rental Income', earned: 420.50, apv: '12.4%', icon: Building2 },
    { id: 2, name: 'Sahara Solar Farm', type: 'RENEWABLE_ENERGY', incomeSource: 'Energy Sale (PPA)', earned: 1560.00, apv: '15.2%', icon: Zap },
    { id: 3, name: 'Midwest Timberlands', type: 'TIMBER_FORESTRY', incomeSource: 'Timber Sales', earned: 890.20, apv: '10.8%', icon: Trees },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-10">
        <h1 className="text-3xl mb-2">Yield Distribution</h1>
        <p className="text-text-secondary text-sm">
          Passive income generated directly from physical asset performance and operational revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass-card p-6">
          <div className="label-muted">Total claimable yield</div>
          <div className="text-2xl mono text-accent">$2,870.70</div>
        </div>
        <div className="glass-card p-6">
          <div className="label-muted">Lifetime earnings</div>
          <div className="text-2xl mono text-text-primary">$12,450.00</div>
        </div>
        <div className="glass-card p-6">
          <div className="label-muted">Average current APY</div>
          <div className="text-2xl mono text-text-primary">12.8%</div>
        </div>
      </div>

      <div className="glass-card">
        <div className="p-6 border-b border-border-subtle">
          <h2 className="text-lg font-semibold">Active yield sources</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-subtle bg-surface/50">
                <th className="text-left py-4 px-6 label-muted">Asset</th>
                <th className="text-left py-4 px-6 label-muted">Revenue source</th>
                <th className="text-left py-4 px-6 label-muted">Yield rate</th>
                <th className="text-left py-4 px-6 label-muted">Earned (Unclaimed)</th>
                <th className="text-right py-4 px-6 label-muted">Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id} className="border-b border-border-subtle last:border-0 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-surface`}>
                        <asset.icon size={16} className={
                          asset.type === 'REAL_ESTATE' ? 'text-asset-re' :
                          asset.type === 'RENEWABLE_ENERGY' ? 'text-asset-energy' :
                          'text-asset-timber'
                        } />
                      </div>
                      <div>
                        <div className="text-text-primary font-medium">{asset.name}</div>
                        <div className="text-[10px] text-text-muted mono uppercase tracking-widest">{asset.type.replace('_', ' ')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-text-primary">{asset.incomeSource}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="mono text-accent">{asset.apv}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="mono text-text-primary">${asset.earned.toFixed(2)}</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="px-4 py-1.5 rounded-lg bg-white/5 border border-border-default text-xs font-semibold hover:bg-white/10 transition-all">
                      Claim
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-xl bg-surface border border-border-subtle">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <Landmark size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="text-text-primary font-semibold mb-1">On-chain yield settlement</h3>
            <p className="text-xs text-text-secondary">
              Revenue from physical assets is collected monthly and distributed to token holders via the EscrowVault smart contract. 
              Claiming transfers accumulated USDC/USDT directly to your connected wallet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YieldPage;
