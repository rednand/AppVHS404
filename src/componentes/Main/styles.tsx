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

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: contain;
  }

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
  width: 110%;
  flex: 1;
  word-spacing: 5px;
  color: var(--bg100);
  outline: none;
  min-width: 10px;
  border: 0.2rem solid #f8f9fa;
  background: var(--bg900);
  margin: 3rem;
  display: flex;
  flex-wrap: wrap;

  .card {
    width: 50%;
  }
  .titleItem {
    font-size: 2rem;
    margin: 2rem;
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
    width: 100%;
    margin: 1rem 2rem;
  }
  .posterItem {
    width: 38%;
    margin: 7rem auto 2.5rem;
  }
  .videoItem {
    width: 100%;
    height: 25rem;
    margin: 2rem 2rem;
  }
`;
