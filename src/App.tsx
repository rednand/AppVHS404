import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Exclusao from "./pages/Exclusao";
import ScrollPage from "./componentes/Scroll";
import Home from "./pages/Home";
import Header from "./componentes/Header";
import "./index";
const imageFilePath = "./assets/imagens/main.png";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--bg900)",
        fontFamily: "'Barlow Condensed', sans-serif",
      }}
    >
        <Router>
          <Header isIndex={false} />
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Exclusao />} path="/buscar"></Route>
            <Route element={<Cadastro />} path="/cadastro"></Route>
          </Routes>
        </Router>
      <ScrollPage />
    </div>
  );
};

export default App;
