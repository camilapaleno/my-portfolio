import React from 'react';
import '../Portfolios.css';
import PhotoPortfolios from '../PhotoPortfolios';
import Image1 from '../../images/tom1.jpeg';
import Image2 from '../../images/tom2.jpeg';
import Image3 from '../../images/tom3.jpeg';
import Image4 from '../../images/tom4.jpeg';
import Image5 from '../../images/tom5.jpeg';
import Image6 from '../../images/tom6.jpeg';
import Image7 from '../../images/tom7.jpeg';
import Image8 from '../../images/tom8.jpg';
import Image9 from '../../images/tom9.JPG';
import Image10 from '../../images/tom10.JPG';


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