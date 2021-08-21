import React from 'react';
import '../Pages.css';
import Lottie from 'react-lottie-player'
import logo from '../../animations/mila.json'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


function Contact () {
    return (
        <Fade>
            <div className='links__container'>
                <div className='links__text'>
                        <Lottie
                        loop={false}
                        animationData={logo}
                        play
                        />
                    <ul>
                        <li><Link to='https://www.etsy.com/shop/pcmila'>Etsy</Link></li>
                        <li><Link to='https://www.tiktok.com/@pc.mila?'>Tik Tok</Link></li>
                        <li><Link to='https://www.linkedin.com/in/camila-paleno-489386101/'>Linkedin</Link></li>
                        <li><Link to='https://github.com/camilapaleno'>Github</Link></li>
                    </ul>
                </div>

            </div>
        </Fade>
    );
}

export default Contact;