import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
     <h1>now im starting to development</h1>
     <p>today im gonna to do something</p>
     <span>Today day 5 learning github as a student</span>
      
    </>
  )
}

export default App
