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
  background: #f8f9fa;
`;

export const Section = styled.div`
  width: 20%;
  margin: 5rem auto;
  color: #f8f9fa;
  background-image: url("../../assets/imagens/Untitled design24.png");
  background-size: contain;
  .itens {
    margin: 2rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;

  .h2Class {
    font-size: 20px;
    margin: 2rem;
  }
`;

export const Card = styled.div`
  width: 100%;
  flex: 1;
  color: #f8f9fa;
  outline: none;
  min-width: 10px;
  background: #3d3f40;
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;

  .divCard {
    width: 50%;
  }
  .pItem {
    font-size: 2rem;
    margin: 2rem;
    width: 50%;
  }
  .releaseItem {
    font-size: 1.5rem;
    margin-left: 2rem;
    width: 100%;
  }
  .cardItem {
    width: 100%;
    margin: 1rem 2rem;
  }
  .imageItem {
    width: 30%;
    margin: 2rem auto;
  }
  .videoItem {
    width: 70%;
    height: 25rem;
    margin: 2rem auto;
  }
`;
