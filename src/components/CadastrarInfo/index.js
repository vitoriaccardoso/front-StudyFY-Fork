import React, { useRef, useState } from 'react';
import * as C from './style';
import google from '../../assets/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const InserirInfoAluno = ({ AvancarEtapa, RetornarDados }) => {
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const senhaRef = useRef(null);
  const [telefone, setTelefone] = useState('');

  const [mensagemErro, setMensagemErro] = useState('');
  const [erros, setErros] = useState({ nome: false, email: false, senha: false, telefone: false });

  const AcaoBotao = () => {
    setErros({ nome: false, email: false, senha: false, telefone: false });

    const nome = nomeRef.current.value;
    const email = emailRef.current.value;
    const senha = senhaRef.current.value;
    const telefoneSemMascara = removerMascaraTelefone(telefone); // Remove a máscara do telefone

    if (validarDados(nome, email, senha, telefone)) {
      RetornarDados({ nome, email, senha, telefone: telefoneSemMascara });
      AvancarEtapa();
    }
  };

  // Função para formatar o telefone com máscara
  const formatarTelefone = (valor) => {
    const numero = valor.replace(/\D/g, '');
    if (numero.length <= 2) {
      return `(${numero}`;
    } else if (numero.length <= 6) {
      return `(${numero.slice(0, 2)}) ${numero.slice(2)}`;
    } else if (numero.length <= 10) {
      return `(${numero.slice(0, 2)}) ${numero.slice(2, 7)}-${numero.slice(7)}`;
    } else {
      return `(${numero.slice(0, 2)}) ${numero.slice(2, 7)}-${numero.slice(7, 11)}`;
    }
  };

  // Função para remover a máscara do telefone (apenas números)
  const removerMascaraTelefone = (telefone) => {
    return telefone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  };

  const acaoFormatarTelefone = (e) => {
    const valor = e.target.value;
    const telefoneFormatado = formatarTelefone(valor);
    setTelefone(telefoneFormatado);
  };

  const validarDados = (nome, email, senha, telefone) => {
    let novoErro = { nome: false, email: false, senha: false, telefone: false };
    let erroEncontrado = false;

    if (nome === '') {
      setMensagemErro('Não deve haver campos vazios');
      novoErro.nome = true;
      erroEncontrado = true;
    } else if (nome.length > 90) {
      setMensagemErro('O campo Nome excedeu o limite de 90 caracteres.');
      novoErro.nome = true;
      erroEncontrado = true;
    } else if (nome.includes('"') || nome.includes("'")) {
      setMensagemErro('Não deve haver o uso de aspas nos campo');
      novoErro.nome = true;
      erroEncontrado = true;
    }

    if (email === '') {
      setMensagemErro('Não deve haver campos vazios');
      novoErro.email = true;
      erroEncontrado = true;
    } else if (email.length > 255) {
      setMensagemErro('O campo Email excedeu o limite de 255 caracteres.');
      novoErro.email = true;
      erroEncontrado = true;
    } else if (!email.includes('@gmail.com')) {
      setMensagemErro('O campo deve haver "@gmail.com"');
      novoErro.email = true;
      erroEncontrado = true;
    } else if (email.includes('"') || email.includes("'")) {
      setMensagemErro('Não deve haver o uso de aspas nos campo');
      novoErro.email = true;
      erroEncontrado = true;
    }

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

    if (telefone === '') {
      setMensagemErro('Não deve haver campos vazios');
      novoErro.telefone = true;
      erroEncontrado = true;
    } else if (telefone.length !== 15) {
      setMensagemErro('Preencha corretamente.');
      novoErro.telefone = true;
      erroEncontrado = true;
    } else if (telefone.includes('"') || telefone.includes("'")) {
      setMensagemErro('Não deve haver o uso de aspas nos campo');
      novoErro.telefone = true;
      erroEncontrado = true;
    }

    setErros(novoErro);

    return !erroEncontrado;
  };

  return (
    <>
      <C.CampoCadastrar>
        <C.Descricao>Para ter maior desempenho nos seus estudos</C.Descricao>
        <C.CampoPreencher>
          <C.Campo erro={erros.nome}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0', color: '#FEE101' }} />
            <C.EntradaInfo>
              <C.Input type="text" id="nome" name="nome" ref={nomeRef} required maxLength="90" />
              <C.Label htmlFor="nome">Nome</C.Label>
            </C.EntradaInfo>
          </C.Campo>

          <C.Campo erro={erros.email}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0', color: '#FEE101' }} />
            <C.EntradaInfo>
              <C.Input type="text" id="email" name="email" ref={emailRef} required maxLength="255" />
              <C.Label htmlFor="email">Email</C.Label>
            </C.EntradaInfo>
          </C.Campo>

          <C.Campo erro={erros.senha}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0', color: '#FEE101' }} />
            <C.EntradaInfo>
              <C.Input type="password" id="senha" name="senha" ref={senhaRef} required maxLength="25" />
              <C.Label htmlFor="senha">Senha</C.Label>
            </C.EntradaInfo>
          </C.Campo>

          <C.Campo erro={erros.telefone}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0', color: '#FEE101' }} />
            <C.EntradaInfo>
              <C.Input type="text" id="telefone" name="telefone" value={telefone} required maxLength="15" onChange={acaoFormatarTelefone} />
              <C.Label htmlFor="telefone">Telefone</C.Label>
            </C.EntradaInfo>
          </C.Campo>
        </C.CampoPreencher>

        <C.CadastroGoogle>
          <C.DescricaoGoogle>Ou cadastre-se com: </C.DescricaoGoogle>
          <img src={google} alt='iconeGoogle' style={{ width: '6vw', height: '3vh' }} />
        </C.CadastroGoogle>
      </C.CampoCadastrar>

      <C.EnvioFormuario>
        <span style={{color: 'red', fontSize: '3.5vw' }}>{mensagemErro}</span>
        <C.Botao onClick={AcaoBotao}>Próximo Passo</C.Botao>
      </C.EnvioFormuario>
    </>
  );
};

export default InserirInfoAluno;
