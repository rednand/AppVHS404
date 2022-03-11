import React, { useState } from "react";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import UserForm from "../../componentes/FormControlled";
import Input from "componentes/FormControlled/Input";

const Cadastro = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <Header isIndex={true} />
      <UserForm></UserForm>
      <Footer></Footer>
    </>
  );

  // https://dev.to/jucian0/reactjs-formularios-55mo
};

export default Cadastro;
