import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
const Intro = () => {
    return (
        <section id="intro">
            <div classname="introContent">
                   <span className="hello">Hello,</span> <br />
                   <span className="introText">I'm <span class="introName">Tejasvin</span> <br />Website Developer</span>
                   <p className='introPara'>I'm a skilled web designer with experience in creating <br />visually appealing user friendly website </p>
                   <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;