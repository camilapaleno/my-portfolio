import React from 'react';
import '../Pages.css';
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet';
import littleman from '../../images/little_man.png';

function Curse () {
    return (
        <Fade>
            <Helmet>
                    <title>you havefound   him</title>

                    <script src="../../animations/animation.js"></script>
                    <script src="../../animations/lottie.js"></script>
                    <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>

                    <meta property="og:image" content="../../preview.jpeg"/>
                    <meta name="description" content="you have found him" />
                    <meta property="og:title" content="you have found him"/>
                    <meta property="og:url" content="https://www.imcamila.com" />
                    <meta property="og:description" content="you have found him." />
            </Helmet>
            <div className='contact__container'>
                <div className='curse'>
                    <img src={littleman} alt=' '/>
                </div>
            </div>
        </Fade>
    );
}

export default Curse;