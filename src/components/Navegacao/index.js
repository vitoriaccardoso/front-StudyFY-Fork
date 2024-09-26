// src/components/Box.js
import React, { useState } from 'react';
import * as C from './style';
import atividades from '../../assets/atividades.png';
import caderno from '../../assets/caderno.png';
import trofeu from '../../assets/trofeu.png';
import duvida from '../../assets/duvida.png';
import notificacao from '../../assets/notificacao.png';
import mais from '../../assets/mais.png';

const AbasGrupoMentoria = () => {
  const [imgAtiva, setImgAtiva] = useState(null);
  const [mostrarImagens, setMostrarImagens] = useState(false);

  const handleImgClick = (index) => {
    setImgAtiva(index);
  };

  const imagens = [atividades, caderno, trofeu, duvida, notificacao];
  const imagensExtras = [atividades, caderno, trofeu];

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
            <img key={index} style={{ height: '20%', width: '40%'}} src={imgSrc} alt={`Imagem Extra ${index + 1}`} />
          ))}
        </C.DivImagensExtras>
      </C.DivImgs>
      <img src={mais} style={{ marginRight: '5vw' }} alt="Mais" onClick={handleMaisClick} />
    </C.ContainerNavegacao>
  );
};

export default AbasGrupoMentoria;
