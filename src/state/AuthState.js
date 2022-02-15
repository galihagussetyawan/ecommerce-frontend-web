import React, { useEffect, useReducer } from 'react';
import AuthContext from '../context/AuthContext';
import AuthReducer from '../reducer/AuthReducer';
import { LOGIN, CHECK_AUTH } from '../actions/AuthAction';

//import services
import AuthenticationService from '../services/AuthenticationService';

export default function AuthState(props) {
    const initialState = {
        username: AuthenticationService.getCurrentUser() === null ? "" : AuthenticationService.getCurrentUser().username,
        password: AuthenticationService.getCurrentUser() == null ? "" : AuthenticationService.getCurrentUser().password,
        token: null,
        isAuthenticated: AuthenticationService.isAuthenticated(),
        store: false,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //check authentication user
    const login = (value) => {
        dispatch({
            type: LOGIN,
            payload: value
        })
    }

    const checkIsAuth = (value) => {
        dispatch({
            type: CHECK_AUTH,
            payload: value
        })
    };
    return (
        <AuthContext.Provider value={{
            username: state.username,
            isAuthenticated: state.isAuthenticated,
            store: state.store,
            token: state.token,
            password: state.password,
            checkIsAuth,
            login,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}