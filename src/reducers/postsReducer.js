/* eslint-disable import/no-anonymous-default-export */
import {
    CREATE_POST,
    FETCH_POSTS,
    GET_POST,
    EDIT_POST,
    DELETE_POST
} from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case CREATE_POST:
            return 'CREATE_POST'
        case FETCH_POSTS:
            return 'FETCH_POSTS'
        case GET_POST:
            return state
        case EDIT_POST:
            return state
        case DELETE_POST:
            return state
        default:
            return state
    }
}