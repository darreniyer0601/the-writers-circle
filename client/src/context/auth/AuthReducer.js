import {
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOGOUT,
    USER_LOADED
} from '../types';

const AuthReducer = (state, action)  => {
    switch(action.type) {
        case AUTH_SUCCESS:
            // Add token to local storage
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                authenticated: true,
                token: action.payload
            }
        case USER_LOADED:
            return {
                ...state,
                authenticated: true,
                user: action.payload
            }
        case AUTH_FAIL:
        case LOGOUT:
            // Remove token from local storage
            localStorage.removeItem('token');
            return {
                user: null,
                authenticated: false,
                token: null
            }
        default:
            return state;
    }
}

export default AuthReducer;