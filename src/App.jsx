import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
 
import RequestAirdrop from './RequestAirdrop';

const network = WalletAdapterNetwork.Devnet;
const endpoint = clusterApiUrl(network);

function App() {
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center px-4">
                        
                        {/* Header */}
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-center">
                            🚀 <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Solana Devnet Demo</span>
                        </h1>

                        {/* Wallet Button */}
                        <div className="mb-6">
                            <WalletMultiButton className="!bg-gradient-to-r !from-purple-600 !to-pink-600 hover:!scale-105 transition-transform duration-200 px-6 py-3 rounded-xl shadow-lg font-semibold" />
                        </div>

                        {/* Main Card */}
                        <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
                            <RequestAirdrop />
                        </div>

                        {/* Disconnect Button */}
                        <WalletDisconnectButton
  style={{
    background: "linear-gradient(135deg, #f43f5e, #ef4444)", // red-500 → rose-500
    border: "none",
    borderRadius: "0.75rem",
    padding: "0.75rem 2rem",
    fontWeight: "600",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(239, 68, 68, 0.4)",
    transition: "all 0.25s ease-in-out",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 6px 20px rgba(239, 68, 68, 0.6)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 14px rgba(239, 68, 68, 0.4)";
  }}
/>

                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;
