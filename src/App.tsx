import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Exclusao from "./pages/Exclusao";
import ScrollPage from "./componentes/Scroll";
import Home from "./pages/Home";
import Header from "./componentes/Header";
import "./index";
import { createStore } from "redux";
import reducer from "./store/reducers";
import MovieId from "./pages/Movie";

const imageFilePath = "./assets/imagens/main.png";
const store = createStore(reducer);
const App = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--bg900)",
        fontFamily: "'Barlow Condensed', sans-serif",
      }}
    >
      <Provider store={store}>
        <Router>
          <Header isIndex={false} />
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Exclusao />} path="/buscar"></Route>
            <Route element={<Cadastro />} path="/cadastro"></Route>
            <Route element={<MovieId />} path="/:id"></Route>
          </Routes>
        </Router>
      </Provider>
      <ScrollPage />
    </div>
  );
};

export default App;
