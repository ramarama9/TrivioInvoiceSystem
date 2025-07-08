import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth', 
});

// POST: Register User
export const registerUser = (userData) => API.post('/register', userData);

// POST: Login User
export const loginUser = (credentials) => API.post('/login', credentials);
