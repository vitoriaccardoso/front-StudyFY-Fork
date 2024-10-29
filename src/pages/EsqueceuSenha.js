import React from 'react';
import Container from '../styles/telaCheia';
import Titulo from '../components/Titulo';
import CampoEsqueceuSenha from '../components/CampoEsqueceuSenha'
import fundoAmarelo from '../assets/fundo-desktop.png'
import Fundo from '../styles/fundoDesktop'
import { useMediaQuery } from '@mui/material';

const EsqueceuSenha = () => {

    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
    <Container style={{justifyContent: 'center'}}>
        {isDesktop ? (
          <Fundo src={fundoAmarelo}></Fundo>
        ) : (
          <Titulo titulo={'Esqueceu a senha?'} />
        )}
        <CampoEsqueceuSenha/>
      </Container>
    )
}

export default EsqueceuSenha