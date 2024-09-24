// src/components/PesquisaProfessor.js
import React, { useState, useEffect } from 'react'; // Certifique-se de importar o useEffect
import axios from 'axios'; // Certifique-se de importar o axios para as requisições
import * as C from './style';

const PesquisaProfessor = ({ AvancarEtapa, RetornarDados }) => {
  // Estado para armazenar as matérias selecionadas
  const [selecoes, setSelecoes] = useState([]);
  // Estado para armazenar as matérias vindas da API
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    // Função para buscar os dados da API
    const PegarMaterias = async () => {
      try {
        const response = await axios.get('http://localhost:8080/v1/studyfy/materia'); // Substitua pelo endpoint da sua API
        console.log(response);
        console.log(response.data);

        // Atualiza o estado com as matérias recebidas da API
        setMaterias(response.data.materias);
      } catch (err) {
        console.log('erro');
      }
    };

    PegarMaterias();
  }, []);

  // Função para lidar com a seleção de matérias
  const alternarSelecao = (materia) => {
    const novasSelecoes = [...selecoes];
    let encontrada = false;
  
    // Procurar pela matéria no array de seleções
    for (let i = 0; i < novasSelecoes.length; i++) {
      if (novasSelecoes[i] === materia.id) {
        // Remove a matéria se já estiver selecionada
        novasSelecoes.splice(i, 1);
        encontrada = true;
        break;
      }
    }
  
    // Adicionar a matéria se não foi encontrada e o limite ainda não foi atingido
    if (!encontrada && novasSelecoes.length < 2) {
      novasSelecoes.push(materia.id);
    }
  
    setSelecoes(novasSelecoes);
  };

  // Função para avançar e retornar os dados selecionados
  const AcaoBotao = () => {
    // Passa os dados selecionados para o componente pai
    RetornarDados(selecoes);
    AvancarEtapa();
  };

  return (
    <>
      <C.CampoCadastrar>
        <C.Descricao>Selecione a área em que atua como professor</C.Descricao>
        <C.Campos>
          {materias.map((materia) => (
            <C.Materia key={materia.id}>
              <C.CheckBox
                type="checkbox"
                checked={selecoes.includes(materia.id)}
                onChange={() => alternarSelecao(materia)}
              />
              <C.NomeMateria>{materia.nome_materia}</C.NomeMateria>
            </C.Materia>
          ))}
        </C.Campos>
      </C.CampoCadastrar>
      <C.Botao onClick={AcaoBotao}>Próximo Passo</C.Botao>
    </>
  );
};

export default PesquisaProfessor;
