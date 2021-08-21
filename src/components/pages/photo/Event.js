import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Image1 from '../../../images/Event/event_1.jpg';
import Image2 from '../../../images/Event/event_2.jpg';
import Image3 from '../../../images/Event/event_3.jpg';
import Image4 from '../../../images/Event/event_4.jpg';
import Image5 from '../../../images/Event/event_5.jpg';
import Image6 from '../../../images/Event/event_6.jpg';
import Image7 from '../../../images/Event/event_7.jpg';
import Image8 from '../../../images/Event/event_8.jpg';
import Image9 from '../../../images/Event/event_9.jpg';
import Image10 from '../../../images/Event/event_10.jpg';
import Image11 from '../../../images/Event/event_11.jpg';
import Image12 from '../../../images/Event/event_12.jpg';
import Image13 from '../../../images/Event/event_13.jpg';
import Image14 from '../../../images/Event/event_14.jpg';
import Image15 from '../../../images/Event/event_15.jpg';
import Image16 from '../../../images/Event/event_16.jpg';
import Image17 from '../../../images/Event/event_17.jpg';
import Image18 from '../../../images/Event/event_18.jpg';
import Image19 from '../../../images/Event/event_19.jpg';
import Image20 from '../../../images/Event/event_20.jpg';
import Image21 from '../../../images/Event/event_21.jpg';
import Image22 from '../../../images/Event/event_22.jpg';
import Image23 from '../../../images/Event/event_23.jpg';
import Image24 from '../../../images/Event/event_24.jpg';
import Image25 from '../../../images/Event/event_25.jpg';
import Image26 from '../../../images/Event/event_26.jpg';



function Event() {
  return (  
    <>
      <Helmet>
          <title>Camila Paleno | Graduation and Prom Photography</title>

          <script src="../../animations/animation.js"></script>
          <script src="../../animations/lottie.js"></script>
          <link rel="stylesheet" href="https://use.typekit.net/tmt3ouk.css"></link>

          <meta property="og:image" content="/"/>
          <meta name="description" content="Portrait photography for graduation and prom." />
          <meta property="og:title" content="Camila Paleno - Costa Rica"/>
          <meta property="og:url" content="https://www.imcamila.com" />
          <meta property="og:description" content="Portrait photography for graduation and prom." />
    </Helmet>
    <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
    <div className='photocollage'>
        <div className='photocollage__title'>
          <h1>Event Photography</h1>
          <p>Photos of prom, graduation, etc. This was my side gig in High School and College.</p>
        </div>
        <div className='photocollage__container'>
          <div className='photocollage__item portrait'>
            <img src={Image9} />
            <p>Rachel &amp; Eitan - UCLA Class of 2021</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>Kendall - UCLA Class of 2021</p>
            <img src={Image2} />
          </div>
          <div className='photocollage__item portrait'>
            <img src={Image12} />
            <p>UCLA Class of 2021</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>UCLA Class of 2021.</p>
            <img src={Image6} />
          </div>       
          <div className='photocollage__item portrait'>
            <img src={Image7} />
            <p>UCLA Class of 2021</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>UCLA Class of 2021</p>
            <img src={Image8} />
          </div>    
          <div className='photocollage__item portrait'>
            <img src={Image11} />
            <p>UCLA Class of 2021</p>
          </div>   
          <div className='photocollage__item portrait'>
            <p>UCLA Class of 2021</p>
            <img src={Image10} />
          </div>   
          <div className='photocollage__item portrait'>
            <img src={Image14} />
            <p>UCLA Class of 2021</p>
          </div>   
          <div className='photocollage__item portrait'>
            <p>UCLA Class of 2021</p>
            <img src={Image13} />
          </div>   
          <div className='photocollage__item portrait'>
            <img src={Image3} />
            <p>UCLA Class of 2021</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>UCLA Class of 2021</p>
            <img src={Image5} />
          </div> 
          <div className='photocollage__item portrait'>
            <img src={Image4} />
            <p>UCLA Class of 2021</p>
          </div>         
          <div className='photocollage__item landscape'>
            <img src={Image15} /><p>Prom 2017</p>
            
          </div>    

          <div className='photocollage__item landscape'>
            <img src={Image17} />
            <p>Prom 2017</p>
            
          </div> 
          <div className='photocollage__item landscape'>
            <img src={Image24} />
            <p>UCSB Class of 2020</p>
          </div> 
          <div className='photocollage__item landscape'>
            <img src={Image26} />
            <p>UCSB Class of 2020</p>
          </div> 
          <div className='photocollage__item landscape'>
            <img src={Image25} />
            <p>UCSB Class of 2020</p>
          </div> 
          <div className='photocollage__item landscape'>
            <img src={Image22} />
            <p>UCSB Class of 2020</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image21} />
            <p>UCSB Class of 2020</p>
          </div>
        </div>
    </div>    
    </>
  );
}

export default Event;