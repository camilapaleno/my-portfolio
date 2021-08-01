import React from 'react';
import '../App.css';
import './HeroSection.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import cloud2 from '../images/cloud-2.png';

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
           <div className='hero-container'>
                <div className='hero-text'>
                    <h1>welcome!</h1>
                    <h1>my name is camila.</h1> 
                </div>
                <div className="cloud-1" style={{ transform: `translateY(${offsetY * -0.8}px)` }}></div>
                <div className="cloud-2" style={{ transform: `translateY(${offsetY * -0.6}px)` }}></div>
                <div className="cloud-3" style={{ transform: `translateY(${offsetY * -0.4}px)` }}></div>
                <div className="cloud-4" style={{ transform: `translateY(${offsetY * -0.2}px)` }}></div>
            </div> 

        
    )
}

export default HeroSection;