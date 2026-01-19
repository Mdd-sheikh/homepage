import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './head-foot/Navbar/Navbar.jsx'
import Slider from './head-foot/Slider/Slider.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Product from './pages/products/Product.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="dashboard">
        <Navbar />
        <Slider />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<Product/>}/>
        </Routes>

      </div>


    </>
  )
}

export default App
