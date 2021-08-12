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
            <ul className='portfolio__collage'>
                <li><img src={props.image3} alt='portfolio'/></li>
                <li><img src={props.image4} alt='portfolio'/></li>
                <li><img src={props.image5} alt='portfolio'/></li>
                <li><img src={props.image6} alt='portfolio'/></li>
                <li><img src={props.image7} alt='portfolio'/></li>
                <li><img src={props.image8} alt='portfolio'/></li>
                <li><img src={props.image9} alt='portfolio'/></li>
                <li><img src={props.image10} alt='portfolio'/></li>
                <li><img src={props.image11} alt='portfolio'/></li>
                <li><img src={props.image12} alt='portfolio'/></li>
            </ul>
        </div>
    </div>
  );
}

export default PhotoPortfolios;