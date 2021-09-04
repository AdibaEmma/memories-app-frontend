/* eslint-disable import/no-anonymous-default-export */
import {
    CREATE_POST,
    FETCH_POSTS,
    GET_POST,
    EDIT_POST,
    DELETE_POST
} from '../actions/types'

export default (state=[], action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return 'FETCH_POSTS'
        case CREATE_POST:
            return 'CREATE_POST'
        default:
            return state
    }
}