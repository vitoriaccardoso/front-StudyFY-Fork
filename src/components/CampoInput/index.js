import React, { useRef, useState } from 'react';
import * as C from './style';
import mascote from '../../assets/mascote.png'
import ImgEnviar from '../../assets/seta.png';

const CampoChat = () => {

  return (
    <>
    <C.Campo>
        <C.input placeholder='Escreva uma mensagem'></C.input>
        <C.ImgEnviar src={ImgEnviar}></C.ImgEnviar>
    </C.Campo>
    </>
  );
};

export default CampoChat;
