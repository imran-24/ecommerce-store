'use client'

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import { useCartStore } from "@/hooks/useCart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import { MouseEventHandler } from "react";

interface CartItemProps{
    data: Product
}
const CartItem: React.FC<CartItemProps> = ({
    data
}) => {
    const cart = useCartStore()
    
    const onRemove: MouseEventHandler<HTMLButtonElement> = (event)=>{
        event.stopPropagation
        cart.removeItem(data.id)
    }

    return ( 
        <div className="flex py-6 border-b">
            <div className="h-24 w-24 relative rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image 
                fill 
                alt="" 
                src={data.images[0].url} 
                className="
                object-cover 
                object-center" /> 
            </div>
            <div className="ml-4 relative sm:ml-6 flex flex-1 flex-col justify-between">
                <div className="absolute top-0 right-0">
                    <IconButton icon={<X size={15} className="cursor-pointer" />} onClick={onRemove} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">{data.name}</p>
                    </div>
                    <div className="flex items-center text-sm mt-1">
                        <p className="text-gray-500">{data.color.name}</p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
                    </div>   
                </div>
                <Currency value={data.price} />
            </div>
        </div>
     );
}
 
export default CartItem;