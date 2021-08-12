import React from 'react';
import '../Portfolios.css';
import Portfolios from '../WebPortfolios';
import Spread from '../../images/bxb_spread.png';
import Image1 from '../../images/bxb_image1.jpg';
import Image2 from '../../images/bxb_image2.jpg';

function BXB() {
  return (
    <Portfolios
        title='BxB Beanie Ball'
        description='Beanie Ball is a hybrid football and beanie. The new company came to me for a simple website to display the product, explain the backstory, and sell a couple of their products. I made a static, single page website with HTML and CSS and connected a Shopify store to it so they could track sales. '
        quote='“Incorporate the logo colors” /n "Keep it sporty"'
        image1={Image2}
        description1='To get content for the website, I met up with Shawne Merriman, founder of Beanie Ball. '
        image2={Image1}
        description2='I took many pictures '
        image3={Spread}
        description3='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
    />
  );
}

export default BXB;