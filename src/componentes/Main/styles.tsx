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
  z-index: 5;
  margin: 0;
  background-color: #d41d24;
`;

export const Section = styled.div`
  width: 25%;
  background: var(--bg900);
  margin: 4% 8%;
  color: var(--bg200);
  word-spacing: 2px;
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
    height: 7rem;
    margin-left: 10%;
    font-size: 1.5rem;
  }

  .OldMovieData {
    font-family: "Bebas Neue", cursive;
    padding: 2%;
    letter-spacing: 0.2ch;
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
    position: absolute;
    top: 45%;
    font-weight: 600;
    height: 2.5rem;
    left: 0%;
    padding: 0.5rem;
    color: var(--bg200);
  }
`;

export const Container = styled.div`
  font-family: "Bebas Neue", cursive;
  font-weight: 100;
  width: 100%;
  display: flex;
  flex-direction: column;

  .h2Class {
    color: var(--bg200);
    letter-spacing: 0.2ch;
    font-size: 3rem;
    text-align: center;
    background: var(--bg900);
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
  color: var(--bg200);
  outline: none;
  background: var(--bg900);
  display: flex;
  flex-wrap: wrap;

  .card {
    border: none;
    background: var(--bg900);
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
    height: 25rem;
    margin: auto 2%;
  }
  .videoItem {
    width: 60%;
    height: 25rem;
    margin: auto 3%;
  }
  .buttonGenre {
    display: inline-flex;
    margin: 4%;
    .pbuttonGenre {
      margin-right: 3rem;
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
