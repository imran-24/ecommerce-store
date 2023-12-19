import { getBillboard } from '@/actions/get-billboard'
import { getProducts } from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import { randomInt } from 'crypto';
import Image from 'next/image'


export default async function Home() {
  const billboard = await getBillboard()
  const products = await getProducts({ isFeatured: true})
  const randomBillboard = billboard[randomInt(0, billboard.length)]
  return (
    <Container>
      <div className='pb-10 space-y-8'>
        <Billboard data={randomBillboard} />
        <ProductList title="Featured Product" data={products} />
      </div>
      
    </Container>
  )
}
