import React, { useEffect, useReducer, useState } from 'react';
import AuthContext from '../context/AuthContext';
import AuthReducer from '../reducer/AuthReducer';
import { AuthAction } from '../actions/AuthAction';

//import services
import AuthenticationService from '../services/AuthenticationService';
import TokenService from '../services/TokenService';

export default function AuthState(props) {

    const initialState = {
        username: TokenService.getUsername(),
        isBuyer: [],
        isSeller: [],
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);


    useEffect(() => {

        if (TokenService.getLocalAccessToken()) {
            AuthenticationService.isAuthenticationBuyer()
                .then(response => checkIsBuyer(response))

            if (state.isBuyer) {
                AuthenticationService.isAuthenticationSeller()
                    .then(response => checkIsSeller(response))
            }

        } else {
            checkIsBuyer(false);
            checkIsSeller(false);
        }

    }, [state.isBuyer, state.isSeller]);

    //check authentication user
    const login = (value) => {
        dispatch({
            type: AuthAction.LOGIN,
            payload: value
        })
    }

    const checkIsAuth = (value) => {
        dispatch({
            type: AuthAction.CHECK_AUTH,
            payload: value
        })
    };

    const checkIsBuyer = (value) => {
        dispatch({
            type: AuthAction.CHECK_IS_BUYER,
            payload: value
        })
    };

    const checkIsSeller = (value) => {
        dispatch({
            type: AuthAction.CHECK_IS_SELLER,
            payload: value
        })
    };

    return (
        <AuthContext.Provider value={{
            username: state.username,
            isBuyer: state.isBuyer,
            isSeller: state.isSeller,
            checkIsAuth,
            login,
            checkIsBuyer,
            checkIsSeller
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}