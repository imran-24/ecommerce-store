
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export async function getProductBytId(id: string) {
    const res = await fetch(`${URL}/${id}`, {cache: 'no-cache'})
    return res.json()
}