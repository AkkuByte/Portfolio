import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';
import { ErrorBoundary } from './ErrorBoundary';

// 1. The actual 3D Mesh that tracks the mouse
function TrackingMesh() {
  const groupRef = useRef(null);

  // Load your custom model from the public folder using the correct Vite base URL
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}model2.glb`);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Increased the rotation range to Math.PI / 2 (90 degrees) for better tracking
    const targetX = (state.pointer.x * Math.PI) / 2;
    const targetY = (state.pointer.y * Math.PI) / 2;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
  });

  // Render your custom scene inside a Center component so it rotates perfectly around its middle
  // Increased scale significantly. Adjust the number '7' if it's still too small or too big.
  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} scale={3} />
      </Center>
    </group>
  );
}
// 2. The Canvas wrapper that goes into your page
export default function Hero3DScene() {
  return (
    <ErrorBoundary>
      <div style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <Canvas eventSource={document.getElementById('root')} eventPrefix="client">
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <TrackingMesh />
          </Suspense>
          <Environment preset="city" />
        </Canvas>
      </div>
    </ErrorBoundary>
  );
}