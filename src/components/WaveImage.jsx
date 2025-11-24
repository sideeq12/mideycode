import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const VertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FragmentShader = `
uniform float uTime;
uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  // Create a gentle wave effect
  float waveX = sin(uv.y * 10.0 + uTime) * 0.02;
  float waveY = cos(uv.x * 10.0 + uTime) * 0.02;
  
  uv.x += waveX;
  uv.y += waveY;
  
  vec4 color = texture2D(uTexture, uv);
  gl_FragColor = color;
}
`;

const WaveImage = ({ imageUrl }) => {
    const mesh = useRef();
    const texture = useTexture(imageUrl);

    // Ensure texture covers the plane properly
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uTexture: { value: texture },
        }),
        [texture]
    );

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime() * 2.5;
        }
    });

    return (
        <mesh ref={mesh}>
            {/* Plane geometry matching the aspect ratio roughly. 
          The container is 400x450 (0.88 aspect). 
          We'll scale it to fit the view. */}
            <planeGeometry args={[4, 4.5]} />
            <shaderMaterial
                vertexShader={VertexShader}
                fragmentShader={FragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default WaveImage;
