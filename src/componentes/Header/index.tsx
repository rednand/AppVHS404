import React, { useState, useEffect } from "react";
import { Title, Menu, TitleBackground } from "./styles";

interface initialState {}
const Header = () => {
  const [scroll, setScroll] = useState({
    height: "100vh",
    backgroundImage: "url('assets/imagens/sangue4.png')",
    backgroundPosition: "80%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  });

  function handleScroll() {
    if (document.documentElement.scrollTop > 430) {
      setScroll({
        height: "12rem",
        backgroundImage: "url('assets/imagens/hand.png')",
        backgroundPosition: "95%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      });
    }
  }
  useEffect(() => {
    window.onscroll = () => handleScroll();
    console.log("scroll", scroll);
  }, []);
  console.log("teste", document.documentElement.onload);

  return (
    <TitleBackground>
      <div style={scroll}>
        <Title></Title>
      </div>
      <Menu></Menu>
    </TitleBackground>
  );
};

export default Header;
