"use client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import GlassSphere from "./GlassSphere";

export default function ThreeScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        alpha: true,
      }}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      style={{ background: "transparent" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <ambientLight intensity={0.5} color="#1a0030" />
      <directionalLight position={[4, 4, 4]} intensity={3} color="#ffffff" />
      <pointLight position={[-3, 0, 2]} intensity={8} color="#9333ea" />
      <pointLight position={[3, -2, -2]} intensity={5} color="#7c3aed" />
      <pointLight position={[0, 4, 1]} intensity={4} color="#c4b5fd" />
      <GlassSphere />
    </Canvas>
  );
}