'use client'

import { Duck } from '@/components/canvas/Examples'
import { useRouter, useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { cars } from '@/data/cars'
import { Hotspot } from '@/components/canvas/Hotspot'

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex size-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Interior = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Interior), { ssr: false })

export default function CarPageContent({ car, trim }) {
  const searchParams = useSearchParams()
  const exteriorColor = searchParams.get('exteriorColor') || 'defaultColor'
  trim = decodeURIComponent(trim)
  car = decodeURIComponent(car)
  const [selectedColor, setSelectedColor] = useState(Object.keys(cars[car][trim].interiorColors)[0])
  const [playOpenAnimation, setPlayOpenAnimation] = useState(false)

  const router = useRouter()
  const handleSelectClick = () => {
    router.push(`/${car}/${trim}/summary?exteriorColor=${exteriorColor}&interiorColor=${selectedColor}`)
  }


  const handleBackClick = () => {
    router.push(`/${car}/${trim}/exterior`)
  }

  const handleHotspotVisionRoof = () => {
    console.log('vision roof clicked')
    setPlayOpenAnimation(true)
  }


  return (
    <div>
      <h1 className='text-3xl text-center'>{car}</h1>
      <p className='text-center text-lg'>{trim}</p>
      <div className='mt-2 w-11/12 mx-auto relative rounded-xl'>
        <View className='h-96 sm:h-48 sm:w-full'>
          <Suspense fallback={null}>
            <group position={[0, -2, 0]}>
              <Duck
                route='/trim'
                scale={12}
                model={cars[car][trim].interiorModel.model[selectedColor]}
                playOpenAnimation={playOpenAnimation}
              />
              <Hotspot
                position={[6, 7, 0]}
                rotation={[0, 11, 0]}
                scale={[1, 1, 1]}
                onClick={handleHotspotVisionRoof}
                cameraTarget={[-13, -1, 0]} // Example target position
              />
            </group>

            <Interior color={cars[car][trim].interiorColors[selectedColor].color} />
          </Suspense>
        </View>
        <div className='relative bottom-11 z-10'>
          <div className='flex flex-row justify-evenly overflow-x-auto px-2 py-1 rounded-full gap-5 w-11/12 bg-gray-100/70 mx-auto'>
            {Object.keys(cars[car][trim].interiorColors).map((color) => (
              <img
                key={color}
                alt={color}
                onClick={() => setSelectedColor(color)}
                src={`/colors/${cars[car][trim].interiorColors[color].image}.png`}
                className={`w-1/12 lg:w-1/12 ${selectedColor === color ? 'border-2 border-white rounded-full' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className='text-center border-2 py-2 flex relative flex-row justify-center border-black w-10/12 mx-auto font-[HyundaiSansHead-Medium] cursor-pointer'
        onClick={handleSelectClick}>
        <span>Select {selectedColor}</span>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokewtrimth='2.5'
            stroke='currentColor'
            className='size-6 absolute right-0'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </span>
      </div>
      <div className='text-center w-1/5 flex flex-row mx-auto mt-5 items-center justify-evenly font-[HyundaiSansHead-Light]'
        onClick={handleBackClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-4'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
        </svg>
        <p>Back</p>
      </div>
    </div>
  )
}
