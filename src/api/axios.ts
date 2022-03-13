import axios from "axios";

export const options = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/upcoming?api_key=5b6359b14c6e1170ef068fa513554317&language=en-US",
});

export const genres = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/genre/movie/list?api_key=5b6359b14c6e1170ef068fa513554317&language=en-US",
});

export const search = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?api_key=5b6359b14c6e1170ef068fa513554317&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=[27]&with_watch_monetization_types=flatrate",
});

export const searchMovie = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/search/movie?api_key=5b6359b14c6e1170ef068fa513554317&query=scream",
});

export const commingSoonMovies = axios.create({
  baseURL: "https://api-horror-movies.herokuapp.com/",
});
