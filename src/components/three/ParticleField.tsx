"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, type MutableRefObject } from "react";
import * as THREE from "three";
import { particleFragmentShader, particleVertexShader } from "./shaders";

type Props = {
  count: number;
  colorA: string;
  colorB: string;
  opacity: number;
  size: number;
  /** Additive reads beautifully on near-black and washes out on white. */
  additive: boolean;
  /** 0..1 hero scroll progress, written outside React so no re-render per frame. */
  scrollRef: MutableRefObject<number>;
};

/** Fibonacci sphere — even coverage with no polar clumping. */
function buildSphere(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const randoms = new Float32Array(count);
  const golden = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const ring = Math.sqrt(Math.max(1 - y * y, 0));
    const theta = golden * i;

    // Jitter the radius a little so the shell has thickness.
    const r = radius * (0.9 + Math.random() * 0.16);

    positions[i * 3] = Math.cos(theta) * ring * r;
    positions[i * 3 + 1] = y * r;
    positions[i * 3 + 2] = Math.sin(theta) * ring * r;

    scales[i] = 0.45 + Math.random() * 1.3;
    randoms[i] = Math.random();
  }

  return { positions, scales, randoms };
}

export default function ParticleField({
  count,
  colorA,
  colorB,
  opacity,
  size,
  additive,
  scrollRef,
}: Props) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, scales, randoms } = useMemo(() => buildSphere(count, 1.55), [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: size },
      uPixelRatio: { value: 1 },
      uAmplitude: { value: 0 },
      uScroll: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uPointerStrength: { value: 0 },
      uColorA: { value: new THREE.Color(colorA) },
      uColorB: { value: new THREE.Color(colorB) },
      uOpacity: { value: 0 },
    }),
    // Colours and sizes are animated below, not re-created, so the buffers survive a theme flip.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // Scratch colours so we never allocate inside the frame loop.
  const targetA = useMemo(() => new THREE.Color(colorA), [colorA]);
  const targetB = useMemo(() => new THREE.Color(colorB), [colorB]);
  const pointerTarget = useMemo(() => new THREE.Vector2(0, 0), []);

  useFrame((state, delta) => {
    const u = uniforms;
    const clamped = Math.min(delta, 1 / 30);
    const t = 1 - Math.pow(0.0015, clamped); // frame-rate independent lerp

    u.uTime.value += clamped;
    u.uPixelRatio.value = state.gl.getPixelRatio();
    u.uSize.value = size;

    // Ease everything in on mount instead of popping.
    u.uOpacity.value += (opacity - u.uOpacity.value) * t;
    u.uAmplitude.value += (1 - u.uAmplitude.value) * t;
    u.uPointerStrength.value += (0.26 - u.uPointerStrength.value) * t;

    u.uScroll.value += (scrollRef.current - u.uScroll.value) * t;

    u.uColorA.value.lerp(targetA, t);
    u.uColorB.value.lerp(targetB, t);

    pointerTarget.set(state.pointer.x, state.pointer.y);
    u.uPointer.value.lerp(pointerTarget, 1 - Math.pow(0.02, clamped));

    if (pointsRef.current) {
      pointsRef.current.rotation.y += clamped * 0.055;
      pointsRef.current.rotation.x = Math.sin(u.uTime.value * 0.12) * 0.12;
    }
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aRandom" args={[randoms, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={particleVertexShader}
        fragmentShader={particleFragmentShader}
        transparent
        depthWrite={false}
        blending={additive ? THREE.AdditiveBlending : THREE.NormalBlending}
      />
    </points>
  );
}
