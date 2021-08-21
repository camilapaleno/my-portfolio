import React from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import '../../Pages.css';
import Portfolios from '../../WebPortfolios';
import Spread from '../../../images/bps_spread.png';
import Image1 from '../../../images/bps_image1.png';
import Image2 from '../../../images/bps_image2.png';
import Lottie from 'react-lottie-player';
import computer from '../../../animations/computer.json';
import hello from '../../../animations/celebration.json';
import collab from '../../../animations/collab.json';

function BPS() {
  return (
    <>
      <Helmet>
        <title>Camila Paleno | Bruin Polyglot Society Web Development</title>

        <script src="./resources/js/animation.js"></script>
        <script src="./resources/js/lottie.js"></script>

        <meta property="og:image" content="/"/>
        <meta name="description" content="Clean and modern website design and development for your business." />
        <meta property="og:title" content="Camila Paleno | Bruin Polyglot Society Web Development"/>
        <meta property="og:url" content="https://www.imcamila.com" />
        <meta property="og:description" content="Clean and modern website design and development for your business." />
      </Helmet>

      <div className='portfolio'>
        <Link className='back' to='./Web'><i class="fas fa-arrow-circle-left"></i></Link>
        <div className='portfolio__container'>
            <br /><br />
            <h1>Bruin Polyglot Society</h1><br /><br />
            <p>A website for UCLA's premier language learning organization. BPS wanted a website to appeal to UCLA students since they were just starting out. Cameron, founder of BPS, wanted something: </p><br /><br />
            <h3>"Welcoming and fun, but still professional."</h3><br />
            <div className='portfolio__description'>
                <div id="anim"><Lottie loop={false} animationData={hello} play/></div>
                <div id="txt"><p>I made these animations in Adobe Photoshop and After Effects. It was by far the most time consuming part of this project, but the team at BPS were loving the animations and kept asking for more!</p></div>
            </div>
            <div className='portfolio__description'>
                <div id="txt"><p>Cameron and the team provided me with a lot of text, so to avoid blocks of words, I made animations that were relevant to the point of the sentences to make it more visual and keep it interesting.</p></div>
                <div id="anim"><Lottie loop animationData={collab} play/></div>
            </div><br />
            <p>Here is a spread of the BPS Home page. I just used HTML, CSS, and a little Javascript since it was a pretty simple website. I used bodymovin and Lottie to export the animations as .json files. </p><br /><br /><br />
            <img className='portfolio__show' src={Spread} alt='portfolio'/>
        </div>
    </div>
    </>

  );
}

export default BPS;