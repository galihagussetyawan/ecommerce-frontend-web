import React, { Component, createContext, useEffect, useState } from 'react';

// import services
import AuthenticationService from '../../services/AuthenticationService';

const AuthContext = createContext();

export class AuthProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            isAuthenticated: this.checkAuthIsAuth()
        }
    }

    checkAuthIsAuth() {
        return AuthenticationService.isAuthenticated();
    }

    render() {
        const { username, isAuthenticated } = this.state;

        return (
            <AuthContext.Provider value={{ username, isAuthenticated }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContext;
