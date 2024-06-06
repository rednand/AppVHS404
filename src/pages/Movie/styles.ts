import styled from 'styled-components';

export const MainMovieId = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: 0.1ch;
  font-weight: 900;
  height: auto;
  background-color: var(--bg200);
  color: var(--bg800);
  margin: auto;

  h1 {
    text-transform: uppercase;
    font-size: 4rem;
    text-align: center;
    padding: 6rem 0 3rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;

    @media (max-width: 600px) {
      font-size: 3rem;
    }
  }
`;

export const ImageInfos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding-bottom: 5%;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2%;
    line-height: 1.6;
    letter-spacing: 0;

    span {
      font-weight: 400;
      line-height: 1.2;
      letter-spacing: 0.1ch;
      text-transform: uppercase;
      font-size: 1.3rem;
      margin-right: .5%;
      font-family: 'Bebas Neue', cursive;
    }
  }
`;

export const ImageMovieId = styled.img`
  width: 30%;
  object-fit: contain;
  background-repeat: no-repeat;
`;

export const ImageMovieIdMobile = styled.img`
  width: 100%;
  object-fit: contain;
  margin: auto;
  background-repeat: no-repeat;
`;

export const MovieInfos = styled.div`
  display: block;
`;
