// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'

const Perfil = () => {

  return (
    <Container style={{backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh'}}>
        <span>Perfil</span>
        <Navegacao></Navegacao>
    </Container>
  );
};

export default Perfil;
