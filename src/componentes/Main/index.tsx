import React, { Fragment, useEffect, useState } from "react";
import { commingSoonMovies, options } from "../../api/axios";
import { MainTeste1, Container, Card, MainTeste3, Section } from "./styles";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjYzNTliMTRjNmUxMTcwZWYwNjhmYTUxMzU1NDMxNyIsInN1YiI6IjYyMWY3YmJmNzdiMWZiMDA2Y2ZjZDQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SfIvPM0qoY06fpwXNx8dG7piLbdb8Rvsnt6_U5rYu-o";

const Main = () => {
  const [teste, setTeste] = useState({ movies: [] as any[] });

  useEffect(() => {
    commingSoonMovies.get("").then((response) => {
      setTeste(response.data);
    });
  }, []);

  const dateIsoToLocal = (date: string): string => {
    const _date = new Date(date);
    const day = `${_date.getDate()}`.padStart(2, "0");
    const month = `${_date.getMonth()}`.padStart(2, "0");
    const year = _date.getFullYear();
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
  };

  return (
    <MainTeste1>
      <MainTeste3>
        <Container>
          <>
            <h1 className="h2Class">Lançamentos do mês:</h1>
            {teste.movies.map((item) => {
              const teste = dateIsoToLocal(item["release_date"]);

              console.log(item["genre"]);

              return (
                <Card key={item["id"]}>
                  <div className="card">
                    <h2 className="titleItem">{item["title"]}</h2>
                    <p className="releaseItem">Lançamento: {teste}</p>
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
                      console.log(x, index);
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
        </Container>
      </MainTeste3>
      <Section>
        <div className="itens">
          teste
          {/* {genero.movies.map((item) => {
            let teste = `https://www.youtube.com/embed/${item["trailer"]}`;

            return (
              <p className="itens" key={item["_id"]}>
                <p>{item["name"]}</p>
                <iframe
                  width="100%"
                  height="200"
                  src={teste}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </p>
            );
          })} */}
        </div>
      </Section>
    </MainTeste1>
  );
};

export default Main;
