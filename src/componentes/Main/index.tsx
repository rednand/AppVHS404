import React, { useEffect, useState } from "react";
import { genres } from "../../api/axios";
import { requestMovies } from "../../services/index";
import {
  MainTeste1,
  Container,
  Card,
  MainTeste2,
  MainTeste3,
  Section,
} from "./styles";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjYzNTliMTRjNmUxMTcwZWYwNjhmYTUxMzU1NDMxNyIsInN1YiI6IjYyMWY3YmJmNzdiMWZiMDA2Y2ZjZDQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SfIvPM0qoY06fpwXNx8dG7piLbdb8Rvsnt6_U5rYu-o";

const Main = () => {
  const [teste, setTeste] = useState({ genres: [] });

  // useEffect(() => {
  //   genres
  //     .get(``, {
  //       headers: {
  //         Authorization: `token ${token}`,
  //       },
  //     })
  //     .then((response) => setTeste(response.data))
  //     .catch((err) => {
  //       console.log("erro:", err);
  //     });
  // }, []);

  // console.log(teste.genres);

  return (
    <MainTeste1>
      <MainTeste3>
        <Container>
          <Card>{teste.genres}</Card>
          <Card>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card>
        </Container>
        <Container>
          <Card>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card>
        </Container>
        <Container>
          <Card>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card>
        </Container>
      </MainTeste3>
      <Section>Horror</Section>
    </MainTeste1>
  );
};

export default Main;
