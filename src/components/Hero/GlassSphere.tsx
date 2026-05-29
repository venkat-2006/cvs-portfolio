"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.005;
    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.12;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.7, 64, 64]} />
      <meshStandardMaterial
        color="#6b00cc"
        roughness={0.05}
        metalness={0.95}
        emissive="#2a0050"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}