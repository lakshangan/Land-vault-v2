import '@rainbow-me/rainbowkit/styles.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { RainbowKitProvider, getDefaultConfig, darkTheme } from '@rainbow-me/rainbowkit';

import Navbar from './components/layout/Navbar';
import Landing from './pages/Landing/index';
import Marketplace from './pages/Marketplace/index';
import AssetDetail from './pages/AssetDetail/index';
import ListAsset from './pages/Tokenize/index';
import Portfolio from './pages/Dashboard/index';
import Invest from './pages/Invest/index';

const config = getDefaultConfig({
  appName: 'LandVault Protocol',
  projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID', 
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow pt-20">
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/assets/:id" element={<AssetDetail />} />
                  <Route path="/list" element={<ListAsset />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/invest" element={<Invest />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
            </div>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
