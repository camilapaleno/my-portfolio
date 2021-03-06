import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Image3 from '../../../images/Costa_Rica/cr_3.jpg';
import Image4 from '../../../images/Costa_Rica/cr_4.jpg';
import Image5 from '../../../images/Costa_Rica/cr_5.jpg';
import Image6 from '../../../images/Costa_Rica/cr_6.jpg';
import Image10 from '../../../images/Costa_Rica/cr_10.jpg';
import Image15 from '../../../images/Costa_Rica/cr_15.jpg';
import Image17 from '../../../images/Costa_Rica/cr_17.jpg';
import Image19 from '../../../images/Costa_Rica/cr_19.jpg';
import Image20 from '../../../images/Costa_Rica/cr_20.jpg';
import Image22 from '../../../images/Costa_Rica/cr_22.jpg';


function CR() {
  return (
    <>
    <Helmet>
          <title>Camila Paleno | Traveling Costa Rica</title>
          <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>
          <meta property="og:image" content="/"/>
          <meta name="description" content="Photography from my travels in Costa Rica." />
          <meta property="og:title" content="Camila Paleno - Costa Rica"/>
          <meta property="og:url" content="https://www.imcamila.com" />
          <meta property="og:description" content="Photography from my travels in Costa Rica." />
    </Helmet>
    
    <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
    <div className='photocollage'>
      <div className='photocollage__title'>
        <h1>Costa Rica</h1>
        <p>I've been going to Costa Rica with my dad since I was a kid because he loves it there. Recently my friends and I went together- I brought my camera and we drove around the country.</p>
      </div>
      <div className='photocollage__container'>
      <div className='photocollage__item portrait'>
          <img src={Image20} alt='Tenorio National Park - 2020'/>
          <p>Tenorio National Park - 2020</p>
        </div>
        <div className='photocollage__item portrait'>
          <p>Arenal Volcano - 2020</p>
          <img src={Image22} alt='Arenal Volcano - 2020'/>
        </div>
        <div className='photocollage__item landscape'>
          <img src={Image3} alt='Playa Blanca - 2018'/>
          <p>Playa Blanca - 2018</p>
        </div>
        <div className='photocollage__item landscape'>
          <img src={Image4} alt='Playa Blanca - 2018'/>
          <p>Playa Blanca - 2018</p>
        </div>
        <div className='photocollage__item landscape'>
          <img src={Image5} alt='Playa Blanca - 2018'/>
          <p>Playa Blanca - 2018</p>
        </div>         
        <div className='photocollage__item landscape'>
          <img src={Image10} alt='Playa Blanca - 2018'/>
          <p>Playa Blanca - 2018</p>
        </div>
        <div className='photocollage__item portrait'>
          <p>Playa Blanca - 2018</p>
          <img src={Image6} alt='Playa Blanca - 2018'/>
        </div>    
        <div className='photocollage__item landscape'>
          <img src={Image15} alt='Manuel Antonio - 2018'/>
          <p>Manuel Antonio - 2018</p>
        </div>  
        <div className='photocollage__item landscape'>
          <img src={Image19} alt='Playa Uvita - 2018'/>
          <p>Playa Uvita - 2018</p>
        </div>  
        <div className='photocollage__item portrait'>
          <img src={Image17} alt='Playa Uvita - 2018'/>
          <p>Playa Uvita - 2018</p>
        </div>  
      </div>
    </div>
    </>
  );
}

export default CR;