import styled from "styled-components";

export const HeaderBackground = styled.div`
  background-color: var(--bg900);
`;

interface IHeadingStyled {
  emphasized: boolean;
}

export const TitleBackground = styled("div")<IHeadingStyled>`
  ${(props) =>
    props.emphasized &&
    `
  background-color: var(--bg900);
  margin-top: 0%;
  height: 12rem;
  width: 100%;
  background-image: url("assets/imagens/hand.png");
  background-position: 95%;
  background-size: contain;
  background-repeat: no-repeat;
  `}
`;

interface IHeadingStyled {
  emphasized: boolean;
}
export const BiggerHeader = styled("div")<IHeadingStyled>`
  ${(props) =>
    props.emphasized &&
    `
height: 100vh;
margin-top: -5%;
background-color: inherit;
background-image: url("assets/imagens/placa3.png");
background-position: 50%;
background-size: contain;
background-repeat: no-repeat;
-webkit-transition: webkit-transform 2s;
transition:  transform 3s;
:hover {
  -webkit-transform:  translateY(-5rem);
  transform: translateY(-5rem);
}


`}
`;
export const Title = styled("div")<IHeadingStyled>`
  ${(props) =>
    props.emphasized &&
    `
  width: 50%;
  height: 12rem;
  background-color: var(--bg900);
  background-image: url("assets/imagens/title.png");
  background-repeat: no-repeat;
  background-position: -1% 37%;
`}
`;

export const Menu = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: 100%;
  height: 2rem;
  color: #929293;
  background-image: url("assets/imagens/danger255.png");
  background-repeat: repeat;
  background-size: contain;
  -webkit-text-stroke-width: 1px;
  /* largura da borda */
  -webkit-text-stroke-color: #212223;
  /* cor da borda */
  font-size: 35px;
  text-align: left;
`;
