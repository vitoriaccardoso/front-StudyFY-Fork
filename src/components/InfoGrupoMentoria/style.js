import styled from "styled-components";

export const InfoGrupo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   min-height: 32%;
   padding: 5% 5% 0% 5%;
   margin-top: 5vh;
   gap: 2vh;
   width: 100%;

   @media(min-width: 768px){
      width: 80%;
      min-height: 32%;
      padding-top: 3%;
      padding-right: 0%;
      align-items: start;
   }
`;

export const IntroducaoGrupo = styled.div`
   display: flex;
   flex-direction: row;
   height: 50%;
   width: 100%;
   justify-content: space-between;

   @media(min-width: 768px){
      max-height: 40vh;
      width: 50%;
      background-color: blue;
      flex-direction: column;
      gap: 5vh;
   }
`

export const MentorDiv = styled.div`
   display: flex;
   flex-direction: column;
   height: 45%;
   width: 100%;
   justify-content: space-between;

   @media (min-width: 768px){
      width: 100%;
      background-color: pink;
   }
`

export const MentorGrupo = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   height: 30%;
   width: 45%;
   justify-content: space-between;

   @media(min-width: 768px){
   justify-content: flex-start;
   gap: 1vw;
}
`

export const CampoInfoMentor = styled.div`
   display: flex;
   flex-direction: row;
   height: 62%;
   width: 100%;
   border-radius: 8px;
   border: solid 3px #d9d9d9;
   box-shadow: 0 0.5vh 0 0 #d9d9d9;
   padding-inline: 1vw;

   @media(min-width: 768px){
   max-height: 10vh;
}
`

export const InfoMentor = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 60%;
   padding-top: 1vh;

   @media(min-width: 768px){
      width: 70%;
      padding-top: 0vh;
   }
`

export const DadosMentor = styled.div`
   display: flex;
   flex-direction: row;
   height: 100%;
   width: 70%;
   align-items: center;
   justify-content: space-evenly;
`

export const InfoDetalheGrupo = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #fee101;
   border-radius: 8px;
   border: solid 3px #E9CE03;
   box-shadow: 0 0.5vh 0 0 #E9CE03;
   width: 36%;
   height: 100%;
   justify-content: space-evenly;
   align-items: center;

   @media(min-width: 768px) {
      box-shadow: none;
      background-color: transparent;
      border-radius:0px;
      border: none;
      position: relative;
      width: 50%;
      gap: 1vh;
   }
`

export const FotoGrupoDiv = styled.div`
display: flex;
flex-direction: column;
background-color: #fee101;
border-radius: 8px;
border: solid 3px #E9CE03;
box-shadow: 0 0.5vh 0 0 #E9CE03;
width: 36%;
height: 100%;
justify-content: space-evenly;
align-items: center;

@media(min-width: 768px) {
   box-shadow: none;
   background-color: transparent;
   border-radius:0px;
   border: none;
   position: relative;
   width: 100%;
   gap: 1vh;
}
`

export const DescricaoDiv = styled.div`
   display: flex;
   flex-direction: column;
   width: 55%;
   height: 100%;
   gap: 2vh;
   align-items: center;

   @media(min-width: 768px){
      width: 30%;
      min-height: 100%;
      background-color: pink;
      flex-grow: 1;
   }
`;

export const Descricao = styled.div`
   display: flex;
   padding: 5% 5% 5% 5%;
   border-radius: 8px;
   border: solid 3px #d9d9d9;
   box-shadow: 0 0.5vh 0 0 #d9d9d9;
   height: 100%;
   width: 100%;

   @media(min-width: 768px){
      background-color: green;
   }
`;

export const AvaliacaoMentor = styled.div`
   display: flex;
   flex-direction: row
   height: 100%;
   width: 30%;
   align-items: center;
   gap: 5%;
`

export const Barra = styled.div`
   height: 70%;
   width: 2%;
   background-color: black;
`

export const Avaliacao = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100%;
   justify-content: center;
   gap: 1vh;
   align-items: center;
`

export const Estrelas = styled.div`
   display: flex;
   flex-direction: row;
   height: 20%;
   width: 100%;
`

export const fundoAmarelo = styled.div`
   position: absolute;
   width: 100%;
   height: 70%;
   background-color: #fee101;
   border-radius: 8px;
   border: solid 3px #E9CE03;
   box-shadow: 0 0.5vh 0 0 #E9CE03;
   bottom: -5%;   
   z-index: 0; /* Aumenta o z-index */
`;

export const Membros = styled.span`
   font-weight: bold;
   font-size: 3.5vw;

   @media(min-width: 768px){
      font-size: 1.5vw;
      z-index: 100;
   }
`

export const IconeGrupo = styled.img`
   width: 60%;
   height: 60%;

   @media(min-width: 768px){
      width: 30%;
      height: 30%;
      z-index:100;
   }
`

export const DescricaoTitulo = styled.span`
   @media(min-width: 768px){
      font-size: 1vw;
   }
`

export const IconeMentor = styled.img`
   height: 80%;
   width: 20%;

   @media(min-width: 768px){
      height: 10%;
      width: 15%;
   }
`

export const MentorGrupoTitulo = styled.span`
   font-size: 1vw;
`

export const FotoMentor = styled.img`
   height:80%;
   width: 22%;

   @media(min-width: 768px){
   }
`

export const NomeMentor = styled.span`
   font-size: 3.5vw;
   
   @media(min-width: 768px){
      font-size: 1.5vw;
   }
`

export const MembrosAjudados = styled.span`
   font-size: 2.5vw;
   
   @media(min-width:768px){
      font-size: 1vw;
   }
`
