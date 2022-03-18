// import { LOGIN, CHECK_AUTH, CHECK_IS_BUYER, CHECK_IS_SELLER } from "../actions/AuthAction";
import { AuthAction } from "../actions/AuthAction";

import AuthenticationService from "../services/AuthenticationService";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case AuthAction.CHECK_AUTH:
            return {
                username: AuthenticationService.getCurrentUser() === null ? "" : AuthenticationService.getCurrentUser().username,
                password: AuthenticationService.getCurrentUser() === null ? "" : AuthenticationService.getCurrentUser().password,
                isAuthenticated: AuthenticationService.isAuthenticated(),
            };
        case AuthAction.LOGIN:
            return {
                ...state,
                isAuthenticated: true
            };

        case AuthAction.CHECK_IS_BUYER:
            return {
                ...state,
                isBuyer: action.payload
            }

        case AuthAction.CHECK_IS_SELLER:
            return {
                ...state,
                isSeller: action.payload
            }


        default:
            return state;
    }
};

export default AuthReducer;