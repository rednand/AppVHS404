import React from "react";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import Main from "../../componentes/Main";
import "./index";
import { Back } from "./styles";

const Home = () => {
  return (
    <Back>
      <Header />
      <Main />
      <Footer />
    </Back>
  );
};

export default Home;
