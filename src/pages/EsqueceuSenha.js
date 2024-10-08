import React from 'react';
import Container from '../styles/telaCheia';
import Titulo from '../components/Titulo';
import CampoEsqueceuSenha from '../components/CampoEsqueceuSenha'

const EsqueceuSenha = () => {
    return (
    <Container style= {{gap: '2vh', alignItems: 'center'}}>
        <Titulo titulo={"Esqueceu a senha?"}/>
        <CampoEsqueceuSenha/>
    </Container>
    )
}

export default EsqueceuSenha