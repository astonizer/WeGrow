import Axios from 'axios';

const API = Axios.create({baseURL: 'http://localhost:3001'})

export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);
