import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: inline-flex;
`;

export const MainLeft = styled.div`
  position: relative;
  display: inline-flex;
  width: 60%;
  margin: 2% 8%;
`;

export const TimeLine = styled.div`
  width: 3%;
  margin: 0;
  background-color: #d41d24;
`;

export const Container = styled.div`
  font-family: "Bebas Neue", cursive;
  font-weight: 100;
  width: 100%;
  /* display: flex; */
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
  height: 45rem;
  margin: 8% 0;
  word-spacing: 5px;
  color: var(--bg900);
  outline: none;
  background-color: var(--bg200);
  /* display: flex;
  flex-wrap: wrap; */

  .card {
    border: none;
    background: var(--bg200);
  }
  .titleItem {
    font-size: 2rem;
    margin: 3rem 0 0 2rem;
    width: 50%;

    a {
      text-decoration: none;
      color: inherit;
    }
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
    margin: 2% 0;
    display: flex;
    justify-content: space-evenly;
  }
  .posterItem {
    align-items: center;
    img {
      width: fit-content;
      height: 25rem;

      :hover {
        filter: inherit;
        -webkit-filter: contrast(150%);
      }
    }
  }
  .videoItem {
    width: auto;
    iframe {
      width: 32rem;
      height: 22rem;
      transform: translateY(6%);

      :hover {
        filter: inherit;
        -webkit-filter: contrast(150%);
      }
    }
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
