/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css'

const Card = (props) => {
    const title = props.title;
    const text = props.children;
    const src = props.src;
    const animation = props.animation;

    return (
        <div className="col" data-aos={animation} data-aos-duration="1000">
            <div className="card">
                <img src={src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;