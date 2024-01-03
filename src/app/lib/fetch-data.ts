import { cache } from 'react'
import 'server-only';
import { headers } from 'next/headers';
import GET from './get-url-query'

const fetchData = cache(async (id: string) => {
    const headersList = headers();
    const baseUrl = headersList.get('host');
    const req = { url: 'http://example.com/?queryParamName=queryParamValue' };
    const result = await GET(req);
   console.log(result)
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
