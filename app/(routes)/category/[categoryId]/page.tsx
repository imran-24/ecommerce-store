
import { getCategoryById } from '@/actions/get-categoryById'
import { getColors } from '@/actions/get-color'
import { getProducts } from '@/actions/get-products'
import { getSizes } from '@/actions/get-sizes'
import Billboard from '@/components/billboard'
import Filter from '@/components/filter'
import MobileFilter from '@/components/mobile-filter'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import NoResult from '@/components/ui/no-result'
import ProductCard from '@/components/ui/product-card'
import React from 'react'

interface CategoryPageProps{
    params:{
        categoryId: string
    },
    searchParams:{
        sizeId: string,
        colorId: string
    }
}
const CategoryPage: React.FC<CategoryPageProps> = async({params, searchParams}) => {
  console.log(searchParams)
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  }) 
  const category = await getCategoryById(params.categoryId)
  const colors = await getColors()
  const sizes = await getSizes()

  return (
    <div className='bg-white'>
        <Container>
            <Billboard data={category?.billboard} />
            <div className='px-4 md:px-6 lg:px-8 pb-10'>
                <div className='lg:grid lg:grid-cols-5 space-x-4 space-y-4'>
                    <div className='block lg:hidden'>
                        <MobileFilter colors={colors} sizes={sizes} />
                    </div>
                    <div className='hidden lg:block'>
                        <Filter 
                        data={sizes}
                        name='Sizes'
                        valueKey='sizeId' />
                        <Filter 
                        data={colors}
                        name='Colors'
                        valueKey='colorId' />
                    </div>
                    <div className='lg:col-span-4'>
                        {products.length === 0 
                        ? <NoResult />
                        : (<div className='grid grid-cols-3 lg:grid-cols-4 gap-4'>
                            {
                                products.map(product => (
                                    <ProductCard product={product} key={product.id} />
                                ))
                            }
                        </div>)}
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CategoryPage