/* eslint-disable import/no-anonymous-default-export */
import { AUTH, LOGOUT } from "../actions/types";

const initialState = {
    authData: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.payload}))
            return { ...state, authData: action?.payload}
        case LOGOUT:
            return state
        default:
            return state
    }
}