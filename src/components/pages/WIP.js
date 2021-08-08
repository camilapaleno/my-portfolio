import React from 'react';
import '../../App.css';
import '../Pages.css';
import { Link } from 'react-router-dom';

function WIP () {
    return (
        <>
        <div className='comingsoon'>
            <Link className='back__arrow' to='./Home'><i class="fas fa-arrow-circle-left"></i></Link>  
           <p>Coming soon!</p>
        </div>
        </>

    );
}

export default WIP;