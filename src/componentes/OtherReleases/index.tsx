import React, { useEffect, useState } from "react";
import { commingSoonMovies } from "../../api/axios";
import { CircularProgress, Box } from "@material-ui/core";
import { formatMonth, formatDate, formatMonthNumber } from "../../utils/data";
import { randomMovies } from "../../utils/ordenation";
import { NextReleases } from "./styles";

const OtherReleases = () => {
  const [movieData, setMovieData] = useState([]);

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

  const ListMovieWithDataIdName = movieData.map((item) => {
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

  randomMovies(movieData);

  ListMovieWithDataIdName.length = 6;

  return (
    <NextReleases>
      <h3>Lançamentos futuros</h3>
      <div className="allMoviesDiv">
        {movieData.length > 0 ? (
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
