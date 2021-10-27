import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext, { AuthProvider } from '../contexts/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
    const { username, isAuthenticated } = useContext(AuthContext);

    return (
        <Route {...rest} render={props => (
            isAuthenticated ? <Component {...props} /> : <Redirect to="/register" />
        )} />
    )
}