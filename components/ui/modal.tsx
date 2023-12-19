import { Product } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import IconButton from './icon-button'
import { X } from 'lucide-react'

interface ModalProps{
    isOpen: boolean,
    onClose: ()=> void,
    children: React.ReactNode
}
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children
}) => {
  return (
    /* The `show` prop controls all nested `Transition.Child` components. */
    <Transition show={isOpen} as={Fragment}>
      <Dialog className="relative z-10 overflow-hidden" as='div' onClose={onClose}>
        {/* Background overlay */}
        <Transition.Child
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className='fixed inset-0 bg-gray-900 opacity-50' />
        </Transition.Child>

        {/* Sliding sidebar */}
        <div className="fixed inset-0 overflow-hidden">
            <div className='
            min-h-full
            flex flex-col 
            items-center 
            justify-center'>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0  sm:scale-95"
                    enterTo="opacity-100  sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100  sm:scale-100"
                    leaveTo="opacity-0 sm:scale-95"
                >
                        <Dialog.Panel
                        as='div'
                        className='
                        relative 
                        transform 
                        overflow-hidden 
                        rounded-lg 
                        bg-white 
                        px-4 
                        pb-4
                        pt-5 
                        text-left 
                        shadow-xl 
                        transition-all
                        w-full
                        sm:my-8 
                        sm:w-full 
                        sm:max-w-lg 
                        sm:p-6
                        '>
                            <div className=" w-full z-50">
                                    <div className='absolute right-5   '>
                                        <IconButton onClick={onClose} icon={<X size={15} />} />
                                    </div>
                            {children}
                            </div>
                        </Dialog.Panel>  
                    </Transition.Child>   
            </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal