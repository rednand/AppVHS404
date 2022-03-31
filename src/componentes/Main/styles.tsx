import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: inline-flex;
  min-height: 100vh;
  justify-content: space-around;
`;

export const MainLeft = styled.div`
  position: relative;
  display: inline-flex;
  width: 60%;
  margin: 4% 8%;
`;

export const TimeLine = styled.div`
  width: 3%;
  margin: 0;
  background-color: #d41d24;
`;

export const Section = styled.div`
  width: 25%;
  font-family: "Bebas Neue", cursive;
  background: var(--bg200);
  margin: 4% 8%;
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
    background-color: rgba(255, 255, 255, 0.85);
    position: relative;
    z-index: 8;
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
    background-color: rgba(255, 255, 255, 0.8);

    :hover {
      background-color: var(--bg900);
      color: var(--bg200);
      text-decoration: none;
      margin-right: 0%;
    }
  }
`;

export const Container = styled.div`
  font-family: "Bebas Neue", cursive;
  font-weight: 100;
  width: 100%;
  display: flex;
  flex-direction: column;

  .h2Class {
    color: var(--bg900);
    letter-spacing: 0.2ch;
    font-size: 3rem;
    text-align: center;
    background: var(--bg200);
    margin: 0 0 1rem 0;
  }
  .itemMes {
    color: var(--palletered4);
  }
`;

export const Card = styled.div`
  width: 100%;
  flex: 1;
  margin: 8% 0;
  word-spacing: 5px;
  color: var(--bg900);
  outline: none;
  background-color: var(--bg200);
  display: flex;
  flex-wrap: wrap;

  .card {
    border: none;
    background: var(--bg200);
  }
  .titleItem {
    font-size: 2rem;
    margin: 3rem 0 0 2rem;
    width: 50%;
  }
  .releaseItem {
    position: absolute;
    top: -10%;
    left: -3%;
    width: 50%;
    text-align: center;
    background: #d41d24;
    color: var(--bg200);
    letter-spacing: 0.2ch;
    font-size: 1.9rem;
  }

  .overviewItem {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
    font-size: 19px;
    width: 93%;
    margin: 1rem 2rem;
  }
  .cardMedia {
    width: 100%;
    margin: 2%;
  }
  .posterItem {
    width: 30%;
    height: 20rem;
    margin: auto 2%;
  }
  .videoItem {
    width: 60%;
    height: 20rem;
    margin: auto 3%;
  }
  .buttonGenre {
    display: inline-flex;
    margin: 2% 0 4% 4%;
    .pbuttonGenre {
      margin-right: 2rem;
      font-family: "Barlow Condensed", sans-serif;
      font-weight: 700;
      font-size: 19px;
      padding: 0.6rem 1.2rem;
      color: var(--bg100);
      background-color: var(--bg900);
      border-width: 1px;
      border-color: #d41d24;
    }
  }
`;
