import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

export default function PublicRoute({ component: Component, role, redirect, restricted, ...rest }) {
    const { isBuyer, isSeller } = useContext(AuthContext);

    const checkAuthentication = () => {

        if (role === "PUBLIC") {
            return false;
        } else if (role === "BUYER") {
            return isBuyer;
            // return isBuyer.length === 0 ? false : isBuyer;
        } else if (role === "SELLER") {
            return isSeller;
            // return isSeller.length === 0 ? false : isSeller;
        }

        return false;
    };

    return (
        <Route {...rest} render={props => (
            checkAuthentication() && restricted ? <Redirect to={redirect} /> : <Component {...props} />
        )} />
    )
}