'use client'

import {useState, useEffect} from 'react'
import Container from "@/components/ui/container"
import { useCartStore } from "@/hooks/useCart";
import CartItem from "./components/cart-item";
import Summary from './components/summary';

const CartPage = () => {
    
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(()=>{
        setIsMounted(true)
    },[])

    const cart = useCartStore()

    if(!isMounted) return null


    return ( 
        <div className='bg-white'>
            <Container>
                <div className='px-4 md:px-6 lg:px-8 py-10'>
                    <div className="text-3xl font-bold text-black">
                        Shopping Cart
                    </div>
                    <div className="lg:grid mt-12 lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && 
                            <p className="text-neutral-500">No items added to cart</p>}
                            {cart.items.map(item => (
                                <CartItem key={item.id} data={item} />
                            ))}
                        </div>
                        <div className='lg:col-span-5'>
                            <Summary />
                        </div>
                    </div>
                </div>
            </Container>
        </div> );
}
 
export default CartPage;