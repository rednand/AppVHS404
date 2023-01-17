import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 25%;
  max-width: 100%;
  grid-gap: 5%;
  padding: 5%;
`;

export const MainLeft = styled.div``;

export const TimeLine = styled.div``;

export const Container = styled.div`
  font-family: "Bebas Neue", cursive;
  font-weight: 100;
  width: 90%;
  .h2Class {
    color: var(--palletered4);
  }
  .itemMes {
    color: var(--palletered4);
  }
`;

export const Card = styled.div`
  color: var(--bg900);
  outline: none;
  background-color: var(--bg200);
  display: grid;
  grid-template-columns: 1fr 1fr;

  .titleItem {
    font-size: 2vw;
    grid-column: 1/3;
    a {
      text-decoration: none;
      color: inherit;
    }

    @media (max-width: 900px) {
      font-size: 3vw;
    }
  }
  .releaseItem {
    text-align: center;
    background: #d41d24;
    color: var(--bg200);
    letter-spacing: 0.2ch;
    font-size: 2vw;
    grid-column-start: 1;
    grid-column-end: 3;

    @media (max-width: 900px) {
      font-size: 2.5vw;
    }
  }

  .overviewItem {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1.3vw;
    font-weight: 700;
    @media (max-width: 900px) {
      font-size: 1.8vw;
    }
  }
  .cardMedia {
    grid-column: 1/3;
  }
  .posterItem {
    img {
      :hover {
        filter: inherit;
        -webkit-filter: contrast(150%);
      }
      @media (max-width: 900px) {
      }
    }
  }
  .videoItem {
    iframe {
      :hover {
        filter: inherit;
        -webkit-filter: contrast(150%);
      }
      @media (max-width: 900px) {
      }
    }
  }
  .buttonGenre {
    display: inline-flex;
    .pbuttonGenre {
      margin-right: 2rem;
      font-family: "Barlow Condensed", sans-serif;
      font-weight: 700;
      font-size: 1.3vw;
      color: var(--bg100);
      background-color: var(--bg900);
      border-width: 1px;
      border-color: #d41d24;
    }
  }
`;
