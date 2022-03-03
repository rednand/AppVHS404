import styled from "styled-components";

export const MainTeste1 = styled.div`
  width: 100%;
  display: inline-flex;
`;
export const MainTeste3 = styled.div`
  width: 50%;
  color: #000000;
  margin: 5% auto;
  background: #f8f9fa;
`;

export const Section = styled.div`
  width: 20%;
  background: #f8f9fa;
  margin: 5% auto;
  color: #121212;

  .itens {
    margin: 5%;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

export const Card = styled.div`
  width: 100%;
  flex: 1;
  color: #f8f9fa;
  outline: none;
  min-width: 10px;
  background: #3d3f40;
  margin: 1%;
  display: flex;
  flex-wrap: wrap;

  .pItem {
    font-size: 2rem;
    width: 100%;
    margin: 2% 4%;
  }
  .cardItem {
    width: 40%;
    margin: 2% auto;
  }
  .imageItem {
    width: 30%;
    margin: 2% auto;
  }
`;
