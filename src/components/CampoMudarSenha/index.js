import * as C from './style';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MudarSenha from '../../styles/campoDados';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';

const CampoMudarSenha = () => {

    const [senha, setSenha] = useState("");
    const [senhaAlterada, setSenhaAlterada] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mensagemErro, setMensagemErro] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [erro, setErro] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
  
      setSenhaUsuario('123'); // Simulação de API
    }, []); // Executa apenas uma vez quando o componente é montado



    const atualizarSenha = (evento) => {
        setSenha(evento.target.value);
    };
    const atualizarSenhaAlterada = (evento) => {
      setSenhaAlterada(evento.target.value);
    };
    const atualizarConfirmarSenha = (evento) => {
      setConfirmarSenha(evento.target.value);
    };

    const mudarSenha = () => {

      if(validarSenha(senha, senhaAlterada, confirmarSenha)){
        setMensagemErro('')
        console.log('senha trocada');
        navigate('/login')
      }
    }

    const validarSenha = (senha, senhaAlterada, confirmarSenha) => {
      console.log(senha);
      
      if(senha === ''){
        setMensagemErro('O campo senha atual não pode estar vazio')
      } else if (senhaAlterada === ''){
        setMensagemErro('O campo senha alterada não pode estar vazio')
      } else if (confirmarSenha === ''){
        setMensagemErro('O campo confirmar senha não pode estar vazio')
      } else if(senha != senhaUsuario){
        setMensagemErro("Sua senha atual esta incorreta")
      } else if (senhaAlterada != confirmarSenha){
        setMensagemErro("Suas senhas aqui estão diferentes")
      } else if (senha.includes('"') || senha.includes('"')){
        setMensagemErro("O campo senha atual não pode conter o uso de aspas no campo")
      } else if (senhaAlterada.includes('"') || senhaAlterada.includes("'")){
        setMensagemErro("O campo senha alterada não pode conter o uso de aspas no campo")
      } else if (senhaUsuario.includes('"') || senhaUsuario.includes("'")){
        setMensagemErro("O campo confirmar senha não pode conter o uso de aspas no campo")
      } else {
        return true
      }
    }
  return (
    <MudarSenha style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <C.Descricao>Mbude a senha da sua conta</C.Descricao>
      <C.CampoPreencher>
        <C.CampoSenha>
          <FontAwesomeIcon icon={faLock} style={{ height: '40%', width: '10%', marginRight: '0', color: '#FEE101' }} />
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
          <FontAwesomeIcon icon={faLock} style={{ height: '40%', width: '10%', marginRight: '0', color: '#FEE101' }} />
          <C.EntradaInfo>
            <C.Input 
              type="senhaAlterada" 
              id="senhaAlterada" 
              name="senhaAlterada" 
              onChange={atualizarSenhaAlterada} 
              required 
              maxLength={25}
            />
            <C.Label htmlFor="senhaAlterada">Senha alterada</C.Label>
          </C.EntradaInfo>
        </C.CampoSenha>
        <C.CampoSenha>
          <FontAwesomeIcon icon={faLock} style={{ height: '40%', width: '10%', marginRight: '0', color: '#FEE101' }} />
          <C.EntradaInfo>
            <C.Input 
              type="confirmarSenha" 
              id="confirmarSenha" 
              name="confirmarSenha" 
              onChange={atualizarConfirmarSenha} 
              required 
              maxLength={25}
            />
            <C.Label htmlFor="confirmarSenha">Confirmar senha</C.Label>
          </C.EntradaInfo>
        </C.CampoSenha>
        <C.MensagemErro>{mensagemErro}</C.MensagemErro>
      </C.CampoPreencher>
      <C.CampoEnvioFormulario>
        <C.BotaoMudar onClick={mudarSenha}>
          <span>Mudar senha</span>
        </C.BotaoMudar>
      </C.CampoEnvioFormulario>
    </MudarSenha>
  );
};

export default CampoMudarSenha;
