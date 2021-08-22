import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';

import Image1 from '../../../images/Kickback/kb_ig.png';
import Image2 from '../../../images/Kickback/kb_1.jpg';
import Image3 from '../../../images/Kickback/kb_4.jpg';
import Image7 from '../../../images/Kickback/kb_6.jpg';
import Image9 from '../../../images/Kickback/kb_8.jpg';
import Image10 from '../../../images/Kickback/kb_10.jpg';
import Image11 from '../../../images/Kickback/kb_11.jpg';
import Image12 from '../../../images/Kickback/kb_12.jpg';
import Image13 from '../../../images/Kickback/kb_9.jpg';
import Image16 from '../../../images/Kickback/kb_16.jpeg';
import Image17 from '../../../images/Kickback/kb_17.jpeg';

function Kickback() {
  return (  
    <>
    <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
    <div className='photocollage'>
        <div className='photocollage__title'>
          <h1>Kickback Coldbrew</h1>
          <p>A CBD coffee company I worked with. I managed sales and created content for all of their social medias.</p>
        </div>
        <div className='photocollage__container'>
          <div className='photocollage__item landscape'>
            <img src={Image9} alt=' '/>
            <p>Coldbrew Ingredient Spread #1</p>
          </div>
          <div className='photocollage__item portrait'>
            <img src={Image13} alt=' '/>
            <p>Coldbrew Ingredient Spread #2</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>Ground Coffee Ingredient Spread</p>
            <img src={Image12} alt=' '/>
          </div>
          <div className='photocollage__item portrait'>
            <img src={Image2} alt=' '/>
            <p>Instagram Post #1</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>Their Instagram when I managed it.</p>
            <img src={Image1} alt=' '/>
          </div>       
          <div className='photocollage__item portrait'>
            <img src={Image11} alt=' '/>
            <p>Instagram Post #2</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>Instagram Post #3</p>
            <img src={Image3} alt=' '/>
          </div>    
          <div className='photocollage__item landscape'>
            <img src={Image7} alt=' '/><p>Photo #1</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image17} alt=' '/><p>Photo #2</p>
            
          </div>    
          <div className='photocollage__item landscape'>
            <img src={Image16} alt=' '/><p>Photo #3</p>
            
          </div>  
          <div className='photocollage__item landscape'>
            <img src={Image10} alt=' '/><p>Photo #4</p>
          </div>
        </div>
    </div>    
    </>
  );
}

export default Kickback;