// src/components/Box.js
import React, { useState } from 'react';
import * as C from './style';

const AbasGrupoMentoria = () => {
  const [abaAtiva, setAbaAtiva] = useState(0); // Estado para rastrear a aba ativa

  const handleClick = (index) => {
    setAbaAtiva(index); // Atualiza a aba ativa ao clicar
  };

  return (
    <C.AbasGrupo>
      <C.Abas>
        {['Membros', 'Atividades', 'Dúvidas'].map((aba, index) => (
          <C.Aba 
            key={index} 
            onClick={() => handleClick(index)} 
            style={{ opacity: abaAtiva === index ? 1 : 0.5 }} // Aplica opacidade
          >
            {aba}
          </C.Aba>
        ))}
      </C.Abas>
      <C.CampoAba></C.CampoAba>
    </C.AbasGrupo>
  );
};

export default AbasGrupoMentoria;
