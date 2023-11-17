import React, { useState } from 'react';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import UserForm from '../../componentes/FormControlled';
import Input from 'componentes/FormControlled/Input';
import { Menu } from '../../componentes/Header/styles';

const Cadastro = () => {
  const [input, setInput] = useState('');

  return (
    <>
      <UserForm></UserForm>
      <Footer></Footer>
    </>
  );
};

export default Cadastro;
