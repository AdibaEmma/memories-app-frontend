import axios from "axios";

const isLiveApi = true;
const apiUrl = isLiveApi
  ? "https://memsmile-api.onrender.com"
  : "http://localhost:5000";
const API = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: localStorage.getItem("profile")
      ? `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
      : null,
  },
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const getPost = (id) => API.get(`/posts/${id}`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (FormData) => API.post("/users/login", FormData);
export const signUp = (FormData) => API.post("/users/signup", FormData);
