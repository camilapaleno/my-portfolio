import React from 'react';
import {Helmet} from "react-helmet";
import '../../Portfolios.css';
import Portfolios from '../../WebPortfolios';
import Spread from '../../../images/bps_spread.png';
import Image1 from '../../../images/bps_image1.png';
import Image2 from '../../../images/bps_image2.png';

function BPS() {
  return (
    <>
      <Helmet>
        <title>Camila Paleno | Web Development</title>

        <script src="./resources/js/animation.js"></script>
        <script src="./resources/js/lottie.js"></script>

        <meta property="og:image" content="/"/>
        <meta name="description" content="Clean and modern website design and development for your business." />
        <meta property="og:title" content="Web Design and Development"/>
        <meta property="og:url" content="https://www.imcamila.com" />
        <meta property="og:description" content="Clean and modern website design and development for your business." />
      </Helmet>

      <Portfolios
        title='Bruin Polyglot Society'
        description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        quote='“Something light, fun, and welcoming”“Animations to break up text”'
        image1={Image1}
        description1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
        image2={Image2}
        description2='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
        image3={Spread}
        description3='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
      />
    </>

  );
}

export default BPS;