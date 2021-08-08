import React from 'react';
import '../Portfolios.css';
import PhotoPortfolios from '../PhotoPortfolios';
import Image1 from '../../images/mariana1.jpeg';
import Image2 from '../../images/mariana2.jpeg';
import Image3 from '../../images/mariana3.jpeg';
import Image4 from '../../images/mariana4.jpeg';
import Image5 from '../../images/mariana5.jpg';
import Image6 from '../../images/mariana6.jpg';
import Image7 from '../../images/mariana7.jpg';
import Image8 from '../../images/mariana8.jpeg';
import Image9 from '../../images/mariana9.jpeg';
import Image10 from '../../images/mariana10.jpeg';


function Mariana() {
  return (
    <PhotoPortfolios
        title='Mariana'
        description='Mariana is my sister. Since we live together and she is similarly interested in photography, she was always willing to help me bring to life any ideas I had for photoshoots.'
        quote=''
        image1={Image7}
        description1='Maggie Andrews (@maggieandrew) was looking for a glamourous but dark and moody feel for her album "Sleep 4ever".'
        image2={Image8}
        description2='We managed to find a really pretty bathtub and drag it into our studio. Pretty cool.'
        image3={Image5}
        image4={Image1}
        image5={Image6}
        image6={Image9}
        image7={Image10}
        image8={Image3}
        image9={Image4}
        image10={Image2}
    />
  );
}

export default Mariana;