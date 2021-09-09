/* eslint-disable import/no-anonymous-default-export */
import { AUTH, LOGOUT } from "../actions/types";

const initialState = {
    authData: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case AUTH:
            console.log(action?.data);
            return state
        case LOGOUT:
            return state
        default:
            return state
    }
}