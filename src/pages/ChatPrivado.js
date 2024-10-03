import React from 'react';
import Container from '../styles/telaCheia';
import CampoChat from '../components/CampoChat'
import Navegacao from '../components/Navegacao'
import CampoInput from '../components/CampoInput'

const ChatPrivado = () => {
    return (
    <Container style= {{backgroundColor: 'white', gap: '2vh', alignItems: 'center', paddingTop: '1vh'}}>
        <span>chat</span>
        <CampoChat titulo = {'Aguardando algum mentor aceitar seu pedido de ajuda'}></CampoChat> 
        <CampoInput></CampoInput>
      <Navegacao></Navegacao>
    </Container>
    )
}

export default ChatPrivado