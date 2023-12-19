'use client'
import { Product } from '@/types'
import React from 'react'
import Currency from './ui/currency'
import Button from './ui/button'
import IconButton from './ui/icon-button'
import { ShoppingCart } from 'lucide-react'

interface InfoProps{
    data: Product
}
const Info: React.FC<InfoProps> = ({data}) => {
  return (
    <div className=''>
        <h1 className='text-3xl font-bold text-gray-900 '>{data.name}</h1>
        <div className='mt-2'>
            <div className='text-lg text-gray-900'>
                <Currency value={data?.price} />
            </div>
        </div>
        <hr className='my-4' />
        <div className='flex flex-col gap-y-4'>
            <div className='flex items-center gap-x-4'>
                <h3 className='font-semibold text-black'>Size:</h3>
                <div>{data?.size?.name}</div>
            </div>
            <div className='flex items-center gap-x-4'>
                <h3 className='font-semibold text-black'>Color:</h3>
                <div style={{backgroundColor: `${data.color.value}`}} className='rounded-full ring-1 ring-gray-400 ring-offset-1 h-5 w-5 overflow-hidden' />
            </div>
        </div>
        <div className='mt-10'>
        <Button className='flex items-center gap-x-6 text-sm truncate'>
            Add To Cart
            <ShoppingCart />
        </Button>
        </div>
    </div>
  )
}

export default Info