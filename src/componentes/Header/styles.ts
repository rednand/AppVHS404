import styled from "styled-components";

export const TitleBackground = styled.div`
  background-color: var(--bg900);
  background-image: url("assets/imagens/hand.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 95%;
  margin-top: 0%;
`;

export const Title = styled.div`
  width: 50%;
  background-color: var(--bg900);
  height: 12rem;
  color: var(--bg800);
  background-image: url("assets/imagens/title.png");
  background-repeat: no-repeat;
  background-position: -1% 37%;
`;

export const Menu = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: 100%;
  height: 2rem;
  color: #929293;
  background-image: url("assets/imagens/danger255.png");
  background-color: #212223;
  background-repeat: repeat;
  background-size: contain;
  -webkit-text-stroke-width: 1px;
  /* largura da borda */
  -webkit-text-stroke-color: #212223;
  /* cor da borda */
  font-size: 35px;
  text-align: left;
`;
