import React, { useState, useEffect } from "react";
import {
  Title,
  HeaderBackground,
  BiggerHeader,
  Menu,
  TitleBackground,
} from "./styles";
import Navbar from "../Navbar";

const Header = (props) => {
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

  if (!props.isIndex) {
    return (
      <TitleBackground showComponent={true}>
        <Navbar />
        <Title showComponent={true}></Title>
        <Menu></Menu>
      </TitleBackground>
    );
  }

  return (
    <HeaderBackground>
      <TitleBackground showComponent={showNormalHeader}>
        <Navbar />
        <Title showComponent={showNormalHeader}></Title>
        <BiggerHeader showComponent={showBiggerHeader}></BiggerHeader>
        <Menu></Menu>
      </TitleBackground>
    </HeaderBackground>
  );
};

export default Header;
