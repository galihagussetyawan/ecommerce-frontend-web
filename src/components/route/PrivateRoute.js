import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

//import context
import AuthContext from '../contexts/AuthContext';

//import services
import AuthenticationService from '../../services/AuthenticationService';


export default function PrivateRoute({ component: Component, ...rest }) {
    const { username, isAuthenticated } = useContext(AuthContext);

    return (
        <Route {...rest} render={props => (
            isAuthenticated ? <Component {...props} /> : <Redirect to="/register" />
        )} />
    )
}