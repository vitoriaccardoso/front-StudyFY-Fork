import React from 'react';
import Container from '../styles/telaCheia';
import Titulo from '../components/Titulo';
import CampoMudarSenha from '../components/CampoMudarSenha'

const EsqueceuSenha = () => {
    return (
    <Container style= {{gap: '2vh', alignItems: 'center'}}>
        <Titulo titulo={"Mudar senha"}/>
        <CampoMudarSenha/>
    </Container>
    )
}

export default EsqueceuSenha