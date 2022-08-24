import axios from 'axios'

const url = 'http://localhost:3000';

export const fetchPost = ()=> axios.get(url);
export const createPost = (newPost)=> axios.task(url, newPost);