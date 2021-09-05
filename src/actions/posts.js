import {
    CREATE_POST,
    FETCH_POSTS,
    GET_POST,
    EDIT_POST,
    DELETE_POST
} from './types'

export const create_post = () => {
    return {
        type: CREATE_POST,
    }
}

export const fetch_posts = () => {
    return {
        type: FETCH_POSTS,
        payload: 'payload'
    }
}

export const get_post = () => {
    return {
        type: GET_POST,
        payload: 'get post'
    }
}

export const edit_post = () => {
    return {
        type: EDIT_POST
    }
}

export const delete_post = () => {
    return {
        type: DELETE_POST
    }
}