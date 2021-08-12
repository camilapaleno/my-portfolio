import React from 'react';
import '../App.css';
import './HomeSections.css';
import {Helmet} from "react-helmet";
import { useState } from 'react';
import { useEffect } from 'react';
import Lottie from 'react-lottie-player'
import computer from '../images/computer.png'
import circle from '../animations/circle.json'
import fog from '../images/cloud-5.png';

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
                    <div className='home-text'>
                        <h2>web development &amp; design</h2><br />
                        <p>I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.
                            I also create animations and graphics for websites and social media using Adobe Photoshop, Illustrator, and After Effects.
                        </p><br />
                        <h4>see my web dev projects <i class="fas fa-arrow-right"></i></h4>
                    </div>
                <div className='home-animation'>
                    <img src={computer} />
                </div>                    
            </div>                
{/*             <div className='fog bottom' style={{ transform: `translateX(${offsetY * -0.1}px)` }}>
                <img src={fog}/>
            </div> */}
        </div>
    )
}

export default WebSection;