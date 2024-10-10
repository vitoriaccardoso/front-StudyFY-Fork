// src/pages/Entrada.js
import * as C from './style';
import medalha from '../../assets/medalha.png'
import livrosDegraus from '../../assets/livro_degraus.png'
import mascote from '../../assets/mascote.png'

const CampoEmblemas = () => {

    const atividadesConcluidas = 3;
    const metaAtividades = 5;

    // Calcula a porcentagem de progresso
    const progresso = ((atividadesConcluidas / metaAtividades) * 100).toFixed(2);
    const progressoPorcentagem = `${progresso}%`
    // Seleciona a barra e o texto
    const barraProgresso = document.getElementById("barraProgresso");

    // Atualiza a largura da barra e o texto
    barraProgresso.style.width = progresso + "%";

  return (
    <C.EmblemasAluno>
        <C.Titulo>Emblemas aluno</C.Titulo>
        <C.Emblema>
            <C.AreaIcone cor="#71DDF5">
                <C.Icone src={medalha}></C.Icone>
                <C.Nivel>Nível 1</C.Nivel>
            </C.AreaIcone>
            <C.AreaInfo>
                <C.AreaDescricao>
                    <C.TituloEmblema>Engatinhando</C.TituloEmblema>
                    <C.Descricao>Realizou a primeira atividade da aplicação</C.Descricao>
                </C.AreaDescricao>
                <C.AreaProgresso>
                    <C.Andamento>{progressoPorcentagem}</C.Andamento>
                    <C.Progresso id='barraProgresso'></C.Progresso>
                </C.AreaProgresso>
            </C.AreaInfo>
        </C.Emblema>
        <C.Emblema>
            <C.AreaIcone cor='#56EE9C'>
                <C.Icone src={livrosDegraus}></C.Icone>
                <C.Nivel>Nível 1</C.Nivel>
            </C.AreaIcone>
            <C.AreaInfo>
                <C.AreaDescricao>
                    <C.TituloEmblema>Engatinhando</C.TituloEmblema>
                    <C.Descricao>Realizou a primeira atividade da aplicação</C.Descricao>
                </C.AreaDescricao>
                <C.AreaProgresso>
                    <C.Andamento>{progressoPorcentagem}</C.Andamento>
                    <C.Progresso id='barraProgresso'></C.Progresso>
                </C.AreaProgresso>
            </C.AreaInfo>
        </C.Emblema>
        <C.Emblema>
            <C.AreaIcone className='nPossui' cor="#fee101">
                <C.Icone src={mascote}></C.Icone>
                <C.Nivel>Nível 1</C.Nivel>
            </C.AreaIcone>
            <C.AreaInfo>
                <C.AreaDescricao>
                    <C.TituloEmblema>Engatinhando</C.TituloEmblema>
                    <C.Descricao>Realizou a primeira atividade da aplicação</C.Descricao>
                </C.AreaDescricao>
                <C.AreaProgresso>
                    <C.Andamento>{progressoPorcentagem}</C.Andamento>
                    <C.Progresso id='barraProgresso'></C.Progresso>
                </C.AreaProgresso>
            </C.AreaInfo>
        </C.Emblema>
    </C.EmblemasAluno>
  );
};

export default CampoEmblemas;
