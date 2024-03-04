import React from 'react';
import './contact.css';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import Java from '../../assets/java.png';
import Cpp from '../../assets/cpp.png';
import Python from '../../assets/python.png';
import Flutter from '../../assets/flutter.png';
import Tensorflow from '../../assets/tensorflow.png';
import YoutubeIcon from '../../assets/youtube.png'; 
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';

const Contact = () => {
    return (
        <section id='contactPage'>
           <div id="langs">
              <h1 className="contactPageTitle">Languages Known:</h1>
              <p className="langDesc">Here are some the languages I've used&#128315;</p>
              <div className='langImgs'>
                <img src={Html} alt="Html" className="langImg" />
                <img src={Css} alt="Css" className="langImg" />
                <img src={Javascript} alt="Javascript" className="langImg" />
                <img src={react} alt="React" className="langImg" />
                <img src={Cpp} alt="Cpp" className="langImg" />
                <img src={Java} alt="Java" className="langImg" />
                <img src={Python} alt="Python" className="langImg" />
                <img src={Flutter} alt="Flutter" className="langImg" />
                <img src={Tensorflow} alt="Tensorflow" className="langImg" />                
              </div>
           </div>
           <div id='contact'>
               <h1 className='contactPageTitle'>Contact Me> </h1>
               <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
               <form className='contactForm'>
                 <input type="text" className="name" placeholder="Your Name" />
                 <input type="email" className="email" placeholder='Your Email' />
                 <textarea className='msg' name='message' rows='5'placeholder='Your Message'></textarea>
                 <button type='submit' value='Send' className='submitBtn'>Submit</button>
                 <div className='links'>
                    <img src={FacebookIcon} alt="FacebookIcon" className='link' />
                    <img src={TwitterIcon} alt="TwitterIcon" className='link' />
                    <img src={YoutubeIcon} alt="YoutubeIcon" className='link' />
                    <img src={InstagramIcon} alt="InstagramIcon" className='link' />
                 </div>
               </form>
           </div>
        </section>
    )
}

export default Contact

