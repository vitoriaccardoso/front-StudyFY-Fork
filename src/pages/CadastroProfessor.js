// src/pages/Entrada.js
import React, { useEffect } from 'react';
import CampoCadastroProfessor from '../components/CampoCadastroProfessor';
import Titulo from '../components/Titulo';
import { useNavigate } from 'react-router-dom';
import Container from '../styles/telaCheia';
import axios from 'axios';

const CadastroProfessor = () => {

  const navigate = useNavigate()

  const RegistroCompleto = async (dadosprofessor, data_nascimento, materiaSelecionada) => {
    const dadosCompletos = {
      ...dadosprofessor,
      ...data_nascimento,
      materia_id: materiaSelecionada,
    };

    try {

      console.log(dadosCompletos);
      // Fazendo um post com os dados completos do aluno
      const response = await axios.post('http://localhost:8080/v1/studyFy/professores', dadosCompletos);
      console.log('Registro completo com sucesso:', response.data);

      navigate('/')
      // Coloque aqui a lógica adicional após o registro, como redirecionamento ou mensagem de sucesso
    } catch (error) {
      console.error('Erro ao registrar o professor:', error);
      // Coloque aqui a lógica para lidar com erros, como exibir uma mensagem para o usuário
    }
  };

  return (
    <Container>
      <Titulo titulo={'Cadastre-se'} />
      <CampoCadastroProfessor RegistroCompleto={RegistroCompleto} />
    </Container>
  );
};

export default CadastroProfessor;
