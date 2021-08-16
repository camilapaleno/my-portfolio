import React from 'react';
import { Link } from 'react-router-dom';

function PhotoPortfolios(props) {
  return (
    <div className='portfolio'>
        <Link className='back__arrow' to='./Photo'><i class="fas fa-arrow-circle-left"></i></Link>
        <div className='portfolio__container'>
            <br /><br />
            <h1>{props.title}</h1><br />
            <p>{props.description}</p><br />
            <h3>{props.quote}</h3><br />
            <div className='portfolio__description photo'>
                <img src={props.image1} alt='portfolio'/>
                <p>{props.description1}</p>
            </div>
            <div className='portfolio__description photo'>
                <p>{props.description2}</p>
                <img src={props.image2} alt='portfolio'/>
            </div><br />
            <p>{props.description3}</p><br /><br />
        </div>
    </div>
  );
}

export default PhotoPortfolios;