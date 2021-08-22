import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Image2 from '../../../images/Iceland/iceland_2.jpg';
import Image3 from '../../../images/Iceland/iceland_3.jpg';
import Image5 from '../../../images/Iceland/iceland_5.jpg';
import Image6 from '../../../images/Iceland/iceland_6.jpg';
import Image7 from '../../../images/Iceland/iceland_7.jpg';
import Image11 from '../../../images/Iceland/iceland_11.jpg';
import Image12 from '../../../images/Iceland/iceland_12.jpg';
import Image13 from '../../../images/Iceland/iceland_13.jpg';
import Image18 from '../../../images/Iceland/iceland_18.jpg';
import Image21 from '../../../images/Iceland/iceland_21.jpg';

function Iceland() {
  return (
    <>
      <Helmet>
          <title>Camila Paleno | Traveling Iceland</title>
          <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>
          <meta property="og:image" content="/"/>
          <meta name="description" content="Photography from my time in Iceland." />
          <meta property="og:title" content="Camila Paleno | Traveling Iceland"/>
          <meta property="og:url" content="https://www.imcamila.com" />
          <meta property="og:description" content="Photography from my time in Iceland." />
    </Helmet>
      <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
      <div className='photocollage'>
        <div className='photocollage__title'>
          <h1>Iceland</h1>
          <p>Iceland holds a special place in my heart. It was the first trip I went on with out my parents.</p>
        </div>
        <div className='photocollage__container'>
        <div className='photocollage__item landscape'>
            <img src={Image13} alt=' '/>
            <p></p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image21} alt=' '/>
            <p></p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image11} alt=' '/>
            <p></p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image12} alt=' '/>
            <p></p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image6} alt=' '/>
          </div>       
          <div className='photocollage__item landscape'>
            <img src={Image7} alt=' '/>
            <p></p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image2} alt=' '/>
            <p></p>
          </div>    
          <div className='photocollage__item landscape'>
            <img src={Image3} alt=' '/>
            <p></p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image18} alt=' '/>
            <p></p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image5} alt=' '/>
            <p></p>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Iceland;