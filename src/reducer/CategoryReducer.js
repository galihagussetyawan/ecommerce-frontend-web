import { CategoryAction } from "../actions/CategoryAction";

const CategoryReducer = (state, action) => {

    switch (action.type) {
        case CategoryAction.GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }

        default:
            return state;
    }
};

export default CategoryReducer;