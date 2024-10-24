// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import TelaPadding from '../styles/TelaPadding';
import TituloTela from '../styles/tituloTela';


const Perfil = () => {

  return (
    <Container style={{backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh'}}>
        <TituloTela>Emblemas</TituloTela>
        <CampoPerfil></CampoPerfil>
        <Navegacao></Navegacao>
    </Container>
  );
};

export default Perfil;
