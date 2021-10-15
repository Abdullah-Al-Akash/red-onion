import React from 'react';
import './Banner.css';

const Banner = () => {
        return (
                <div className="banner">
                        <div className="container search-field h-100">
                                <div>
                                        <h2 className="pb-3 brand-color">Best food waiting for your belly</h2>
                                        <div className="input-group">
                                                <input type="text" className="form-control p-3 input-field" placeholder="Search Food" />
                                                <button id="brand-bg" className="btn btn-danger fw-bolder px-4 input-btn">Search</button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;