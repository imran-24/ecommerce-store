'use client'

import { Product } from '@/types'
import React from 'react'
import ProductCard from './ui/product-card'

interface ProductListProps{
    title: string,
    data: Product[]
}
const ProductList: React.FC<ProductListProps> = ({
    title,
    data
}) => {
  return (
    <div className='p-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-4'>
            <div className='text-2xl font-bold'>
                {title}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center '>
            {
                data.map(item => (
                    <ProductCard key={item.id} product={item} />
                ))
            } 
            </div>
        </div>
    </div>
  )
}

export default ProductList