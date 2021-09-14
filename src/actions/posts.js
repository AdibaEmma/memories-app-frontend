import * as api from '../api'
import {
    CREATE_POST,
    FETCH_POSTS,
    GET_POST,
    UPDATE_POST,
    DELETE_POST,
    LIKE_POST
} from './types'

export const fetch_posts = () => async dispatch => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_POSTS, payload: data })
    } catch (err) {
        console.log(err);
    }
}

export const create_post = (post) => async dispatch => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: CREATE_POST, payload: data })
    } catch (err) {
        console.log(err);
    }
    
}

export const get_post = (id) => async dispatch => {
    try {
        const { data } = await api.getPost(id)
        dispatch({ type: GET_POST, payload: data })
    } catch (err) {
        console.log(err);
    }
}

export const update_post = (id, post) => async dispatch => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE_POST, payload: data })
    } catch (err) {
        console.log(err);
    }
}

export const delete_post = (id) => async dispatch => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE_POST, payload: id })
    } catch (err) {
        console.log(err)
    }
}

export const like_post = (id) => async dispatch => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: LIKE_POST, payload: data })
    } catch (err) {
        console.log(err);
    }
}