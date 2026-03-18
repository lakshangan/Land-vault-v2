import Hero from '../../components/sections/Hero';

const Landing = () => {
  return (
    <div className="bg-background">
      <Hero />
      {/* Sections for Challenge, Lifecycle, Market Size, etc. */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard label="Tokenized Assets" value="$35.8B" delta="+12.4%" />
            <StatCard label="Active Protocols" value="127+" delta="+5.2%" />
            <StatCard label="Projected 2030" value="$16T" delta="Global" />
            <StatCard label="Total Owners" value="45.2K" delta="Growing" />
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ label, value, delta }: { label: string, value: string, delta: string }) => (
    <div className="glass-card p-8 group hover:border-primary transition-colors">
        <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">{label}</div>
        <div className="text-4xl font-syne font-extrabold mb-2">{value}</div>
        <div className="text-sm font-medium text-primary">{delta}</div>
    </div>
);

export default Landing;
