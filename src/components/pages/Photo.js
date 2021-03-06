import React , { useState, useEffect } from 'react';
import '../../App.css';
import PhotoCards from '../PhotoCards';
import Loading from '../Loading';
import { Helmet } from 'react-helmet';

function Photo () {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
        {loading === false ? (
            <>
            <Helmet>
                    <title>Camila Paleno | Photography</title>

                    <script src="../../animations/animation.js"></script>
                    <script src="../../animations/lottie.js"></script>
                    <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>

                    <meta property="og:image" content="../../preview.jpeg"/>
                    <meta name="description" content="Clean and modern website design and development for your business." />
                    <meta property="og:title" content="Camila Paleno - Photography"/>
                    <meta property="og:url" content="https://www.imcamila.com" />
                    <meta property="og:description" content="Clean and modern website design and development for your business." />
            </Helmet>
                <PhotoCards />
            </>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Photo;