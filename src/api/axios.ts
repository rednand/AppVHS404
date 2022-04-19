import axios from "axios";

export const commingSoonMovies = axios.create({
  baseURL: "http://localhost:3000/total",
});

export const MovieGetId = axios.create({
  baseURL: "https://api-horror-movies.herokuapp.com/",
});
