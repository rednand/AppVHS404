import React, { useEffect, useState } from "react";
import { commingSoonMovies } from "../../api/axios";
import { CircularProgress, Box } from "@material-ui/core";
import { formatMonth, formatDate } from "../../utils/data";
import {
  MainContainer,
  Container,
  MainLeft,
  Card,
  TimeLine,
  Section,
} from "./styles";

const Main = () => {
  const [movieData, setMovieData] = useState({ movies: [] as any[] });

  const itemDataHoje = new Date();
  const itemMes = formatMonth(itemDataHoje);

  useEffect(() => {
    commingSoonMovies.get("").then((response) => {
      setMovieData(response.data);
    });
  }, []);

  movieData.movies?.sort((a, b) =>
    a["release_date"] > b["release_date"]
      ? -1
      : b["release_date"] > a["release_date"]
      ? 1
      : 0
  );

  const testea = movieData.movies.map((item) => {
    return formatDate(item["release_date"]);
  });

  console.log(testea);

  return (
    <MainContainer>
      <MainLeft>
        <TimeLine />
        <Container>
          <>
            <h1 className="h2Class">
              Lançamentos de <span className="itemMes">{itemMes}</span>
            </h1>
            {movieData.movies.length > 0 ? (
              <>
                {movieData.movies.map((item) => {
                  const itemData = formatDate(item["release_date"]);

                  if (itemData.includes(itemMes)) {
                    return (
                      <Card key={item["id"]}>
                        <div className="card">
                          <h2 className="titleItem">{item["name"]}</h2>
                          <p className="releaseItem"> {itemData}</p>
                          <p className="overviewItem">{item["overview"]}</p>
                        </div>
                        <div className="cardMedia">
                          <img
                            className="posterItem"
                            src={`${item["poster"]}`}
                            alt={`poster${item["poster"]}`}
                          />
                          <iframe
                            className="videoItem"
                            src={`https://www.youtube.com/embed/${item["trailer"]}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          ></iframe>
                        </div>
                        <div className="buttonGenre">
                          {item["genre"].map((x, index) => {
                            return (
                              <p key={item["genre"][index]}>
                                <button
                                  className="pbuttonGenre"
                                  onClick={() => console.log("teste")}
                                >
                                  {item["genre"][index]}
                                </button>
                              </p>
                            );
                          })}
                        </div>
                      </Card>
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
          </>
          <button>
            <h3>Próximas estréias</h3>
          </button>
        </Container>
      </MainLeft>
      <Section>
        <div className="divSection">
          <h2 className="sectionH3">LANÇAMENTOS ANTERIORES</h2>
          {movieData.movies.map((item) => {
            const itemData = formatDate(item["release_date"]);
            const id = item["_id"];

            if (!itemData.includes(itemMes)) {
              return (
                <>
                  <div className="OldMovieList" key={item["_id"]}>
                    <p className="OldMovieData">
                      {formatDate(item["release_date"])}
                    </p>
                    <a className="MovieLink" href={"/" + item["_id"]}>
                      {item["name"]}
                    </a>
                  </div>
                </>
              );
            }
          })}
        </div>
      </Section>
    </MainContainer>
  );
};

export default Main;
