import { Link, useLocation } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Invest', path: '/invest' },
    { name: 'List', path: '/list' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-2xl border-b border-white/5 h-[72px]">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-accent rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center shadow-[0_0_20px_rgba(33,255,188,0.3)]">
              <span className="text-xl font-black text-slate-900 -rotate-12 group-hover:rotate-0 transition-transform duration-500">LV</span>
            </div>
            <div className="absolute -inset-1 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black text-white tracking-tighter leading-none">LANDVAULT</span>
            <span className="text-[10px] font-bold text-accent tracking-[0.2em] leading-none mt-1 uppercase">Protocol</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2 h-full">
          {navLinks.map((link) => {
            const isActive = link.path === '/' 
              ? location.pathname === '/' 
              : location.pathname.startsWith(link.path);
            
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-[11px] font-black uppercase tracking-[0.15em] transition-all relative px-5 h-full flex items-center group ${
                  isActive ? 'text-white' : 'text-slate-500 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navTab"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_10px_rgba(33,255,188,0.5)]" 
                  />
                )}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors rounded-xl m-2" />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <Globe size={14} className="text-emerald-400" />
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Live</span>
          </div>

          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted,
            }) => {
              const ready = mounted;
              const connected = ready && account && chain;

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button 
                          onClick={openConnectModal} 
                          className="px-6 py-2.5 rounded-2xl bg-white text-black font-black text-xs hover:scale-[1.05] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                        >
                          Access dApp
                        </button>
                      );
                    }

                    return (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={openChainModal}
                          className="px-4 h-10 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center gap-2 hover:bg-blue-500/20 transition-all active:scale-95 group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)] group-hover:animate-ping" />
                          <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Base</span>
                        </button>

                        <button
                          onClick={openAccountModal}
                          className="px-5 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95"
                        >
                          <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-accent to-emerald-400 mr-1" />
                          <span className="text-[12px] font-mono font-bold text-white/90">
                            {account.displayName}
                          </span>
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
