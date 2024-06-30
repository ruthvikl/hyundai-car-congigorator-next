'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { cars } from '@/data/cars.js'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })

export default function Page() {
  return (
    <div className='h-full flex flex-col justify-evenly overflow-y-scroll mt-2'>
      {Object.entries(cars).map(([car]) => {
        return <Logo route='/trim' car={car} key={car} />
      })}
    </ div>
  )
}
