import * as C from './style';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import EsqueceuSenha from '../../styles/campoDados';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CampoEsqueceuSenha = () => {
  const [email, setEmail] = useState("");
  const [codigoVerificacao, setCodigoVerificacao] = useState("");
  const [codigoGerado, setCodigoGerado] = useState("");
  const [verificacao, setVerificacao] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');

  const gerarCodigo = () => {
    const codigo = Math.floor(100000 + Math.random() * 900000); // Gera um código de 6 dígitos
    return codigo.toString();
  };

  const enviarVerificacaoEmail = () => {
    if(email === '') {
      setMensagemErro('O email não pode ficar vazio');
    } else if (email.length > 256) {
      setMensagemErro('Este email passou do limite máximo de caracteres');
    } else {
      setMensagemErro('')
      const codigo = gerarCodigo();
      setCodigoGerado(codigo);
  
      const parametrosTemplate = {
        verification_code: codigo,
        to_email: email,
      };
  
      emailjs
        .send(
          "service_lttcion",   // Coloque seu Service ID
          "template_czl4rra",   // Coloque seu Template ID
          parametrosTemplate,
          "1a0BB8VKM4yjxjhEG"        // Coloque seu User ID
        )
        .then(
          (result) => {
            setMensagemErro('Email enviado')
            console.log("Email enviado com sucesso", result.text);
          },
          (error) => {
            console.log("Erro ao enviar email", error.text);
          }
        );
    }
  };

  const atualizarEmail = (evento) => {
    setEmail(evento.target.value);
  };

  const atualizarCodigo = (evento) => {
    setCodigoVerificacao(evento.target.value);
  };

  const verificarCodigo = () => {

    console.log(codigoGerado);
    console.log(codigoVerificacao);
    
    
    if (codigoVerificacao === codigoGerado) {
      setVerificacao(true);
    } else {
      alert("Código incorreto. Tente novamente.");
    }
  };

  return (
    <EsqueceuSenha>
      <C.Descricao>Informe seu email para que possamos enviar a sua senha e digite o código recebido</C.Descricao>
      <C.CampoPreencher>
        <C.CampoEmail>
          <FontAwesomeIcon icon={faEnvelope} style={{ height: '50%', width: '10%', marginRight: '0', color: '#FEE101' }} />
          <C.EntradaInfo>
            <C.Input 
              type="email" 
              id="email" 
              name="email" 
              onChange={atualizarEmail} 
              required 
              maxLength={90}
            />
            <C.Label htmlFor="email">Email</C.Label>
          </C.EntradaInfo>
        </C.CampoEmail>
        <C.CampoCodigo>
          <C.EntradaInfoCodigo>
            <C.Input 
              type="text" 
              id="codigo" 
              name="codigo" 
              onChange={atualizarCodigo} 
              required
              maxLength={6}
            />
            <C.Label htmlFor="codigo">Código</C.Label>
          </C.EntradaInfoCodigo>
          <C.BotaoEmail onClick={enviarVerificacaoEmail}>
            <span>Enviar Email</span>
          </C.BotaoEmail>
        </C.CampoCodigo>
        <C.MensagemErro>{mensagemErro}</C.MensagemErro>
      </C.CampoPreencher>
    </EsqueceuSenha>
  );
};

export default CampoEsqueceuSenha;
