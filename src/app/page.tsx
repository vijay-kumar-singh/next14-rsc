import Image from 'next/image'
import fetchData from './lib/fetch-data'
export default async function Home() {
  const apiData = await fetchData('1')
  console.log(apiData)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {apiData.title}id: {process.env.dev_id}
    </main>
  )
}
