'use client'

import { Duck } from '@/components/canvas/Examples'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { useRouter } from 'next/navigation'
import { cars } from '@/data/cars'

const Trim = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.trim), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokewtrimth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page({ params }) {
  const router = useRouter()
  let { trim, car } = params
  trim = decodeURIComponent(trim)
  car = decodeURIComponent(car)
  const [selectedColor, setSelectedColor] = useState(Object.keys(cars[car][trim].exteriorColors)[0])
  const handleSelectClick = () => {
    router.push(`/${car}/${trim}/interior?color=${selectedColor}`)
  }

  return (
    <div>
      <h1 className='text-3xl text-center'>{car}</h1>
      <p className='text-center text-lg'>{trim}</p>
      <p className='text-center text-lg'>Customize your vehicle</p>
      <div className='mt-2 w-11/12 mx-auto relative rounded-xl'>
        <View orbit className='h-96 sm:h-48 sm:w-full'>
          <Suspense fallback={null}>
            <Duck
              route='/trim'
              scale={2}
              position={[0, -1.6, 0]}
              model={cars[car][trim].exteriorModel.model}
            />
            <Common color={cars[car][trim].exteriorColors[selectedColor].color} />
          </Suspense>
        </View>
        <div className='relative bottom-11 z-10'>
          <div className='flex flex-row justify-evenly overflow-x-auto px-2 py-1 rounded-full gap-5 w-11/12 bg-opacity-70 bg-gray-100 mx-auto'>
            {Object.keys(cars[car][trim].exteriorColors).map((color) => (
              <img
                key={color}
                alt={color}
                onClick={() => setSelectedColor(color)}
                src={`/colors/${cars[car][trim].exteriorColors[color].image}.png`}
                className={`w-1/12 h-1/12 lg:w-1/12 ${selectedColor === color ? 'border-2 border-white rounded-full' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className='text-center border-2 py-2 flex flex-row border-black w-10/12 mx-auto font-[HyundaiSansHead-Regular] cursor-pointer'
        onClick={handleSelectClick}
      >
        <span>Select {selectedColor}</span>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokewtrimth='2.5'
            stroke='currentColor'
            className='size-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </span>
      </div>
    </div>
  )
}
