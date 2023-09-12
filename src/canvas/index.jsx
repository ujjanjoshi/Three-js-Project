import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center} from '@react-three/drei'
import { Shirt } from './Shirt'
import { Backdrop } from './Backdrop'
import { CameraRig } from './CameraRig'
export const CanvasModel = () => {
  return (
    <Canvas
    shadows
    camera={{position:[0,0,0],fov: 25}}
    gl={{preserveDrawingBuffer:true}}
    className='w-full max-w-full h-full transtion-all ease-in'
    style={{height:'100vh'}}
    >
      <ambientLight intensity={0.5}  />
      <Environment preset='city'/>

      <CameraRig>
        <Backdrop/>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}
