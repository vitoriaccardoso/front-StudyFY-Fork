// src/components/Box.js
import React, { useState } from 'react';
import InserirInfoAluno from '../CadastrarInfoAluno';
import InserirDataNascimentoAluno from '../InserirDataNascimentoAluno';
import InserirMateriaAluno from '../InserirMateriaAluno'
import ContainerCadastro from '../../styles/campoDados'


const CampoCadastroAluno = ({ RegistroCompleto }) => {
  const [step, setStep] = useState(1);
  const [dadosAluno, setDadosAluno] = useState({});
  const [dataNascimento, setDataNascimento] = useState({});
  const [materiaSelecionada, setMateriaSelecionada] = useState([]);

  const AvancarEtapa = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Use uma função de callback para garantir que o estado esteja atualizado
      setMateriaSelecionada((prevMaterias) => {
        console.log('Estado materiaSelecionada dentro do callback antes do RegistroCompleto:', prevMaterias);
        RegistroCompleto(dadosAluno, dataNascimento, prevMaterias);
      });
    }
  };

  const AtualizarInfoAluno = (dados) => {
    setDadosAluno(dados);
    console.log('Dados aluno:', dados);
  };

  const AtualizarDataNascimentoAluno = (dados) => {
    setDataNascimento(dados);
    console.log('Data de nascimento:', dados);
  };

  const AtualizarMateriaAluno = (dados) => {
    console.log('Materias', dados); // Verifique o valor antes de atualizar o estado
    setMateriaSelecionada(dados);
  };

  return (
    <ContainerCadastro>
      {step === 1 && (
        <InserirInfoAluno AvancarEtapa={AvancarEtapa} RetornarDados={AtualizarInfoAluno} />
      )}
      {step === 2 && (
        <InserirDataNascimentoAluno AvancarEtapa={AvancarEtapa} RetornarDados={AtualizarDataNascimentoAluno} />
      )}
      {step === 3 && (
        <InserirMateriaAluno AvancarEtapa={AvancarEtapa} RetornarDados={AtualizarMateriaAluno} />
      )}
    </ContainerCadastro>
  );
};

export default CampoCadastroAluno;
