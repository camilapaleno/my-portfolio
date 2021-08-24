import React from 'react';
import '../App.css';
import './HomeSections.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Lottie from 'react-lottie-player'
import blub from '../animations/blub.json'
import blubo from '../animations/blubo.json'
import Fade from 'react-reveal/Fade';

function HeroSection() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, []);

    return (
        <Fade>
            <div className='hero-container'>
                <Fade right><div className='info'>
                    <p>camila paleno</p>
                    <p>front end web developer, photographer</p>
                    <p>hi@imcamila.com</p>
                </div></Fade>
                <div className='blub'><Lottie loop animationData={blub} play style={{ transform: `translateY(${offsetY * -0.3}px)` }}></Lottie></div>
                <div className='blub'><Lottie loop animationData={blubo} play style={{ transform: `translateY(${offsetY * -0.5}px)` }}></Lottie></div>
                <div className='hero-text'>
                    <div id='normal'><Fade up cascade ><h1>hi! I'm Camila.</h1></Fade> </div>
                    <div id='breaker'><h1>hi! I'm Camila.</h1></div>
                </div>    
                <Fade up><div className='scroll'>
                    <p>scroll down to learn about what i do.</p>
                </div></Fade>
            </div>
        </Fade>
           

        
    )
}

export default HeroSection;