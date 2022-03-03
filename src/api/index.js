import axios from 'axios'


const live_api = true
const url = live_api ? 'https://memsmile.herokuapp.com' : 'http://localhost:5000'
const API = axios.create({ baseURL: url})

export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts', newPost)
export const getPost = (id) => API.get(`/posts/${id}`)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signIn = (FormData) => API.post('/users/signin', FormData)
export const signUp = (FormData) => API.post('/users/signup', FormData)