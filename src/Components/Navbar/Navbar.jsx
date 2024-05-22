 import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/pics/logo.png';
import { Link }from 'react-router-dom';


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
                <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("jewelry")}}><Link style={{ textDecoration: 'none' }} to='/jewelry'>Jewelry</Link>{menu==="jewelry"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("guitars")}}><Link style={{ textDecoration: 'none' }} to='/guitars'>Guitars</Link>{menu==="guitars"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("equiptment")}}><Link style={{ textDecoration: 'none' }} to='/equiptment'>Equiptment</Link>{menu==="equiptment"?<hr/>:<></>}</li>
                
             </ul>
             <div className='nav-login-cart'>
               <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
              </div>


        </div>
    )
}

export default Navbar 