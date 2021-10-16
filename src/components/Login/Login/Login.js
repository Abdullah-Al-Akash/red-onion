import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
        const location = useLocation();
        const history = useHistory();
        const redirect_URI = location.state?.from || '/';
        const { signInWithGoogle } = useAuth();

        const handleGoogleLogin = () => {
                signInWithGoogle()
                        .then(() => {
                                history.push(redirect_URI);
                        })
        }
        return (
                <div className="login">
                        <div className="">
                                <div>
                                        <button onClick={handleGoogleLogin} id="brand-bg" className="btn btn-danger btn-lg fw-bolder google-btn">
                                                <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png" className="img-fluid rounded-circle me-3" width="35px" alt="" /> Sign In With Google
                                        </button>
                                </div>
                        </div>
                </div>
        );
};

export default Login;