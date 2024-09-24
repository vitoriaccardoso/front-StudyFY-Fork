import React, { useRef } from 'react';
import * as C from './style';
import { Link } from 'react-router-dom';
import google from '../../assets/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ContainerLogin from '../../styles/campoDados'

const InserirInfoAluno = ({ ValidarLogin }) => {
  // Usando refs para capturar os valores dos inputs
  const emailRef = useRef(null);
  const senhaRef = useRef(null);

  // Função que captura os valores dos inputs ao clicar no botão
  const AcaoBotao = () => {
    const email = emailRef.current.value;
    const senha = senhaRef.current.value;

    // Passando os dados capturados para o componente pai
    ValidarLogin({ email, senha });
  };

  return (
    <>
      <ContainerLogin style={{ display: 'flex', flexDirection: 'column', gap: '3vh'}}>
        <C.Descricao>Por favor, faça login para continuar</C.Descricao>
        <C.CampoPreencher>
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
          <span style={{ fontSize: '2vw'}}>Esqueceu a senha?</span>
        </C.CampoPreencher>
        <C.CadastroGoogle>
          <C.DescricaoGoogle>Ou cadastre-se com: </C.DescricaoGoogle>
          <img src={google} alt='iconeGoogle' style={{ width: '6vw', height: '3vh' }} />
        </C.CadastroGoogle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh', height: '100%', width: '100%', alignItems: 'flex-end'}}>
          <C.Botao onClick={AcaoBotao}>Logar</C.Botao>
          <div style={{ display: 'flex', gap: '3%', width: '100%', justifyContent: 'right', fontSize: '3vw'}}>
            <span>Não tem uma conta? </span>
            <Link style={{ color: '#FEE101', fontWeight: 'bold'}} to="/cadastro">Cadastre-se</Link>
          </div>
        </div>
      </ContainerLogin>
    </>
  );
};

export default InserirInfoAluno;
