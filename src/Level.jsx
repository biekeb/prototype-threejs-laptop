import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import Player from "./Player.jsx";
import { Physics, RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });

function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      ></mesh>
    </group>
  );
}

function Block({ position = [0, 0, 0], scale = [4, 0.2, 4] }) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, -0.1, 0]}
        scale={scale}
        receiveShadow
      ></mesh>
    </group>
  );
}

export default function Level() {
  return (
    <Canvas
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0px",
        left: "0px",
      }}
    >
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      {/* floor */}
      <Physics debug={false}>
        <RigidBody type="fixed">
          <BlockStart />
          <BlockStart position={[0, 0, -6]} />
        </RigidBody>

        <Player />
      </Physics>
    </Canvas>
  );
}
