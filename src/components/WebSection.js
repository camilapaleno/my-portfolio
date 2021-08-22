import React from 'react';
import '../App.css';
import './HomeSections.css';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player'
import computer from '../animations/computer.json'
import Fade from 'react-reveal/Fade';

function WebSection() {

    return (
        <div className='home-container web'>
            <div className='home-section'>
                <Fade left>
                    <div className='home-text'>
                        <h2>web development &amp; design</h2><br />
                        <p>I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.
                            I also create animations and graphics for websites and social media using Adobe Photoshop, Illustrator, and After Effects.
                        </p><br />
                        <Link to='/web'><h4>see my web dev projects <i class="fas fa-arrow-right"></i></h4></Link>
                    </div>
                </Fade>
                <Fade>
                    <div className='home-animation'>
                    <Lottie
                        loop
                        animationData={computer}
                        play
   
                        />
                    </div>  
                </Fade>
                  
            </div>                
        </div>
    )
}

export default WebSection;