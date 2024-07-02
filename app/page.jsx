'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

import { cars } from '@/data/cars.js'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })

export default function Page() {
  const [ended, setEnded] = useState(false)
  const onVideoEnd = () => {
    console.log('Video ended')
    setEnded(true)
  }

  return (
    <div className='h-full flex flex-col justify-evenly overflow-y-scroll mt-2'>
      <video className={`fixed size-screen top-0 left-0 z-10 ${ended ? 'fade-out' : 'block'}`} autoPlay muted onEnded={onVideoEnd}>
        <source src='/video/Animation_Intro.mp4' type='video/mp4' />
      </video>
      {Object.entries(cars).map(([car]) => {
        return <Logo route='/trim' car={car} key={car} />
      })}
    </ div>
  )
}
