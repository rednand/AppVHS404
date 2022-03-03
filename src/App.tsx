import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Main from "./componentes/Main";
import "./index";
const imageFilePath = "./assets/imagens/main.png";

const App = () => {
  return (
    <div
      className="phase1"
      style={{
        backgroundColor: "#6C757D",
        backgroundImage: `url(${imageFilePath})`,
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
