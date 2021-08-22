import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Image1 from '../../../images/Thailand/thailand_1.jpg';
import Image2 from '../../../images/Thailand/thailand_2.jpg';
import Image3 from '../../../images/Thailand/thailand_3.jpg';
import Image4 from '../../../images/Thailand/thailand_4.jpg';
import Image5 from '../../../images/Thailand/thailand_5.jpg';
import Image6 from '../../../images/Thailand/thailand_6.jpg';
import Image7 from '../../../images/Thailand/thailand_7.jpg';
import Image8 from '../../../images/Thailand/thailand_8.jpg';
import Image9 from '../../../images/Thailand/thailand_9.jpg';
import Image11 from '../../../images/Thailand/thailand_11.jpg';
import Image13 from '../../../images/Thailand/thailand_13.jpg';

function Thailand() {
  return (
    <>
      <Helmet>
          <title>Camila Paleno | Traveling Thailand</title>
          <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>
          <meta property="og:image" content="/"/>
          <meta name="description" content="Photography from my time in Thailand." />
          <meta property="og:title" content="Camila Paleno | Traveling Thailand"/>
          <meta property="og:url" content="https://www.imcamila.com" />
          <meta property="og:description" content="Photography from my time in Thailand." />
      </Helmet>
      <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
      <div className='photocollage'>
        <div className='photocollage__title'>
          <h1>Thailand</h1>
          <p>This was my first solo trip. I flew into Bangkok and then visited three islands: Koh Samui, Koh Phangan, and Koh Tao</p>
        </div>
        <div className='photocollage__container'>
          <div className='photocollage__item landscape'>
            <img src={Image4} alt=' '/>
            <p>Wat Plai Laem Temple, Koh Samui - 2019</p>
          </div>  
          <div className='photocollage__item portrait'>
            <img src={Image6} alt=' '/>
            <p>On our way to Shark Bay, Koh Tao - 2019</p>
          </div> 
          <div className='photocollage__item landscape'>
            <img src={Image2} alt=' '/>
            <p>Beach in front of my hostel, Koh Samui - 2019</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image7} alt=' '/>
            <p>Shark Bay, Koh Tao - 2019</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image1} alt=' '/>
            <p>Beach in front of my hostel, Koh Samui - 2019</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image5} alt=' '/>
            <p>Our bikes, Koh Tao - 2019</p>
          </div> 
          <div className='photocollage__item landscape'>
            <img src={Image9} alt=' '/>
            <p>Beach in front of my hostel, Koh Samui - 2019</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image3} alt=' '/>
            <p>Angthong National Park - 2019</p>
          </div>     
          <div className='photocollage__item landscape'>
            <img src={Image13} alt=' '/>
            <p>Angthong National Park - 2019</p>
          </div>            
          <div className='photocollage__item landscape'>
            <img src={Image8} alt=' '/>
            <p>John Suwan Viewpoint, Koh Tao - 2019</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image11} alt=' '/>
            <p>Wat Plai Laem Temple, Koh Samui - 2019</p>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Thailand;