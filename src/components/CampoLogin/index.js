import React, { useRef, useState } from 'react';
import * as C from './style';
import { Link } from 'react-router-dom';
import google from '../../assets/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ContainerLogin from '../../styles/campoDados';

const LogarAluno = ({ RetornarDadosLogin }) => { // Corrigido o nome do parâmetro
  const emailRef = useRef(null);
  const senhaRef = useRef(null);

  const [mensagemErro, setMensagemErro] = useState('');
  const [erros, setErros] = useState({ email: false, senha: false });

  const AcaoBotao = () => {
    setErros({ email: false, senha: false });

    const email = emailRef.current.value;
    const senha = senhaRef.current.value;

    if (ValidarLogin(email, senha)) { // Agora está acessível
      const dadosLogin = { email, senha };
      console.log(dadosLogin);
      RetornarDadosLogin(dadosLogin, setMensagemErro);
    }
  };

  const ValidarLogin = (email, senha) => {
    let novoErro = { email: false, senha: false };
    let erroEncontrado = false;

    // Validação do campo Email
    if (email === '') {
      setMensagemErro('Não deve haver campos vazios');
      novoErro.email = true;
      erroEncontrado = true;
    } else if (email.length > 255) {
      setMensagemErro('O campo Email excedeu o limite de 255 caracteres.');
      novoErro.email = true;
      erroEncontrado = true;
    } 
    // else if (!email.includes('@gmail.com')) {
    //   setMensagemErro('O campo deve haver "@gmail.com"');
    //   novoErro.email = true;
    //   erroEncontrado = true;
    // } 
    else if (email.includes('"') || email.includes("'")) {
      setMensagemErro('Não deve haver o uso de aspas nos campo');
      novoErro.email = true;
      erroEncontrado = true;
    }

    // Validação do campo Senha
    if (senha === '') {
      setMensagemErro('Não deve haver campos vazios');
      novoErro.senha = true;
      erroEncontrado = true;
    } else if (senha.length > 25) {
      setMensagemErro('O campo Senha excedeu o limite de 25 caracteres.');
      novoErro.senha = true;
      erroEncontrado = true;
    } else if (senha.length < 4) {
      setMensagemErro('O campo Senha possui menos de 6 caracteres.');
      novoErro.senha = true;
      erroEncontrado = true;
    } else if (senha.includes('"') || senha.includes("'")) {
      setMensagemErro('Não deve haver o uso de aspas nos campo');
      novoErro.senha = true;
      erroEncontrado = true;
    }

    setErros(novoErro);
    return !erroEncontrado; // Retorna true se não houver erros
  };

  return (
    <>
      <ContainerLogin style={{ display: 'flex', flexDirection: 'column', gap: '3vh' }}>
        <C.Descricao>Por favor, faça login para continuar</C.Descricao>
        <C.CampoPreencher>
          <C.Campo erro={erros.email}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0', color: '#FEE101' }} />
            <C.EntradaInfo>
              <C.Input type="text" id="email" name="email" ref={emailRef} required />
              <C.Label htmlFor="email">Email</C.Label>
            </C.EntradaInfo>
          </C.Campo>
          <C.Campo erro={erros.senha}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0', color: '#FEE101' }} />
            <C.EntradaInfo>
              <C.Input type="text" id="senha" name="senha" ref={senhaRef} required />
              <C.Label htmlFor="senha">Senha</C.Label>
            </C.EntradaInfo>
          </C.Campo>
          <span style={{ fontSize: '2vw' }}>Esqueceu a senha?</span>
        </C.CampoPreencher>
        <C.CadastroGoogle>
          <C.DescricaoGoogle>Ou cadastre-se com: </C.DescricaoGoogle>
          <img src={google} alt='iconeGoogle' style={{ width: '6vw', height: '3vh' }} />
        </C.CadastroGoogle>
        <C.EnvioFormuario>
          <span style={{ color: 'red', fontSize: '3.5vw' }}>{mensagemErro}</span>
          <C.Botao onClick={AcaoBotao}>Logar</C.Botao>
          <div style={{ display: 'flex', gap: '3%', width: '100%', justifyContent: 'right', fontSize: '3vw' }}>
            <span>Não tem uma conta? </span>
            <Link style={{ color: '#FEE101', fontWeight: 'bold' }} to="/cadastro">Cadastre-se</Link>
          </div>
        </C.EnvioFormuario>
      </ContainerLogin>
    </>
  );
};

export default LogarAluno;
