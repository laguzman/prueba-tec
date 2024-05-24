// import { FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actionTypes';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function userReducer(state = initialState, action) {
    switch(action.type) {


        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                loading: false,
                items: action.payload.users
            };


        default:
            return state;
    }
}