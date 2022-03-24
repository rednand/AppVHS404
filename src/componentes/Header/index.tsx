import React, { useState, useEffect } from "react";
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

  // function handleScroll() {
  //   if (document.documentElement.scrollTop > 8) {
  //     setshowBiggerHeaderd(false);
  //     setShowNormalHeader(true);
  //   }
  // }

  function handleBiggerHeader() {
    setshowBiggerHeaderd(false);
    setShowNormalHeader(true);
  }

  // useEffect(() => {
  //   window.onclick = () => handleScroll();
  // }, []);

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
