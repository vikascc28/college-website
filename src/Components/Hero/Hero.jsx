import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text"></div>
            <h1>WELCOME TO OUR INSTITUTE</h1>
            <p>Learn from the best</p>
            <div className="btn">Explore More <img src={dark_arrow} alt=""></img></div>
        </div>
    )
}

export default Hero