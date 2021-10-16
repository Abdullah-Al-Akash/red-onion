import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
        const { user, isLoading } = useAuth();
        if (isLoading) {
                return <div className="text-center mt-5 pt-5">
                        <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" className="img-fluid" alt="" />
                </div>
        }
        return (
                <Route
                        {...rest}
                        render={({ location }) =>
                                user?.email ? (
                                        children
                                ) : (
                                        <Redirect
                                                to={{
                                                        pathname: "/login",
                                                        state: { from: location }
                                                }}
                                        />
                                )
                        }
                />
        );
};

export default PrivateRoute;