/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Service.css'
import Card from './Card/Card';


const Service = () => {

    return (
        <div id='service'>
            <div className='container'>
                <h2 data-aos="zoom-in" data-aos-duration="1000">Services</h2>

                <div className="row row-cols-1 row-cols-md-3">
                    <Card animation='fade-right' title='Figma to HTML5' src='./images/html5.svg'>I will convert your PSD to HTML5 with Latest Bootstrap or Tailwind. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website. To help us by do.</Card>

                    <Card animation='fade-up' title='FRont-end developer' src='./images/code-solid.svg'>As a Front End Web Developer, I'm passionate about creating websites that have no errors and have happy clients. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. To help the operation.</Card>

                    <Card animation='fade-left' title='Figma to React' src='./images/react.svg'>I specialize in translating Figma's . With expertise in Figma-to-React conversion, I transform designs into interactive, responsive user interfaces, bringing seamless and captivating digital experiences to life.</Card>
                </div>
            </div>
        </div >
    );
};

export default Service;