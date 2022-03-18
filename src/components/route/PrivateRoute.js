import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

//import context
import AuthContext from '../../context/AuthContext';

export default function PrivateRoute({ component: Component, role, ...rest }) {
    const { isSeller, isBuyer } = useContext(AuthContext);

    const check = () => {

        if (role === "BUYER") {
            // return isBuyer.length === 0 ? false : isBuyer;
            return isBuyer;
        } else if (role === "SELLER") {
            // return isSeller.length === 0 ? false : isSeller;
            return isSeller;
        }

        return false;
    };

    return (
        <>
            <Route {...rest} render={props => (
                check() ? <Component {...props} /> : <Redirect to="/register" />
            )} />
        </>
    )
}