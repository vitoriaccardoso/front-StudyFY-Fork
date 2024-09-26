// src/components/Box.js
import React, { useState } from 'react';
import * as C from './style';
import atividades from '../../assets/atividades.png';
import caderno from '../../assets/caderno.png';
import trofeu from '../../assets/trofeu.png';
import duvida from '../../assets/duvida.png';
import notificacao from '../../assets/notificacao.png';
import mais from '../../assets/mais.png';
import chat from '../../assets/chat.png';
import chatIA from '../../assets/chatIA.png';
import mentoria from '../../assets/mentoria.png';

const AbasGrupoMentoria = () => {
  const [imgAtiva, setImgAtiva] = useState(null); // Índice ativo para as imagens principais
  const [imgExtraAtiva, setImgExtraAtiva] = useState(null); // Índice ativo para as imagens extras
  const [mostrarImagens, setMostrarImagens] = useState(false);

  const handleImgClick = (index) => {
    setImgAtiva(index); // Define a imagem ativa nas imagens principais
    setImgExtraAtiva(null); // Reseta a imagem extra ativa ao clicar na imagem principal
  };

  const handleImgExtraClick = (index) => {
    setImgExtraAtiva(index); // Define a imagem ativa nas imagens extras
    setImgAtiva(null); // Reseta a imagem principal ativa ao clicar na imagem extra
  };

  const imagens = [atividades, caderno, trofeu, duvida, notificacao];
  const imagensExtras = [chat, chatIA, mentoria];

  const handleMaisClick = () => {
    setMostrarImagens((prev) => !prev); // Alterna a visibilidade da div
  };

  return (
    <C.ContainerNavegacao>
      <C.DivImgs>
        {imagens.map((imgSrc, index) => (
          <C.ImgDiv
            key={index}
            onClick={() => handleImgClick(index)}
            style={{ backgroundColor: imgAtiva === index ? '#666260' : 'transparent' }}
          >
            <img style={{ height: '70%', width: '60%' }} src={imgSrc} alt={`Imagem ${index + 1}`} />
          </C.ImgDiv>
        ))}
        <C.DivImagensExtras mostrar={mostrarImagens}>
          {imagensExtras.map((imgSrc, index) => (
            <C.ImgDivExtras // Aplicando estilo na imagem extra também
              key={index}
              onClick={() => handleImgExtraClick(index)}
              style={{ backgroundColor: imgExtraAtiva === index ? '#666260' : 'transparent' }}
            >
              <img style={{ height: '100%', width: '100%' }} src={imgSrc} alt={`Imagem Extra ${index + 1}`} />
            </C.ImgDivExtras>
          ))}
        </C.DivImagensExtras>
      </C.DivImgs>
      <img src={mais} style={{ marginRight: '5vw' }} alt="Mais" onClick={handleMaisClick} />
    </C.ContainerNavegacao>
  );
};

export default AbasGrupoMentoria;
