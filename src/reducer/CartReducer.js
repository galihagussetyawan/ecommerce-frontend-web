import { CartAction } from "../actions/CartAction";

const CartReducer = (state, action) => {

    switch (action.type) {
        case CartAction.UPDATE_CART:
            return {
                ...state,
                data: action.payload,
            }

        case CartAction.UPDATE_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload.totalPrice,
                totalQuantity: action.payload.totalQuantity
            }

        case CartAction.CHECK_DATA_CHANGE:
            return {
                ...state,
                dataChange: action.payload
            }

        default:
            return state;
    }
};

export default CartReducer;