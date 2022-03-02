import styled from "styled-components";

export const MainTeste = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: 100%;
  grid-area: main;
  margin: auto;
  background: #d8d49a;
  background-image: url("../../assets/imgs/main.png");
  background-repeat: no-repeat;
  background-position: 100%;
  background-size: cover;
`;

export const MainTeste2 = styled.div`
  width: 70%;
  color: #000000;
  margin: auto;
  background: #8773ba;
  padding: 5%;
`;

export const MainTeste3 = styled.div`
  width: 90%;
  height: 100vh;
  color: #000000;
  margin: auto;
  background: #d8d49a;
`;

export const GridLayout = styled.div`
  height: 100vh;
  width: 100%;
  background: #d8d49a;
  display: grid;
  grid-template-areas:
    "nav nav nav"
    "asideLeft main asideRight"
    "footer footer footer";
  grid-template-rows: 1fr 9fr 1fr;
  grid-template-columns: 1fr 6fr 1fr;
`;

export const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  width: 50%;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

export const Content1 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

export const Content2 = styled(Content1)``;

export const Nav = styled.nav`
  grid-area: nav;
`;
export const AsideLeft = styled.aside`
  grid-area: asideLeft;
`;
export const AsideRight = styled.aside`
  grid-area: asideRight;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
`;

export const Card = styled.div`
  flex: 1;
  outline: none;
  min-width: 80px;
  background: #a6b8b9;
  display: flex;
  flex-wrap: wrap;
`;
