// src/components/Box.js
import React, { useState, useEffect } from 'react';
import * as C from './style';
import atividades from '../../assets/atividades.png';
import caderno from '../../assets/caderno.png';
import trofeu from '../../assets/trofeu.png';
import duvida from '../../assets/duvida.png';
import notificacao from '../../assets/notificacao.png';
import mais from '../../assets/mais_preto.png';
import chat from '../../assets/chat.png';
import chatIA from '../../assets/chatIA.png';
import mentoria from '../../assets/mentoria.png';
import usuario from '../../assets/user.png'
import { Link } from 'react-router-dom';

const AbasGrupoMentoria = () => {
  const [imgAtiva, setImgAtiva] = useState(null); // Índice ativo para as imagens principais
  const [imgExtraAtiva, setImgExtraAtiva] = useState(null); // Índice ativo para as imagens extras
  const [mostrarImagens, setMostrarImagens] = useState(false);

  useEffect(() => {
    const storedImgAtiva = localStorage.getItem('imgAtiva');
    if (storedImgAtiva !== null) {
      setImgAtiva(parseInt(storedImgAtiva, 10)); // Converte o valor de volta para número
    }
  }, []);

  const ClickImg = (index) => {
    setImgAtiva(index); // Define a imagem ativa nas imagens principais
    setImgExtraAtiva(null); // Reseta a imagem extra ativa ao clicar na imagem principal
    localStorage.setItem('imgAtiva', index); // Salva o índice no localStorage
  };

  const ClickImgExtra = (index) => {
    setImgExtraAtiva(index); // Define a imagem ativa nas imagens extras
    setImgAtiva(null); // Reseta a imagem principal ativa ao clicar na imagem extra
    localStorage.setItem('imgExtraAtiva', index); // Salva o índice no localStorage
  };

  const imagens = [atividades, caderno, trofeu, usuario, notificacao];
  const imagensExtras = [chat, chatIA, mentoria, duvida];

  const urlsNavegacao = [
    'atividades',
    'caderno-virtual',
    'rank',
    'emblemas',
    'notificacao',
    'chat-privado',
    'chatIA',
    'grupo-mentoria',
    'ajuda',
  ]

  const MaisImagens = () => {
    setMostrarImagens((prev) => !prev); // Alterna a visibilidade da div
  };

  return (
    <C.ContainerNavegacao>
      <C.DivImgs>
        {imagens.map((imgSrc, index) => (
          <C.ImgDiv
            key={index}
            onClick={() => ClickImg(index)}
            style={{ backgroundColor: imgAtiva === index ? '#d9d9d9' : 'transparent' }}
          >
            <Link style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} to={`/${urlsNavegacao[index]}`}>
              <img style={{ height: '70%', width: '60%' }} src={imgSrc} alt={`Imagem ${index + 1}`} />
            </Link>
          </C.ImgDiv>
        ))}
        <C.DivImagensExtras mostrar={mostrarImagens}>
          {imagensExtras.map((imgSrc, index) => (
            <C.ImgDivExtras // Aplicando estilo na imagem extra também
              key={index}
              onClick={() => ClickImgExtra(index)}
              style={{ backgroundColor: imgExtraAtiva === index ? '#d9d9d9' : 'transparent' }}
            >
              <Link style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} to={`/${urlsNavegacao[index + 5]}`}>
                <img style={{ height: '100%', width: '100%' }} src={imgSrc} alt={`Imagem Extra ${index + 1}`} />
              </Link>
            </C.ImgDivExtras>
          ))}
        </C.DivImagensExtras>
      </C.DivImgs>
      <img src={mais} style={{ marginRight: '5vw' }} alt="Mais" onClick={MaisImagens} />
    </C.ContainerNavegacao>
  );
};

export default AbasGrupoMentoria;
