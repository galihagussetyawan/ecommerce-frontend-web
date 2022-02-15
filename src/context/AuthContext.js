// import React, { Component, createContext, useEffect, useState } from 'react';

// // import services
// import AuthenticationService from '../services/AuthenticationService';

// const AuthContext = createContext();

// export class AuthProvider extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: this.getUser() ? this.getUser().username : '',
//             isAuthenticated: this.checkAuthIsAuth(),
//             store: false
//         }
//     }

//     checkAuthIsAuth() {
//         return AuthenticationService.isAuthenticated();
//     }

//     getUser() {
//         return AuthenticationService.getCurrentUser();
//     }

//     render() {
//         const { username, store, isAuthenticated } = this.state;
//         console.log(username);

//         return (
//             <AuthContext.Provider value={{ username, store, isAuthenticated }}>
//                 {this.props.children}
//             </AuthContext.Provider>
//         );
//     }
// }

// export default AuthContext;

import { createContext } from 'react';

const AuthContext = createContext();

export default AuthContext;