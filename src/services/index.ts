import axios from "axios";
import { genres, options, search, searchMovie } from "../api/axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjYzNTliMTRjNmUxMTcwZWYwNjhmYTUxMzU1NDMxNyIsInN1YiI6IjYyMWY3YmJmNzdiMWZiMDA2Y2ZjZDQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SfIvPM0qoY06fpwXNx8dG7piLbdb8Rvsnt6_U5rYu-o";

export const requestMovies = async () => {
  return await options
    .get(``, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((response) => {
      console.log("requestMovieData:", response.data.results);
    });
};

export const requestGenres = async () => {
  return await genres
    .get(``, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((response) => console.log("Genres", response.data));
};

export const requestSearch = async () => {
  return await search
    .get(``, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((response) => {
      return response.data.results;
    });
};

export const requestSearchMovie = async () => {
  return await searchMovie
    .get(``, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((response) => console.log("searchMovieName:", response.data.results));
};

requestGenres();

requestMovies();

requestSearch();

requestSearchMovie();
