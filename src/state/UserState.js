import React, { useEffect, useReducer } from "react";
import UserContext from "../context/UserContext";
import UserReducer from "../reducer/UserReducer";
import { UserAction } from "../actions/UserAction";


//import service
import UserService from "../services/UserService";
import TokenService from "../services/TokenService";

export default function UserState(props) {

    const initialState = {
        id: [],
        name: [],
        username: [],
        contact: [],
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    useEffect(() => {

        if (TokenService.getLocalAccessToken() === undefined) {
            return null;
        }

        UserService.getUser()
            .then(response => {
                updateUser(response)
            })

    }, [])

    const updateUser = (value) => {
        dispatch({
            type: UserAction.UPDATE_USER,
            payload: value
        })
    };

    return (
        <UserContext.Provider value={{
            id: state.id,
            username: state.username,
            name: state.name,
            contact: state.contact,
            updateUser

        }}>
            {props.children}
        </UserContext.Provider>
    );
}