import { LOGIN, CHECK_AUTH } from "../actions/AuthAction";

import AuthenticationService from "../services/AuthenticationService";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case CHECK_AUTH:
            return {
                username: AuthenticationService.getCurrentUser() === null ? "" : AuthenticationService.getCurrentUser().username,
                password: AuthenticationService.getCurrentUser() === null ? "" : AuthenticationService.getCurrentUser().password,
                isAuthenticated: AuthenticationService.isAuthenticated(),
            };
        case LOGIN:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                isAuthenticated: true
            };
        default:
            return state;
    }
};

export default AuthReducer;