import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="Logo" />
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
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                <i class="fas fa-camera-retro"></i><p>photo</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <i class="fas fa-poo"></i><p>about</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                <i class="fas fa-envelope"></i><p>contact</p>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                    <li className='nav-item'>
                            <div className='nav-socials'>
                                <Link to='/' className='nav-social-links' onClick={closeMobileMenu}>
                                    <i class="fab fa-github"></i>
                                </Link> 
                                <Link to='/' className='nav-social-links' onClick={closeMobileMenu}>
                                    <i class="fab fa-linkedin-in"></i>
                                </Link> 
                                <Link to='/' className='nav-social-links' onClick={closeMobileMenu}>
                                    <i class="fab fa-instagram"></i>
                                </Link> 
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
