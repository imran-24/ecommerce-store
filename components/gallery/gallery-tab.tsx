'use client'

import { Image as ImageType } from "@/types"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import { cn } from "@/libs/utils"


interface GalleryTabProps{
    image: ImageType
}

const GalleryTab: React.FC<GalleryTabProps> = ({image}) => {
  return (
    <Tab className="relative mx-auto w-full aspect-square flex items-center justify-center">
        {
            ({selected})=>(
                <div className="" key={image.id}>
                    <span className="absolute inset-0 aspect-square">
                        <Image 
                        src={image.url}
                        fill
                        alt=""
                        className="" />
                    </span>
                    <span 
                    className={cn(
                        'absolute inset-0 rounded-lg overflow-hidden ring-2 ring-offset-2',
                        selected ? "ring-black" : "ring-transparent"
                    )}
                    />
                </div>
            )
        }
    </Tab>
  )
}

export default GalleryTab