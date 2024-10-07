// src/pages/Entrada.js
import * as C from './style';
import fotoGrupo from '../../assets/Ellipse (1).png'
import fotoMentor from '../../assets/Ellipse (1).png'
import iconeMentor from '../../assets/mentoria.png'
import estrela from '../../assets/Star rate.png'

const InfoGrupoMentoria = () => {
  return (
    <C.InfoGrupo>
        <C.IntroducaoGrupo>
            <C.IconeMembros>
                <img src={fotoGrupo} alt='foto do grupo' style={{width: '60%', height: '60%'}}></img>
                <span style={{fontWeight: 'bold', fontSize: '3.5vw'}}>membros 10/30</span>
            </C.IconeMembros>
            <C.DescricaoDiv>
                <span>Descrição</span>
                <C.Descricao>dsds dsd fddgfg dfd fdfdfdf gfgf gfgfg</C.Descricao>
            </C.DescricaoDiv>
        </C.IntroducaoGrupo>
        <C.MentorDiv>
          <C.MentorGrupo>
            <img alt='icone de mentor' style={{height: '80%', width: '20%'}} src={iconeMentor}></img>
            <span>Mentor do grupo</span>
          </C.MentorGrupo>
          <C.CampoInfoMentor>
            <C.DadosMentor>
              <img alt='foto do mentor' style={{height: '80%', width: '22%' }} src={fotoMentor}></img>
              <C.InfoMentor>
                <h4 style={{fontSize: '3.5vw'}}>Matheus Noronha...</h4>
                <span style={{fontSize: '2.5vw'}}>20 membros ajudados</span>
              </C.InfoMentor>
            </C.DadosMentor>
            <C.AvaliacaoMentor>
              <span style={{ fontWeight: 'bold'}}>4.5</span>
              <C.Barra></C.Barra>
              <C.Avaliacao>
                <C.Estrelas>
                  <img style={{height: '100%', width: '20%'}} alt='estrela' src={estrela}></img>
                  <img style={{height: '100%', width: '20%'}} alt='estrela' src={estrela}></img>
                  <img style={{height: '100%', width: '20%'}} alt='estrela' src={estrela}></img>
                  <img style={{height: '100%', width: '20%'}} alt='estrela' src={estrela}></img>
                  <img style={{height: '100%', width: '20%'}} alt='estrela' src={estrela}></img>
                </C.Estrelas>
                <span style={{fontSize: '2vw'}}>(214) avaliações</span>
              </C.Avaliacao>
            </C.AvaliacaoMentor>
          </C.CampoInfoMentor>
        </C.MentorDiv>
    </C.InfoGrupo>
  );
};

export default InfoGrupoMentoria;
