import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Lottie from 'react-lottie-player'
import logo from '../animations/mila.json'
import Fade from 'react-reveal/Fade';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <Fade left>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <Lottie
                        loop={false}
                        animationData={logo}
                        play
                        style={{ width: 75, height: 75 }}
                        />
                        {/* <img src={logo} /> */}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                <i class="fas fa-home"></i><p>home</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/web' className='nav-links' onClick={closeMobileMenu}>
                                <i class="fas fa-laptop-code"></i><p>web</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/photo' className='nav-links' onClick={closeMobileMenu}>
                                <i class="fas fa-camera-retro"></i><p>photo</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            <i class="fas fa-poo"></i><p>about</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                <i class="fas fa-envelope"></i><p>contact</p>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                    <li className='nav-item'>
                            <div className='nav-socials'>
                                <a href='https://github.com/camilapaleno' className='nav-social-links' onClick={closeMobileMenu}>
                                    <i class="fab fa-github"></i>
                                </a> 
                                <a href='https://www.linkedin.com/in/camila-paleno-489386101/' className='nav-social-links' onClick={closeMobileMenu}>
                                    <i class="fab fa-linkedin-in"></i>
                                </a> 
                                <a href='https://www.instagram.com/pc.mila/' className='nav-social-links' onClick={closeMobileMenu}>
                                    <i class="fab fa-instagram"></i>
                                </a> 
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fade>
    )
}

export default Navbar
