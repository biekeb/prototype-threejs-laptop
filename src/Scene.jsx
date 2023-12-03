/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: Nick Broad (https://sketchfab.com/nickbroad)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/laptop-and-mouse-c6e193ac304e477aaed7946289dbe150
Title: Laptop and mouse
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/laptop/scene-transformed.glb')
  return (
    <group scale={0.1} {...props} dispose={null}>
      <group position={[10.12, 4.69, 30.64]} rotation={[-Math.PI, -Math.PI / 9, -Math.PI / 2]} scale={[0.19, 0.04, 0.04]}>
        <mesh geometry={nodes.MouseWheel_MouseTrans_0.geometry} material={materials.MouseTrans} />
        <mesh geometry={nodes.MouseWheel_GreenEmissive_0.geometry} material={materials.GreenEmissive} />
      </group>
      <group position={[5.75, 4.22, 28.28]} rotation={[-Math.PI / 2, 0, -1.22]} scale={[4.17, 6.56, 2.19]}>
        <mesh geometry={nodes.ButtonsTop_MouseGloss_0.geometry} material={materials.MouseGloss} />
        <mesh geometry={nodes.ButtonsTop_MouseEmissiveGreen_0.geometry} material={materials.MouseEmissiveGreen} />
        <mesh geometry={nodes.ButtonsTop_GlassDark_0.geometry} material={materials.GlassDark} />
        <mesh geometry={nodes.ButtonsTop_MouseTopButton_0.geometry} material={materials.MouseTopButton} />
      </group>
      <group position={[6.9, 2.68, 30.73]} rotation={[-Math.PI / 2, 0, -1.22]} scale={100}>
        <mesh geometry={nodes.MouseBody_MouseGloss_0.geometry} material={materials.MouseGloss} />
        <mesh geometry={nodes.MouseBody_MouseSideMatte_0.geometry} material={materials.MouseSideMatte} />
        <mesh geometry={nodes.MouseBody_MouseMatte_0.geometry} material={materials.MouseMatte} />
      </group>
      <group position={[8.03, 2.58, 27.13]} rotation={[-2.96, -0.31, 1.8]} scale={0.44}>
        <mesh geometry={nodes.ButtonsGlass_MouseYellowTrans_0.geometry} material={materials.MouseYellowTrans} />
        <mesh geometry={nodes.ButtonsGlass_MouseGreenTrans_0.geometry} material={materials.MouseGreenTrans} />
        <mesh geometry={nodes.ButtonsGlass_MouseBlueTrans_0.geometry} material={materials.MouseBlueTrans} />
        <mesh geometry={nodes.ButtonsGlass_MouseRedTrans_0.geometry} material={materials.MouseRedTrans} />
        <mesh geometry={nodes.ButtonsGlass_MouseGreenBack_0.geometry} material={materials.MouseGreenBack} />
        <mesh geometry={nodes.ButtonsGlass_MouseRed_0.geometry} material={materials.MouseRed} />
        <mesh geometry={nodes.ButtonsGlass_MouseYellow_0.geometry} material={materials.MouseYellow} />
        <mesh geometry={nodes.ButtonsGlass_MouseBlue_0.geometry} material={materials.MouseBlue} />
      </group>
      <group position={[10.37, 2.04, 32.8]} rotation={[-0.12, 0.59, -1.34]} scale={0.56}>
        <mesh geometry={nodes.ButtonsSide_ButtonE_0.geometry} material={materials.ButtonE} />
        <mesh geometry={nodes.ButtonsSide_ButtonA_0.geometry} material={materials.ButtonE} />
        <mesh geometry={nodes.ButtonsSide_ButtonC001_0.geometry} material={materials.ButtonE} />
        <mesh geometry={nodes.ButtonsSide_ButtonD_0.geometry} material={materials.ButtonE} />
        <mesh geometry={nodes.ButtonsSide_ButtonB_0.geometry} material={materials.ButtonE} />
      </group>
      <group position={[11.9, 2.13, 28.92]} rotation={[Math.PI, 1.22, 0]} scale={[-0.38, 0.38, 0.38]}>
        <mesh geometry={nodes.CableHolder_MouseMatte_0.geometry} material={materials.MouseMatte} />
        <mesh geometry={nodes.CableHolder_MouseCable_0.geometry} material={materials.MouseCable} />
      </group>
      <group position={[-3.05, 5.02, -0.56]} rotation={[-1.54, -0.08, 1.92]} scale={100}>
        <mesh geometry={nodes.USBslots_Material_0.geometry} material={materials.Material} />
        <mesh geometry={nodes.USBslots_LaptopRed_0.geometry} material={materials.LaptopRed} />
      </group>
      <group position={[-3.05, 5.02, -0.56]} rotation={[-1.54, -0.08, 1.92]} scale={100}>
        <mesh geometry={nodes.LaptopKeyboard_LaptopKeys_0.geometry} material={materials.LaptopKeys} />
        <mesh geometry={nodes.LaptopKeyboard_LaptopHoles_0.geometry} material={materials.MouseSideMatte} />
        <mesh geometry={nodes.LaptopKeyboard_BronzeLaptop_0.geometry} material={materials.BronzeLaptop} />
        <mesh geometry={nodes.LaptopKeyboard_MetalLaptop_0.geometry} material={materials.MetalLaptop} />
        <mesh geometry={nodes.LaptopKeyboard_LaptopRedEmissive_0.geometry} material={materials.LaptopRedEmissive} />
        <mesh geometry={nodes.LaptopKeyboard_LaptopRed_0.geometry} material={materials.LaptopRed} />
      </group>
      <group position={[9.8, 7.01, -5.24]} rotation={[2.89, 1.21, -2.91]} scale={100}>
        <mesh geometry={nodes.LaptopLid_LaptopLid_0.geometry} material={materials.LaptopLid} />
        <mesh geometry={nodes.LaptopLid_LaptopScreen_0.geometry} material={materials.MouseGloss} />
      </group>
      <group position={[-2.98, 5.02, -0.35]} rotation={[-1.54, -0.08, 1.92]} scale={100}>
        <mesh geometry={nodes.MouseUSB_MetalLaptop_0.geometry} material={materials.MetalLaptop} />
        <mesh geometry={nodes.MouseUSB_MouseUSB_0.geometry} material={materials.MouseUSB} />
        <mesh geometry={nodes.MouseUSB_MouseRed_0.geometry} material={materials.MouseRed} />
        <mesh geometry={nodes.MouseUSB_MouseCable_0.geometry} material={materials.MouseCable} />
        <mesh geometry={nodes.MouseUSB_MouseMatte_0.geometry} material={materials.MouseMatte} />
      </group>
      <group position={[-2.86, 2.64, -0.63]} rotation={[-1.54, -0.08, 1.92]} scale={[20.4, 14.35, 1.45]}>
        <mesh geometry={nodes.LaptopStand_LaptopStand_0.geometry} material={materials.LaptopStand} />
        <mesh geometry={nodes.LaptopStand_LaptopRed_0.geometry} material={materials.LaptopRed} />
      </group>
      <mesh geometry={nodes.Cable002_MouseCable_0.geometry} material={materials.MouseCable} position={[12.96, 2.11, 28.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube_MatTrans_0.geometry} material={materials.MatTrans} position={[5.95, 0.22, 31.08]} rotation={[-Math.PI / 2, 0, -1.22]} scale={[10.95, 14.21, 0.23]} />
      <mesh geometry={nodes.Cube002_MatTransRed_0.geometry} material={materials.MatTransRed} position={[-4.21, 0.4, 34.78]} rotation={[-Math.PI / 2, 0, -1.22]} scale={[10.95, 14.21, 0.23]} />
      <mesh geometry={nodes.Cube003_MouseMatte_0.geometry} material={materials.MouseMatte} position={[6.24, 0.24, 30.98]} rotation={[-Math.PI / 2, 0, -1.22]} scale={[10.53, 13.67, 0.22]} />
      <mesh geometry={nodes.Cube004_MatTransBlack_0.geometry} material={materials.MatTransBlack} position={[-4.21, 0.4, 34.78]} rotation={[-Math.PI / 2, 0, 1.92]} scale={[10.95, 14.21, 0.23]} />
      <mesh geometry={nodes.Buttons_LaptopKeys_0.geometry} material={materials.LaptopKeys} position={[12.41, 6.66, 13.9]} rotation={[-1.54, -0.08, 1.97]} scale={100} />
      <mesh geometry={nodes.LaptopStandFeet_LaptopStand_0.geometry} material={materials.LaptopStand} position={[3.25, 0.11, -18.72]} rotation={[-1.38, -0.49, 1.97]} scale={[1.62, 0.42, 2.3]} />
    </group>
  )
}

useGLTF.preload('/models/laptop/scene-transformed.glb')
