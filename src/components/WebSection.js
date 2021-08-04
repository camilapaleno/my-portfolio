import React from 'react';
import '../App.css';
import './HomeSections.css';
import { useState } from 'react';
import { useEffect } from 'react';
import computer from '../images/computer.png';
import fog from '../images/cloud-5.png';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

function WebSection() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, []);

    return (
        <div className='home-container'>
            <div className='home-section'>
                        <div className='home-text'>
                            <h2>web development &amp; design</h2><br />
                            <p>I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.
                                I also create animations and graphics for websites and social media using Adobe Photoshop, Illustrator, and After Effects.
                            </p>
                        </div>

                <div className='home-animation'>
                    <img src={computer}/>
                </div>                    
            </div>                
            <div className='fog bottom' style={{ transform: `translateX(${offsetY * -0.1}px)` }}>
                <img src={fog}/>
            </div>
        </div>
    )
}

export default WebSection;