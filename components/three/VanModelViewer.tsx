"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";

function VanModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      <primitive object={scene} scale={1.15} rotation={[0, -0.4, 0]} />
    </Center>
  );
}

interface VanModelViewerProps {
  url: string;
  className?: string;
}

export default function VanModelViewer({ url, className }: VanModelViewerProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [3.5, 1.8, 4.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[6, 8, 4]} intensity={1.4} />
        <directionalLight position={[-4, 2, -3]} intensity={0.35} />
        <Suspense fallback={null}>
          <VanModel url={url} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 2.1}
          rotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}
