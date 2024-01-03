import { cache } from 'react'
import 'server-only'

const fetchData = cache(async (id: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      next: {
        revalidate: 10
      }
    }
  )
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }
  return res.json()
});

export default fetchData;
