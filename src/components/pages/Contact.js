import React from 'react';
import '../Pages.css';
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet';

function Contact () {
    return (
        <Fade>
            <Helmet>
                    <title>Camila Paleno | Contact Me</title>

                    <script src="../../animations/animation.js"></script>
                    <script src="../../animations/lottie.js"></script>
                    <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>

                    <meta property="og:image" content="../../preview.jpeg"/>
                    <meta name="description" content="Clean and modern website design and development for your business." />
                    <meta property="og:title" content="Camila Paleno - Contact Me"/>
                    <meta property="og:url" content="https://www.imcamila.com" />
                    <meta property="og:description" content="Clean and modern website design and development for your business." />
            </Helmet>
            <div className='contact__container'>
                <div className='contact__text'>
                    <h1>let's work together!</h1>
                    <p>send me an email at hi@imcamila.com</p>
                </div>
            </div>
        </Fade>
    );
}

export default Contact;