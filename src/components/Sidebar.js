import Head from 'next/head'
import Image from 'next/image'
import { Dialog, Transition, Menu } from '@headlessui/react';
import { Fragment, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useAccount, useConnect, useEnsName, useEnsAvatar, useDisconnect, useFeeData } from 'wagmi'
import { useConnectModal, useGasPrice } from '@/hooks/useConnect';

import dashboardSvg from '../../public/sidebar/dashboard.svg';
import bondSvg from '../../public/sidebar/bond.svg';
import exchangeSvg from '../../public/sidebar/exchange.svg';
import swapSvg from '../../public/sidebar/swap.svg';
import governanceSvg from '../../public/sidebar/governance.svg';
import walletSvg from '../../public/sidebar/wallet.svg';

export default function Sidebar({ closed, toggleSidebar }) {
  return <div id="siderbar" className={`${closed ? 'w-26' : 'w-64'} fixed left-0 top-0 bg-gray-700 h-full flex flex-col`} style={{ 
    background: 'linear-gradient(180deg, rgba(3, 0, 90, 0.216) 0%, rgba(1, 0, 45, 0.4) 100%)',
  }}>
    <div className='overflow-y-auto flex flex-col items-center mx-4 my-8'>
      <Link href={'/'}>
        <div id='logo' className=''>
          <img src={closed ? '/logo.svg' : '/logo-full.svg'} />
        </div>
      </Link>
      <div className='mt-8 flex flex-col w-full'>
        <Link href={'/'}>
          <div className={`group flex flex-row items-center ${closed ? 'justify-center' : 'justify-start px-4'} h-14 rounded-lg w-full relative overflow-hidden`}>
            <div className='group-hover:block block absolute opacity-40 left-0 top-0 flex-1 w-full h-full -z-10' style={{
              background: 'linear-gradient(180deg, rgba(34, 32, 197, 0.64) 0%, rgba(17, 15, 74, 0.3) 100%), #CC93D3',
            }}></div>
            <Image src={dashboardSvg} />
            {!closed && <div className='ml-2 text-base'>Dashboard</div>}
          </div>
        </Link>
        <Link href={'/bonds'}>
          <div className={`group flex flex-row items-center ${closed ? 'justify-center' : 'justify-start px-4'} h-14 rounded-lg w-full relative overflow-hidden mt-1`}>
            <div className='group-hover:block hidden absolute opacity-40 left-0 top-0 flex-1 w-full h-full -z-10' style={{
              background: 'linear-gradient(180deg, rgba(34, 32, 197, 0.64) 0%, rgba(17, 15, 74, 0.3) 100%), #CC93D3',
            }}></div>
            <Image src={bondSvg} />
            {!closed && <div className='ml-2 text-base'>Bonds</div>}
          </div>
        </Link>
        <Link href={'/exchange'}>
          <div className={`group flex flex-row items-center ${closed ? 'justify-center' : 'justify-start px-4'} h-14 rounded-lg w-full relative overflow-hidden mt-1`}>
            <div className='group-hover:block hidden absolute opacity-40 left-0 top-0 flex-1 w-full h-full -z-10' style={{
              background: 'linear-gradient(180deg, rgba(34, 32, 197, 0.64) 0%, rgba(17, 15, 74, 0.3) 100%), #CC93D3',
            }}></div>
            <Image src={exchangeSvg} />
            {!closed && <div className='ml-2 text-base'>Bond Exchange</div>}
          </div>
        </Link>
        <div className={`group flex flex-row items-center ${closed ? 'justify-center' : 'justify-start px-4'} h-14 rounded-lg w-full relative overflow-hidden mt-1`}>
          <div className='group-hover:block hidden absolute opacity-40 left-0 top-0 flex-1 w-full h-full -z-10' style={{
            background: 'linear-gradient(180deg, rgba(34, 32, 197, 0.64) 0%, rgba(17, 15, 74, 0.3) 100%), #CC93D3',
          }}></div>
          <Image src={swapSvg} />
          {!closed && <div className='ml-2 text-base'>Swap</div>}
        </div>
        <div className={`group flex flex-row items-center ${closed ? 'justify-center' : 'justify-start px-4'} h-14 rounded-lg w-full relative overflow-hidden mt-1`}>
          <div className='group-hover:block hidden absolute opacity-40 left-0 top-0 flex-1 w-full h-full -z-10' style={{
            background: 'linear-gradient(180deg, rgba(34, 32, 197, 0.64) 0%, rgba(17, 15, 74, 0.3) 100%), #CC93D3',
          }}></div>
          <Image src={governanceSvg} />
          {!closed && <div className='ml-2 text-base'>Governance Ops</div>}
        </div>
        <div className={`group flex flex-row items-center ${closed ? 'justify-center' : 'justify-start px-4'} h-14 rounded-lg w-full relative overflow-hidden mt-1`}>
          <div className='group-hover:block hidden absolute opacity-40 left-0 top-0 flex-1 w-full h-full -z-10' style={{
            background: 'linear-gradient(180deg, rgba(34, 32, 197, 0.64) 0%, rgba(17, 15, 74, 0.3) 100%), #CC93D3',
          }}></div>
          <Image src={walletSvg} />
          {!closed && <div className='ml-2 text-base'>Bond wallet</div>}
        </div>
      </div>
    </div>
    <button className='mt-auto px-4 py-6 flex flex-row items-center justify-center cursor-pointer focus:outline-none' onClick={toggleSidebar}>
      {!closed && <div className='mr-2 text-base'>Close Menu</div>}
      <img className={`${closed ? '' : 'rotate-180'}`} src='/sidebar/drawer.svg' />
    </button>
  </div>
}