import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

const FloatingOrb = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh ref={meshRef} position={position} scale={0.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#8B5CF6"
        transparent
        opacity={0.6}
        emissive="#8B5CF6"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 -z-20">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3B82F6" />
        
        <FloatingOrb position={[-2, 1, 0]} />
        <FloatingOrb position={[2, -1, -1]} />
        <FloatingOrb position={[0, 2, -2]} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;