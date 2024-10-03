import React, { useRef, useState } from 'react';
import * as C from './style';
import mascote from '../../assets/mascote.png'
import './styles.css'
import Titulo from '../Titulo';

const CampoChat = ({titulo}) => {

  return (
    <>
    <C.Campo>
        <span style={{textAlign: 'center', width: '70%', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold'}}>{titulo}</span>
    </C.Campo>
    </>
  );
};

export default CampoChat;
