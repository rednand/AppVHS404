import React, { useState } from "react";
const img = "./assets/imagens/blood.png";
import {
  Title,
  HeaderBackground,
  BiggerHeader,
  Menu,
  TitleBackground,
  ImagemFundo,
} from "./styles";
import Navbar from "../Navbar";

const Header = (props) => {
  const [showBiggerHeader, setshowBiggerHeaderd] = useState(false);
  const [showNormalHeader, setShowNormalHeader] = useState(true);

  function handleBiggerHeader() {
    setshowBiggerHeaderd(false);
    setShowNormalHeader(true);
  }

  return (
    <HeaderBackground>
      <TitleBackground showComponent={showNormalHeader}>
        <ImagemFundo src={img} alt="imagem_de_sangue_escorrendo" />
        <Title showComponent={showNormalHeader} />
        <BiggerHeader
          onClick={() => handleBiggerHeader()}
          showComponent={showBiggerHeader}
        ></BiggerHeader>
        <Menu>
          <Navbar />
        </Menu>
      </TitleBackground>
    </HeaderBackground>
  );
};

export default Header;