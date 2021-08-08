
import React from 'react';
import './Pages.css';
import CardItem from './CardItem';
import Example from '../images/example.jpg';
import Tom from '../images/tom.jpeg';
import Mariana from '../images/mariana.jpeg';
import Maggie from '../images/maggie.jpg';
import Kickback from '../images/kb15.jpg';
import NP from '../images/np1.jpg';
import Tru from '../images/tru1.jpg';
import Thailand from '../images/thailand9.JPG';
import Iceland from '../images/iceland1.jpeg';
import CR from '../images/cr2.jpg';
import Mexico from '../images/mexico2.jpg';
import Spain from '../images/spain1.jpg';
import Event from '../images/event1.jpeg';

function PhotoCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='title__wrapper'>
            <h1>Portrait &amp; Product Photo Portfolio</h1>
            <p>I've been taking photos with my grandpas DSLR since I was 14. While I attended U.C.L.A., I worked at the campus photo studio as a portrait photographer. I've taken many take portraits and product photos, here are some of my favorites. Also, check out a few of my photos from my recent travels below. :)
            </p>           
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Kickback}
              text='Kickback Coldbrew'
              label='Product'
              description='Coffee + CBD.'
              path='/kickback'
            />
            <CardItem
              src={Tru}
              text='Truronia'
              label='Product'
              description='100% Aronia berries.'
              path='/comingsoon'
            />
            <CardItem
              src={Event}
              text='Event'
              label='Event'
              description='Graduation, Prom, and more.'
              path='/comingsoon'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Maggie}
              text='L.A. Musicians'
              label='Portrait'
              description='For album covers and social media.'
              path='/lamusicians'
            />
            <CardItem
              src={Mariana}
              text='Mariana'
              label='Portrait'
              description='Girl who looks like me.'
              path='/mariana'
            />
            <CardItem
              src={Tom}
              text='Tom'
              label='Portrait'
              description='Musician, Artist, Creative.'
              path='/tom'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Example}
              text='France'
              label='Travel'
              description='2017 - Visiting Family.'
              path='/comingsoon'
            />
            <CardItem
              src={NP}
              text='United States'
              label='Travel'
              description='2017-2021 - Roadtrips &amp; camping.'
              path='/comingsoon'
            />
          </ul>
          <ul className='cards__items'>
              <CardItem
                src={CR}
                text='Costa Rica'
                label='Travel'
                description='2018 - Beaches &amp; waterfalls.'
                path='/comingsoon'
              />
              <CardItem
                src={Mexico}
                text='Mexico'
                label='Travel'
                description='2021 - Solo trip #2.'
                path='/comingsoon'
              />
              <CardItem
                src={Spain}
                text='Spain'
                label='Travel'
                description='2019 - Empanadas.'
                path='/comingsoon'
              />
            </ul>
          <ul className='cards__items'>
          <CardItem
              src={Iceland}
              text='Iceland'
              label='Travel'
              description='2017 - First trip without mom &amp; dad!'
              path='/comingsoon'
            />
            <CardItem
              src={Thailand}
              text='Thailand'
              label='Travel'
              description='2019 - First solo trip.'
              path='/thailand'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default PhotoCards;