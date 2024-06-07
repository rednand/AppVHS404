import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './../pages/Home';
import MovieId from './../pages/Movie';
import Review from './../pages/Reviews';
import Filmes from './../pages/Filmes';
import Header from '../componentes/Header';

import '../index';
import Cadastro from './../pages/Cadastro';

const Rotas = () => {
  return (
    <Router>
      <Header isIndex={false} />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Cadastro />} path="/cadastro"></Route>
        <Route element={<Review />} path="/reviews"></Route>
        <Route element={<Filmes />} path="/filmes"></Route>
        <Route element={<MovieId />} path="/:id"></Route>
      </Routes>
    </Router>
  );
};

export default Rotas;
