import styled from "styled-components";

export const SectionStyled = styled.div`
  width: 25%;
  font-family: "Bebas Neue", cursive;
  background: var(--bg200);
  margin: 2% 8%;
  color: var(--bg900);
  word-spacing: 2px;
  letter-spacing: 0.3ch;

  .sectionH3 {
    letter-spacing: 0.2ch;
    width: 100%;
    font-family: "Bebas Neue", cursive;
    margin: 8% 0;
    text-align: center;
    font-size: 2.5rem;
  }

  .OldMovieList {
    position: relative;
    min-height: 10rem;
    margin-left: 10%;
    font-size: 1.5rem;
  }

  .OldMovieData {
    padding: 2%;
    text-align: start;
    left: -11%;
    margin: 10% 0;
    height: 2.5rem;
    text-indent: 4%;
    background-color: #d41d24;
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
  }
`;
