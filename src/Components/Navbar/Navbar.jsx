import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'   

const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="Logo" className='logo' />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">The Institute</a></li>
                <li><a href="/">Academics</a></li>
                <li><a href="/">Administration</a></li>
                <li><a href="/">Departments</a></li>
                {/* <li><a href="/">Facilities</a></li> */}
                {/* <li><a href="/">Placements</a></li> */}
                <li><a href="/">Student Zone</a></li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar