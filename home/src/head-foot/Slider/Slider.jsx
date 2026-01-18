import React from 'react'
import './Slider.css'

const Slider = () => {
  return (
    <div className='slider'>
        <div className="slider-container">
           <div className="upper-slider">
             <ul>
                <li><i class="fa-solid fa-house"></i>Home</li>
                <li><i class="fa-solid fa-gift"></i>Product</li>
                <li><i class="fa-brands fa-stack-overflow"></i>Category</li>
                <li><i class="fa-solid fa-book"></i>Stores</li>
                <li><i class="fa-solid fa-dollar-sign"></i>Finances</li>
                <li><i class="fa-solid fa-gear"></i>Setting</li>
            </ul>
           </div>
           <div className="lower-slider">
            <ul>
                <li><i class="fa-solid fa-plus"></i>Add Product</li>
                <li><i class="fa-solid fa-arrow-up-from-bracket"></i>Log out</li>
            </ul>
           </div>
        </div>
    </div>
  )
}

export default Slider