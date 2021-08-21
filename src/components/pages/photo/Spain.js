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
import Image12 from '../../../images/Spain/spain_12.jpg';
import Image13 from '../../../images/Spain/spain_13.jpg';

function Spain() {
  return (
    <>
      <Helmet>
          <title>Camila Paleno | Traveling Spain</title>

          <script src="../../animations/animation.js"></script>
          <script src="../../animations/lottie.js"></script>
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
          <img src={Image2} />
          <p>Museu de Montserrat - 2019</p>
        </div>
        <div className='photocollage__item landscape'>
          <img src={Image3} />
          <p>Museu de Montserrat - 2019</p>
        </div>     
        <div className='photocollage__item landscape'>
          <img src={Image13} />
          <p>Museu de Montserrat - 2019</p>
        </div>      
        <div className='photocollage__item landscape'>
          <img src={Image4} />
          <p>View from Ermita de Sant Joan - 2019</p>
        </div>  
        <div className='photocollage__item landscape'>
          <img src={Image5} />
          <p>View from Ermita de Sant Joan - 2019</p>
        </div>      
        <div className='photocollage__item landscape'>
          <img src={Image6} />
          <p>View from Ermita de Sant Joan - 2019</p>
        </div>  
        <div className='photocollage__item landscape'>
          <img src={Image7} />
          <p>Sant Pere Santa Caterina i la Ribera, Barcelona - 2019</p>
        </div>  
        <div className='photocollage__item portrait'>
          <img src={Image8} />
          <p>Basilica of the Sagrada Familia - 2019</p>
        </div>  
        <div className='photocollage__item portrait'>
          <p>Basilica of the Sagrada Familia - 2019</p>
          <img src={Image11} />
        </div>  
        <div className='photocollage__item landscape'>
          <img src={Image9} />
          <p>Sant Pere Santa Caterina i la Ribera, Barcelona - 2019</p>
        </div>  
        <div className='photocollage__item portrait'>
          <img src={Image10} />
          <p>Sant Pere Santa Caterina i la Ribera, Barcelona - 2019</p>
        </div>  
        <div className='photocollage__item landscape'>
          <img src={Image1} />
          <p>Market, Barcelona - 2019</p>
        </div>  
      </div>
    </div>
    </>
  );
}

export default Spain;