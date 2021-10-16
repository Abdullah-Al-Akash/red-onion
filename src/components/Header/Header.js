import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo-main.png';

const Header = () => {

        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <div className="container">
                                <a className="navbar-brand" href="#">
                                        <img src={logo} className="img-fluid" width="130px" alt="" />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                        <NavLink to="/" className="item fw-bolder">
                                                                Home
                                                        </NavLink>
                                                        <NavLink to="/login" className="item ms-2">
                                                                <button id="brand-bg" className="btn btn-danger fw-bolder">Login</button>
                                                        </NavLink>
                                                        <NavLink to="/signup" className="item ms-2">
                                                                <button id="brand-bg" className="btn btn-danger fw-bolder">Sign Up</button>
                                                        </NavLink>
                                                </li>

                                        </ul>
                                </div>
                        </div>
                </nav>
        );
};

export default Header;