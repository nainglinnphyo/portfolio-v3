"use client";

import { useFrame } from "@react-three/fiber";

/** Pointer parallax applied to the camera, not the mesh, so the whole scene has depth. */
export default function CameraRig({ strength = 0.32 }: { strength?: number }) {
  useFrame((state, delta) => {
    const d = Math.min(delta, 1 / 30);
    const t = 1 - Math.pow(0.0025, d);
    state.camera.position.x += (state.pointer.x * strength - state.camera.position.x) * t;
    state.camera.position.y += (state.pointer.y * strength * 0.7 - state.camera.position.y) * t;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}
