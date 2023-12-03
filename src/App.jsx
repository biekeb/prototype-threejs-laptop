import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

function App() {
  return (
    <Canvas
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0px",
        left: "0px",
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
