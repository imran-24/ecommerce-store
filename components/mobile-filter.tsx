'use client'

import { Color, Size } from '@/types'
import {useState} from 'react'
import Button from './ui/button'
import { PlusIcon, X } from 'lucide-react'
import {Dialog} from '@headlessui/react'
import IconButton from './ui/icon-button'
import Filter from './filter'

interface MobileFilterProps{
    sizes: Size[],
    colors: Color[]
}
const MobileFilter: React.FC<MobileFilterProps> = ({
    sizes, colors
}) => {
  const [open, setOpen] = useState(false)
  const onOpen = ()=> setOpen(true)
  const onClose = () => setOpen(false)
  
  return (
    <div>
        <Button 
        onClick={onOpen}
        className='flex items-center text-white text-sm gap-x-2'>
            <span>Filter</span> 
            <PlusIcon className='h-4 w-4'/>
        </Button>
        <Dialog onClose={onClose} 
            className='relative z-40' open={open} as="div" >
            <div className='fixed inset-0 bg-black opacity-25' />
            <Dialog.Panel className='fixed inset-0 z-40 flex flex-col p-4  bg-white transition overflow-y-auto duration-200 ease-out w-full max-w-xs ml-auto'>
                <div className='flex items-center justify-end space-y-10'>
                    <IconButton onClick={onClose} icon={<X size={15} />}  />
                </div>
                <div className='flex flex-col '>
                        <Filter 
                        data={sizes}
                        name='Sizes'
                        valueKey='sizeId' />
                        <Filter 
                        data={colors}
                        name='Colors'
                        valueKey='colorId' />
                </div>
               
            </Dialog.Panel>
        </Dialog>
    </div>
  )
}

export default MobileFilter