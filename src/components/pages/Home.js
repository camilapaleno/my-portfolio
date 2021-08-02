import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import PhotoSection from '../PhotoSection';
import WebSection from '../WebSection';
import ContactSection from '../ContactSection';

function Home () {
    return (
        <>
            <HeroSection />
            <WebSection />
            <PhotoSection />
            <ContactSection />
        </>
    );
}

export default Home;
