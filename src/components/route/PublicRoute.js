import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

export default function PublicRoute({ component: Component, redirect, restricted, ...rest }) {
    const { username, isAuthenticated, checkIsAuth } = useContext(AuthContext);

    return (
        <Route {...rest} render={props => (
            isAuthenticated && restricted ? <Redirect to={redirect} /> : <Component {...props} />
        )} />
    )
}