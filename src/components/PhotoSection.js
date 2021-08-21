 
import './HomeSections.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Lottie from 'react-lottie-player'
import camera from '../animations/camera.json'

function PhotoSection() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, []);

    return (
        <div className='home-container photo'>
            <div className='home-section'>
            <Fade left>
                <div className='home-text'>
                    <h2>product &amp; portrait photography</h2><br />
                    <p>I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.
                        I also create animations and graphics for websites and social media using Adobe Photoshop, Illustrator, and After Effects.
                    </p><br />
                    <Link to='/photo'><h4>see my photo projects <i class="fas fa-arrow-right"></i></h4></Link>
                </div>
            </Fade>
            <Fade>
                <div className='home-animation'>
                <Lottie
                        loop
                        animationData={camera}
                        play
   
                        />
                </div>
            </Fade>
            </div>
        </div>
    )
}

export default PhotoSection;