import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Text, Float } from '@react-three/drei'
import * as THREE from 'three'
import { Vector3 } from 'three'

// Words that will be pulled into the black hole
const words = [
  { text: "CODE", position: [-3, 2, -5], color: "#ff3e88" },
  { text: "CREATE", position: [3, -1, -7], color: "#6e44ff" },
  { text: "DESIGN", position: [-4, -2, -6], color: "#00ffaa" },
  { text: "DEVELOP", position: [4, 3, -8], color: "#ffcc00" },
  { text: "INNOVATE", position: [-2, -3, -5], color: "#ff5500" },
  { text: "BUILD", position: [5, 1, -9], color: "#00ccff" },
  { text: "LAUNCH", position: [-5, 0, -7], color: "#ff00cc" },
  { text: "SCALE", position: [2, -2, -6], color: "#88ff00" }
]

// Word component that gets pulled into the black hole
function PullingWord({ text, position, color }) {
  const ref = useRef()
  const blackHolePosition = new Vector3(0, 0, 0)
  const initialPosition = useMemo(() => new Vector3(...position), [position])
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    
    // Calculate pull effect towards black hole
    const pullFactor = Math.min(time * 0.05, 0.95) // Gradually increase pull
    const newPosition = initialPosition.clone().lerp(blackHolePosition, pullFactor)
    
    // Add some wobble
    const wobble = Math.sin(time * 2 + initialPosition.x) * 0.1 * (1 - pullFactor)
    
    ref.current.position.set(
      newPosition.x + wobble,
      newPosition.y + wobble * 0.5,
      newPosition.z
    )
    
    // Scale down as it gets closer to the black hole
    const scale = Math.max(1 - pullFactor * 1.5, 0.1)
    ref.current.scale.set(scale, scale, scale)
    
    // Rotate as it gets pulled in
    ref.current.rotation.z = time * 0.2 + pullFactor * Math.PI * 2
  })
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text
        ref={ref}
        position={initialPosition}
        color={color}
        fontSize={0.5}
        font="/fonts/Inter-Bold.woff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </Float>
  )
}

export default function SimpleBlackHole({ position = [0, 0, 0], size = 1 }) {
  const blackHoleRef = useRef()
  const glowRef = useRef()
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    
    // Rotate the black hole
    if (blackHoleRef.current) {
      blackHoleRef.current.rotation.z = t * 0.2
    }
    
    // Pulse the glow
    if (glowRef.current) {
      glowRef.current.scale.set(
        1 + Math.sin(t * 0.8) * 0.05,
        1 + Math.sin(t * 0.8) * 0.05,
        1 + Math.sin(t * 0.8) * 0.05
      )
    }
  })
  
  return (
    <group position={position}>
      {/* Black hole core */}
      <Sphere ref={blackHoleRef} args={[size * 0.8, 64, 64]}>
        <MeshDistortMaterial
          color="#000000"
          distort={0.4}
          speed={4}
          metalness={0.9}
          roughness={0.2}
        />
      </Sphere>
      
      {/* Accretion disk */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[size * 0.9, size * 1.5, 64]} />
        <meshStandardMaterial
          color="#6e44ff"
          emissive="#6e44ff"
          emissiveIntensity={2}
          side={THREE.DoubleSide}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Outer glow */}
      <Sphere ref={glowRef} args={[size * 2, 32, 32]}>
        <meshStandardMaterial
          color="#00ffaa"
          emissive="#00ffaa"
          emissiveIntensity={0.5}
          transparent
          opacity={0.15}
        />
      </Sphere>
      
      {/* Words being pulled in */}
      {words.map((word, i) => (
        <PullingWord key={i} {...word} />
      ))}
    </group>
  )
}