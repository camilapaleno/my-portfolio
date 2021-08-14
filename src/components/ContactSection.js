import React from 'react';
import '../App.css';
import './HomeSections.css';
import { useState } from 'react';
import { useEffect } from 'react';
import sun from '../images/little_man.png';
import Fade from 'react-reveal/Fade';

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
        <div className='home-container contact home-contact-container'>
            <div className='home-section home-contact-section'>
                <Fade up>
                <div className='home-text'>
                    <h2>contact</h2>
                    <form>
                    <label>
                        <input className='info-field' type="text" name="name" value="Name" />
                    </label>
                    <label>
                        <input className='info-field' type="text" name="email" value="Email" />
                    </label>
                    <label>
                        <textarea value="Message" />
                    </label>
                    <input className='submit-btn' type="submit" value="Submit" />
                    </form>
                </div>
                </Fade>

            </div>
            <div className='sun'>
                    <img src={sun} alt='sun'/>
                </div>
        </div>
    )
}

export default ContactSection;