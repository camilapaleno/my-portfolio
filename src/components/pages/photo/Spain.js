import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Image1 from '../../../images/Spain/spain_1.jpg';
import Image2 from '../../../images/Spain/spain_2.jpg';
import Image3 from '../../../images/Spain/spain_3.jpg';
import Image4 from '../../../images/Spain/spain_4.jpg';
import Image5 from '../../../images/Spain/spain_5.jpg';
import Image6 from '../../../images/Spain/spain_6.jpg';
import Image7 from '../../../images/Spain/spain_7.jpg';
import Image8 from '../../../images/Spain/spain_8.jpg';
import Image9 from '../../../images/Spain/spain_9.jpg';
import Image10 from '../../../images/Spain/spain_10.jpg';
import Image11 from '../../../images/Spain/spain_11.jpg';
import Image13 from '../../../images/Spain/spain_13.jpg';

function Spain() {
  return (
    <>
      <Helmet>
          <title>Camila Paleno | Traveling Spain</title>
          <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>
          <meta property="og:image" content="/"/>
          <meta name="description" content="Photography from my time in Spain." />
          <meta property="og:title" content="Camila Paleno | Traveling Spain"/>
          <meta property="og:url" content="https://www.imcamila.com" />
          <meta property="og:description" content="Photography from my time in Spain." />
      </Helmet>
      <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
      <div className='photocollage'>
        <div className='photocollage__title'>
          <h1>Spain</h1>
          <p>I went to Spain City and Quintana Roo in 2021. This was my 2nd solo trip.</p>
        </div>
        <div className='photocollage__container'>
          <div className='photocollage__item landscape'>
            <img src={Image2} alt=' '/>
            <p>Museu de Montserrat - 2019</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image3} alt=' '/>
            <p>Museu de Montserrat - 2019</p>
          </div>     
          <div className='photocollage__item landscape'>
            <img src={Image13} alt=' '/>
            <p>Museu de Montserrat - 2019</p>
          </div>      
          <div className='photocollage__item landscape'>
            <img src={Image4} alt=' '/>
            <p>View from Ermita de Sant Joan - 2019</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image5} alt=' '/>
            <p>View from Ermita de Sant Joan - 2019</p>
          </div>      
          <div className='photocollage__item landscape'>
            <img src={Image6} alt=' '/>
            <p>View from Ermita de Sant Joan - 2019</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image7} alt=' '/>
            <p>Sant Pere Santa Caterina i la Ribera, Barcelona - 2019</p>
          </div>  
          <div className='photocollage__item portrait'>
            <img src={Image8} alt=' '/>
            <p>Basilica of the Sagrada Familia - 2019</p>
          </div>  
          <div className='photocollage__item portrait'>
            <p>Basilica of the Sagrada Familia - 2019</p>
            <img src={Image11} alt=' '/>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image9} alt=' '/>
            <p>Sant Pere Santa Caterina i la Ribera, Barcelona - 2019</p>
          </div>  
          <div className='photocollage__item portrait'>
            <img src={Image10} alt=' '/>
            <p>Sant Pere Santa Caterina i la Ribera, Barcelona - 2019</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image1} alt=' '/>
            <p>Market, Barcelona - 2019</p>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Spain;