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
        backgroundColor: "#d8d49a",
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
