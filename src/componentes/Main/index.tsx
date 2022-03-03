import React, { Fragment, useEffect, useState } from "react";
import { genres, options } from "../../api/axios";
import { requestMovies, requestSearchMovie } from "../../services/index";
import { MainTeste1, Container, Card, MainTeste3, Section } from "./styles";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjYzNTliMTRjNmUxMTcwZWYwNjhmYTUxMzU1NDMxNyIsInN1YiI6IjYyMWY3YmJmNzdiMWZiMDA2Y2ZjZDQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SfIvPM0qoY06fpwXNx8dG7piLbdb8Rvsnt6_U5rYu-o";
requestSearchMovie();
const Main = () => {
  const [teste, setTeste] = useState({ results: [] });
  const [genero, setGenero] = useState({ genres: [] });

  useEffect(() => {
    options
      .get(``, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => setTeste(response.data));
  }, []);

  useEffect(() => {
    genres
      .get(``, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => setGenero(response.data));
  }, []);

  return (
    <MainTeste1>
      <MainTeste3>
        <Container>
          <>
            <h2>Ultimos lançamentos:</h2>
            {teste.results.map((item, index) => {
              return (
                <Card key={item["id"]}>
                  <h2 className="pItem">{item["title"]}</h2>
                  <div className="cardItem">{item["overview"]}</div>
                  <img
                    className="imageItem"
                    src={`https://image.tmdb.org/t/p/original${item["poster_path"]}`}
                    alt=""
                  />
                </Card>
              );
            })}
          </>
        </Container>
      </MainTeste3>
      <Section>
        <>
          {genero.genres.map((item, index) => {
            return (
              <p className="itens" key={index}>
                {item["name"]}
              </p>
            );
          })}
        </>
      </Section>
    </MainTeste1>
  );
};

export default Main;
