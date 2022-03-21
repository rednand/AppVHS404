import styled from "styled-components";
const imageFilePath = "assets/imagens/main.png";

export const Back = styled.div`
  background-image: url("assets/imagens/crash.png");
  background-size: cover;
  background-color: var(--bg500);
  position: relative;

  ::before {
    content: "";
    background-image: url("assets/imagens/crash.png");
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.7;
  }
`;
