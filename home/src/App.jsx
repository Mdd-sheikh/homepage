import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './head-foot/Navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="dashboard">
     <Navbar/>
   </div>
    
      
    </>
  )
}

export default App
