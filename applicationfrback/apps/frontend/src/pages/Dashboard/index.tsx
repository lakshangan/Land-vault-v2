import { useNavigate } from 'react-router-dom';
import { 
  Plus,
  ArrowUpRight, 
  Wallet
} from 'lucide-react';
import { 
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();

  const portfolioBreakdown = [
    { name: 'Real estate', value: 45, color: 'var(--color-asset-re)' },
    { name: 'Renewable energy', value: 25, color: 'var(--color-asset-energy)' },
    { name: 'Infrastructure', value: 20, color: 'var(--color-asset-infra)' },
    { name: 'Land', value: 10, color: 'var(--color-asset-land)' },
  ];

  const holdings = [
    { id: 1, name: 'London Prime Residential', amount: '200 Tokens', value: '$10,000.00', status: 'Active' },
    { id: 2, name: 'Sahara Solar Arrays', amount: '50 Tokens', value: '$5,000.00', status: 'Active' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 pb-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl mb-1">Portfolio</h1>
          <p className="text-sm text-text-secondary">Comprehensive overview of your real-world asset holdings.</p>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="btn-primary h-10 px-4 gap-2 text-[13px]"
        >
          <Plus size={16} />
          Invest in more assets
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Holdings & Assets */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card">
            <div className="p-6 border-b border-border-subtle flex items-center justify-between">
              <h2 className="text-lg font-semibold">Active holdings</h2>
              <span className="text-[11px] text-text-muted mono">{holdings.length} Assets total</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface/30">
                    <th className="text-left py-4 px-6 label-muted">Asset name</th>
                    <th className="text-left py-4 px-6 label-muted">Quantity</th>
                    <th className="text-left py-4 px-6 label-muted">Market value</th>
                    <th className="text-right py-4 px-6 label-muted">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((asset) => (
                    <tr key={asset.id} className="border-b border-border-subtle last:border-0 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-sm text-text-primary font-medium">{asset.name}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="mono text-[13px]">{asset.amount}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="mono text-[13px] text-text-primary">{asset.value}</span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button className="text-[11px] text-accent font-semibold hover:underline flex items-center gap-1 ml-auto">
                          Manage <ArrowUpRight size={12} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column: Allocation & Stats */}
        <div className="space-y-8">
          <div className="glass-card p-8">
            <h3 className="text-base font-semibold mb-8">Asset allocation</h3>
            <div className="h-[200px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {portfolioBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold mono">100%</span>
                <span className="text-[10px] text-text-muted font-medium">Allocated</span>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {portfolioBreakdown.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs text-text-secondary">{item.name}</span>
                  </div>
                  <span className="text-xs mono text-text-primary font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 bg-accent/5 border border-accent/20">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Wallet size={20} className="text-accent" />
              </div>
              <div>
                <div className="label-muted">Total portfolio value</div>
                <div className="text-2xl mono text-text-primary">$124,500.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
