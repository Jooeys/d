import '@/styles/globals.css'
import Image from 'next/image'
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { ConnectProvider } from '@/hooks/useConnect'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head'
import Sidebar from '@/components/Sidebar'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react'

const queryClient = new QueryClient()

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()],
)
 
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        name: 'Wallet Connect',
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ]
})

export default function App({ Component, pageProps }) {
  const [closed, setClosed] = useState(true);

  const toggleSidebar = () => {
    setClosed(!closed);
  }

  return <>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={client}>
        <ConnectProvider>
          <main className={`flex flex-row flex-1 text-white font-Inter h-screen`}>
            <Sidebar closed={closed} toggleSidebar={toggleSidebar} />
            <Header closed={closed} />
            <Footer closed={closed} />
            <div className={`flex-1 ${closed ? 'pl-26' : 'pl-64'} h-full`}>
              <Component {...pageProps} />
            </div>
          </main>
        </ConnectProvider>
      </WagmiConfig>
    </QueryClientProvider>
  </>
}
