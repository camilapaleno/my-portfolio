 
import './HomeSections.css';
import { useState } from 'react';
import { useEffect } from 'react';
import computer from '../images/computer.png';
import camera from '../images/camera.png';
import fog from '../images/cloud-6.png';
import fog2 from '../images/cloud-7.png'

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
{/*             <div className='fog top' style={{ transform: `translateX(${offsetY * 0.1}px)` }}>
                <img src={fog} alt='cloud'/>
            </div> */}
            <div className='home-section'>
                <div className='home-text'>
                    <h2>product &amp; portrait photography</h2><br />
                    <p>I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.
                        I also create animations and graphics for websites and social media using Adobe Photoshop, Illustrator, and After Effects.
                    </p><br />
                    <h4>see my photo projects <i class="fas fa-arrow-right"></i></h4>
                </div>
                <div className='home-animation'>
                    <img src={camera} alt='camera'/>
                </div>
            </div>
{/*             <div className='fog bottom' style={{ transform: `translateX(${offsetY * 0.2}px)` }}>
                <img src={fog2} alt='cloud'/>
            </div> */}
        </div>
    )
}

export default PhotoSection;