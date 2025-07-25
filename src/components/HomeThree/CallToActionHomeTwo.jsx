import React from 'react';
import { Link  } from 'react-router-dom';
import BackgroundImage from '../../assets/images/background/client5.jpg';
import IconLogo from '../../assets/images/resource/icon-logo.png'; 
function CallToActionHomeTwo({ className }) {
    return (
        <section
            className={`call-to-action mb-40 alternate ${className || ''}`}
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="auto-container">
                <div className="title-box wow fadeInUp">
                    <div className="icon bounce-y">
                        <img src={IconLogo} alt="Icon Logo" />
                    </div>
                    <div className="sub-title text-warning">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui!</div>
                    <h1 className="title">
                         Looking for the Best <br />Dairy and Milk ?
                    </h1>
                    <Link  to="/" className="theme-btn btn-style-one hvr-light">
                        <span className="btn-title">get in touch</span>
                    </Link >
                </div>
            </div>
        </section>
    );
}

export default CallToActionHomeTwo;
