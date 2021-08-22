import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Image1 from '../../../images/United_States/np_1.jpg';
import Image2 from '../../../images/United_States/np_2.jpeg';
import Image3 from '../../../images/United_States/np_3.jpeg';
import Image6 from '../../../images/United_States/np_6.jpeg';
import Image7 from '../../../images/United_States/np_7.jpeg';
import Image8 from '../../../images/United_States/seq_1.jpg';
import Image12 from '../../../images/United_States/seq_5.jpg';
import Image13 from '../../../images/United_States/seq_6.jpg';
import Image15 from '../../../images/United_States/tahoe_1.jpg';
import Image17 from '../../../images/United_States/tahoe_3.jpg';
import Image18 from '../../../images/United_States/montana_1.jpg';
import Image22 from '../../../images/United_States/idaho_2.jpeg';
import Image23 from '../../../images/United_States/jtree_1.jpg';
import Image24 from '../../../images/United_States/portland_1.jpg';
import Image25 from '../../../images/United_States/np_8.jpeg';
import Image26 from '../../../images/United_States/sb_1.jpg';

function United_States() {
  return (
    <>
      <Helmet>
          <title>Camila Paleno | Traveling the United States</title>
          <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>
          <meta property="og:image" content="/"/>
          <meta name="description" content="Photography from my time in the United States." />
          <meta property="og:title" content="Camila Paleno | Traveling the United States"/>
          <meta property="og:url" content="https://www.imcamila.com" />
          <meta property="og:description" content="Photography from my time in the United States." />
      </Helmet>
      <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
      <div className='photocollage'>
        <div className='photocollage__title'>
          <h1>United States</h1>
          <p>I live in Los Angeles, but love to roadtrip and fly around the country. </p>
        </div>
        <div className='photocollage__container'>
        <div className='photocollage__item landscape'>
            <img src={Image1} alt=' '/>
            <p>Yosemite - Spring 2021</p>
          </div>
          <div className='photocollage__item portrait'>
            <img src={Image6} alt=' '/>
            <p>Yosemite - Spring 2021</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>Yosemite - Spring 2021</p>
            <img src={Image7} alt=' '/>
          </div>    
          <div className='photocollage__item landscape'>
            <img src={Image25} alt=' '/>
            <p>Yosemite - Winter 2020</p>
          </div>   
          <div className='photocollage__item portrait'>
            <p>Yosemite - Fall 2020</p>
            <img src={Image3} alt=' '/>
          </div>
          <div className='photocollage__item portrait'>
            <img src={Image2} alt=' '/>
            <p>Yosemite - Fall 2020</p>
          </div>    
          <div className='photocollage__item portrait'>
            <p>Three Rivers, California - 2020</p>
            <img src={Image8} alt=' '/>
          </div>   
          <div className='photocollage__item portrait'>
            <img src={Image12} alt=' '/>
            <p>Sequoias - Winter 2020</p>
          </div>  
          <div className='photocollage__item portrait'>
            <p>Sequoias - Winter 2020</p>
            <img src={Image13} alt=' '/>
          </div>  
          <div className='photocollage__item portrait'>
            <img src={Image15} alt=' '/>
            <p>Lake Tahoe, California - 2019</p>
          </div>  
          <div className='photocollage__item portrait'>
            <p>Lake Tahoe, California - 2019</p>
            <img src={Image17} alt=' '/>
            
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image18} alt=' ' />
            <p>Emigrant, Montana - 2018</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image22} alt=' '/>
            <p>Solar Eclipse in Idaho - 2017</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image23} alt=' '/>
            <p>Joshua Tree - 2020</p>
          </div>  
          <div className='photocollage__item portrait'>
            <img src={Image24} alt=' '/>
            <p>Oregon Coast - 2018</p>
          </div>  
          <div className='photocollage__item portrait'>
            <p>Santa Barbara, California - 2018</p>
            <img src={Image26} alt=' '/>
          </div>  
        </div>
      </div>
    </>
  );
}

export default United_States;