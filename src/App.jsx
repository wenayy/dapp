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
import VinayProvider from "./context"
import Joshi from './Joshi';

function App() {
    return (
          <VinayProvider>
             <Joshi></Joshi>

          </VinayProvider>
            
         
        
    )
 
}

export default App;
