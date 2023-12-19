
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export async function getCategoryById(id: string) {
    const res = await fetch(`${URL}/${id}`, {cache: 'no-cache'})
    return res.json()
}