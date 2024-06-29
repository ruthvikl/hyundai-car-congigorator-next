'use client'

import { Duck } from '@/components/canvas/Examples'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { cars } from '@/data/cars'

const Blob = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Blob), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
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
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  const [selectedModel, setSelectedModel] = useState('IONIQ 5');
  return (
    <div className='flex flex-col gap-2 mx-auto w-full h-screen'>
      <img src='/logo.png' alt='logo' className='w-2/12 mt-5 mx-auto' />
      <h1 className='text-3xl text-center'>{selectedModel}</h1>
      <p className='font-[HyundaiSansHead-Medium] text-center'>Choose a Trim</p>
      <div className='flex flex-row gap-5 w-full overflow-x-scroll h-full justify-evenly px-5'>
            <div>
                <div className='text-black min-w-80 mx-auto py-5 items-center flex flex-col rounded-lg cursor-pointer h-full mt-5
                    bg-gradient-to-br from-gray-200 to-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'>
                    <div className='flex flex-col justify-evenly w-full h-full'>
                    <View orbit className='h-96 sm:h-48 sm:w-full'>
                        <Suspense fallback={null}>
                        <Duck route='/blob' scale={2} position={[0, -1.6, 0]} model={cars['IONIQ 5']['SE'].exteriorModel.model} />
                        <Common color={'gray'} />
                        </Suspense>
                    </View>
                    <div className='text-center border-2 py-2 border-black w-full mt-10 font-[HyundaiSansHead-Regular]' >
                        Select SE
                        <span className='absolute right-5'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='2.5'
                            stroke='currentColor'
                            className='size-6'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                        </svg>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}
