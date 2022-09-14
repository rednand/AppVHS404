import React, { useEffect, useState } from "react";
import { formatMonth, formatDate, formatMonthNumber } from "../../utils/data";
import { randomMovies } from "../../utils/ordenation";
import { NextReleases } from "./styles";
import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";

const OtherReleases = () => {
  const movies = useSelector((state) => state["movies"]);

  const todaysDate = new Date();
  const monthDate = formatMonth(todaysDate);

  const ListMovieWithDataIdName = movies
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

  randomMovies(movies);

  ListMovieWithDataIdName.length = 6;

  return (
    <NextReleases>
      <h3>Lançamentos futuros</h3>
      <div className="allMoviesDiv">
        {movies.length > 0 ? (
          <>
            {ListMovieWithDataIdName.map((film) => {
              return (
                <div className="soon" key={film.id}>
                  <a href={`/${film.id}`}>
                    <h2 className="nameSoon"> {film.movie}</h2>
                    <div className="soonPoster2">
                      <img
                        className="soonPoster"
                        src={`${film.poster}`}
                        alt={`poster${film.poster}`}
                      />
                    </div>
                  </a>
                  <p className="soonData"> {film.data}</p>
                </div>
              );
            })}
          </>
        ) : (
          <Box
            component="div"
            sx={{
              margin: 50,
            }}
          >
            <CircularProgress color="secondary" thickness={10} size={90} />
          </Box>
        )}
      </div>
    </NextReleases>
  );
};

export default OtherReleases;
