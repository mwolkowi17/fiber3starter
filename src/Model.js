import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function Scene() {
  const gltf = useLoader(GLTFLoader, '/kruszarka_szczekowa1_wer15_scena3.gltf')
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  )
}