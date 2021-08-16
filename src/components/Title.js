import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import Lottie from 'react-lottie-player'
import logo from '../animations/mila.json'
import Fade from 'react-reveal/Fade';



function Title(props) {

    return (
        <div className='title'>
            <div className='title__container'>
                <div>
                    <i /><h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Title;