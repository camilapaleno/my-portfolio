import React from 'react';
import '../App.css';
import './HomeSections.css';
import { Link } from 'react-router-dom';
import sun from '../images/little_man.png';
import bub from '../images/bub.png';
import Fade from 'react-reveal/Fade';

function ContactSection() {

    return (
        <div className='home-container contact home-contact-container'>
            <div className='home-section home-contact-section'>
                <div className='bub'><img src={bub} alt=' '/></div>
                <Fade up>
                <div className='home-text'>
                    <div className='contact__container'>
                        <div className='contact__text'>
                            <p>let's work together!</p>
                            <p>send me an email at hi@imcamila.com</p>
                        </div>
                    </div>
{/*                 <h2>contact</h2>    <form>
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
                    </form> */}
                </div>
                </Fade>

            </div>
            <div className='sun'>
                    <Link to='/curse'><img src={sun} alt='sun'/></Link>
            </div>
        </div>
    )
}

export default ContactSection;