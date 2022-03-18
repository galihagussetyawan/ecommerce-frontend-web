import React, { useReducer, useEffect } from "react";

import { StoreAction } from "../actions/StoreAction";
import StoreReducer from "../reducer/StoreReducer";
import StoreContext from "../context/StoreContext";

//import service
import StoreService from "../services/StoreService";
import TokenService from "../services/TokenService";

export default function StoreState(props) {

    const initialState = {
        storeId: [],
        storeName: [],
        storeUsername: [],
    };

    const [state, dispatch] = useReducer(StoreReducer, initialState);

    useEffect(() => {

        if (TokenService.getLocalAccessToken() === undefined) {
            return null;
        }

        StoreService.getStore()
            .then(response => getStore(response))

    }, [])


    const getStore = (value) => {
        dispatch({
            type: StoreAction.GET_STORE,
            payload: value
        })
    }

    return (
        <StoreContext.Provider value={{
            storeId: state.storeId,
            storeName: state.storeName,
            storeUsername: state.storeUsername
        }}>
            {props.children}
        </StoreContext.Provider>
    );
}