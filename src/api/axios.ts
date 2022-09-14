import axios from "axios";

export const commingSoonMovies = axios.create({
  baseURL: "https://api-appquarto237.up.railway.app/total",
});

export const MovieGetId = axios.create({
  baseURL: "https://api-appquarto237.up.railway.app/",
});
