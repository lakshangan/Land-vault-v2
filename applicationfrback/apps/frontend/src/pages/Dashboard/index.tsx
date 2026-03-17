import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Wallet, 
  Activity, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { name: 'Jan', yield: 400 },
  { name: 'Feb', yield: 520 },
  { name: 'Mar', yield: 480 },
  { name: 'Apr', yield: 800 },
  { name: 'May', yield: 750 },
  { name: 'Jun', yield: 950 },
];

const portfolioBreakdown = [
  { name: 'Real Estate', value: 45, color: '#F472B6' },
  { name: 'Energy', value: 25, color: '#FACC15' },
  { name: 'Infra', value: 20, color: '#818CF8' },
  { name: 'Land', value: 10, color: '#4ADE80' },
];

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-syne font-extrabold uppercase tracking-tight">Investor Portfolio</h1>
          <p className="text-slate-400">Track your real-world asset holdings and compounding yield.</p>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Network Score:</span>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold">
                <ShieldCheck size={14} />
                98.2 ALPHA
            </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
            label="Total Portfolio Value" 
            value="$124,500.00" 
            trend="+12.5%" 
            icon={Wallet} 
            color="primary" 
        />
        <StatCard 
            label="Total Yield Earned" 
            value="$8,240.42" 
            trend="+5.2%" 
            icon={TrendingUp} 
            color="secondary" 
        />
        <StatCard 
            label="Active Assets" 
            value="12" 
            trend="0" 
            icon={Building2} 
            color="info" 
        />
        <StatCard 
            label="Avg. APY" 
            value="14.8%" 
            trend="+0.4%" 
            icon={Activity} 
            color="primary" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Yield Chart */}
        <div className="lg:col-span-2 glass-card p-8">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-syne font-bold uppercase tracking-wider">Yield Performance</h3>
                <div className="flex gap-2">
                    {['1D', '1M', '3M', '1Y', 'ALL'].map((t) => (
                        <button key={t} className={`px-3 py-1 text-[10px] font-bold rounded ${t === '3M' ? 'bg-primary text-background' : 'bg-slate-800 text-slate-400'}`}>
                            {t}
                        </button>
                    ))}
                </div>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00D4AA" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#00D4AA" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#252D3D" vertical={false} />
                        <XAxis dataKey="name" stroke="#64748B" fontSize={10} axisLine={false} tickLine={false} />
                        <YAxis stroke="#64748B" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#131720', border: '1px solid #252D3D', borderRadius: '8px' }}
                            itemStyle={{ color: '#00D4AA' }}
                        />
                        <Area type="monotone" dataKey="yield" stroke="#00D4AA" strokeWidth={3} fillOpacity={1} fill="url(#colorYield)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Portfolio Pie Breakdown */}
        <div className="glass-card p-8 flex flex-col">
            <h3 className="text-lg font-syne font-bold uppercase tracking-wider mb-8">Asset Allocation</h3>
            <div className="flex-grow flex items-center justify-center relative">
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={portfolioBreakdown}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {portfolioBreakdown.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="absolute flex flex-col items-center">
                    <span className="text-2xl font-bold font-mono">100%</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">Allocated</span>
                </div>
            </div>
            <div className="mt-6 space-y-3">
                {portfolioBreakdown.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-xs text-slate-400 font-medium">{item.name}</span>
                        </div>
                        <span className="text-xs font-mono font-bold">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card p-8">
        <h3 className="text-lg font-syne font-bold uppercase tracking-wider mb-8">Recent Transactions</h3>
        <div className="space-y-4">
            <ActivityItem 
                title="Investment: London Heights #44"
                subtitle="Purchased 200 Shares • Transaction Verified"
                time="2 hours ago"
                value="+$10,000.00"
                type="purchase"
            />
            <ActivityItem 
                title="Yield Distribution: Sahara Solar Hub"
                subtitle="Quarterly Revenue Share Distributed"
                time="1 day ago"
                value="+$240.12"
                type="yield"
            />
             <ActivityItem 
                title="Governance Vote Casting"
                subtitle="Voted on LVT-DAI Liquidity Proposal"
                time="3 days ago"
                value="N/A"
                type="vote"
            />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, trend, icon: Icon, color }: any) => {
    const colorMap: any = {
        primary: 'text-primary bg-primary/10 border-primary/20',
        secondary: 'text-secondary bg-secondary/10 border-secondary/20',
        info: 'text-blue-400 bg-blue-400/10 border-blue-400/20'
    };

    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-6 flex flex-col justify-between"
        >
            <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg ${colorMap[color] || colorMap.primary}`}>
                    <Icon size={20} />
                </div>
                {trend !== '0' && (
                    <span className="text-[10px] font-bold text-status-active bg-status-active/10 px-2 py-1 rounded-full flex items-center gap-1">
                        <ArrowUpRight size={10} />
                        {trend}
                    </span>
                )}
            </div>
            <div>
                <div className="text-[10px] uppercase font-bold text-slate-500 mb-1 tracking-widest">{label}</div>
                <div className="text-2xl font-bold font-mono tracking-tight">{value}</div>
            </div>
        </motion.div>
    );
};

const ActivityItem = ({ title, subtitle, time, value, type }: any) => (
    <div className="flex items-center justify-between py-4 border-b border-slate-800 last:border-0 hover:bg-white/5 transition-colors rounded-lg px-3 group">
        <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                type === 'purchase' ? 'bg-blue-400/10 text-blue-400' :
                type === 'yield' ? 'bg-primary/10 text-primary' :
                'bg-slate-800 text-slate-500'
            }`}>
                <Clock size={16} />
            </div>
            <div>
                <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{title}</h4>
                <p className="text-xs text-slate-500">{subtitle}</p>
            </div>
        </div>
        <div className="text-right">
            <div className={`text-sm font-bold font-mono ${type === 'yield' ? 'text-primary' : 'text-slate-200'}`}>
                {value}
            </div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{time}</div>
        </div>
    </div>
);

export default Dashboard;
