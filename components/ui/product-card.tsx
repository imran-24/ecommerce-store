'use client'

import { Product } from '@/types'
import Image from 'next/image'
import React, { MouseEventHandler } from 'react'
import IconButton from './icon-button'
import { Expand, ShoppingCart } from "lucide-react";
import Currency from './currency';
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/usePreviewModal'
import { useCartStore } from '@/hooks/useCart'
interface ProductCardProps{
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const router = useRouter()
  const cart = useCartStore()

  const previewModal = usePreviewModal()
  const onPreview: MouseEventHandler<HTMLButtonElement>= (event: any)=>{
    event.stopPropagation()
    previewModal.onOpen(product)
  }

  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (event)=>{
    event.stopPropagation()
    cart.addItem(product)
  }

  return (
    <div 
    onClick={()=> router.push(`/product/${product?.id}`)}
    className='bg-white border cursor-pointer p-2 rounded-xl group space-y-4'>
      <div className="aspect-square rounded-xl bg-gray-100 relative mb-4">
        <Image 
          src={product.images?.[0]?.url} 
          alt="" 
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className='absolute bottom-3 opacity-0 group-hover:opacity-100 transition flex items-center  w-full justify-center space-x-3 '>
            <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddtoCart} 
              icon={<ShoppingCart size={20} className="text-gray-600" />} 
            />
        </div>
      </div>
      {/* description */}
      <div>
        <p className=' font-semibold text-lg'>{product?.name}</p>
        <p className=' text-sm text-gray-500'>{product?.category.name}</p>
      </div>
      {/* price and review */}
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  )
}

export default ProductCard