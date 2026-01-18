import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './head-foot/Navbar/Navbar.jsx'
import Slider from './head-foot/Slider/Slider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="dashboard">
     <Navbar/>
     <Slider/>
   </div>
    
      
    </>
  )
}

export default App
