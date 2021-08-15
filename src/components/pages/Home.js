import React , { useState, useEffect } from 'react';
import '../../App.css';
import {Helmet} from "react-helmet";
import HeroSection from '../HeroSection';
import PhotoSection from '../PhotoSection';
import WebSection from '../WebSection';
import ContactSection from '../ContactSection';
import Loading from '../Loading';

function Home () {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
        {loading === false ? (
            <div>
                <Helmet>
                    <title>Camila Paleno | Web Development</title>

                    <script src="../../animations/animation.js"></script>
                    <script src="../../animations/lottie.js"></script>
                    <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>

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
            </div>
            ) : (
            <Loading />
        )}
        </>
    );
}

export default Home;
