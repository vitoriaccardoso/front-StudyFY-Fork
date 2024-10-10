// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import CampoEmblemas from '../components/CampoEmblemas';
import TituloTela from '../styles/tituloTela';

const Emblemas = () => {

  return (
    <Container style={{backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh'}}>
        <TituloTela>Emblemas</TituloTela>
        <CampoEmblemas/>
        <Navegacao></Navegacao>
    </Container>
  );
};

export default Emblemas;
