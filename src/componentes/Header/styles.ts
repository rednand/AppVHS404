import styled from "styled-components";

export const HeaderBackground = styled.div`
  background-color: var(--bg900);
`;

interface IHeadingStyled {
  showComponent: boolean;
}

export const TitleBackground = styled("div")<IHeadingStyled>`
  ${(props) =>
    props.showComponent &&
    `
  background-color: var(--bg900);
  margin-top: 0%;
  display: "inline-flex";
  height: 12rem;
  width: 100%;
  background-image: url("assets/imagens/hand.png");
  background-position: 92%;
  background-size: contain;
  background-repeat: no-repeat;
  `}
`;

interface IHeadingStyled {
  showComponent: boolean;
}
export const BiggerHeader = styled("div")<IHeadingStyled>`
  ${(props) =>
    props.showComponent &&
    `
height: 125vh;
margin-top: -15%;
background-color: inherit;
background-image: url("assets/imagens/placa3.png");
background-position: 50%;
background-size: contain;
background-repeat: no-repeat;
-webkit-transition: webkit-transform 2s;
animation: transform 3s linear infinite;

@keyframes transform {
  0% {
    transform: translateY(-5rem);
  }
  50% {
    transform: translateY(5rem);
  }
  100% {
    transform: translateY(-5rem);
  }
}
`}
`;
export const Title = styled("div")<IHeadingStyled>`
  ${(props) =>
    props.showComponent &&
    `
  width: 30%;
  height: 12rem;
  background-color: var(--bg900);
  background-image: url("assets/imagens/title.png");
  background-repeat: no-repeat;
  background-position: -1% 37%;
`}

  @media screen and (min-width: 900px) and (max-width: 1500px) {
    width: 30%;
    background-position: 60% 37%;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 3rem;
  background: linear-gradient(5rad, var(--bg900), #d41d24, var(--bg900));
`;
