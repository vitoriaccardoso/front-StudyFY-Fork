// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import CampoChat from '../components/CampoChat'
import Navegacao from '../components/Navegacao'
import CampoInput from '../components/CampoInput'

const chatIA = () => {

  return (
    <Container style={{backgroundColor: 'white', gap: '2vh', alignItems: 'center', paddingTop: '1vh'}}>
        <span>chatIA</span>
        <CampoChat></CampoChat>
        <CampoInput></CampoInput>
      <Navegacao></Navegacao>
    </Container>
  );
};

export default chatIA;
