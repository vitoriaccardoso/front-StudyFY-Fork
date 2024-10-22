// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import TelaPadding from '../styles/TelaPadding';


const Perfil = () => {

  return (
    <Container style={{backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh'}}>
        <span>Perfil</span>
        <TelaPadding>
          <div></div>
        </TelaPadding>
        <Navegacao></Navegacao>
    </Container>
  );
};

export default Perfil;
