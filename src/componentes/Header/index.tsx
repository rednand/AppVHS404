import React, { useState } from 'react';
const img = './assets/imagens/sangue33.png';
import {
  Title,
  HeaderBackground,
  BiggerHeader,
  Menu,
  TitleBackground,
  ImagemFundoText,
  BlinkingText,
  TitleText,
} from './styles';
import Navbar from '../Navbar';
import useWindowWidth from './../../utils/windowWidth';

const Header = (props) => {
  const [showBiggerHeader, setshowBiggerHeaderd] = useState(false);
  const [showNormalHeader, setShowNormalHeader] = useState(true);

  function handleBiggerHeader() {
    setshowBiggerHeaderd(!showBiggerHeader);
    setShowNormalHeader(true);
  }

  const windowWidth = useWindowWidth();

  return (
    <HeaderBackground>
      <TitleBackground showComponent={showNormalHeader}>
        {showNormalHeader && (
          <>
            {/* <ImagemFundo src={img} alt="imagem_de_sangue_escorrendo" /> */}
            <ImagemFundoText>
              Suas estreias de filmes de terror no Brasil{' '}
            </ImagemFundoText>
          </>
        )}

        <Title showComponent={showNormalHeader}>
          <div
            style={{
              display: 'flex',
              height: windowWidth < 900 ? '20vh' : '25vh',
              alignItems: 'center',
              paddingLeft: '8%',
            }}
          >
            <BlinkingText>Â</BlinkingText>
            <TitleText>VHS 404</TitleText>
          </div>
        </Title>
        <BiggerHeader
          onClick={() => handleBiggerHeader()}
          showComponent={showBiggerHeader}
        ></BiggerHeader>
        <Menu>
          <Navbar />
        </Menu>
      </TitleBackground>
    </HeaderBackground>
  );
};

export default Header;
