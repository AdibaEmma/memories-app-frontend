/* eslint-disable import/no-anonymous-default-export */
import {
    CREATE_POST,
    FETCH_POSTS,
    GET_POST,
    UPDATE_POST,
    DELETE_POST
} from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload
        case CREATE_POST:
            return [ ...state, action.payload]
        case GET_POST:
            return action.payload
        case UPDATE_POST:
            return state
        case DELETE_POST:
            return state
        default:
            return state
    }
}