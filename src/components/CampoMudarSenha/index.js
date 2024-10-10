import * as C from './style';
import React, { useState } from 'react';
import MudarSenha from '../../styles/campoDados';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CampoEsqueceuSenha = () => {

    const [senha, setSenha] = useState("");


    const atualizarSenha = (evento) => {
        setSenha(evento.target.value);
    };
  return (
    <MudarSenha>
      <C.Descricao>Mbude a senha da sua conta</C.Descricao>
      <C.CampoPreencher>
        <C.CampoSenha>
          <FontAwesomeIcon icon={faLock} style={{ height: '50%', width: '10%', marginRight: '0', color: '#FEE101' }} />
          <C.EntradaInfo>
            <C.Input 
              type="senha" 
              id="senha" 
              name="senha" 
              onChange={atualizarSenha} 
              required 
              maxLength={25}
            />
            <C.Label htmlFor="senha">Senha Atual</C.Label>
          </C.EntradaInfo>
        </C.CampoSenha>
        <C.CampoSenha>
          <FontAwesomeIcon icon={faLock} style={{ height: '50%', width: '10%', marginRight: '0', color: '#FEE101' }} />
          <C.EntradaInfo>
            <C.Input 
              type="senha" 
              id="senha" 
              name="senha" 
              onChange={atualizarSenha} 
              required 
              maxLength={25}
            />
            <C.Label htmlFor="senha">Senha Atual</C.Label>
          </C.EntradaInfo>
        </C.CampoSenha>
      </C.CampoPreencher>
      <C.CampoEnvioFormulario>
        <C.BotaoMudar>
          <span>Mudar senha</span>
        </C.BotaoMudar>
        <Link to={'/login'}>Voltar para a tela de login</Link>
      </C.CampoEnvioFormulario>
    </MudarSenha>
  );
};

export default CampoEsqueceuSenha;
