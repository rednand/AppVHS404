import React, { useEffect, useState } from "react";
import { commingSoonMovies } from "../../api/axios";
import { CircularProgress, Box } from "@material-ui/core";
import { formatMonth, formatDate } from "../../utils/data";
import {
  MainContainer as MainContainer,
  Container,
  MainLeft as MainLeft,
  Card,
  TimeLine,
  Section,
} from "./styles";

const Main = () => {
  const [movieData, setMovieData] = useState({ movies: [] as any[] });

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

  return (
    <MainContainer>
      <MainLeft>
        <TimeLine />
        <Container>
          <>
            <h1 className="h2Class">Lançamentos do mês</h1>
            {movieData.movies.length > 0 ? (
              <>
                {movieData.movies.map((item) => {
                  const itemData = formatDate(item["release_date"]);
                  const itemDataHoje = new Date();
                  const itemMes = formatMonth(itemDataHoje);               

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
        </Container>
      </MainLeft>
      <Section>
        <div className="itens">
          <h3 className="sectionH3">Lançamentos anteriores</h3>
          <br />
          <h4>{formatMonth(new Date())}</h4>

          {movieData.movies.map((item) => {
            const itemData = formatDate(item["release_date"]);
            const itemDataHoje = new Date();
            const itemMes = formatMonth(itemDataHoje);
            const id = item["_id"]
            console.log(id);

            if (!itemData.includes(itemMes)) {
              return (
                <>
                  <p className="itens" key={item["_id"]}>
                    <a href={"/" + item["_id"]}>
                      <p>{item["name"]}</p>
                    </a>
                  </p>
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
