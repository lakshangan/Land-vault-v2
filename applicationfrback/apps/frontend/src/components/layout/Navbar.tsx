import { Link, useLocation } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';

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
        <Link to="/" className="flex items-center group">
          <span className="text-xl font-semibold text-white tracking-tight">LandVault</span>
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
                className={`text-[14px] font-medium transition-all relative px-4 h-full flex items-center group ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navTab"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-white" 
                  />
                )}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors rounded-lg m-2" />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[12px] font-medium text-slate-300">Base Sepolia</span>
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
                          className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all active:scale-95"
                        >
                          Connect Wallet
                        </button>
                      );
                    }

                    return (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={openChainModal}
                          className="px-3 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95 group"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-[13px] font-medium text-slate-200">Base</span>
                        </button>

                        <button
                          onClick={openAccountModal}
                          className="px-4 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95"
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mr-1" />
                          <span className="text-[13px] font-medium text-white">
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
