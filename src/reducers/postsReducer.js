/* eslint-disable import/no-anonymous-default-export */
import {
    CREATE_POST,
    FETCH_POSTS,
    GET_POST,
    UPDATE_POST,
    DELETE_POST
} from '../actions/types'

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload
        case CREATE_POST:
            return [ ...posts, action.payload]
        case GET_POST:
            return action.payload
        case UPDATE_POST:
            return posts.map(post => post._id === action.payload._id ? action.payload : post)
        case DELETE_POST:
            return posts
        default:
            return posts
    }
}