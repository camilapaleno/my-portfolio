import React from 'react';
import '../App.css';
import './HomeSections.css';
import { useState } from 'react';
import { useEffect } from 'react';
import sun from '../images/sun.png';

function ContactSection() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, []);

    return (
        <div className='home-container home-contact-container'>
            <div className='home-section home-contact-section'>
                <div className='home-text'>
                    <h2>contact</h2>
                    <p>I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.
                        I also create animations and graphics for websites and social media using Adobe Photoshop, Illustrator, and After Effects.
                    </p>
                </div>
            </div>
            <div className='sun' style={{ transform: `translateY(${offsetY * 0.015}px)` }}>
                    <img src={sun}/>
                </div>
        </div>
    )
}

export default ContactSection;