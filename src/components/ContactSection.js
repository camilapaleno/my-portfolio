import React from 'react';
import '../App.css';
import './HomeSections.css';
import { useState } from 'react';
import { useEffect } from 'react';
import sun from '../images/sun.png';

function ContactSection() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const obj = document.querySelector('.sun');
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, []);

    function inViewport(element) {
        const obj = element.getBoundingClientRect();
        return (
            obj.top >= 0 &&
            obj.left >= 0 &&
            obj.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            obj.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    return (
        <div className='home-container home-contact-container'>
            <div className='home-section home-contact-section'>
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
            </div>
            <div className='sun'>
                    <img src={sun}/>
                </div>
        </div>
    )
}

export default ContactSection;