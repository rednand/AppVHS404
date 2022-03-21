import React, { Fragment, useEffect, useState } from "react";
import { commingSoonMovies, options } from "../../api/axios";
import { CircularProgress, Box } from "@material-ui/core";

import {
  MainTeste1,
  Container,
  Teste,
  Card,
  MainTeste3,
  Section,
} from "./styles";

const Main = () => {
  const [teste, setTeste] = useState({ movies: [] as any[] });

  useEffect(() => {
    commingSoonMovies.get("").then((response) => {
      setTeste(response.data);
    });
  }, []);

  teste.movies?.sort((a, b) =>
    a["release_date"] > b["release_date"]
      ? -1
      : b["release_date"] > a["release_date"]
      ? 1
      : 0
  );

  function formatDate(date) {
    var d = new Date(date),
      month = "" + d.getMonth(),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    return `${day} de ${months[Number(month)]} de ${year}`;
  }

  return (
    <MainTeste1>
      <Teste>
        <MainTeste3 />
        <Container>
          <>
            <h1 className="h2Class">Últimos lançamentos</h1>
            {teste.movies.length > 0 ? (
              <>
                {teste.movies.map((item) => {
                  console.log(item["release_date"]);

                  const teste = formatDate(item["release_date"]);
                  const teste2 = item["release_date"];
                  const dateHoje = formatDate(Date.now());
                  console.log("datehoje", dateHoje);
                  console.log("teste2", teste2);

                  if (teste2 > dateHoje) {
                    return teste;
                  }

                  return (
                    <Card key={item["id"]}>
                      <div className="card">
                        <h2 className="titleItem">{item["name"]}</h2>
                        <p className="releaseItem"> {teste}</p>
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
      </Teste>
      <Section>
        <div className="itens">
          <h3 className="sectionH3">Lançamentos anteriores</h3>
          {teste.movies.map((item) => {
            return (
              <p className="itens" key={item["_id"]}>
                <p>{item["name"]}</p>
              </p>
            );
          })}
        </div>
      </Section>
    </MainTeste1>
  );
};

export default Main;
