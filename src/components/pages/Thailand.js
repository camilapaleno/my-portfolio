import React from 'react';
import '../Portfolios.css';
import PhotoPortfolios from '../PhotoPortfolios';
import Image1 from '../../images/thailand1.jpg';
import Image2 from '../../images/thailand2.jpg';
import Image3 from '../../images/thailand3.jpg';
import Image4 from '../../images/thailand4.jpg';
import Image5 from '../../images/thailand5.jpg';
import Image6 from '../../images/thailand6.jpg';
import Image7 from '../../images/thailand7.jpg';
import Image8 from '../../images/thailand8.jpg';
import Image9 from '../../images/thailand9.JPG';
import Image10 from '../../images/thailand10.JPG';
import Image11 from '../../images/thailand11.JPG';
import Image12 from '../../images/thailand12.JPG';
import Image13 from '../../images/thailand13.JPG';


function Thailand() {
  return (
    <PhotoPortfolios
        title='Thailand 2019'
        description='This was my first ever solo trip. I made many friends and even rode a motorbike for the first time (bike pictured below).'
        quote=''
        image1={Image10}
        description1='These temples were on Koh Samui. I spend a week on this island and spent my time riding around in "taxis" (the back of trucks) to different temple sites and view points.'
        image2={Image6}
        description2='I met my friend Gabe on Koh Samui and we took a ferry to Koh Tao, my favorite island. This is us walking to a popular scuba diving site.'
        image3={Image2}
        image4={Image4}
        image5={Image5}
        image6={Image1}
        image7={Image7}
        image8={Image8}
        image9={Image13}
        image10={Image11}
        image11={Image3}
    />
  );
}

export default Thailand;