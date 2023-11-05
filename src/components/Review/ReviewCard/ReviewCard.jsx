/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ReviewCard.css'

const ReviewCard = (props) => {
    const comment = props.children;
    const name = props.name;
    const profession = props.profession;
    const img = props.img;
    return (
        <div>
            <div className="testimonial-item">
                <div className="testimonial-img">
                    <img src={img} alt="Image" />
                </div>
                <div className="testimonial-text">
                    <p>{comment}</p>
                    <h3>{name}</h3>
                    <h4>{profession}</h4>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;