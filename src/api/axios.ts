import axios from "axios";

export const commingSoonMovies = axios.create({
  // baseURL: "https://api-appquarto237.up.railway.app/total",
  baseURL: "http://localhost:3002/total",
});

export const MovieGetId = axios.create({
  // baseURL: "https://api-appquarto237.up.railway.app/",
  baseURL: "http://localhost:3002",
});
