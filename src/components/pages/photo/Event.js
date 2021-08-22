import React from 'react';
import '../../PhotoCollage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
import Image17 from '../../../images/Event/event_17.jpg';
import Image21 from '../../../images/Event/event_21.jpg';
import Image22 from '../../../images/Event/event_22.jpg';
import Image24 from '../../../images/Event/event_24.jpg';
import Image25 from '../../../images/Event/event_25.jpg';
import Image26 from '../../../images/Event/event_26.jpg';

function Event() {
  return (  
    <>
      <Helmet>
          <title>Camila Paleno | Graduation and Prom Photography</title>
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
            <img src={Image9} alt='Rachel &amp; Eitan - UCLA Class of 2021'/>
            <p>Rachel &amp; Eitan - UCLA Class of 2021</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>Kendall - UCLA Class of 2021</p>
            <img src={Image2} alt='Kendall - UCLA Class of 2021'/>
          </div>
          <div className='photocollage__item portrait'>
            <img src={Image12} alt='UCLA Class of 2021'/>
            <p>UCLA Class of 2021</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>UCLA Class of 2021.</p>
            <img src={Image6} alt='UCLA Class of 2021'/>
          </div>       
          <div className='photocollage__item portrait'>
            <img src={Image7} alt='UCLA Class of 2021'/>
            <p>UCLA Class of 2021</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>UCLA Class of 2021</p>
            <img src={Image8} alt='UCLA Class of 2021'/>
          </div>    
          <div className='photocollage__item portrait'>
            <img src={Image11} alt='UCLA Class of 2021'/>
            <p>UCLA Class of 2021</p>
          </div>   
          <div className='photocollage__item portrait'>
            <p>UCLA Class of 2021</p>
            <img src={Image10} alt='UCLA Class of 2021'/>
          </div>   
          <div className='photocollage__item portrait'>
            <img src={Image14} alt='UCLA Class of 2021'/>
            <p>UCLA Class of 2021</p>
          </div>   
          <div className='photocollage__item portrait'>
            <p>UCLA Class of 2021</p>
            <img src={Image13} alt='UCLA Class of 2021'/>
          </div>   
          <div className='photocollage__item portrait'>
            <img src={Image3} alt='UCLA Class of 2021'/>
            <p>UCLA Class of 2021</p>
          </div>
          <div className='photocollage__item portrait'>
            <p>UCLA Class of 2021</p>
            <img src={Image5} alt='UCLA Class of 2021'/>
          </div> 
          <div className='photocollage__item portrait'>
            <img src={Image4} alt='UCLA Class of 2021'/>
            <p>UCLA Class of 2021</p>
          </div>         
          <div className='photocollage__item landscape'>
            <img src={Image15} alt='UCLA Class of 2021'/>
            <p>Prom 2017</p>
          </div>    
          <div className='photocollage__item landscape'>
            <img src={Image17} alt='Prom 2017'/>
            <p>Prom 2017</p>
          </div> 
          <div className='photocollage__item landscape'>
            <img src={Image24} alt='UCSB Class of 2020'/>
            <p>UCSB Class of 2020</p>
          </div> 
          <div className='photocollage__item landscape'>
            <img src={Image26} alt='UCSB Class of 2020'/>
            <p>UCSB Class of 2020</p>
          </div> 
          <div className='photocollage__item landscape'>
            <img src={Image25} alt='UCSB Class of 2020'/>
            <p>UCSB Class of 2020</p>
          </div> 
          <div className='photocollage__item landscape'>
            <img src={Image22} alt='UCSB Class of 2020'/>
            <p>UCSB Class of 2020</p>
          </div>
          <div className='photocollage__item landscape'>
            <img src={Image21} alt='UCSB Class of 2020'/>
            <p>UCSB Class of 2020</p>
          </div>
        </div>
    </div>    
    </>
  );
}

export default Event;