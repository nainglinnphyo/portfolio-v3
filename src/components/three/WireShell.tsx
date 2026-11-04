"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

type Props = { color: string; opacity: number };

/**
 * A pair of slow, counter-rotating wireframes behind the point cloud.
 * They give the particles a readable "inside / outside" and echo the
 * crosshair-and-line motif the rest of the site is built on.
 */
export default function WireShell({ color, opacity }: Props) {
  const inner = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    const d = Math.min(delta, 1 / 30);
    if (inner.current) {
      inner.current.rotation.y -= d * 0.08;
      inner.current.rotation.z += d * 0.03;
    }
    if (ring.current) {
      ring.current.rotation.x += d * 0.12;
      ring.current.rotation.y += d * 0.05;
    }
  });

  return (
    <group>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={opacity} />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2.6, 0, 0]}>
        <torusGeometry args={[2.05, 0.004, 3, 128]} />
        <meshBasicMaterial color={color} transparent opacity={opacity * 1.6} />
      </mesh>
    </group>
  );
}
