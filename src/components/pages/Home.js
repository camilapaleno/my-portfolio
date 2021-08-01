import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import PhotoSection from '../PhotoSection';
import WebSection from '../WebSection';
import AboutSection from '../AboutSection';
import ContactSection from '../ContactSection';
import { ParallaxProvider } from 'react-scroll-parallax';

function Home () {
    return (
        <ParallaxProvider>
            <HeroSection />
            <WebSection />
            <PhotoSection />
            <AboutSection />
            <ContactSection />
        </ParallaxProvider>
    );
}

export default Home;
