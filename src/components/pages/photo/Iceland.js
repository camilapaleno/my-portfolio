import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';

import Image1 from '../../../images/Iceland/iceland_1.jpg';
import Image2 from '../../../images/Iceland/iceland_2.jpg';
import Image3 from '../../../images/Iceland/iceland_3.jpg';
import Image4 from '../../../images/Iceland/iceland_4.jpg';
import Image5 from '../../../images/Iceland/iceland_5.jpg';
import Image6 from '../../../images/Iceland/iceland_6.jpg';
import Image7 from '../../../images/Iceland/iceland_7.jpg';
import Image8 from '../../../images/Iceland/iceland_8.jpg';
import Image9 from '../../../images/Iceland/iceland_9.jpg';
import Image10 from '../../../images/Iceland/iceland_10.jpg';
import Image11 from '../../../images/Iceland/iceland_11.jpg';
import Image12 from '../../../images/Iceland/iceland_12.jpg';
import Image13 from '../../../images/Iceland/iceland_13.jpg';
import Image14 from '../../../images/Iceland/iceland_14.jpg';
import Image15 from '../../../images/Iceland/iceland_15.jpg';
import Image16 from '../../../images/Iceland/iceland_16.jpg';
import Image17 from '../../../images/Iceland/iceland_17.jpg';
import Image18 from '../../../images/Iceland/iceland_18.jpg';
import Image19 from '../../../images/Iceland/iceland_19.jpg';
import Image20 from '../../../images/Iceland/iceland_20.jpg';
import Image21 from '../../../images/Iceland/iceland_21.jpg';
import Image22 from '../../../images/Iceland/iceland_22.jpg';

function Iceland() {
  return (
    <>
      <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
      <div className='photocollage'>
        <div className='photocollage__title'>
          <h1>Iceland</h1>
          <p>Iceland holds a special place in my heart. It was the first trip I went on with out my parents.</p>
        </div>
        <div className='photocollage__container'>
        <div className='photocollage__item landscape'>
            <img src={Image13} />
            <p></p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image21} />
            <p></p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image11} />
            <p></p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image12} />
            <p></p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image6} />
          </div>       
          <div className='photocollage__item landscape'>
            <img src={Image7} />
            <p></p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image2} />
            <p></p>
          </div>    
          <div className='photocollage__item landscape'>
            <img src={Image3} />
            <p></p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image18} />
            <p></p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image5} />
            <p></p>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Iceland;