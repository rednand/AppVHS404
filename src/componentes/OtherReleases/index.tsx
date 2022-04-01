import React, { useEffect, useState } from "react";
import { commingSoonMovies } from "../../api/axios";
import { CircularProgress, Box } from "@material-ui/core";
import { formatMonth, formatDate, formatMonthNumber } from "../../utils/data";
import { NextReleases } from "./styles";

const OtherReleases = () => {
  const [movieData, setMovieData] = useState({ movies: [] as any[] });

  const todaysDate = new Date();
  const monthDate = formatMonth(todaysDate);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await commingSoonMovies.get("");
        setMovieData(data);
      } catch (error) {
        console.log(error, "não foi possível conectar");
      }
    };
    getMovies();
  }, []);

  const ListMovieWithDataIdName = movieData.movies
    .map((item) => {
      const itemData = formatDate(item["release_date"]);
      const actualMonth = formatMonthNumber(monthDate);
      const filmMonth = formatMonthNumber(
        itemData
          .replaceAll("de", "")
          .replace(/[^a-zA-ZçÇ]/gi, " ")
          .replace(/ /g, "")
      );

      const monthCompareData = () => {
        if (actualMonth < filmMonth) {
          return true;
        }
      };
      if (monthCompareData()) {
        return {
          movie: item["name"],
          data: formatDate(item["release_date"]),
          id: item["_id"],
          poster: item["poster"],
        };
      }
    })
    .filter((item) => !!item);

  const randomMovies = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  randomMovies(movieData.movies);

  ListMovieWithDataIdName.length = 5;

  return (
    <NextReleases>
      <div className="div">
        <h3>Lançamentos futuros</h3>
        {ListMovieWithDataIdName.map((film) => {
          return (
            <div className="soon" key={film.id}>
              <h2 className="nameSoon">{film.movie}</h2>
              <img
                className="soonPoster"
                src={`${film.poster}`}
                alt={`poster${film.poster}`}
              />
              <p className="soonData"> {film.data}</p>
            </div>
          );
        })}
      </div>
    </NextReleases>
  );
};

export default OtherReleases;
