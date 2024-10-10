import * as C from './style';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MudarSenha from '../../styles/campoDados';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const CampoMudarSenha = () => {
  const [senha, setSenha] = useState("");
  const [senhaAlterada, setSenhaAlterada] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState('');
  const [id, setIdUsuario] = useState('');
  const [email, setEmailUsuario] = useState('');
  const [token, setTokenUsuario] = useState('');
  const [senhaUsuario, setSenhaUsuario] = useState('');
  const navigate = useNavigate();

  // Função para obter os parâmetros da URL
  const obterParametros = () => {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');
    const emailParam = params.get('email');
    const tokenParam = params.get('token');

    if (idParam) {
      setIdUsuario(idParam);
      setEmailUsuario(emailParam);
      setTokenUsuario(tokenParam);
      pegarSenhaUsuario(idParam); // Chama a função para pegar a senha do usuário
    }
  };

  useEffect(() => {
    obterParametros();
  }, []);

  const pegarSenhaUsuario = async (id) => {
    const idJSON = { id };

    try {
      const response = await axios.post(`http://localhost:8080/v1/studyFy/get-senha`, idJSON);
      setSenhaUsuario(response.data.senha); // Armazena a senha do usuário
      console.log('Senha do usuário:', response.data.senha);
    } catch (error) {
      console.error('Erro ao pegar senha:', error);
    }
  };

  const atualizarSenha = (evento) => setSenha(evento.target.value);
  const atualizarSenhaAlterada = (evento) => setSenhaAlterada(evento.target.value);
  const atualizarConfirmarSenha = (evento) => setConfirmarSenha(evento.target.value);

  const mudarSenha = async () => {
    if (validarSenha()) {
      setMensagemErro('');
      if(await alterarSenha()){
        navigate('/login');
      }
    }
  };

  const alterarSenha = async () => {

    const senhaJSON = {
      novaSenha: senhaAlterada
    }

    console.log(senhaAlterada);
    console.log(senhaJSON);
    console.log(id);
    
    try {
      await axios.put(`http://localhost:8080/v1/studyFy/aluno-senha/${id}`, senhaJSON);
      console.log('Senha alterada com sucesso');
    } catch (error) {
      console.error('Erro ao alterar senha:', error);
      setMensagemErro('Houve um erro ao alterar a senha');
    }
  };

  const validarSenha = () => {
    if (!senha) {
      setMensagemErro('O campo senha atual não pode estar vazio');
      return false;
    }
    if (!senhaAlterada) {
      setMensagemErro('O campo nova senha não pode estar vazio');
      return false;
    }
    if (!confirmarSenha) {
      setMensagemErro('O campo confirmar nova senha não pode estar vazio');
      return false;
    }
    if (senha !== senhaUsuario) {
      setMensagemErro("Sua senha atual está incorreta");
      return false;
    }
    if (senhaAlterada !== confirmarSenha) {
      setMensagemErro("As novas senhas não estão iguais");
      return false;
    }
    if (senha.includes('"') || senhaAlterada.includes('"') || senhaAlterada.includes("'")) {
      setMensagemErro("A senha não pode conter aspas");
      return false;
    }
    return true;
  };

  return (
    <MudarSenha style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <C.Descricao>Altere a senha da sua conta</C.Descricao>
      <C.CampoPreencher>
        <C.CampoSenha>
          <FontAwesomeIcon icon={faLock} style={{ height: '40%', width: '10%', marginRight: '0', color: '#FEE101' }} />
          <C.EntradaInfo>
            <C.Input 
              type="password" 
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
          <FontAwesomeIcon icon={faLock} style={{ height: '40%', width: '10%', marginRight: '0', color: '#FEE101' }} />
          <C.EntradaInfo>
            <C.Input 
              type="password" 
              id="senhaAlterada" 
              name="senhaAlterada" 
              onChange={atualizarSenhaAlterada} 
              required 
              maxLength={25}
            />
            <C.Label htmlFor="senhaAlterada">Nova Senha</C.Label>
          </C.EntradaInfo>
        </C.CampoSenha>
        <C.CampoSenha>
          <FontAwesomeIcon icon={faLock} style={{ height: '40%', width: '10%', marginRight: '0', color: '#FEE101' }} />
          <C.EntradaInfo>
            <C.Input 
              type="password" 
              id="confirmarSenha" 
              name="confirmarSenha" 
              onChange={atualizarConfirmarSenha} 
              required 
              maxLength={25}
            />
            <C.Label htmlFor="confirmarSenha">Confirmar Nova Senha</C.Label>
          </C.EntradaInfo>
        </C.CampoSenha>
        <C.MensagemErro>{mensagemErro}</C.MensagemErro>
      </C.CampoPreencher>
      <C.CampoEnvioFormulario>
        <C.BotaoMudar onClick={mudarSenha}>
          <span>Mudar Senha</span>
        </C.BotaoMudar>
      </C.CampoEnvioFormulario>
    </MudarSenha>
  );
};

export default CampoMudarSenha;
