import axios from 'axios';

export const commingSoonMovies = axios.create({
  // baseURL: "https://api-appquarto237.up.railway.app/total",
  // baseURL: "http://localhost:3002/total",
  // baseURL: "https://api-quarto237.onrender.com/total",
  baseURL: 'https://api-vhs404.vercel.app/total',
});

export const MovieGetId = axios.create({
  // baseURL: "https://api-appquarto237.up.railway.app/",
  // baseURL: "http://localhost:3002",
  // baseURL: "https://api-quarto237.onrender.com/",
  baseURL: 'https://api-vhs404.vercel.app/',
});
