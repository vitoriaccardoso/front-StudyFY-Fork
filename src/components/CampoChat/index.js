import React, { useRef, useState } from 'react';
import * as C from './style';
import mascote from '../../assets/mascote.png'
import './styles.css'

const CampoChat = () => {

  return (
    <>
    <C.Campo>
        <C.mascote src={mascote}></C.mascote>
        <span style={{textAlign: 'center', width: '70%', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold'}}>Converse com nosso caabreso para tirar dúvidas superficiais</span>
    </C.Campo>
    </>
  );
};

export default CampoChat;
