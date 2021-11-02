import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';

export default function PublicRoute({ component: Component, redirect, restricted, ...rest }) {
    const { username, isAuthenticated } = useContext(AuthContext);

    return (
        <Route {...rest} render={props => (
            isAuthenticated && restricted ? <Redirect to={redirect} /> : <Component {...props} />
        )} />
    )
}