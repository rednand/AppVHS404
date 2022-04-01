import React, { useState, useEffect } from "react";
import { formatMonth, formatDate, formatMonthNumber } from "../../utils/data";
import { ordenationArrayData, groupBy } from "../../utils/ordenation";
import { commingSoonMovies } from "../../api/axios";
import { SectionStyled } from "./styles";
import { CircularProgress, Box } from "@material-ui/core";

const Section = () => {
  const [movieData, setMovieData] = useState({ movies: [] as any[] });

  const todaysDate = new Date();
  const monthDate = formatMonth(todaysDate);

  useEffect(() => {
    commingSoonMovies.get("").then((response) => {
      setMovieData(response.data);
    });
  }, []);

  ordenationArrayData(movieData.movies, ["release_date"]);

  const ListMovieWithDataIdName = movieData.movies.map((item) => {
    return {
      movie: item["name"],
      data: formatDate(item["release_date"]),
      id: item["_id"],
      poster: item["poster"],
    };
  });

  const GroupedMoviesByData = groupBy(ListMovieWithDataIdName, "data");

  return (
    <SectionStyled>
      <div className="divSection">
        <h2 className="sectionH3">LANÇAMENTOS ANTERIORES</h2>
        {movieData.movies.length > 0 ? (
          <>
            {Object.keys(GroupedMoviesByData).map((filmValue) => {
              const filmValuetoString = JSON.stringify(
                GroupedMoviesByData[filmValue]
              );
              const filmValuetoJson = JSON.parse(filmValuetoString);
              const filmValueMap = filmValuetoJson.map((item) => {
                return (
                  <a className="MovieLink" href={"/" + item?.id}>
                    {item["movie"]}
                  </a>
                );
              });

              const actualMonth = formatMonthNumber(monthDate);
              const filmMonth = formatMonthNumber(
                filmValue
                  .replaceAll("de", "")
                  .replace(/[^a-zA-ZçÇ]/gi, " ")
                  .replace(/ /g, "")
              );

              const monthCompare = () => {
                if (
                  typeof actualMonth === "number" &&
                  typeof filmMonth === "number"
                ) {
                  if (actualMonth >= filmMonth) {
                    return true;
                  } else {
                    return null;
                  }
                }
              };

              if (!filmValue.includes(monthDate) && monthCompare()) {
                return (
                  <div className="OldMovieList">
                    <>
                      <p className="OldMovieData">{filmValue}</p>
                      {filmValueMap}
                    </>
                  </div>
                );
              }
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
    </SectionStyled>
  );
};

export default Section;
