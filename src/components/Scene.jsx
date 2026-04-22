import React, { Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Text, Float, Stars, Image, Scroll } from '@react-three/drei';

function MovingCamera() {
  const scroll = useScroll();
  useFrame((state) => {
    // Camera travels from Z=15 to Z=-60
    state.camera.position.z = 15 - scroll.offset * 75;
  });
  return null;
}

const Node = ({ position, title, subtitle, imagePath, left = true }) => {
  return (
    <Float floatIntensity={2} speed={2} rotationIntensity={0.2}>
      <group position={position}>
        <Text
          fontSize={1.5}
          maxWidth={12}
          lineHeight={1}
          textAlign={left ? "left" : "right"}
          position={[left ? 0 : -8, 0, 0]}
          color="#ffffff"
          anchorX="left"
          anchorY="middle"
        >
          {title}
        </Text>
        <Text
          fontSize={0.4}
          position={[left ? 0 : -8, -1.8, 0]}
          color="#60efff"
          anchorX="left"
          anchorY="middle"
          maxWidth={8}
          textAlign={left ? "left" : "right"}
        >
          {subtitle}
        </Text>
        <Suspense fallback={null}>
          {imagePath && (
            <Image
              url={imagePath}
              transparent
              opacity={0.6}
              scale={[10, 6]}
              position={[left ? 6 : -6, -1, -5]}
            />
          )}
        </Suspense>
      </group>
    </Float>
  );
}

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#bb86fc" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#45f3ff" />

      {/* Hyper-realistic deep space particle field */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <MovingCamera />

      {/* Sequence of 3D floating monoliths through the Z space */}

      {/* Z = 5 (Hero) */}
      <Node
        position={[-6, 1, 5]}
        title="VAMSIKRISHNA\nCHINNAM"
        subtitle="CREATIVE SOFTWARE ENGINEER & CLOUD ARCHITECT"
        imagePath={`${import.meta.env.BASE_URL}images/bg_home.png`}
        left={true}
      />

      {/* Z = -10 */}
      <Node
        position={[2, -2, -10]}
        title="EXPERIENCE: ISRO"
        subtitle="Vision Transformers (ViT) on Satellite Imagery, achieving high-accuracy trajectory analysis from raw CV pipelines."
        imagePath={`${import.meta.env.BASE_URL}images/bg_space.png`}
        left={false}
      />

      {/* Z = -25 */}
      <Node
        position={[-8, 3, -25]}
        title="EXPERIENCE: BREATHEIT"
        subtitle="Scalable GCP Microservices, REST APIs, scaling cloud platforms for production deployments."
        imagePath={`${import.meta.env.BASE_URL}images/bg_cloud.png`}
        left={true}
      />

      {/* Z = -40 */}
      <Node
        position={[2, 0, -40]}
        title="PROJECT: AI COACH"
        subtitle="LLaMA & Gemini multi-modal inference architecture. Orchestrating LLM safeguards and real-time inference."
        imagePath={`${import.meta.env.BASE_URL}images/bg_ai.png`}
        left={false}
      />

      {/* Z = -55 */}
      <Node
        position={[-6, -1, -55]}
        title="PROJECT: STORAGE"
        subtitle="High-Octane MongoDB & AWS S3 Object distribution backend with robust RBAC."
        imagePath={`${import.meta.env.BASE_URL}images/bg_business.png`}
        left={true}
      />

      {/* DOM Overlay attached to scroll */}
      <Scroll html style={{ width: '100%', height: '100%', pointerEvents: 'none' }}>
        <div style={{ position: 'fixed', bottom: '2rem', width: '100vw', textAlign: 'center' }}>
          <h1 style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Outfit', letterSpacing: '8px', fontSize: '1rem', textTransform: 'uppercase' }}>
            Scroll to Navigate Space
          </h1>
        </div>
      </Scroll>
    </>
  );
};

export default Scene;
