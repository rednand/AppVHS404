import styled from "styled-components";

export const MainTeste1 = styled.div`
  width: 100%;
  display: inline-flex;
  min-height: 100vh;
`;

export const MainTeste3 = styled.div`
  width: 50%;
  color: #000000;
  margin: 5rem auto;
  background-color: rgba(248, 248, 248, 0.8);
  border: 0.2rem solid #3d3f40;
`;

export const Section = styled.div`
  width: 20%;
  margin: 5rem auto;
  position: relative;
  color: #f8f9fa;
  background-color: var(--bg200);
  border: 0.2rem solid var(--bg800);

  .itens {
    margin: 2rem;
  }
`;
export const Container = styled.div`
  font-family: "Bebas Neue", cursive;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  margin: 0;
  .h2Class {
    color: #d41d24;
    font-size: 3rem;
    margin: 2rem;
  }
`;

export const Card = styled.div`
  width: 100%;
  flex: 1;
  word-spacing: 5px;
  color: var(--bg100);
  outline: none;
  border: 0.2rem solid #f8f9fa;
  background: var(--bg800);
  margin: 2rem 5rem;
  display: flex;
  flex-wrap: wrap;
  .card {
    width: 100%;
  }
  .titleItem {
    font-size: 2rem;
    margin: 1.2rem 2rem;
    width: 50%;
  }
  .releaseItem {
    font-size: 1.5rem;
    margin-left: 2rem;
    width: 100%;
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
      padding: 1rem 2rem;
      color: var(--bg700);
      border-color: #d41d24 transparent #d41d24 transparent;
    }
  }
`;
