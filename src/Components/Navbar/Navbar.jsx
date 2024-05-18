 import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/pics/logo.png';

import cart_icon from '../Assets/pics/shopping-cart.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    return (
        <div className='navbar' >
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>PHLYPPED</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("jewelry")}}>Jewelry{menu==="jewelry"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("guitars")}}>Guitars{menu==="guitars"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("equiptment")}}>Equiptment{menu==="equiptment"?<hr/>:<></>}</li>
                
             </ul>
             <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
              </div>


        </div>
    )
}

export default Navbar 