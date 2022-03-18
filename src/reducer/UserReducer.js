import { UserAction } from "../actions/UserAction";

const UserReducer = (state, action) => {

    switch (action.type) {
        case UserAction.UPDATE_USER:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                username: action.payload.username,
                contact: action.payload.contact
            }

        default:
            return state;
    }
};

export default UserReducer;