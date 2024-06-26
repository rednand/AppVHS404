import styled from 'styled-components';

export const SectionStyled = styled.div`
  width: 100%;
  font-size: 1.5vw;
  font-family: 'Bebas Neue', cursive;
  background: var(--bg200);
  color: var(--bg900);
  letter-spacing: 0.3ch;

  @media (max-width: 900px) {
    width: 77%;
    margin-left: 10%;
  }

  .sectionH3 {
    letter-spacing: 0.1ch;
    width: 100%;
    padding: 8% 5%;
    text-align: center;
    font-size: 3vw;

    @media (max-width: 900px) {
      font-size: 4vw;
    }

    @media (max-width: 700px) {
      font-size: 6vw;
    }
  }

  .OldMovieList {
    position: relative;
    margin-left: 10%;
  }

  .OldMovieData {
    padding: 2%;
    text-align: start;
    left: -11%;
    margin: 10% 0;
    text-indent: 4%;
    background-color: var(--palletered45);

    @media (max-width: 900px) {
      font-size: 2vw;
    }

    @media (max-width: 700px) {
      font-size: 5vw;
    }
  }
  .NoOldMovieData {
    display: none;
  }

  .MovieLink {
    text-transform: uppercase;
    font-weight: 500;
    margin: 5%;
    display: block;
    padding: 0.5rem;
    color: var(--bg900);

    :hover {
      background-color: var(--bg900);
      color: var(--bg200);
      text-decoration: none;
      margin-right: 0%;
    }

    @media (max-width: 900px) {
      font-size: 2vw;
    }

    @media (max-width: 700px) {
      font-size: 5vw;
    }
  }
`;
