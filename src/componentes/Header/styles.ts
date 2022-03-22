import styled from "styled-components";

export const HeaderBackground = styled.div`
  background-color: var(--bg900);
  background-image: url("assets/imagens/blood.png");
  background-position: 100% 40%;
  background-size: contain;
  background-repeat: no-repeat;
  animation: changeBackgroundColor 7s infinite;

  @keyframes changeBackgroundColor {
    0% {
      background-color: #a5381b;
    }
    50% {
      background-color: #a4161a;
    }
    100% {
      background-color: #660708;
    }
  }
`;

interface IHeadingStyled {
  showComponent: boolean;
}

export const TitleBackground = styled("div")<IHeadingStyled>`
  ${(props) =>
    props.showComponent &&
    `
  background-color: var(--bg900);
  height: 12rem;
  background-image: url("assets/imagens/Sem título.png");
  background-position: 100% 80%;
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
height: 135vh;
margin-top: -20%;
background-color: inherit;
background-image: url("assets/imagens/placabig(2).png");
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
