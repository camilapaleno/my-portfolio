import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';

import Image1 from '../../../images/LA_Musicians/la_4.jpg';
import Image2 from '../../../images/LA_Musicians/la_5.jpg';
import Image3 from '../../../images/LA_Musicians/la_1.jpg';
import Image4 from '../../../images/LA_Musicians/la_2.jpg';
import Image5 from '../../../images/LA_Musicians/la_3.jpg';
import Image6 from '../../../images/LA_Musicians/la_6.jpg';
import Image8 from '../../../images/LA_Musicians/la_8.jpg';
import Image10 from '../../../images/LA_Musicians/la_10.jpg';
import Image11 from '../../../images/LA_Musicians/la_11.jpg';


function LAMusic() {
  return (
    <>  
    <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
    <div className='photocollage'>
        <div className='photocollage__title'>
          <h1>L.A. Musicians</h1>
          <p>Living in Los Angeles, Ive encountered many people moving to the area who have aspirations to make it big in the music industry. Taking photos for album covers and social media is a little more fun (and a little more challenging) because theres a specific look and feel we have to capture in the photos.</p>
        </div>
        <div className='photocollage__container'>
          <div className='photocollage__item portrait'>
            <img src={Image1} alt=' '/>
            <p>Sleep 4ever Album Cover - 2018</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image8} alt=' '/>
            <p>Downtown L.A. - 2017</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>Studio - 2018</p>
            <img src={Image2} alt=' '/>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image4} alt=' '/>
            <p>Hollywood Hills - 2018</p>
          </div>
          <div className='photocollage__item portrait'>
            <img src={Image10} alt=' '/>
            <p>Mirror - 2018</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image3} alt=' '/>
            <p>Downtown L.A. - 2018</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image5} alt=' '/>
            <p>Sierra - 2016</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>Colors - 2018</p>
            <img src={Image6} alt=' '/>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image11} alt=' '/>
            <p>Sierra - 2016</p>
          </div>             
        </div>
    </div>
    </>

  );
}

export default LAMusic;