import React from 'react';
import '../App.css';
import './HomeSections.css';
import computer from '../images/computer.png';

function WebSection() {
    return (
        <div className='home-container'>
            <div className='home-section'>
                <div className='home-text'>
                    <h2>web development &amp; design</h2>
                    <p>I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.
                        I also create animations and graphics for websites and social media using Adobe Photoshop, Illustrator, and After Effects.
                    </p>
                </div>
                <div className='home-animation'>
                    <img src={computer}/>
                </div>
            </div>
        </div>
    )
}

export default WebSection;