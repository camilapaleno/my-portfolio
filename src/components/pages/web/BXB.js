import React from 'react';
import '../../Pages.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Spread from '../../../images/bxb_spread.png';
import Image1 from '../../../images/bxb_image1.jpg';

function BXB() {
  return (
    <>
      <Helmet>
        <title>Camila Paleno | Beanie Ball Web Development</title>

        <script src="./resources/js/animation.js"></script>
        <script src="./resources/js/lottie.js"></script>

        <meta property="og:image" content="/"/>
        <meta name="description" content="Clean and modern website design and development for your business." />
        <meta property="og:title" content="Camila Paleno | Beanie Ball Web Development"/>
        <meta property="og:url" content="https://www.imcamila.com" />
        <meta property="og:description" content="Clean and modern website design and development for your business." />
      </Helmet>
        <div className='portfolio'>
        <Link className='back__arrow' to='./Web'><i class="fas fa-arrow-circle-left"></i></Link>
        <div className='portfolio__container'>
            <br /><br />
            <h1>BxB Beanie Ball</h1><br /><br />
            <p>Beanie Ball is a hybrid football and beanie. The new company came to me for a simple website to display the product, explain the backstory, and sell a couple of their products. I made a static, single page website with HTML and CSS and connected a Shopify store to it so they could track sales. The team wanted the website to: </p><br /><br />
            <h3>"Match the colors of the logo, look sporty and cool"</h3><br />
            <div className='portfolio__description'>
                <div id="imag"><img src={Image1} alt=' '/></div>
                <div id="txt"><p>To get content for the website, I met up with Shawne Merriman, founder of Beanie Ball. </p></div>
            </div><br /><br />
            <p>Here is a spread of the BXB Home page. I mainly just used HTML, CSS. It's a single page. This is the first site I ever made, so when they launch, I'm going to work on improving it.</p><br /><br /><br />
            <img className='portfolio__show' src={Spread} alt='portfolio spread'/>
        </div>
        </div>
      </>
  );
}

export default BXB;