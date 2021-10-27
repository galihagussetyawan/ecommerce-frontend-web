import React, { Component, createContext, useEffect, useState } from 'react';

// import services
import AuthenticationService from '../../services/AuthenticationService';

const AuthContext = createContext();

// export class AuthProvider extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: '',
//             isAuthenticated: false
//         }
//     }

//     componentDidMount() {
//         AuthenticationService.isAuthenticated()
//             .then(response => {
//                 this.setState({ isAuthenticated: response })
//             })
//     }

//     render() {
//         const { username, isAuthenticated } = this.state;

//         return (
//             <AuthContext.Provider value={{ username, isAuthenticated }}>
//                 {this.props.children}
//             </AuthContext.Provider>
//         );
//     }
// }

// export default AuthContext;

export function AuthProvider(props) {
    const [username, setUsername] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        AuthenticationService.isAuthenticated()
            .then(response => setIsAuthenticated(response));
    }, [isAuthenticated])

    return (
        <AuthContext.Provider value={{ username, isAuthenticated }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
