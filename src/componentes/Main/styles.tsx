import styled from "styled-components";

export const MainTeste1 = styled.div`
  width: 100%;
  display: inline-flex;
  min-height: 100vh;
  justify-content: space-around;
`;

export const Teste = styled.div`
  position: relative;
  display: inline-flex;
  width: 60%;
  margin: 4% 8%;
`;

export const MainTeste3 = styled.div`
  width: 1.3%;
  background-color: var(--bg900);
  margin: 0 1rem;
`;

export const Section = styled.div`
  width: 25%;
  margin-right: 3%;
  color: #f8f9fa;
  background-color: var(--bg900);
  margin: 4% 8%;

  .itens {
    margin: 2rem;
  }
`;
export const Container = styled.div`
  font-family: "Bebas Neue", cursive;
  font-weight: 100;
  width: 100%;
  margin: 0 1%;

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
  margin: 8% 0;
  margin-left: 4%;
  word-spacing: 5px;
  color: var(--bg100);
  outline: none;
  background: var(--bg900);
  display: flex;
  flex-wrap: wrap;

  .card {
    background: var(--bg900);
  }
  .titleItem {
    font-size: 2rem;
    margin: 1.2rem 2rem;
    width: 50%;
  }
  .releaseItem {
    position: absolute;
    top: -30%;
    left: -7.2%;
    padding-left: 1%;
    text-decoration: overline 10px;
    color: var(--bg900);
    font-size: 1.5rem;
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
      padding: 0.6rem 1.2rem;
      color: var(--bg100);
      background-color: var(--bg900);
      border-width: 1px;
      border-color: #d41d24;
    }
  }
`;
