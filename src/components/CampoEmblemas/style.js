import styled from "styled-components";

export const CampoEmblemas = styled.div`
   width: 100%;
   max-height: 85%;
   height: 100%;
   padding-bottom: 20%;
   overflow-y: auto;
`
export const EmblemasAluno = styled.div`
   display: flex;
   flex-direction: column;
   height: auto;
   width: 100%;
   padding-inline: 5vw;
   gap: 2vh;
`

export const EmblemasProfessor = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 50%;
   width: 100%;
   padding-inline: 5vw;
   gap: 2vh;
   margin-top: 8vh;
`

export const Titulo = styled.span`
   font-size: 5vw;
   font-weight: bold;
`

export const Emblema = styled.div`
   width: 100%;
   min-height: 13vh;
   display: flex;
   justify-content: space-between;
`

export const AreaIcone = styled.div`
   min-height: 100%;
   width: 28%;
   border-radius: 8px;
   background-color: ${(props) => props.cor || '#d9d9d9'}; /* Cor padrão se não for fornecida */
   display: flex;
   flex-direction: column;
   align-items:center;
   justify-content: space-evenly;

   &.nPossui {
    opacity: 0.5;
    }
`

export const Icone = styled.img`
   height: 60%;
   width: 60%;
`

export const Nivel = styled.span`
   font-size: 4vw;
   font-weight: 600;
`

export const AreaInfo = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100%;
   width: 65%;
   padding-block: 2.5vh;
   justify-content: space-between;
`

export const AreaDescricao = styled.div`
   display: flex;
   flex-direction: column;
   height: 50%;
   width: 100%;
`

export const TituloEmblema = styled.span`
   font-size: 5vw;
   font-weight: bold;
`

export const Descricao = styled.span`
   font-size: 3vw
`

export const AreaProgresso = styled.div`
   height: 20%;
   border-radius: 8px;
   width: 100%;
   background-color: #d9d9d9;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Progresso = styled.div`
   height: 100%;
   width: 20%;
   border-radius: 8px;
   background-color: #fee101;
   position: absolute;
   left: 0;
`

export const Andamento = styled.span`
   font-size: 2.5vw;
   font-weight: bold;
   z-index: 1;
`