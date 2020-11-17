import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="row footer m-auto p-5">
            <div className="col-md-3 offset-md-1">
                <p>H#340 (4th Floor), Road #24,</p>
                <p>New DOHS, MahaKhali, Dhaka, Bangladesh</p>
                <p>Phone: 0186645543</p>
                <p>E-mail: info@gmail.com</p>
            </div>
            <div className="col-md-2">
                <h4>Company</h4>
                <p>About</p>
                <p>Site Map</p>
                <p>Support center</p>
                <p>Terms Conditions</p>
                <p>Submit Listing</p>

            </div>
            <div className="col-md-2">
                <h4>Quick Links</h4>
                <p>Quick Links</p>
                <p>Rentals</p>
                <p>Sales</p>
                <p>Contact</p>
                <p>Terms Conditions</p>
                <p>Our Blog</p>
            </div>
            <div className="col-md-3">
                <h4>About Us</h4>
                <p>We are the top real estate</p>
                <p>agency in Sydney, with agents</p>
                <p>available to answer any questions</p>
                <p>questions 24/7</p>
            </div>

        </div>
    );
};

export default Footer;