import React from 'react';
import '../Portfolios.css';
import PhotoPortfolios from '../PhotoPortfolios';
import Image1 from '../../images/la4.jpg';
import Image2 from '../../images/la5.jpg';
import Image3 from '../../images/la1.jpeg';
import Image4 from '../../images/la2.jpeg';
import Image5 from '../../images/la3.jpeg';
import Image6 from '../../images/la6.jpg';
import Image7 from '../../images/la7.jpg';
import Image8 from '../../images/la8.jpeg';
import Image9 from '../../images/la9.jpeg';
import Image10 from '../../images/la10.jpeg';
import Image11 from '../../images/la11.JPG';
import Image12 from '../../images/kb12.png';


function LAMusic() {
  return (
    <PhotoPortfolios
        title='L.A. Musicians'
        description='Living in Los Angeles, Ive encountered many people moving to the area who have aspirations to make it big in the music industry. Taking photos for album covers and social media is a little more fun (and a little more challenging) because theres a specific look and feel we have to capture in the photos.'
        quote=''
        image1={Image1}
        description1='Maggie Andrews (@maggieandrew) was looking for a glamourous but dark and moody feel for her album "Sleep 4ever".'
        image2={Image2}
        description2='We managed to find a really pretty bathtub and drag it into our studio. Pretty cool.'
        image3={Image8}
        image4={Image10}
        image5={Image3}
        image6={Image6}
        image7={Image7}
        image8={Image4}
    />
  );
}

export default LAMusic;