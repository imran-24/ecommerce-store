import { getProductBytId } from '@/actions/get-productById'
import { getProducts } from '@/actions/get-products'
import Gallery from '@/components/gallery/gallery'
import Info from '@/components/info'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import ProductCard from '@/components/ui/product-card'
import React from 'react'

interface Iparams{
    params:{
        productId: string
    }
}
const ProductPage: React.FC<Iparams> = async({ params}) => {
  const product = await getProductBytId(params.productId)
  const suggestedProduct = await getProducts({categoryId: product.category.id})
  return (
    <div className='bg-white'>
        <Container>
            <div className='px-4 md:px-6 lg:px-8 py-10'>
                <div className='grid lg:grid-cols-2  lg:gap-x-8 gap-y-8 '>
                    <div>
                        <Gallery images={product?.images}/>
                    </div>
                    <div>
                        <Info data={product} />
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <ProductList title='Related Items' data={suggestedProduct} />
            </div>
        </Container>
    </div>
  )
}

export default ProductPage