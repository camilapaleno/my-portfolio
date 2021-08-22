
import React from 'react';
import './Pages.css';
import CardItem from './CardItem';
import Example from '../images/example.jpg';
import BPS from '../images/bps_preview.png';
import BXB from '../images/bxb_preview.png';
import NN from '../images/nn_preview.png';
import Lingard from '../images/lingard_preview.png';
import Carolyn from '../images/carolyn_preview.png';
import Fade from 'react-reveal/Fade';

function WebCards() {
  return (
    <Fade>
    <div className='cards'>
      <a href="https://github.com/camilapaleno" className='socials__container'>
          <i class="fab fa-github"></i>
      </a> 
      <div className='cards__container'>
        <div className='title__wrapper'>
            <h1>Web Development &amp; Design Portfolio</h1><br/>
            <p>I use HTML, CSS, and Javascript to design and develop websites that are desktop and mobile friendly.
            I also create animations and graphics for websites and social media using Adobe Photoshop, Illustrator, and After Effects.
            </p><br/>    
            <p>The website you're currently on was made with React.js.</p>     
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={BPS}
              text='Bruin Polyglot Society'
              label='HTML &amp; CSS'
              color='blue'
              description='Made with HTML, CSS, Javascript, and After Effects (for the animations).'
              path='/bps'
            />
            <CardItem
              src={BXB}
              text='Bxb Beanie Ball'
              label='HTML &amp; CSS'
              color='blue'
              description='The first website I ever made. Made with HTML and CSS.'
              path='/bxb'
            />
            <CardItem
              src={NN}
              text='Nippon Niche'
              label='WordPress'
              color='navy'
              description='* Apologies, this page is in progress! Come back soon. *'
              path='/web'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Lingard}
              text='Lingard Events'
              label='HTML &amp; CSS'
              color='blue'
              description='* Apologies, this page is in progress! Come back soon. *'
              path='/web'
            />
            <CardItem
              src={Carolyn}
              text='Carolyn Kamii'
              label='HTML &amp; CSS'
              color='blue'
              description='* Apologies, this page is in progress! Come back soon.* '
              path='/web'
            />
            <CardItem
              src={Example}
              text='Dr. Betty'
              label='HTML &amp; CSS'
              color='blue'
              description='* Apologies, this page is in progress! Come back soon.* '
              path='/web'
            />
          </ul>
        </div>
      </div>
    </div>
    </Fade>
  );
}

export default WebCards;