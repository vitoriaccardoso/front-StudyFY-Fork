import React, { useRef } from 'react';
import * as C from './style';
import google from '../../assets/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const InserirInfoProfessor = ({ AvancarEtapa, RetornarDados }) => {
  // Usando refs para capturar os valores dos inputs
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const senhaRef = useRef(null);
  const telefoneRef = useRef(null);

  // Função que captura os valores dos inputs ao clicar no botão
  const AcaoBotao = () => {
    const nome = nomeRef.current.value;
    const email = emailRef.current.value;
    const senha = senhaRef.current.value;
    const telefone = telefoneRef.current.value;

    // Passando os dados capturados para o componente pai
    RetornarDados({ nome, email, senha, telefone });
    AvancarEtapa();
  };

  return (
    <>
      <C.CampoCadastrar>
        <C.Descricao>Para auxiliar outros estudantes nos estudos</C.Descricao>
        <C.CampoPreencher>
          <C.Campo>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0', color: '#FEE101' }} />
            <C.EntradaInfo>
              <C.Input type="text" id="nome" name="nome" ref={nomeRef} required />
              <C.Label htmlFor="nome">Nome</C.Label>
            </C.EntradaInfo>
          </C.Campo>
          <C.Campo>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0', color: '#FEE101' }} />
            <C.EntradaInfo>
              <C.Input type="text" id="email" name="email" ref={emailRef} required />
              <C.Label htmlFor="email">Email</C.Label>
            </C.EntradaInfo>
          </C.Campo>
          <C.Campo>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0', color: '#FEE101' }} />
            <C.EntradaInfo>
              <C.Input type="text" id="senha" name="senha" ref={senhaRef} required />
              <C.Label htmlFor="senha">Senha</C.Label>
            </C.EntradaInfo>
          </C.Campo>
          <C.Campo>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0', color: '#FEE101' }} />
            <C.EntradaInfo>
              <C.Input type="text" id="telefone" name="telefone" ref={telefoneRef} required />
              <C.Label htmlFor="telefone">Telefone</C.Label>
            </C.EntradaInfo>
          </C.Campo>
        </C.CampoPreencher>
        <C.CadastroGoogle>
          <C.DescricaoGoogle>Ou cadastre-se com: </C.DescricaoGoogle>
          <img src={google} alt='iconeGoogle' style={{ width: '6vw', height: '3vh' }} />
        </C.CadastroGoogle>
      </C.CampoCadastrar>
      <C.Botao onClick={AcaoBotao}>Próximo Passo</C.Botao>
    </>
  );
};

export default InserirInfoProfessor;
