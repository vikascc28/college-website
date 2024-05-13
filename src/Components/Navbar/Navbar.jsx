import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setSticky(true);
            }
            else {
                setSticky(false);
            }
        }
        )
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className='logo' />
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}></Link>Home</li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}></Link>Program</li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}></Link>About</li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}></Link>Campus</li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}></Link>Testimonials</li>
                <li><Link to='contact' smooth={true} offset={-160} duration={500}></Link><button className='btn'>Contact Us</button></li>
            </ul>
            <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar