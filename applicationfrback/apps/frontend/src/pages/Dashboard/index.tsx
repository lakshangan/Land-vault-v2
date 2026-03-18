import { useState } from 'react';
import { 
  ArrowUpRight, 
  Wallet,
  ArrowRightLeft,
  Eye,
  LogOut
} from 'lucide-react';
import { useAccount } from 'wagmi';

const Portfolio = () => {
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState<'ASSETS' | 'INVESTMENTS'>('ASSETS');

  const stats = [
    { label: 'Total Value', value: '$124,500.00' },
    { label: 'Assets Owned', value: '4' },
    { label: 'Active Investments', value: '2' },
    { label: 'Unrealized P&L', value: '+$8,450.00', positive: true },
  ];

  const holdings = [
    { id: 1, name: 'London Prime Residential', type: 'Real Estate', tokens: '200', value: '$10,000.00', change: '+4.2%' },
    { id: 2, name: 'Sahara Solar Arrays', type: 'Renewable Energy', tokens: '50', value: '$5,000.00', change: '+1.8%' },
    { id: 3, name: 'Berlin Tech Hub', type: 'Infrastructure', tokens: '100', value: '$20,000.00', change: '+2.5%' },
    { id: 4, name: 'Andes Hydro Plant', type: 'Renewable Energy', tokens: 'Full', value: '$15,000,000.00', change: '+0.0%' },
  ];

  const investments = [
    { id: 'p1', name: 'Chennai Agricultural Land Pool', amount: '$5,000.00', value: '$5,400.00', remaining: '8 months', status: 'Active' },
    { id: 'p2', name: 'Texas Solar Array Initative', amount: '$2,500.00', value: '$2,650.00', remaining: '24 months', status: 'Active' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 pb-20">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-3">My Portfolio</h1>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-border-default rounded-lg inline-flex">
            <Wallet size={14} className="text-accent" />
            <span className="mono text-[13px] text-text-primary">
                {address ? `${address.slice(0,6)}...${address.slice(-4)}` : '0x26...2831'}
            </span>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-5 bg-surface/30">
            <div className="text-[11px] text-text-muted font-medium mb-1 uppercase tracking-wider">{stat.label}</div>
            <div className={`text-2xl font-bold font-mono ${stat.positive ? 'text-positive' : 'text-text-primary'}`}>
                {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6 border-b border-border-subtle mb-8">
        <button
            onClick={() => setActiveTab('ASSETS')}
            className={`pb-4 text-[14px] font-semibold transition-colors relative whitespace-nowrap ${
                activeTab === 'ASSETS' ? 'text-white' : 'text-text-muted hover:text-text-primary'
            }`}
        >
            My Assets
            {activeTab === 'ASSETS' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />}
        </button>
        <button
            onClick={() => setActiveTab('INVESTMENTS')}
            className={`pb-4 text-[14px] font-semibold transition-colors relative whitespace-nowrap ${
                activeTab === 'INVESTMENTS' ? 'text-white' : 'text-text-muted hover:text-text-primary'
            }`}
        >
            My Investments
            {activeTab === 'INVESTMENTS' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />}
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        {activeTab === 'ASSETS' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface/30">
                    <th className="text-left py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Asset</th>
                    <th className="text-left py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Type</th>
                    <th className="text-left py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Tokens Held</th>
                    <th className="text-left py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Current Value</th>
                    <th className="text-left py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Change %</th>
                    <th className="text-right py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((asset) => (
                    <tr key={asset.id} className="border-b border-border-default last:border-0 hover:bg-surface/50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-sm text-text-primary font-medium">{asset.name}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-[12px] text-text-secondary">{asset.type}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="mono text-[13px]">{asset.tokens}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="mono text-[13px] text-text-primary font-medium">{asset.value}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="mono text-[13px] text-positive">{asset.change}</span>
                      </td>
                      <td className="py-4 px-6">
                          <div className="flex items-center justify-end gap-3">
                            <button className="text-[12px] text-text-muted hover:text-text-primary transition-colors flex items-center gap-1">
                                Sell <ArrowUpRight size={14} />
                            </button>
                            <button className="text-[12px] text-text-muted hover:text-text-primary transition-colors flex items-center gap-1">
                                Transfer <ArrowRightLeft size={14} />
                            </button>
                          </div>
                      </td>
                    </tr>
                  ))}
                  {holdings.length === 0 && (
                      <tr>
                          <td colSpan={6} className="py-12 text-center text-text-muted text-sm">
                              You don't own any assets yet.
                          </td>
                      </tr>
                  )}
                </tbody>
              </table>
            </div>
        )}

        {activeTab === 'INVESTMENTS' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface/30">
                    <th className="text-left py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Pool Name</th>
                    <th className="text-left py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Amount Invested</th>
                    <th className="text-left py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Current Value</th>
                    <th className="text-left py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Duration Remaining</th>
                    <th className="text-left py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Status</th>
                    <th className="text-right py-4 px-6 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {investments.map((inv) => (
                    <tr key={inv.id} className="border-b border-border-default last:border-0 hover:bg-surface/50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-sm text-text-primary font-medium">{inv.name}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="mono text-[13px]">{inv.amount}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="mono text-[13px] text-text-primary font-medium">{inv.value}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-[13px] text-text-secondary">{inv.remaining}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-[11px] font-semibold text-accent bg-accent/10 px-2 py-1 rounded-md">{inv.status}</span>
                      </td>
                      <td className="py-4 px-6">
                          <div className="flex items-center justify-end gap-3">
                            <button className="text-[12px] text-text-muted hover:text-text-primary transition-colors flex items-center gap-1">
                                View <Eye size={14} />
                            </button>
                            <button className="text-[12px] text-text-muted hover:text-danger hover:text-red-400 transition-colors flex items-center gap-1">
                                Exit <LogOut size={14} />
                            </button>
                          </div>
                      </td>
                    </tr>
                  ))}
                  {investments.length === 0 && (
                      <tr>
                          <td colSpan={6} className="py-12 text-center text-text-muted text-sm">
                              You haven't invested in any pools yet.
                          </td>
                      </tr>
                  )}
                </tbody>
              </table>
            </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
