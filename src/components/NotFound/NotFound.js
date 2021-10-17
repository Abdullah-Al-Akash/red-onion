import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
        return (
                <div className="container text-center">
                        <img src="https://cdn.dribbble.com/users/644529/screenshots/2662296/404.gif" className="img-fluid" alt="" />
                        <br />
                        <Link to="/">
                                <button id="brand-bg" className="btn btn-danger fw-bolder btn-lg">Back To Home</button>
                        </Link>
                </div>
        );
};

export default NotFound;