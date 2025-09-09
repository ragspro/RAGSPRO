import React, { useRef, useMemo } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import * as THREE from 'three'
import { Vector3 } from 'three'
import { blackHoleVertexShader, blackHoleFragmentShader } from '../utils/shaders'

// Create a custom shader material
class BlackHoleMaterialImpl extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2() },
        pointer: { value: new THREE.Vector2(0, 0) },
        intensity: { value: 1.0 }
      },
      vertexShader: blackHoleVertexShader,
      fragmentShader: blackHoleFragmentShader,
      side: THREE.DoubleSide
    })
  }
}

// Register the material with R3F
extend({ BlackHoleMaterialImpl })

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

// Main black hole component
export default function BlackHoleEffect() {
  const blackHoleMaterial = useRef()
  const { viewport, size } = useThree()
  
  useFrame(({ clock, pointer }) => {
    if (blackHoleMaterial.current) {
      blackHoleMaterial.current.uniforms.time.value = clock.getElapsedTime()
      blackHoleMaterial.current.uniforms.resolution.value.set(size.width, size.height)
      blackHoleMaterial.current.uniforms.pointer.value.set(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2
      )
    }
  })
  
  return (
    <>
      {/* Black hole */}
      <mesh>
        <planeGeometry args={[10, 10]} />
        <blackHoleMaterialImpl ref={blackHoleMaterial} />
      </mesh>
      
      {/* Words being pulled in */}
      {words.map((word, i) => (
        <PullingWord key={i} {...word} />
      ))}
    </>
  )
}