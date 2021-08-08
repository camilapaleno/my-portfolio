
import React from 'react';
import './Pages.css';
import CardItem from './CardItem';
import Example from '../images/example.jpg';
import BPS from '../images/bps_preview.png';
import BXB from '../images/bxb_preview.png';
import NN from '../images/nn_preview.png';
import Lingard from '../images/lingard_preview.png';
import Carolyn from '../images/carolyn_preview.png';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='title__wrapper'>
            <h1>Web Development &amp; Design Portfolio</h1>
            <p>I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.
            I also create animations and graphics for websites and social media using Adobe Photoshop, Illustrator, and After Effects.
            </p>           
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={BPS}
              text='Bruin Polyglot Society'
              label='HTML &amp; CSS'
              description='I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.'
              path='/comingsoon'
            />
            <CardItem
              src={BXB}
              text='Bxb Beanie Ball'
              label='HTML &amp; CSS'
              description='I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.'
              path='/comingsoon'
            />
            <CardItem
              src={NN}
              text='Nippon Niche'
              label='WordPress'
              description='I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.'
              path='/comingsoon'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Lingard}
              text='Lingard Events'
              label='HTML &amp; CSS'
              description='I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.'
              path='/comingsoon'
            />
            <CardItem
              src={Carolyn}
              text='Carolyn Kamii'
              label='HTML &amp; CSS'
              description='I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.'
              path='/comingsoon'
            />
            <CardItem
              src={Example}
              text='Dr. Betty'
              label='HTML &amp; CSS'
              description='I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.'
              path='/comingsoon'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;