import Head from 'next/head'
import Image from 'next/image'
import { Dialog, Transition, Menu } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useAccount, useConnect, useEnsName, useEnsAvatar, useDisconnect, useFeeData } from 'wagmi'
import { useConnectModal, useGasPrice } from '@/hooks/useConnect';

export default function Header({ closed }) {
  const { address } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ address })
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect();
  const { openModal, isConnected } = useConnectModal();

  return <header className={`max-w-screen-xl ${closed ? 'ml-13' : 'ml-32'} flex flex-row items-center justify-end fixed left-1/2 -translate-x-1/2 top-0 w-full pt-8 pb-6 z-10`}>
    {isConnected ? <div className='flex flex-row items-center gap-4'>
      <div className='h-10 p-2 rounded bg-debond/40 flex flex-row items-center font-bold text-sm backdrop-opacity-40 cursor-pointer' onClick={openModal}>
        <img className='' src='/header/ethereum.svg' />
        <span className='mx-2 tracking-wider'>Ethereum</span>
        <img className='' src='/header/arrow-down.svg' />
      </div>
      <div className='h-10 p-2 rounded bg-debond/40 flex flex-row items-center font-bold text-sm backdrop-opacity-40'>
        <img className='h-5 mx-2' src={ensAvatar || '/header/logo.svg'} alt="ENS Avatar" />
        <span className='border-l border-l-debond px-3 tracking-wider'>{ensName ? ensName : address?.substring(0, 6) + '...' + address?.substring(38)}</span>
        <img className='' src='/header/arrow-down.svg' />
      </div>
    </div>
    : <div>
      <div className='h-10 rounded-lg px-8 text-sm font-semibold flex items-center cursor-pointer' style={{
        background: 'linear-gradient(269.88deg, rgba(55, 52, 255, 0.224) 7.38%, rgba(20, 3, 163, 0.26075) 38.6%, rgba(42, 6, 45, 0.098) 96.89%), rgba(77, 14, 255, 0.35)',
      }} onClick={openModal}>Connect Wallet</div>
    </div>}
  </header>
}