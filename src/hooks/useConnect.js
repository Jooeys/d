import { createContext, Fragment, useState, useContext, useCallback, useEffect } from "react";
import { Dialog, Transition, Menu } from '@headlessui/react';
import { useAccount, useConnect, useEnsName, useEnsAvatar, useDisconnect, useFeeData } from 'wagmi'
import Modal from "@/components/Modal";

export const ConnectService = createContext();

export const ConnectProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { address, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect();

  const [isDefinitelyConnected, setIsDefinitelyConnected] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    setIsDefinitelyConnected(isConnected);

    // if (isConnected) {
      setIsOpen(false);
    // }
  }, [isConnected]);

  return (
    <ConnectService.Provider value={{ isDefinitelyConnected, isOpen, closeModal, openModal }}>
      {children}
      <Modal show={isOpen} onClose={closeModal}>
        <div className='flex flex-row gap-24 text-white font-Inter'>
          <div className='w-48'>
            <div className='text-2xl font-semibold'>Connect a wallet</div>
            <div className='flex flex-col gap-2 mt-12'>
              {connectors.map(connector => <div key={connector.name} className='bg-debond/40 hover:bg-debond rounded-lg font-semibold text-sm flex items-center justify-center cursor-pointer h-10' onClick={() => {
                connect({ connector })
              }}>
                {connector.name}
              </div>)}
            </div>
          </div>
          <div className='flex-1'>
            <div className='text-2xl font-semibold'>What is the wallet?</div>
            <ul className='flex flex-col gap-10 mt-12 text-base font-medium list-disc ml-10'>
              <li>
                A Home for your Digital Assets
                <div className='text-white/40'>Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</div>
              </li>
              <li>
                A New Way to Log In
                <div className='text-white/40'>Instead of creating new accounts and passwords on every website, just connect your wallet.</div>
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4 ml-6 mt-10 text-sm'>
              <div className='bg-highlight-2/40 rounded-lg text-center py-2 cursor-pointer'>Main Button</div>
              <div className='text-center py-2 cursor-pointer' onClick={() => {
                disconnect(false);
              }}>Skip For Now</div>
            </div>
          </div>
        </div>
      </Modal>
    </ConnectService.Provider>
  )
}

export const useConnectModal = () => {
  const { isOpen, closeModal, openModal, isDefinitelyConnected } = useContext(ConnectService)

  return {
    isOpen,
    closeModal,
    openModal,
    isConnected: isDefinitelyConnected,
  };
};

export const useGasPrice = () => {
  const { data } = useFeeData();
  const [fee, setFee] = useState(null);

  useEffect(() => {
    setFee(data)
  }, [data]);

  return {
    fee,
  }
}
