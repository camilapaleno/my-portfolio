import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Image2 from '../../../images/France/france_2.jpeg';
import Image3 from '../../../images/France/france_3.jpeg';
import Image6 from '../../../images/France/france_6.jpeg';
import Image7 from '../../../images/France/france_7.jpeg';
import Image8 from '../../../images/France/france_8.jpeg';
import Image9 from '../../../images/France/france_9.jpeg';
import Image12 from '../../../images/France/france_12.jpeg';
import Image13 from '../../../images/France/france_13.jpeg';
import Image14 from '../../../images/France/france_14.jpeg';
import Image17 from '../../../images/France/france_17.jpeg';

function France() {
  return (
    <>
      <Helmet>
          <title>Camila Paleno | Traveling France</title>
          <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>
          <meta property="og:image" content="/"/>
          <meta name="description" content="Photography from my time in France." />
          <meta property="og:title" content="Camila Paleno | Traveling France"/>
          <meta property="og:url" content="https://www.imcamila.com" />
          <meta property="og:description" content="Photography from my time in France." />
    </Helmet>

      <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
      <div className='photocollage'>
        <div className='photocollage__title'>
          <h1>France</h1>
          <p>I went to France in 2017 to visit family in Lille, but managed to make a few stops around the country.</p>
        </div>
        <div className='photocollage__container'>
        <div className='photocollage__item landscape'>
            <img src={Image12} alt=' '/>
            <p>Cirque du Gavarnie</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image9} alt=' '/>
            <p>Cirque du Gavarnie</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image13} alt=' '/>
            <p>Cirque du Gavarnie</p>
          </div>
          <div className='photocollage__item portrait'>
            <img src={Image14} alt=' '/>
            <p>Cirque du Gavarnie</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image6} alt=' '/>
          </div>       
          <div className='photocollage__item landscape'>
            <img src={Image7} alt=' ' />
            <p>Kiosque du Gouffre</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image2} alt=' '/>
            <p>Brussels Bike</p>
          </div>    
          <div className='photocollage__item landscape'>
            <img src={Image3} alt=' '/>
            <p>Brussels Architecture</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image8} alt=' '/>
            <p>Castle Views</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image17} alt=' '/>
            <p>Streets</p>
          </div>  
        </div>
      </div>
    </>
  );
}

export default France;