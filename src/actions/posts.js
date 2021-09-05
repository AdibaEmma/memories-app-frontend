import * as api from '../api'
import {
    CREATE_POST,
    FETCH_POSTS,
    GET_POST,
    EDIT_POST,
    DELETE_POST
} from './types'

export const create_post = () => async dispatch => {

    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: CREATE_POST, payload: data })
    } catch (err) {
        console.log(err.message);
    }
    
}

export const fetch_posts = () => async dispatch => {
    dispatch({ type: FETCH_POSTS, payload: [] })
}

export const get_post = () => async dispatch => {
    dispatch({ type: GET_POST, payload: [] })
}

export const edit_post = () => async dispatch => {
    dispatch({ type: EDIT_POST, payload: []})
}

export const delete_post = () => async dispatch => {
    dispatch({ type: DELETE_POST, payload: []})
}