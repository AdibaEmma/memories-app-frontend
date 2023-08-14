/* eslint-disable import/no-anonymous-default-export */
import { AUTH, LOGOUT } from "../actions/types";

const initialState = {
  authData: null,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH: {
            const { payload } = action;
            localStorage.setItem('profile', JSON.stringify(payload));
            return { ...state, authData: payload };
        }
        case LOGOUT: {
            localStorage.clear();
            return { ...state, authData: null };
        }
        default:
            return state;
    }
}

export default authReducer;



