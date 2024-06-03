import { Typography } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';

export const HeaderBackground = styled.div`
  background: url('assets/imagens/initialwall2.png') repeat;
  background-size: contain;
  background-position: 100% 100%;
  box-shadow: inset -30px 380px 400px 200px var(--bg900);
`;

interface IHeadingStyled {
  showComponent: boolean;
}

export const TitleBackground = styled('div')<IHeadingStyled>`
  ${(props) =>
    props.showComponent &&
    `
    z-index: 1;
    position: relative;
  background-color: var(--bg900);
  height: 12rem;
  `}
`;

export const ImagemFundo = styled.img`
  width: 20%;
  position: absolute;
  right: 0;
  margin-right: 0;
`;

export const ImagemFundoText = styled.p`
  width: 50%;
  position: absolute;
  color: white;
  font-family: 'MinhaFonte';
  right: 3%;
  margin-top: 6%;
  text-align: right;
  font-size: 15px;
  margin-right: 0;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    width: 95%;
    margin-top: 30%;
    font-size: 10px;
    text-align: center;
  }
  @media only screen and (max-width: 400px) {
    font-size: 20px;
    width: 95%;
    margin-top: 40%;
    margin-left: auto;
    margin-right: auto;
    font-size: 10px;
    text-align: center;
  }
`;

interface IHeadingStyled {
  showComponent: boolean;
}
export const BiggerHeader = styled('div')<IHeadingStyled>`
  ${(props) =>
    props.showComponent &&
    `
height: 155vh;
margin-top: -15%;
background-color: inherit;
background-image: url("assets/imagens/initialAlert.png");
background-position: 50%;
background-size: contain;
background-repeat: no-repeat;
-webkit-transition: webkit-transform 2s;
animation: transform 3s linear infinite;

@keyframes transform {
  0% {
    transform: translateY(-7rem);
  }
  50% {
    transform: translateY(5rem);
  }
  100% {
    transform: translateY(-7rem);
  }
}
`}
`;
export const Title = styled('div')<IHeadingStyled>`
  @font-face {
    font-family: 'MinhaFonte';
    src: url('../../assets/fonts/KindlyRewind-BOon.ttf') format('truetype');
  }

  ${(props) =>
    props.showComponent &&
    `
  width: 50%;
  height: 12rem;
  font-family: 'MinhaFonte', sans-serif;
  // background-image: url("assets/imagens/titletrans2.png");
  background-repeat: no-repeat;
  background-position: 12% 70%;
`}

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    background-size: 50%;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(5rad, var(--bg900), #d41d24, var(--bg900));

  @media (max-width: 400px) {
    float: left;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 20vh;
  align-items: center;
  padding-left: 20px;

  @media only screen and (max-width: 400px) {
    justify-content: center;
  }
`;

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const BlinkingText = styled('p')`
  color: white;
  font-family: 'MinhaFonte';
  font-size: 90px;
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media only screen and (max-width: 400px) {
    font-size: 45px;
  }

  animation: ${blink} 2s linear infinite;
`;

export const TitleText = styled('p')`
  color: white;
  font-family: 'MinhaFonte';
  font-size: 50px;
  padding-top: 15px;

  @media only screen and (max-width: 400px) {
    font-size: 25px;
    text-align: center;
  }
`;
