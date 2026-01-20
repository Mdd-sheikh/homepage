import React from 'react'
import './Slider.css'
import { NavLink } from 'react-router-dom'

const Slider = () => {
  return (
    <div className='slider'>
        <div className="slider-container">
           <div className="upper-slider">
             <ul>
               <li><NavLink to="/home"><i class="fa-solid fa-house"></i><span>Home</span></NavLink> </li>
                <li><NavLink to='/product'><i class="fa-solid fa-gift"></i><span>Product</span></NavLink></li>
                <li><NavLink to='/category'><i class="fa-brands fa-stack-overflow"></i><span>Category</span></NavLink></li>
                <li><NavLink to='/store'><i class="fa-solid fa-book"></i><span>Stores</span></NavLink></li>
                <li><NavLink to='/finance'><i class="fa-solid fa-dollar-sign"></i><span>Finances</span></NavLink></li>
                <li><i class="fa-solid fa-gear"></i><span>Setting</span></li>
            </ul>
           </div>
           <div className="lower-slider">
            <ul>
                <li><i class="fa-solid fa-plus"></i><span>Add Product</span></li>
                <li><i class="fa-solid fa-arrow-up-from-bracket"></i><span>Log out</span></li>
            </ul>
           </div>
        </div>
    </div>
  )
}

export default Slider