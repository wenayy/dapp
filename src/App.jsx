 
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'    
import RequestAirdrop from './RequestAirdrop';

const network = WalletAdapterNetwork.Devnet;
const endpoint = clusterApiUrl(network);

function App() {
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]}>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <RequestAirdrop></RequestAirdrop>
                    <WalletDisconnectButton />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

 

export default App
