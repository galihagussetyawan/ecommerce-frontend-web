import React, { useEffect, useReducer, useState } from "react";

import { CartAction } from "../actions/CartAction";
import CartReducer from "../reducer/CartReducer";
import CartContext from "../context/CartContext";

//import services
import CartService from "../services/CartService";
import TokenService from "../services/TokenService";

export default function CartState(props) {

    const initialState = {
        data: [],
        totalQuantity: 0,
        totalPrice: 0,
        dataChange: false
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);
    const [dataLoad, setDataLoad] = useState(false);

    useEffect(() => {

        if (TokenService.getLocalAccessToken() === undefined) {
            return null;
        }

        if (dataLoad === false) {

            CartService.getCart()
                .then(response => {
                    updateCart(response);
                    setDataLoad(true);
                })

        } else if (dataLoad && state.dataChange) {
            CartService.getCart()
                .then(response => updateCart(response))
        }


    }, [state.dataChange, state.data.length]);

    useEffect(() => {
        let totalPrice = 0;
        let totalQuantity = 0;

        if (dataLoad === false || state.dataChange) {

            state.data.length && state.data.forEach(data => {
                if (data.checkout) {
                    totalPrice += data.amount;
                    totalQuantity += data.quantity;
                }
            });

            updateTotalPrice({ totalPrice, totalQuantity });
        }


    }, [state.data.length, state.data]);

    const updateCart = (value) => {
        dispatch({
            type: CartAction.UPDATE_CART,
            payload: value
        })
    };

    const updateTotalPrice = (value) => {
        dispatch({
            type: CartAction.UPDATE_TOTAL_PRICE,
            payload: value
        })
    };

    const checkDataChange = (value) => {
        dispatch({
            type: CartAction.CHECK_DATA_CHANGE,
            payload: value
        })
    }

    return (
        <CartContext.Provider value={{
            data: state.data,
            totalPrice: state.totalPrice,
            totalQuantity: state.totalQuantity,
            dataChange: state.dataChange,
            checkDataChange,
            updateCart,
        }}>

            {props.children}
        </CartContext.Provider>
    );

}