// src/components/Box.js
import * as C from './style'
import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import EsqueceuSenha from '../../styles/campoDados'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const CampoEsqueceuSenha = () => {

    const [email, setEmail] = useState("");
    const [codigoVerificacao, setCodigoVerificacao] = useState("");
    const [codigoGerado, setCodigoGerado] = useState("");
    const [verificacao, setVerificacao] = useState(false);

    const gerarCodigo = () => {
        
        const codigo = Math.floor(100000 + Math.random() * 900000); // Gera um código de 6 dígitos
        return codigo.toString();

      };

      const enviarVerificacaoEmail = () => {

        const codigo = gerarCodigo();
        setCodigoGerado(codigo);
    
        const parametrosTemplate = {
          verification_code: codigo,
          to_email: email,
        };
    
        emailjs
          .send(
            "your_service_id",   // Coloque seu Service ID
            "your_template_id",   // Coloque seu Template ID
            parametrosTemplate,
            "your_user_id"        // Coloque seu User ID
          )
          .then(
            (result) => {
              console.log("Email enviado com sucesso", result.text);
            },
            (error) => {
              console.log("Erro ao enviar email", error.text);
            }
          );
      };

      const verificarCodigo = () => {
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
        <C.Campo>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '0', color: '#FEE101' }} />
            <C.EntradaInfo>
              <C.Input type="text" id="nome" name="nome" ref={nomeRef} required maxLength="90" />
              <C.Label htmlFor="nome">Nome</C.Label>
            </C.EntradaInfo>
        </C.Campo>
        </C.CampoPreencher>
    </EsqueceuSenha>
  );
};

export default CampoEsqueceuSenha;
