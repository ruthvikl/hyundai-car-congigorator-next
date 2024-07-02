'use client'

import { ExteriorModel } from '@/components/canvas/Examples'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { useRouter } from 'next/navigation'
import { cars } from '@/data/cars'
import { Hotspot } from '@/components/canvas/Hotspot'
import { Modal } from '@/components/modal'
import NebulaComponent from '@/components/Three/Nebula'
import { useLoader } from '@react-three/fiber'
import Cone from '@/components/Three/Cone'
import { NormalBlending, TextureLoader } from 'three'
import { EffectComposer, Bloom, BrightnessContrast, HueSaturation, ToneMapping } from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'

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

const ImagePlane = ({ imageUrl, position, rotation, scale, visible }) => {
  const texture = useLoader(TextureLoader, imageUrl);
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <planeGeometry attach="geometry" args={[5, 5]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
        blending={NormalBlending}
        visible={visible}
      />
    </mesh>
  );
};

export default function Page({ car, trim }) {
  const router = useRouter()
  const [selectedColor, setSelectedColor] = useState(Object.keys(cars[car][trim].exteriorColors)[0])
  const [showHotspot, setShowHotspot] = useState(false)
  const [hotspotTitle, setHotspotTitle] = useState('')
  const [hotspotDescription, setHotspotDescription] = useState('')
  const [showNebula, setShowNebula] = useState(false);
  const [showCone, setShowCone] = useState(false); // Add state for cone visibility

  const handleSelectClick = () => {
    router.push(`/${car}/${trim}/interior?exteriorColor=${selectedColor}`)
  }

  const handleBackClick = () => {
    router.push(`/${car}/`)
  }

  const handleHotspotHeadLight = () => {
    if ((trim === 'Limited' || trim === 'D100 Platinum Edition') && car === 'IONIQ5') {
      setHotspotTitle('Premium front LED accent lighting"')
      setHotspotDescription(cars[car][trim].hotspots.exterior['Premium front LED accent lighting'].description)
    } else {
      setHotspotTitle('LED Projector headlights')
      setHotspotDescription(cars[car][trim].hotspots.exterior['LED Projector headlights'].description)
    }
    setShowHotspot(true)
  };

  const handleHotspotCharging = () => {
    setHotspotTitle('Ultra-fast charging');
    setHotspotDescription(cars[car][trim].hotspots.exterior['Ultra-fast charging'].description);
    setShowHotspot(prev => !prev);

    // Show NebulaComponent and remove it after 5 seconds
    setShowNebula(true);
    setTimeout(() => {
      setShowNebula(false);
    }, 5000);
  };

  const handleHotspotMirror = () => {
    setHotspotTitle('Blind Spot View Monitor')
    setHotspotDescription(cars[car][trim].hotspots.exterior['Blind Spot View Monitor'].description)
    showHotspot ? setShowHotspot(false) : setShowHotspot(true)
    setShowCone(true)
  };

  return (
    <div>
      <h1 className='text-3xl text-center'>{car}</h1>
      <p className='text-center text-lg'>{trim}</p>
      <p className='text-center text-lg'>Customize your vehicle</p>
      <div className='mt-2 w-11/12 mx-auto relative rounded-xl'>
        <Modal visible={showHotspot} setVisibility={setShowHotspot} title={hotspotTitle} description={hotspotDescription} />
        <View className='h-96 sm:h-48 sm:w-full'>
          <Suspense fallback={null}>
            <group position={[0, 0.3, 0]}>
              <ExteriorModel
                scale={12}
                model={cars[car][trim].exteriorModel.model}
                color={cars[car][trim].exteriorColors[selectedColor].color}
              />
              <group position={[-29, 5, 7]}>
                <Hotspot
                  rotation={[0, 15, 0]}
                  scale={[2, 2, 2]}
                  visible={!showHotspot}
                  onClick={handleHotspotHeadLight}
                  cameraTarget={[-45, 10, 10]}
                  isHotspotClicked={showHotspot}
                />
                {(trim === 'Limited' || trim === 'D100 Platinum Edition') && car === 'IONIQ5' && (
                  <ImagePlane
                    imageUrl="/Premium_LED_Image.png"
                    position={[0, 4, 0]}
                    rotation={[0, -1.3, 0]}
                    scale={[1, 1, 1]}
                    visible={showHotspot}
                  />
                )}
              </group>
              <Hotspot
                position={[21.5, 8, -11]}
                rotation={[0, 11, 0]}
                scale={[2, 2, 2]}
                visible={!showHotspot}
                onClick={handleHotspotCharging}
                cameraTarget={[40, 15, -20]} // Example target position
                isHotspotClicked={showHotspot}
              />
              {trim !== 'SE' && (
                <group position={[-7, 10.3, -12]}>
                  <Hotspot
                    rotation={[0, 11, 0]}
                    scale={[2, 2, 2]}
                    visible={!showHotspot}
                    onClick={handleHotspotMirror}
                    cameraTarget={[50, 15, -20]} // Example target position
                  />
                  <Cone position={[4, 0, -1]} rotation={[1.5, 0, 1.1]} scale={[4.5, 9, 4.5]} visible={showCone} />
                  <ImagePlane
                    imageUrl="/Blind_Spot_image.png"
                    position={[15, 0.05, -6]}
                    rotation={[0, 1.4, 0]}
                    scale={[1.8, 1.8, 1.8]}
                    visible={showCone}
                  />
                </group>
              )}
              {showNebula && <NebulaComponent />}
            </group>
            <Exterior color={cars[car][trim].exteriorColors[selectedColor].color} />
            <EffectComposer disableNormalPass>
              <Bloom mipmapBlur luminanceThreshold={1} intensity={0.7} />
              <BrightnessContrast brightness={0} contrast={0.1} />
              <HueSaturation hue={0} saturation={0} />
              <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
            </EffectComposer>
          </Suspense>
        </View>
        <div className='relative bottom-11 z-10'>
          <div className='flex flex-row justify-evenly overflow-x-auto px-2 py-1 rounded-full gap-5 w-11/12 bg-gray-100/70 mx-auto'>
            {Object.keys(cars[car][trim].exteriorColors).map((color) => (
              <img
                key={color}
                alt={color}
                onClick={() => setSelectedColor(color)}
                src={`/colors/${cars[car][trim].exteriorColors[color].image}.png`}
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
