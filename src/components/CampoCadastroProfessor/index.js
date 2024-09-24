// src/components/Box.js
import React, { useState } from 'react';
import InserirInfoProfessor from '../InserirInfoProfessor';
import InserirDataNascimentoProfessor from '../InserirDataNascimentoProfessor';
import InserirEspecializacaoProfessor from '../InserirEspecializacaoProfessor'
import ContainerCadastro from '../../styles/campoDados'


const CampoCadastroProfessor = ({ RegistroCompleto }) => {
  const [step, setStep] = useState(1);
  const [dadosProfessor, setdadosProfessor] = useState({});
  const [dataNascimento, setDataNascimento] = useState({});
  const [materiaSelecionada, setMateriaSelecionada] = useState([]);

  const AvancarEtapa = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Use uma função de callback para garantir que o estado esteja atualizado
      setMateriaSelecionada((prevMaterias) => {
        console.log('Estado materiaSelecionada dentro do callback antes do RegistroCompleto:', prevMaterias);
        RegistroCompleto(dadosProfessor, dataNascimento, prevMaterias);
      });
    }
  };

  const AtualizarInfoProfessor = (dados) => {
    setdadosProfessor(dados);
    console.log('Dados professor:', dados);
  };

  const AtualizarDataNascimentoProfessor = (dados) => {
    setDataNascimento(dados);
    console.log('Data de nascimento:', dados);
  };

  const AtualizarMateriaProfessor = (dados) => {
    console.log('Materias', dados); // Verifique o valor antes de atualizar o estado
    setMateriaSelecionada(dados);
  };

  return (
    <ContainerCadastro>
      {step === 1 && (
        <InserirInfoProfessor AvancarEtapa={AvancarEtapa} RetornarDados={AtualizarInfoProfessor} />
      )}
      {step === 2 && (
        <InserirDataNascimentoProfessor AvancarEtapa={AvancarEtapa} RetornarDados={AtualizarDataNascimentoProfessor} />
      )}
      {step === 3 && (
        <InserirEspecializacaoProfessor AvancarEtapa={AvancarEtapa} RetornarDados={AtualizarMateriaProfessor} />
      )}
    </ContainerCadastro>
  );
};

export default CampoCadastroProfessor;
