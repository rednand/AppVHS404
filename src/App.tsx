import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Exclusao from "./pages/Exclusao";
import Home from "./pages/Home";
import MovieId from "./pages/Movie";
import Review from "./pages/Reviews";
import Header from "./componentes/Header";
import ScrollPage from "./componentes/Scroll";

import "./index";

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
          <Route element={<Review />} path="/reviews"></Route>
          <Route element={<MovieId />} path="/:id"></Route>
        </Routes>
      </Router>
      <ScrollPage />
    </div>
  );
};

export default App;
