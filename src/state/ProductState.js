import React, { useReducer, useEffect } from "react";

// import context
import { ProductAction } from "../actions/ProductAction";
import ProductContext from "../context/ProductContext";
import ProductReducer from "../reducer/ProductReducer";

//import services
import ProductService from "../services/ProductService";

export default function ProductState(props) {

    const initialState = {
        products: [],
        loadedProucts: false
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    useEffect(() => {

        ProductService.getProducts()
            .then(response => {
                setTimeout(() => {
                    getProducts(response);
                }, 3000);
            });
    }, [])

    const getProducts = (value) => {
        dispatch({
            type: ProductAction.GET_PRODUCTS,
            payload: value
        })
    }

    return (

        <ProductContext.Provider value={{
            products: state.products,
            loadedProucts: state.loadedProucts
        }}>
            {props.children}
        </ProductContext.Provider>
    );
}