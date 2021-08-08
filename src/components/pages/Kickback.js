import React from 'react';
import '../Portfolios.css';
import PhotoPortfolios from '../PhotoPortfolios';
import Image1 from '../../images/kbig.png';
import Image2 from '../../images/kb1.jpg';
import Image3 from '../../images/kb4.jpg';
import Image4 from '../../images/kb2.png';
import Image5 from '../../images/kb3.jpg';
import Image6 from '../../images/kb5.jpg';
import Image7 from '../../images/kb6.jpg';
import Image8 from '../../images/kb7.jpg';
import Image9 from '../../images/kb8.jpg';
import Image10 from '../../images/kb10.jpeg';
import Image11 from '../../images/kb11.png';
import Image12 from '../../images/kb12.png';


function Kickback() {
  return (
    <PhotoPortfolios
        title='Kickback Coldbrew'
        description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        quote='“Something light, fun, and welcoming”“Animations to break up text”'
        image1={Image1}
        description1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
        image2={Image2}
        description2='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
        image3={Image3}
        image4={Image4}
        image5={Image5}
        image6={Image6}
        image7={Image7}
        image8={Image8}
        image9={Image9}
        image10={Image10}
        image11={Image11}
        image12={Image12}
    />
  );
}

export default Kickback;