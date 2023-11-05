/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Hero.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Hero = () => {
    const [text] = useTypewriter({
        words: ['Front End Developer', 'Back End Developer', 'React Devloper'],
        loop: 0
    })
    return (
        <div className="hero">
            <div className="container hero-wraper">
                <div className='hero-left'>
                    <div className="hero-content">
                        <div className="hero-text">
                            <p>I'm</p>
                            <h1>Shadipto<span>Mojumder</span></h1>
                            <h2># {text}</h2>
                            <Cursor cursorColor='rebeccapurple' />
                        </div>
                        <div className="hero-btn">
                            <a href="#">Hire Me</a>
                            <a href="#">Contact Me</a>
                        </div>
                    </div>
                </div>
                <div className='hero-right'>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='cool'><img src="./images/profile-pic-4.png" alt="" /></div>
                </div>
            </div>

        </div>
    );
};

export default Hero;