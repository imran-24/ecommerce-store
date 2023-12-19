'use client'

import { cn } from '@/libs/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MainNavProps{
    data: Category[]
}
const MainNav: React.FC<MainNavProps>= ({
    data
}) => {
  const pathname = usePathname()
  const routes = data.map(item => ({
    href: `/category/${item?.id}`,
    label: item?.name,
    active: pathname === `/category/${item.id}`
  }))
  return (
    <div className='mx-6 flex items-center space-x-4 lg:space-x-6'>
        {routes.map(route => (
            <Link 
            className={cn(`
            text-sm font-semibold hover:text-black transition-colors
            `, route?.active ? 'text-black': 'text-neutral-500')}
            key={route.href} 
            href={route.href}>
                {route.label}
            </Link>
        ))}
    </div>
  )
}

export default MainNav