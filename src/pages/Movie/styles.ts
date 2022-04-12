import styled from "styled-components";

export const MainMovieId = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 0.2ch;
  font-weight: 900;
  height: auto;
  background: linear-gradient(to left, var(--bg900), #960308, var(--bg900));
  /* width: 70%; */
  color: var(--bg200);
  margin: auto;

  h1 {
    text-transform: uppercase;
    font-size: 4rem;
    text-align: center;
    padding: 6rem 0 3rem;
    font-family: "Bebas Neue", cursive;
    font-weight: 100;
  }
`;

export const ImageInfos = styled.div`
  display: inline-flex;
  width: 80%;
  margin-bottom: 5%;

  p {
    font-size: 1.4rem;
    margin-bottom: 2%;

    span {
      font-size: 1.3rem;
      font-weight:300;
      letter-spacing: 0.3ch;
      font-family: "Bebas Neue", cursive;
    }
  }
  iframe {
    width: 100%;
    height: 22rem;
    margin: 5% auto 0;
  }
`;

export const ImageMovieId = styled.img`
  margin: 0 5% 0 25%;
  width: 25rem;
  object-fit: contain;
  background-repeat: no-repeat;
`;

export const MovieInfos = styled.div`
  display: block;
`;
