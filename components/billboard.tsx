import { Billboard } from '@/types'
import { url } from 'inspector'
import React from 'react'

interface BillboardProps{
    data: Billboard
}

const Billboard: React.FC<BillboardProps> = ({data}) => {
  return (
    <div className='p-4 sm:px-6 lg:px-8'>
        <div style={{ backgroundImage: `url(${data.imageUrl})`}}
            className='rounded-xl aspect-square lg:aspect-[2.6/1] bg-cover bg-center overflow-hidden'>
            <div className='w-full h-full flex items-center justify-center '>
                <div className='tracking-tighter text-2xl sm:text-4xl lg:text-6xl font-bold text-black text-center opacity-70 bg-neutral-400/80'>
                    {data.label}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Billboard