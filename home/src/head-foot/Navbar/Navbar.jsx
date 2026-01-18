import React from 'react'
import './Navbar.css'
import { logo } from '../../assets/assests/Assests.js'


const Navbar = () => {
  return (
    <div className='Home'>
        <div className="home-container">
            <div className="navbar">
                <div className="left-nav">
                     <img src={logo.nav_logo} alt="" />
                     <input type="search" placeholder='Search' name="search" id="search-product" />
                </div>
                <div className="right-nav">
                    <ul>
                        <li><i class="fa-brands fa-twitch"></i></li>
                        <li><i class="fa-regular fa-bell"></i></li>
                        <li><i class="fa-solid fa-gear"></i></li>
                        <li><i class="fa-solid fa-circle-user"></i></li>
                    </ul>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Navbar