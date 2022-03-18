import { StoreAction } from "../actions/StoreAction";

const StoreReducer = (state, action) => {

    switch (action.type) {
        case StoreAction.GET_STORE:
            return {
                ...state,
                storeId: action.payload.id,
                storeName: action.payload.name,
                storeUsername: action.payload.username
            }

        default:
            return state;
    }

};

export default StoreReducer;