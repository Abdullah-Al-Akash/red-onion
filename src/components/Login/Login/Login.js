import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
        const { signInWithGoogle } = useFirebase();
        return (
                <div className="login">
                        <div className="">
                                <div>
                                        <button onClick={signInWithGoogle} id="brand-bg" className="btn btn-danger btn-lg fw-bolder google-btn">
                                                <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png" className="img-fluid rounded-circle me-3" width="35px" alt="" /> Sign In With Google
                                        </button>
                                </div>
                        </div>
                </div>
        );
};

export default Login;