import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import RandomColorSelection from './components/random-color-selection/RandomColorSelection';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <RandomColorSelection/>
    </>
  )
}

export default App
