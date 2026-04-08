import { Grid } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
function App() {

  return (
    <>
    <Canvas>
      <Grid infiniteGrid fadeDistance={50} fadeStrength={3} />
    </Canvas>
    </>
  )
}

export default App
