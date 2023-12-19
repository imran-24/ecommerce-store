'use client'
import { Color, Size } from '@/types'
import React from 'react'
import Button from './ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import { cn } from '@/libs/utils'

interface FilterProps{
    valueKey: string,
    name: string,
    data: (Color | Size)[]
}
const Filter: React.FC<FilterProps> = ({
    valueKey, data, name
}) => {
  const searchParams = useSearchParams()
  const selectedItem = searchParams.get(valueKey)
  const router = useRouter()
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString())
    
    const query = {
        ...current,
        [valueKey]: id
    }
    if(current[valueKey] === id) query[valueKey] = null
    const url = qs.stringifyUrl({
        url: window.location.href,
        query
    }, {skipNull: true})
    router.push(url)
  }
  return (
    <div className='mb-4'>
        <h2 className='text-lg font-semibold'>{name}</h2>
        <hr className='my-4' />
        <div 
        className='flex flex-wrap gap-4'>
        {
            data.map(size => (
            <Button 
            onClick={()=>onClick(size.id)}
            key={size.id} 
            className={cn(
            `rounded-md
            border
            px-3
            py-2
            border-gray-300
            font-semibold
            hover:opacity-75
            text-sm
            transition
            text-gray-900`,
            selectedItem === size.id ? 'bg-black text-white' : "bg-white"
            )}>
                    {size.name}
            </Button>
               
            ))
        }
        </div>
    </div>
  )
}

export default Filter