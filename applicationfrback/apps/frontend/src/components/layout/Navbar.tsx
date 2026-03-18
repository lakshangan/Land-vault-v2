import { Link, useLocation } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Marketplace', path: '/' },
    { name: 'Portfolio', path: '/dashboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-page/80 backdrop-blur-xl border-b border-border-subtle h-[52px]">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center transition-transform duration-300">
            <span className="text-[13px] font-bold text-slate-900 font-geist">LV</span>
          </div>
          <span className="text-base font-geist font-medium text-text-primary tracking-tight">LandVault</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => {
            const isActive = link.path === '/' 
              ? location.pathname === '/' 
              : location.pathname.startsWith(link.path);
            
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-[13px] font-medium transition-all relative h-full flex items-center ${
                  isActive ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
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
                        <button onClick={openConnectModal} className="btn-primary h-8 px-4 text-[13px]">
                          Connect Wallet
                        </button>
                      );
                    }

                    return (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={openChainModal}
                          className="px-2.5 h-8 rounded-lg bg-card border border-border-default flex items-center gap-1.5 hover:bg-elevated transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-warning" />
                          <span className="text-[11px] font-semibold text-text-primary">BNB</span>
                        </button>

                        <button
                          onClick={openAccountModal}
                          className="px-3 h-8 rounded-lg bg-card border border-border-default flex items-center gap-2 hover:bg-elevated transition-colors"
                        >
                          <span className="text-[11px] font-mono text-text-primary">
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
