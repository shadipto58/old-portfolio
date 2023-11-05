/* eslint-disable no-unused-vars */
import React from 'react';
import './Review.css'
import Slider from "react-slick";
import ReviewCard from './ReviewCard/ReviewCard';

const Review = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div id='review'>
            <div className='container'>
                <h2 data-aos="zoom-in">Testimonial</h2>
                <Slider {...settings}>
                    <ReviewCard img='images/testimonial-1.jpg' name='Mike Jorden' profession='Web devloper'>Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quissuscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.</ReviewCard>

                    <ReviewCard img='images/testimonial-2.jpg' name='Alex Kain' profession='Businessman'>Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quissuscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.</ReviewCard>

                    <ReviewCard img='images/testimonial-3.jpg' name='John doe' profession='Web devloper'>Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quissuscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.</ReviewCard>

                    <ReviewCard img='images/testimonial-2.jpg' name='Jack olive' profession='UX Designer'>Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quissuscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.</ReviewCard>
                </Slider>
            </div>
        </div>
    );
};

export default Review;