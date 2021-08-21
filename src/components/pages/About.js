import React from 'react';
import Timeline from '../Timeline';
import { Helmet } from 'react-helmet';


function About () {
    return (
        <>
            <Helmet>
                    <title>Camila Paleno | About Me</title>

                    <script src="../../animations/animation.js"></script>
                    <script src="../../animations/lottie.js"></script>
                    <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>

                    <meta property="og:image" content="../../preview.jpeg"/>
                    <meta name="description" content="Clean and modern website design and development for your business." />
                    <meta property="og:title" content="Camila Paleno - About Me"/>
                    <meta property="og:url" content="https://www.imcamila.com" />
                    <meta property="og:description" content="Clean and modern website design and development for your business." />
            </Helmet>
            <Timeline/>
        </>
    );
}

export default About;