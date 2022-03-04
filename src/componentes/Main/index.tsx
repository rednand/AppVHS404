import React, { Fragment, useEffect, useState } from "react";
import { genres, options } from "../../api/axios";
import { requestSearchMovie } from "../../services/index";
import { MainTeste1, Container, Card, MainTeste3, Section } from "./styles";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjYzNTliMTRjNmUxMTcwZWYwNjhmYTUxMzU1NDMxNyIsInN1YiI6IjYyMWY3YmJmNzdiMWZiMDA2Y2ZjZDQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SfIvPM0qoY06fpwXNx8dG7piLbdb8Rvsnt6_U5rYu-o";
requestSearchMovie();
const Main = () => {
  const [teste, setTeste] = useState({ results: [] });
  const [genero, setGenero] = useState({ genres: [] });

  useEffect(() => {
    options
      .get(`&page=1`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        setTeste(response.data);
      });
  }, []);

  console.log("teste", teste.results);

  useEffect(() => {
    genres
      .get(``, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        setGenero(response.data);
      });
  }, []);

  return (
    <MainTeste1>
      <MainTeste3>
        <Container>
          <>
            <h1 className="h2Class">Ultimos lançamentos:</h1>
            {teste.results.map((item) => {
              return (
                <Card key={item["id"]}>
                  <div className="divCard">
                    <h2 className="pItem">{item["title"]}</h2>
                    <p className="cardItem">{item["overview"]}</p>
                  </div>
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
