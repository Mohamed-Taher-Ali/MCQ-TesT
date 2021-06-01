import {user} from "../types"

const initState = {
    user: {},
    users: [],
    error: ""
}

export default (state=initState, action) => {
    switch (action.type) {
        case user.GET_USERS: {
            return {
                ...state,
                users: action.payload
            };
        }
        case user.SET_USER: {
            return {
                ...state,
                error: "",
                user: action.payload,
            };
        }
        case user.SET_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }
        case user.SAVE_USER: {
            return {
                ...state,
                user: action.payload,
                users: [
                    action.payload,
                    ...state.users
                ]
            };
        }
        default: return state;
    }
}