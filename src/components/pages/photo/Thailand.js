import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';

import Image1 from '../../../images/Thailand/thailand_1.jpg';
import Image2 from '../../../images/Thailand/thailand_2.jpg';
import Image3 from '../../../images/Thailand/thailand_3.jpg';
import Image4 from '../../../images/Thailand/thailand_4.jpg';
import Image5 from '../../../images/Thailand/thailand_5.jpg';
import Image6 from '../../../images/Thailand/thailand_6.jpg';
import Image7 from '../../../images/Thailand/thailand_7.jpg';
import Image8 from '../../../images/Thailand/thailand_8.jpg';
import Image9 from '../../../images/Thailand/thailand_9.jpg';
import Image10 from '../../../images/Thailand/thailand_10.jpg';
import Image11 from '../../../images/Thailand/thailand_11.jpg';
import Image12 from '../../../images/Thailand/thailand_12.jpg';
import Image13 from '../../../images/Thailand/thailand_13.jpg';


function Thailand() {
  return (
    <>
    <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
    <div className='photocollage'>
      <div className='photocollage__title'>
        <h1>Thailand</h1>
        <p>This was my first solo trip. I flew into Bangkok and then visited three islands: Koh Samui, Koh Phangan, and Koh Tao</p>
      </div>
      <div className='photocollage__container'>
        <div className='photocollage__item landscape'>
          <img src={Image4} />
          <p>Wat Plai Laem Temple, Koh Samui - 2019</p>
        </div>  
        <div className='photocollage__item portrait'>
          <img src={Image6} />
          <p>On our way to Shark Bay, Koh Tao - 2019</p>
        </div> 
        <div className='photocollage__item landscape'>
          <img src={Image2} />
          <p>Beach in front of my hostel, Koh Samui - 2019</p>
        </div>
        <div className='photocollage__item landscape'>
          <img src={Image7} />
          <p>Shark Bay, Koh Tao - 2019</p>
        </div>  
        <div className='photocollage__item landscape'>
          <img src={Image1} />
          <p>Beach in front of my hostel, Koh Samui - 2019</p>
        </div>  
        <div className='photocollage__item landscape'>
          <img src={Image5} />
          <p>Our bikes, Koh Tao - 2019</p>
        </div> 
        <div className='photocollage__item landscape'>
          <img src={Image9} />
          <p>Beach in front of my hostel, Koh Samui - 2019</p>
        </div>  
        <div className='photocollage__item landscape'>
          <img src={Image3} />
          <p>Angthong National Park - 2019</p>
        </div>     
        <div className='photocollage__item landscape'>
          <img src={Image13} />
          <p>Angthong National Park - 2019</p>
        </div>            
        <div className='photocollage__item landscape'>
          <img src={Image8} />
          <p>John Suwan Viewpoint, Koh Tao - 2019</p>
        </div>  
        <div className='photocollage__item landscape'>
          <img src={Image11} />
          <p>Wat Plai Laem Temple, Koh Samui - 2019</p>
        </div>  
      </div>
    </div>
    </>
  );
}

export default Thailand;