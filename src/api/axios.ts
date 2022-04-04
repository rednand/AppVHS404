import axios from "axios";

export const commingSoonMovies = axios.create({
  baseURL: "https://api-horror-movies.herokuapp.com/total",
});

export const MovieGetId = axios.create({
  baseURL: "https://api-horror-movies.herokuapp.com/",
});
