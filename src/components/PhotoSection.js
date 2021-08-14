 
import './HomeSections.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import camera from '../images/camera.png';

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
                    <h4>see my photo projects <i class="fas fa-arrow-right"></i></h4>
                </div>
            </Fade>
            <Fade>
                <div className='home-animation'>
                    <img src={camera} alt='camera'/>
                </div>
            </Fade>
            </div>
        </div>
    )
}

export default PhotoSection;