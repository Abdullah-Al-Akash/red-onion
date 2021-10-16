import React from 'react';
import logo from '../../images/logo-main.png'

const Footer = () => {
        return (
                <div className="bg-dark p-5">
                        <div className="row container brand-color">
                                <div className="col-lg-6">
                                        <img src={logo} className="img-fluid mb-5" width="150px" alt="" />
                                </div>
                                <div className="col-lg-3">
                                        <p className="p-0 m-0 pb-1">About Online Food</p>
                                        <p className="p-0 m-0 pb-1">Read Our Blog</p>
                                        <p className="p-0 m-0 pb-1">Sign up to deliver</p>
                                        <p>Add your Restaurant</p>
                                </div>
                                <div className="col-lg-3">
                                        <p className="p-0 m-0 pb-1">Get Help</p>
                                        <p className="p-0 m-0 pb-1">Read FAQs</p>
                                        <p className="p-0 m-0 pb-1">View All Clients</p>
                                        <p>Restaurants near Me</p>
                                </div>
                        </div>
                </div>
        );
};

export default Footer;