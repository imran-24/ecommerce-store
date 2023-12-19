"use client"

import Image from "next/image"
import { Image as ImageType } from "@/types"
import { Tab } from "@headlessui/react"
import GalleryTab from "./gallery-tab"

interface GalleryProps{
  images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({images}) => {
  return (
    <Tab.Group as="div" className="flex flex-col">
      <Tab.Panels className="w-full">
        {
          images.map(image => (
            <Tab.Panel
            key={image.id}
            className="relative aspect-square rounded-xl overflow-hidden">
              <Image 
              alt=""
              src={image.url}
              fill
              className="object-cover object-center"
              />
            </Tab.Panel>
          ))
        }
      </Tab.Panels>
      <div className="hidden mt-8 w-full  sm:block  max-w-2xl lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-4">
          {
            images.map(image => (
              <GalleryTab key={image.id} image={image} />
            ))
          }
        </Tab.List>
      </div>
    </Tab.Group>
  )
}

export default Gallery