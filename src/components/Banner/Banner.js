import React from 'react';
import './Banner.css';

const Banner = () => {
        return (
                <div className="banner">
                        <div className="container search-field h-100">
                                <div>
                                        <h2 className="pb-3">Best food waiting for your belly</h2>
                                        <div class="input-group">
                                                <input type="text" class="form-control p-3 input-field" placeholder="Search Food" />
                                                <button class="btn btn-danger px-4 input-btn">Search</button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;