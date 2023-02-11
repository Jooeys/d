import Head from 'next/head'
import Image from 'next/image'
import { Dialog, Transition, Menu } from '@headlessui/react';
import { Fragment, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useAccount, useConnect, useEnsName, useEnsAvatar, useDisconnect, useFeeData } from 'wagmi'
import { useConnectModal, useGasPrice } from '@/hooks/useConnect';

export default function Footer({ closed }) {
  const { fee } = useGasPrice();

  return <footer className={`flex flex-row items-center gap-4 py-6 fixed max-w-screen-xl w-full ${closed ? 'ml-13' : 'ml-32'} left-1/2 -translate-x-1/2 bottom-0 z-10`}>
    <div className='flex flex-row items-center'>
      <img src='/dbit.svg' />
      <div className='text-xs'>: $1.43 <span className='text-green-500'>{`(+1.61%)`}</span></div>
    </div>
    <div className='flex flex-row items-center'>
      <img src='/gas.svg' />
      <div className='text-xs'>: <span className='text-yellow-400'>{fee ? (fee.formatted.gasPrice / 10 ** 9).toFixed(5) : '-'} gwei</span></div>
    </div>
  </footer>;
}