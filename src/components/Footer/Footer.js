import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
        return (
                <div className="bg-dark p-5">
                        <div className="row container text-light">
                                <div className="col-lg-6">
                                        <Link to="/">
                                                <img src={logo} className="img-fluid mb-5" width="220px" alt="" />
                                        </Link>
                                </div>
                                <div className="col-lg-3">
                                        <p className="p-0 m-0 pb-1 footer-item">About Online Food</p>
                                        <p className="p-0 m-0 pb-1 footer-item">Read Our Blog</p>
                                        <p className="p-0 m-0 pb-1 footer-item">Sign up to deliver</p>
                                        <p className="footer-item">Add your Restaurant</p>
                                </div>
                                <div className="col-lg-3">
                                        <p className="p-0 m-0 pb-1 footer-item">Get Help</p>
                                        <p className="p-0 m-0 pb-1 footer-item">Read FAQs</p>
                                        <p className="p-0 m-0 pb-1 footer-item">View All Clients</p>
                                        <p className="footer-item">Restaurants near Me</p>
                                </div>
                        </div>
                </div>
        );
};

export default Footer;