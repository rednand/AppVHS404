import React, { useState, useEffect } from "react";
import {
  Title,
  HeaderBackground,
  BiggerHeader,
  Menu,
  TitleBackground,
} from "./styles";

const Header = () => {
  const [showBiggerHeader, setshowBiggerHeaderd] = useState(true);
  const [showNormalHeader, setShowNormalHeader] = useState(false);

  function handleScroll() {
    if (document.documentElement.scrollTop > 8) {
      setshowBiggerHeaderd(false);
      setShowNormalHeader(true);
    }
  }

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <HeaderBackground>
      <TitleBackground emphasized={showNormalHeader}>
        <Title emphasized={showNormalHeader}></Title>
        <BiggerHeader emphasized={showBiggerHeader}></BiggerHeader>
        <Menu></Menu>
      </TitleBackground>
    </HeaderBackground>
  );
};

export default Header;