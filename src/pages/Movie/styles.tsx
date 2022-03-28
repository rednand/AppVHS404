import styled from "styled-components";

export const MainMovieId = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 0.2ch;
  font-weight: 900;
  height: 2.5rem;
  background: linear-gradient(to left, var(--bg900), #960308, var(--bg900));
  width: 70%;
  color: var(--bg200);
  margin: auto;
  min-height: 100vh;

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
  width: 90%;

  p {
    font-size: 1.4rem;
    margin-bottom: 2%;

    span {
      font-size: 1.3rem;
      color: var(--bg900);
      letter-spacing: .3ch;
      font-family: "Bebas Neue", cursive;
    }
  }
  iframe {
    width: 90%;
    height: 22rem;
    margin: 5% auto 0;
  }

  .infos {
    margin: 0 -8%;
  }
`;

export const ImageMovieId = styled.img`
  margin: 0 10% auto;
  width: 25rem;
  object-fit: contain;
  background-repeat: no-repeat;
`;

export const MovieInfos = styled.div`
  display: block;
`;
