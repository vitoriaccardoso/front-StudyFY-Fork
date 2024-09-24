// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import InfoGrupoMentoria from '../components/InfoGrupoMentoria';
import AbasGrupoMentoria from '../components/AbasGrupoMentoria'
import Navegacao from '../components/Navegacao'
const GrupoMentoria = () => {

  return (
    <Container style={{alignItems: 'center', paddingTop: '1vh'}}>
        <span>Grupo de mentoria</span>
      <InfoGrupoMentoria />
      <AbasGrupoMentoria />
      <Navegacao></Navegacao>
    </Container>
  );
};

export default GrupoMentoria;
