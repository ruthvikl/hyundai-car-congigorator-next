'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef, useEffect } from 'react'
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

const Exterior = ({ color }) => {
  const texture = useLoader(TextureLoader, '/envmaps/images/Environment-Map-Empty-Warehouse2K.jpg')

  return (
    <Suspense fallback={null}>
      {color && <color attach='background' args={[color]} />}
      <directionalLight intensity={6} color='white' position={[4, 5, 2]} />
      <ambientLight intensity={2} />
      <PerspectiveCamera makeDefault fov={60} position={[-50, 0, 40]} />
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.5}
        target={[-2, 0.3, 0]}
      />
      <Environment1 texture={texture} />
      <Environment files="/envmaps/hdr/Environment-Map-Empty-Warehouse2K.hdr" ground={{ height: 35, radius: 100, scale: 200 }} />
    </Suspense>
  )
}

const Interior = ({ color }) => {
  const texture = useLoader(TextureLoader, '/envmaps/images/Environment-Map-Empty-Warehouse2K.jpg')

  return (
    <Suspense fallback={null}>
      {color && <color attach='background' args={[color]} />}
      <directionalLight intensity={6} color='white' position={[4, 5, 2]} />
      <ambientLight intensity={2} />
      <PerspectiveCamera makeDefault fov={60} position={[1, 2, 0]} />
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.5}
        target={[0, 5, 0]}
      />
      <Environment1 texture={texture} />
      <Environment files="/envmaps/hdr/Environment-Map-Empty-Warehouse2K.hdr" ground={{ height: 10, radius: 100, scale: 200 }} />
    </Suspense>
  )
}

const Common = ({ color }) => {
  const orbitRef = useRef();

  useEffect(() => {
    if (orbitRef.current) {
      orbitRef.current.domElement.style.pointerEvents = 'none';
    }
  }, []);
  return (
    <Suspense fallback={null}>
      {color && <color attach='background' args={[color]} />}
      <directionalLight intensity={6} color='white' position={[4, 5, 2]} />
      <ambientLight intensity={2} />
      <PerspectiveCamera makeDefault fov={60} position={[-6, 0, 6]} />
      <OrbitControls
        ref={orbitRef}
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.5}
        target={[0, 0, 0]}
        autoRotate={true}
        autoRotateSpeed={1.0}
        enableTouch={false}
      />
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

export { Common, View, Exterior, Interior }
