'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, Environment, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import { useLoader, useThree } from '@react-three/fiber'
import { TextureLoader, EquirectangularReflectionMapping } from 'three'

function Environment1({ texture }) {
  const { scene } = useThree()
  texture.mapping = EquirectangularReflectionMapping
  scene.background = texture
  return null
}

const Common = ({ color }) => {
  console.log('Common', color)
  const texture = useLoader(TextureLoader, '/envmaps/images/Environment-Map-Empty-Warehouse2K.jpg')

  return (
    <Suspense fallback={null}>
      {color && <color attach='background' args={[color]} />}
      <directionalLight intensity={6} color='white' position={[4, 5, 2]} />
      <ambientLight intensity={2} />
      <PerspectiveCamera makeDefault fov={60} position={[-6, 0, 6]} />
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.5}
        target={[0, 0, 0]}
      />
      <Environment1 texture={texture} />
      <Environment files="/envmaps/hdr/Environment-Map-Empty-Warehouse2K.hdr" ground={{ height: 35, radius: 100, scale: 200 }} />
    </Suspense>
  )
}

const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { Common, View }
