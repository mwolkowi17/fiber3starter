import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useRef } from 'react';
import * as THREE from 'three'


export function Scene(props) {
  const gltf = useLoader(GLTFLoader, '/kruszarka_szczekowa1_wer15_scena3.gltf')
  const mixer = useRef();

  useEffect(() => {
    if (gltf) {
      mixer.current = new THREE.AnimationMixer(gltf)
      const action = mixer.current.clipAction(gltf.animations[0])
      console.log(gltf.animations)
      if (props.ifPlay) {
        action.play()
      }


    }
  }, [gltf, props.ifPlay])

  return (
    <>
      <primitive object={gltf.scene} scale={[0.8,0.8,0.8]} position={[0,0,0]}  />
    </>
  )
}