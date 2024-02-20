import { useMemo } from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider} from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'

import { config } from "../config"

export const WalletConnectProvider = ({ children }) => {
    
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = config.isMainnet ? WalletAdapterNetwork.Mainnet : WalletAdapterNetwork.Devnet

    const endpoint = useMemo(() => {
        if (network === WalletAdapterNetwork.Devnet) {
            return config.isMainnet ? config.mainNetRpcUrl : config.devNetRpcUrl
        }

        return clusterApiUrl(network)
    }, [network])

    const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter({ network }), new TorusWalletAdapter()], [network])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}