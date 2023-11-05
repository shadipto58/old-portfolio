/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='sticky-top'>
            <nav className="nav-wraper">
                <a className="navbar-brand" href="/"><img src="./images/logo-2.svg" alt="" /></a>
                <div className='mobile-icon' onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div id="navbar-text">
                    <div className={menuOpen ? "open" : ""}>

                        <a className="nav-text" href="/">Home</a>
                        <a className="nav-text" href="#about">About</a>
                        <a className="nav-text" href="#service">Service</a>
                        <a className="nav-text" href="#review">Review</a>
                        <a className="nav-text" href="#contact">Contact</a>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;