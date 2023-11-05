import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <div id='contact'>
            <div className='container'>
                <div className='contact-wraper'>
                    <div className='contact-left'>
                        <h2>Shadipto Mojumder</h2>
                        <div className="icon"><i className="fa-solid fa-phone"></i>
                            <p><FontAwesomeIcon icon={faPhoneAlt} /> <span>+880 1892157351</span></p>
                        </div>
                        <div className="icon">
                            <p><FontAwesomeIcon icon={faEnvelope} /> <span>shadiptomojumder@gmail.com</span></p>
                        </div>
                        <div className="icon">
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>94/6 mirpur, Dhaka-1206</span></p>
                        </div>
                        <div className="social-icon">
                            <a className="" href="https://www.linkedin.com/in/shadipto-mojumder/"><FaLinkedinIn /></a>
                            <a className="" href=""><FaFacebookF /></a>
                            <a className="" href=""><FaInstagram /></a>
                            <a className="" href=""><FaTwitter /></a>
                        </div>
                    </div>
                    <div className='contact-right'>
                        <form action="">
                            <input type="text" id="name" placeholder="Your Name" required="required" />
                            <input type="text" id="name" placeholder="Your Name" required="required" />
                            <input type="text" id="name" placeholder="Your Name" required="required" />
                            <textarea rows='5' id="message" placeholder="Message" required="required"></textarea>
                            <button>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;