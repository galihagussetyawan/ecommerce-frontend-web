import { ProductAction } from "../actions/ProductAction";

const ProductReducer = (state, action) => {

    switch (action.type) {
        case ProductAction.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loadedProucts: true
            }

        default:
            return state;
    }

}

export default ProductReducer;