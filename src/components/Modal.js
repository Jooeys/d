import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Modal({ children, show, onClose }) {
  return <Transition appear show={show} as={Fragment}>
    <Dialog as="div" className="relative z-10 font-Inter" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25 blur" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg bg-white px-16 py-12 text-left align-middle shadow-xl transition-all relative" style={{
              background: 'linear-gradient(180deg, #0C0054 0%, #0F0A2D 100%)'
            }}>
              {children}
              <svg className="w-4 h-4 absolute right-4 top-4 cursor-pointer" onClick={onClose} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.473 13.5271C14.5992 13.6523 14.6702 13.8227 14.6702 14.0005C14.6702 14.1782 14.5992 14.3486 14.473 14.4738C14.3478 14.6 14.1774 14.671 13.9996 14.671C13.8219 14.671 13.6515 14.6 13.5263 14.4738L7.99963 8.94046L2.47297 14.4738C2.34779 14.6 2.17739 14.671 1.99963 14.671C1.82188 14.671 1.65148 14.6 1.5263 14.4738C1.40009 14.3486 1.3291 14.1782 1.3291 14.0005C1.3291 13.8227 1.40009 13.6523 1.5263 13.5271L7.05963 8.00046L1.5263 2.4738C1.35719 2.30469 1.29115 2.05822 1.35305 1.82721C1.41495 1.59621 1.59538 1.41578 1.82638 1.35388C2.05738 1.29198 2.30386 1.35803 2.47297 1.52713L7.99963 7.06046L13.5263 1.52713C13.7877 1.26572 14.2116 1.26572 14.473 1.52713C14.7344 1.78855 14.7344 2.21238 14.473 2.4738L8.93963 8.00046L14.473 13.5271Z" fill="white"/>
              </svg>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
}