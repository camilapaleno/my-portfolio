import React from 'react';
import '../../App.css';
import {Helmet} from "react-helmet";
import HeroSection from '../HeroSection';
import PhotoSection from '../PhotoSection';
import WebSection from '../WebSection';
import ContactSection from '../ContactSection';

function Home () {
    return (
        <>
            <Helmet>
                <title>Camila Paleno | Web Development</title>

                <script src="../../animations/animation.js"></script>
                <script src="../../animations/lottie.js"></script>

                <meta property="og:image" content="/"/>
                <meta name="description" content="Clean and modern website design and development for your business." />
                <meta property="og:title" content="Web Design and Development"/>
                <meta property="og:url" content="https://www.imcamila.com" />
                <meta property="og:description" content="Clean and modern website design and development for your business." />
            </Helmet>

            <HeroSection />
            <WebSection />
            <PhotoSection />
            <ContactSection />
        </>
    );
}

export default Home;
