'use client'

import { ShoppingBag } from "lucide-react"
import Button from "../ui/button"
import {useState, useEffect} from 'react'
import { useCartStore } from "@/hooks/useCart"
import { useRouter } from "next/navigation"

const NavbarActions = () => {
   // 1. Initialize state variables
  const [isMounted, setIsMounted] = useState(false)
   
 // 2. useEffect hook to set isMounted to true after the initial render
  useEffect(()=>{
    setIsMounted(true)
  },[])

  const cart = useCartStore()
  const router = useRouter()
  // 3. Conditional rendering: If the component is not yet mounted, return null
  if(!isMounted) return null

  // 4. The component renders if isMounted is true
  return (
    <div className='ml-auto '>
      <Button onClick={()=> router.push('/cart')} className="flex items-center space-x-1 px-4 py-2">
          <ShoppingBag size={20} />
          <p className="font-bold text-sm text-white">{cart.items.length}</p>
      </Button>
    </div>
  )
}

export default NavbarActions