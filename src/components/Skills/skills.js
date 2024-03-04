import React from 'react';
import './skills.css';
import WebDesign from '../../assets/webDesign.png';
import AppDesign from '../../assets/appDesign.png';
import MachineLearning from '../../assets/machineLearning.png';
const Skills = () => {
    return (
        <section id='skills'>
          <span className="skillTitle">What I Do?</span>
          <span className="skillDesc">I am currently pursuing B.Tech in ECE from Amrita Vishwa Vidyapeetham. Proficient in HTML, CSS, and JavaScript. I also do App Development, Machine Learning and much more..&#128515;&#129395;</span>
          <div className="skillBars">
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2 className='skillBarTextTitle'>Website Design</h2>
                    <p>I infuse web development with a distinctive and engaging flair, turning concepts into visually striking and intuitive digital journeys.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2 className='skillBarTextTitle'>App Development</h2>
                    <p>My aptitude for app development is evident in my track record of crafting inventive and user-friendly applications, seamlessly integrating cutting-edge technology with intuitive design.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={MachineLearning} alt="MachineLearning" className='skillBarImg' />
                <div className="skillBarText">
                    <h2 className='skillBarTextTitle'>Machine Learning</h2>
                    <p>I excel in machine learning by developing original algorithms and models that effectively address intricate challenges with accuracy and speed.</p>
                </div>
            </div>
          </div>
        </section>   
    );
}

export default Skills;