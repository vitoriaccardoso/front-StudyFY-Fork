// src/pages/Entrada.js
import React, { useEffect } from 'react';
import CampoCadastroAluno from '../components/CampoCadastroAluno';
import Titulo from '../components/Titulo';
import { useNavigate } from 'react-router-dom';
import Container from '../styles/telaCheia';
import axios from 'axios';

const CadastroAluno = () => {

  const navigate = useNavigate()

  const RegistroCompleto = async (dadosAluno, data_nascimento, materiaSelecionada) => {
    const dadosCompletos = {
      ...dadosAluno,
      ...data_nascimento,
      serie: '9º EF',
      materia_id: materiaSelecionada,
    };

    try {

      console.log(dadosCompletos);
      // Fazendo um post com os dados completos do aluno
      const response = await axios.post('http://localhost:8080/v1/studyFy/alunos', dadosCompletos);
      console.log('Registro completo com sucesso:', response.data);

      navigate('/login')
      // Coloque aqui a lógica adicional após o registro, como redirecionamento ou mensagem de sucesso
    } catch (error) {
      console.error('Erro ao registrar o aluno:', error);
      // Coloque aqui a lógica para lidar com erros, como exibir uma mensagem para o usuário
    }
  };

  return (
    <Container>
      <Titulo titulo={'Cadastre-se'} />
      <CampoCadastroAluno RegistroCompleto={RegistroCompleto} />
    </Container>
  );
};

export default CadastroAluno;
