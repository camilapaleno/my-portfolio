import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';

import Image1 from '../../../images/Mexico/mexico_1.jpg';
import Image2 from '../../../images/Mexico/mexico_2.jpg';
import Image3 from '../../../images/Mexico/mexico_3.jpg';
import Image4 from '../../../images/Mexico/mexico_4.jpg';
import Image5 from '../../../images/Mexico/mexico_5.jpg';
import Image6 from '../../../images/Mexico/mexico_6.jpg';
import Image7 from '../../../images/Mexico/mexico_7.jpg';
import Image8 from '../../../images/Mexico/mexico_8.jpg';
import Image9 from '../../../images/Mexico/mexico_9.jpg';


function Mexico() {
  return (
    <>
    <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
    <div className='photocollage'>
      <div className='photocollage__title'>
        <h1>Mexico</h1>
        <p>I went to Mexico City and Quintana Roo in 2021. This was my 2nd solo trip.</p>
      </div>
      <div className='photocollage__container'>
        <div className='photocollage__item portrait'>
          <img src={Image1} />
          <p>Playa Mujeres - 2021</p>
        </div>
        <div className='photocollage__item portrait'>
          <p>Playa Mujeres - 2021</p>
          <img src={Image3} />
          
        </div>
        <div className='photocollage__item portrait'>
          <img src={Image4} />
          <p>Pyramid of the Sun, Teotihuacan - 2021</p>
        </div>         
        <div className='photocollage__item portrait'>
          <p>Pyramid of the Sun, Teotihuacan - 2021</p>
          <img src={Image9} />
        </div>  
        <div className='photocollage__item landscape'>
          <img src={Image6} />
          <p>Above the clouds - 2021</p>
        </div>      

      </div>
    </div>
    </>
  );
}

export default Mexico;