import React from 'react';
import '../Portfolios.css';
import PhotoPortfolios from '../PhotoPortfolios';
import Image1 from '../../images/thailand_1.jpg';
import Image2 from '../../images/thailand_2.jpg';
import Image3 from '../../images/thailand_3.jpg';
import Image4 from '../../images/thailand_4.jpg';
import Image5 from '../../images/thailand_5.jpg';
import Image6 from '../../images/thailand_6.jpg';
import Image7 from '../../images/thailand_7.jpg';
import Image8 from '../../images/thailand_8.jpg';
import Image9 from '../../images/thailand_9.jpg';
import Image10 from '../../images/thailand_10.jpg';
import Image11 from '../../images/thailand_11.jpg';
import Image12 from '../../images/thailand_12.jpg';
import Image13 from '../../images/thailand_13.jpg';


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