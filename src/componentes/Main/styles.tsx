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
  width: 3%;
  background: #a4161a;
  margin: 0;
`;

export const Section = styled.div`
  width: 25%;
  margin-right: 3%;
  color: var(--bg900);
  background: #f5f3f4;
  margin: 4% 8%;
  text-decoration: none;
  .sectionH3 {
    font-size: 1.7rem;
    font-weight: 900;
  }
  .itens {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 2rem;
  }
`;
export const Container = styled.div`
  font-family: "Bebas Neue", cursive;
  font-weight: 100;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  .h2Class {
    color: var(--bg900);
    font-size: 3rem;
    text-align: center;
    background: #f5f3f4;
    margin: 2rem;
  }
`;

export const Card = styled.div`
  width: 100%;
  flex: 1;
  margin: 8% 0;
  word-spacing: 5px;
  color: var(--bg900);
  outline: none;
  background: #f5f3f4;
  display: flex;
  flex-wrap: wrap;

  .card {
    border: none;
    background: #f5f3f4;
  }
  .titleItem {
    font-size: 2rem;
    margin: 2rem 0 0 2rem;
    width: 50%;
  }
  .releaseItem {
    position: absolute;
    top: -10%;
    left: -3%;
    width: 50%;
    text-align: center;
    background: #a4161a;
    color: var(--bg900);
    font-size: 1.5rem;
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
