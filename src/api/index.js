import axios from 'axios'

const live_api = false
const url = live_api ? 'http://localhost/5000/posts' : 'https://memsmile.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost) => axios.post(url, newPost)

export const getPost = (id) => axios.get(`${url}/${id}`)

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)

export const deletePost = (id) => axios.delete(`${url}/${id}`)

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)