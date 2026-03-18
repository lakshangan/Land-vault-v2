import '@rainbow-me/rainbowkit/styles.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { RainbowKitProvider, getDefaultConfig, darkTheme } from '@rainbow-me/rainbowkit';

import Navbar from './components/layout/Navbar';
import Marketplace from './pages/Marketplace/index';
import AssetDetail from './pages/AssetDetail/index';
import TokenizeWizard from './pages/Tokenize/index';
import Dashboard from './pages/Dashboard/index';

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
                  {/* Set Marketplace as the Home Page */}
                  <Route path="/" element={<Marketplace />} />
                  <Route path="/marketplace" element={<Navigate to="/" replace />} />
                  <Route path="/assets/:id" element={<AssetDetail />} />
                  <Route path="/tokenize" element={<TokenizeWizard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/portfolio" element={<Navigate to="/dashboard" replace />} />
                  {/* Catch-all route to Marketplace */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              {/* Footer could go here */}
            </div>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
