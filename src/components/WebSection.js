import React from 'react';
import '../App.css';
import './HomeSections.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Lottie from 'react-lottie-player'
import computer from '../images/computer.png'
import Fade from 'react-reveal/Fade';

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
        <div className='home-container web'>
            <div className='home-section'>
                <Fade left>
                    <div className='home-text'>
                        <h2>web development &amp; design</h2><br />
                        <p>I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.
                            I also create animations and graphics for websites and social media using Adobe Photoshop, Illustrator, and After Effects.
                        </p><br />
                        <h4>see my web dev projects <i class="fas fa-arrow-right"></i></h4>
                    </div>
                </Fade>
                <Fade>
                    <div className='home-animation'>
                        <img src={computer} />
                    </div>  
                </Fade>
                  
            </div>                
        </div>
    )
}

export default WebSection;