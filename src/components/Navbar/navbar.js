import React from 'react';
import './navbar.css';
import logo from '../../assets/logo2.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const size = {
        height: 115,
        width: 150
    }
    
    return (
        <nav className="navbar">
            <img style={size} src={logo} alt="Logo" className='logo'/>  
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-130} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-135} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to='langs' spy={true} smooth={true} offset={-150} duration={500} className="desktopMenuListItem">Expertise</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                  document.getElementById('contact').scrollIntoView({behavior: 'smooth'});  
                  }}>
                <img src={contactImg} alt="" className='desktopMenuImg' /> Contact Me </button>
            
        </nav>
        
    )
}

export default Navbar