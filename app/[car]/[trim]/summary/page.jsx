import dynamic from 'next/dynamic'
import { cars } from '@/data/cars'

// Dynamically import the Client Component
const CarPageContent = dynamic(() => import('./CarPageContent'), { ssr: false })

export default function Page({ params }) {
  let { trim, car } = params
  trim = decodeURIComponent(trim)
  car = decodeURIComponent(car)

  return (
    <CarPageContent car={car} trim={trim} />
  )
}

export async function generateStaticParams() {
  const params = []
  for (const car in cars) {
    for (const trim in cars[car]) {
      params.push({ 
        car: encodeURIComponent(car),
        trim: encodeURIComponent(trim),
      })
    }
  }
  return params
}
