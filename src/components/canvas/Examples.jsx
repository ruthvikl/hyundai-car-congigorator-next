'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export const Blob = ({ route = '/', ...props }) => {
  const router = useRouter()
  return (
    <mesh
      onClick={() => router.push(route)}
      {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0.5} />
    </mesh>
  )
}

export const Logo = ({ route = '/blob', ...props }) => {
  const mesh = useRef(null)
  const router = useRouter()

  return (
    <group ref={mesh} {...props}>
      <mesh onClick={() => router.push(route)}>
        <sphereGeometry args={[0.55, 64, 64]} />
      </mesh>
    </group>
  )
}

export function Duck(props) {
  const { scene } = useGLTF('/duck.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}

export function Dog(props) {
  const { scene } = useGLTF('/models/ioniq5_SE_Viewer.glb')

  return <primitive object={scene} {...props} />
}
