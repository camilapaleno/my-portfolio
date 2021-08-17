import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';

import Image1 from '../../../images/Mariana/mariana_1.jpg';
import Image2 from '../../../images/Mariana/mariana_2.jpg';
import Image3 from '../../../images/Mariana/mariana_3.jpg';
import Image4 from '../../../images/Mariana/mariana_4.jpg';
import Image5 from '../../../images/Mariana/mariana_5.jpg';
import Image6 from '../../../images/Mariana/mariana_6.jpg';
import Image7 from '../../../images/Mariana/mariana_7.jpg';
import Image8 from '../../../images/Mariana/mariana_8.jpg';
import Image9 from '../../../images/Mariana/mariana_9.jpg';
import Image10 from '../../../images/Mariana/mariana_10.jpg';
import Image11 from '../../../images/Mariana/mariana_11.jpeg';
import Image12 from '../../../images/Mariana/mariana_12.jpg';
import Image13 from '../../../images/Mariana/mariana_13.jpg';
import Image14 from '../../../images/Mariana/mariana_14.jpg';
import Image15 from '../../../images/Mariana/mariana_15.jpg';


function Mariana() {
  return (
    <>
      <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
      <div className='photocollage'>
        <div className='photocollage__title'>
          <h1>Mariana</h1>
          <p>Mariana is my sister. Since we live together and she is similarly interested in photography, she was always willing to help me bring to life any ideas I had for photoshoots.</p>
        </div>
        <div className='photocollage__container'>
        <div className='photocollage__item landscape'>
            <img src={Image11} />
            <p>B&amp;W - 2016</p>
          </div>
          <div className='photocollage__item portrait'>
            <img src={Image7} />
            <p>Warm - 2018</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image5} />
            <p>2019</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image13} />
            <p>Euphoria - 2019</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image1} />
            <p>Flowers - 2019</p>
          </div>         
          <div className='photocollage__item landscape'>
            <img src={Image12} />
            <p>Euphoria - 2019</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image4} />
            <p>Flower Field - 2017</p>
            
          </div>    
          <div className='photocollage__item landscape'>
            <img src={Image14} />
            <p>Flower Field - 2017</p>
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image15} />
            <p>Flower Field - 2017</p>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Mariana;