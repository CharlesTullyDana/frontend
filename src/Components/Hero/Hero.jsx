import React from 'react'
import './Hero.css'
import Popular from '../Assets/Popular.jpg';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import Blueguitar from '../Assets/Blueguitar.png'; 
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
               
            </div>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={Blueguitar} alt="" />
            </div>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
          
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default Hero
