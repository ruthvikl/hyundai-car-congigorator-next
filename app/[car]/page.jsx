import dynamic from 'next/dynamic'
import { cars } from '@/data/cars'

const CarPageContent = dynamic(() => import('./CarPageContent'), { ssr: false })

export default function Page({ params }) {
  let { car } = params
  car = decodeURIComponent(car)

  return (
    <CarPageContent car={car} />
  )
}

export async function generateStaticParams() {
  const params = []
  for (const car in cars) {
    const encodedCar = encodeURIComponent(car)
    params.push({ car: encodedCar})
  }
  return params
}
