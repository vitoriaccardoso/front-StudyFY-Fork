// src/pages/Entrada.js
import React from 'react';
import CampoLogin from '../components/CampoLogin';
import Titulo from '../components/Titulo';
import Container from '../styles/telaCheia';
import axios from 'axios';

const LoginAluno = () => {
  const ValidarLogin = async (dadosAluno) => {
    const dadosLogin = {
      ...dadosAluno,
    };

    try {
      
      const responseAluno = await axios.get('http://localhost:8080/v1/studyfy/alunos'); // Substitua pelo endpoint da sua API
      const dadosAlunos = responseAluno.data.aluno;
      console.log('Dados recebidos da API Alunos:', dadosAlunos);

      const responseProfessor = await axios.get('http://localhost:8080/v1/studyfy/professores'); // Substitua pelo endpoint da sua API
      const dadosProfessores = responseProfessor.data.professores;
      console.log('Dados recebidos da API Professores:', dadosProfessores);
      
      for (let i = 0; i < dadosAlunos.length; i++) {        
        if (dadosAlunos[i].email === dadosLogin.email && dadosAlunos[i].senha === dadosLogin.senha) {
          console.log('Logado com sucesso');
          break;
        } else {
          console.log('Erro de login Aluno');
        }
      }
      for (let i = 0; i < dadosProfessores.length; i++) {
        
        if (dadosProfessores[i].email === dadosLogin.email && dadosProfessores[i].senha === dadosLogin.senha) {
          console.log('Logado com sucesso');
          break;
        } else {
          console.log('Erro de login Professor');
        }
      }
    } catch (err) {
      console.error('Erro ao buscar os dados:', err);
    }
  };

  return (
    <Container>
      <Titulo titulo={'Login'} />
      <CampoLogin ValidarLogin={ValidarLogin} /> {/* Certifique-se de que CampoLoginAluno está correto */}
    </Container>
  );
};

export default LoginAluno;
