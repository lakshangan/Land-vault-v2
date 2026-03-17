import { Link } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-primary to-secondary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-xl font-bold text-background font-syne">L</span>
          </div>
          <span className="text-xl font-syne font-extrabold tracking-tight">LANDVAULT</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400 font-syne">
          {/* Marketplace is now Home (/) */}
          <Link to="/" className="hover:text-primary transition-colors">Marketplace</Link>
          <Link to="/tokenize" className="hover:text-primary transition-colors">Tokenize</Link>
          <Link to="/dashboard" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link to="/defi" className="hover:text-primary transition-colors">DeFi Hub</Link>
          <Link to="/governance" className="hover:text-primary transition-colors text-slate-100/50">DAO</Link>
        </div>

        <div className="flex items-center gap-4">
          <ConnectButton 
            accountStatus="avatar" 
            chainStatus="icon" 
            showBalance={false}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
