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
        <Title showComponent={showNormalHeader} />
        <BiggerHeader
          onClick={() => handleBiggerHeader()}
          showComponent={showBiggerHeader}
        ></BiggerHeader>
        <Menu>
          <Navbar/>
        </Menu>
      </TitleBackground>
    </HeaderBackground>
  );
};

export default Header;