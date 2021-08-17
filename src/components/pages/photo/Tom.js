import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';

import Image1 from '../../../images/Tom/tom_1.jpg';
import Image2 from '../../../images/Tom/tom_2.jpg';
import Image3 from '../../../images/Tom/tom_3.jpg';
import Image4 from '../../../images/Tom/tom_4.jpg';
import Image5 from '../../../images/Tom/tom_5.jpg';
import Image6 from '../../../images/Tom/tom_6.jpg';
import Image7 from '../../../images/Tom/tom_7.jpg';
import Image8 from '../../../images/Tom/tom_8.jpg';
import Image9 from '../../../images/Tom/tom_9.jpg';
import Image10 from '../../../images/Tom/tom_10.jpg';


function Tom() {
  return (
    <>
    <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
    <div className='photocollage'>
      <div className='photocollage__title'>
        <h1>Tom</h1>
        <p>Tom is a very cool guy. Hes always busy with some creative project- from music albums to movies to paitings. He sometimes lets me take photos of him.</p>
      </div>
      <div className='photocollage__container'>
      <div className='photocollage__item portrait'>
          <img src={Image1} />
          <p>Flowers - 2020</p>
        </div>
        <div className='photocollage__item portrait'>
          <p>Roadtrip - 2020</p>
          <img src={Image9} />
          
        </div>
        <div className='photocollage__item landscape'>
          <img src={Image7} />
          <p>Top of the World - 2020</p>
        </div>
        <div className='photocollage__item landscape'>
          <img src={Image5} />
          <p>Colored Lights - 2020</p>
        </div>
        <div className='photocollage__item portrait'>
          <img src={Image3} />
          <p>Westwood Lights - 2020</p>
        </div>         
        <div className='photocollage__item landscape'>
          <img src={Image8} />
          <p>Portrait - 2020</p>
        </div>
        <div className='photocollage__item portrait'>
          <p>Flower Field - 2020</p>
          <img src={Image10} />
        </div>    
        <div className='photocollage__item landscape'>
          <img src={Image4} />
          <p>Colored Lights - 2020</p>
        </div>  
        <div className='photocollage__item landscape'>
          <img src={Image6} />
          <p>Colored Lights - 2020</p>
        </div>  
      </div>
    </div>
    </>
  );
}

export default Tom;