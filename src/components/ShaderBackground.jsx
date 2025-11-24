import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Color, Vector2 } from 'three';

const FragmentShader = `
uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;
uniform vec2 uMouse;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  // Create a wave pattern
  float wave = sin(uv.x * 10.0 + uTime) * 0.1 + sin(uv.y * 12.0 + uTime * 0.8) * 0.1;
  
  // Mix colors based on UV and wave
  vec3 color = mix(uColorStart, uColorEnd, uv.y + wave);
  
  // Add highlight near mouse
  float dist = distance(uv, uMouse);
  float highlight = 1.0 - smoothstep(0.0, 0.3, dist);
  color += vec3(0.2, 0.2, 0.5) * highlight;
  
  gl_FragColor = vec4(color, 1.0);
}
`;

const VertexShader = `
varying vec2 vUv;
uniform float uTime;
uniform vec2 uMouse;

void main() {
  vUv = uv;
  vec3 pos = position;
  
  // Gentle background movement
  pos.z += sin(pos.x * 4.0 + uTime) * 0.2;
  pos.y += cos(pos.y * 4.0 + uTime) * 0.2;
  
  // Mouse interaction: Displace vertices near the mouse
  // Map uMouse (0..1) to world space roughly for this plane size (20x20)
  // UV (0..1) corresponds to the mesh surface
  
  float dist = distance(vUv, uMouse);
  float influence = 1.0 - smoothstep(0.0, 0.4, dist);
  
  // Lift the mesh near the mouse
  pos.z += influence * 2.0;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const WaveMesh = () => {
    const mesh = useRef();
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColorStart: { value: new Color('#0a0a0a') },
            uColorEnd: { value: new Color('#1e1b4b') },
            uMouse: { value: new Vector2(0.5, 0.5) },
        }),
        []
    );

    useFrame((state) => {
        const { clock, pointer } = state;
        mesh.current.material.uniforms.uTime.value = clock.getElapsedTime() * 0.5;

        // Smoothly interpolate mouse position
        // pointer is -1 to 1, map to 0 to 1 for UVs
        const targetX = (pointer.x + 1) * 0.5;
        const targetY = (pointer.y + 1) * 0.5;

        mesh.current.material.uniforms.uMouse.value.lerp(
            new Vector2(targetX, targetY),
            0.1
        );
    });

    return (
        <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[20, 20, 128, 128]} />
            <shaderMaterial
                vertexShader={VertexShader}
                fragmentShader={FragmentShader}
                uniforms={uniforms}
                wireframe={true}
                transparent={true}
                opacity={0.15}
            />
        </mesh>
    );
};

const ShaderBackground = () => {
    return (
        <div className="absolute inset-0 -z-20 w-full h-full opacity-60">
            <Canvas camera={{ position: [0, 5, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <WaveMesh />
            </Canvas>
        </div>
    );
};

export default ShaderBackground;
