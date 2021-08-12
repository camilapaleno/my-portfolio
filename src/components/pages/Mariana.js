import React from 'react';
import '../Portfolios.css';
import PhotoPortfolios from '../PhotoPortfolios';
import Image1 from '../../images/mariana_1.jpg';
import Image2 from '../../images/mariana_2.jpg';
import Image3 from '../../images/mariana_3.jpg';
import Image4 from '../../images/mariana_4.jpg';
import Image5 from '../../images/mariana_5.jpg';
import Image6 from '../../images/mariana_6.jpg';
import Image7 from '../../images/mariana_7.jpg';
import Image8 from '../../images/mariana_8.jpg';
import Image9 from '../../images/mariana_9.jpg';
import Image10 from '../../images/mariana_10.jpg';


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