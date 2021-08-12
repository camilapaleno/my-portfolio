import React from 'react';
import '../Portfolios.css';
import PhotoPortfolios from '../PhotoPortfolios';
import Image1 from '../../images/tom_1.jpg';
import Image2 from '../../images/tom_2.jpg';
import Image3 from '../../images/tom_3.jpg';
import Image4 from '../../images/tom_4.jpg';
import Image5 from '../../images/tom_5.jpg';
import Image6 from '../../images/tom_6.jpg';
import Image7 from '../../images/tom_7.jpg';
import Image8 from '../../images/tom_8.jpg';
import Image9 from '../../images/tom_9.jpg';
import Image10 from '../../images/tom_10.jpg';


function Tom() {
  return (
    <PhotoPortfolios
        title='Tom'
        description='Tom is a very cool guy. Hes always busy with some creative project- from music albums to movies to paitings. He sometimes lets me take photos of him.'
        quote=''
        image1={Image1}
        description1='After taking some headshots for his portfolio, I added a couple flowers. Thought it was cute.'
        image2={Image9}
        description2='From one of the many roadtrips weve been on. I almost stepped on a snake shortly after this was taken.'
        image3={Image7}
        image4={Image5}
        image5={Image3}
        image6={Image8}
        image7={Image10}
        image8={Image4}
        image9={Image6}
    />
  );
}

export default Tom;