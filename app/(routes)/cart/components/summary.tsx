import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import { useCartStore } from '@/hooks/useCart'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React, {useEffect} from 'react'
import toast from 'react-hot-toast'

const Summary = () => {
  
  const cart = useCartStore()
  const items = useCartStore(state => state.items)
  const removeAll = useCartStore(state => state.removeAll)
  const searchParams = useSearchParams()
  const totalPrice = items.reduce((total, item) =>{
    return total + Number(item.price)
  }, 0)

  useEffect(()=>{
    if(searchParams.get('success')){
        toast.success('Payment successful')
        removeAll()
    }if(searchParams.get('canceled')){
        toast.error("Something went wrong")
    }
  },[searchParams, removeAll])
  
  const onCheckout = async() => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
        productIds: items.map(item => item.id)
    })
    window.location = response.data.url
  }

  return (
    <div
    className='
    mt-16
    lg:mt-0
    lg:p-8
    px-4 
    py-6 
    sm:p-6'>
      <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
      <div className='mt-6 '>
          <div className='flex items-center justify-between border-t pt-4 border-gray-200'>
              <div className='font-medium text-gray-900'>Order tool</div>
              <Currency value={totalPrice} />
          </div>
      </div>
      <Button onClick={onCheckout} className='w-full mt-6'>
          Checkout
      </Button>
    </div>
  )
}

export default Summary