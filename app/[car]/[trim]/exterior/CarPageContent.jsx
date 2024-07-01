'use client'

import { Duck } from '@/components/canvas/Examples'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { useRouter } from 'next/navigation'
import { cars } from '@/data/cars'
import { Hotspot } from '@/components/canvas/Hotspot'
import { Modal } from '@/components/modal'

const Trim = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.trim), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex size-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
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

const Exterior = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Exterior), { ssr: false })

export default function Page({ car, trim }) {
  const router = useRouter()
  const [selectedColor, setSelectedColor] = useState(Object.keys(cars[car][trim].exteriorColors)[0])
  const [showHotspot, setShowHotspot] = useState(false)
  const [hotspotTitle, setHotspotTitle] = useState('')
  const [hotspotDescription, setHotspotDescription] = useState('')
  const handleSelectClick = () => {
    router.push(`/${car}/${trim}/interior?exteriorColor=${selectedColor}`)
  }

  const handleBackClick = () => {
    router.push(`/${car}/`)
  }

  const handleHotspotHeadLight = () => {
    if((trim === 'Limited' || trim === 'D100 Platinum Edition') && car === 'SE'){
      setHotspotTitle('Premium front LED accent lighting"')
      setHotspotDescription(cars[car][trim].hotspots.exterior['Premium front LED accent lighting'].description)
    }else {
      setHotspotTitle('LED Projector headlights')
      setHotspotDescription(cars[car][trim].hotspots.exterior['LED Projector headlights'].description)
    }
    setShowHotspot(true)
  };

  const handleHotspotCharging = () => {
    setHotspotTitle('Ultra-fast charging')
    setHotspotDescription(cars[car][trim].hotspots.exterior['Ultra-fast charging'].description)
    showHotspot ? setShowHotspot(false) : setShowHotspot(true)
  };

  const handleHotspotMirror = () => {
    setHotspotTitle('Blind Spot View Monitor')
    setHotspotDescription(cars[car][trim].hotspots.exterior['Blind Spot View Monitor'].description)
    showHotspot ? setShowHotspot(false) : setShowHotspot(true)
  };

  return (
    <div>
      <h1 className='text-3xl text-center'>{car}</h1>
      <p className='text-center text-lg'>{trim}</p>
      <p className='text-center text-lg'>Customize your vehicle</p>
      <div className='mt-2 w-11/12 mx-auto relative rounded-xl'>
        <View orbit className='h-96 sm:h-48 sm:w-full'>
          <Suspense fallback={null}>
            <group position={[0, 0.3, 0]}>
              <Duck
                route='/trim'
                scale={12}
                model={cars[car][trim].exteriorModel.model}
              />
              <Hotspot
                position={[-29, 5, 7]}
                rotation={[0, 15, 0]}
                scale={[2, 2, 2]}
                onClick={handleHotspotHeadLight}
                cameraTarget={[-45, 10, 10]}
              />
              <Hotspot
                position={[21.5, 8, -11]}
                rotation={[0, 11, 0]}
                scale={[2, 2, 2]}
                onClick={handleHotspotCharging}
                cameraTarget={[40, 15, -20]} // Example target position
              />
              <group position={[-7, 10.3, -12]}>
                <Hotspot
                  rotation={[0, 11, 0]}
                  scale={[2, 2, 2]}
                  onClick={handleHotspotMirror}
                  cameraTarget={[50, 15, -10]} // Example target position
                />
                {/* <Cone position={[3, 0, -5]} rotation={[1.6, 0, 0.6]} scale={[2, 6, 2]} visible={showCone} />
                <ImagePlane
                  imageUrl="/Blind_Spot_image.png"
                  position={[6.5, 0.05, -9.95]}
                  rotation={[0, 2.55, 0]}
                  scale={[0.85, 0.85, 0.85]}
                  visible={showCone}
                /> */}
              </group>
            </group>
            <Exterior color={cars[car][trim].exteriorColors[selectedColor].color} />
          </Suspense>
        </View>
        <div className='relative bottom-11 z-10'>
          <div className='flex flex-row justify-evenly overflow-x-auto px-2 py-1 rounded-full gap-5 w-11/12 bg-gray-100/70 mx-auto'>
            {Object.keys(cars[car][trim].exteriorColors).map((color) => (
              <img 
                key={color}
                alt={color}
                onClick={() => setSelectedColor(color)}
                src={`/colors/${cars[car][trim].exteriorColors[color].img}.png`}
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
      <Modal visible={showHotspot} setVisibility={setShowHotspot} title={hotspotTitle} description={hotspotDescription} />
    </div>
  )
}
