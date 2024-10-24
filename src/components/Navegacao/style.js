import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerNavegacao = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 7vh;
  width: 100%;
  background-color: white;
  border-top: solid #d9d9d9 2px;
  align-items: center;
  justify-content: space-between;
  position: relative; /* Altera de relative para fixed */
  bottom: 0; /* Mantém na parte inferior da tela */
  z-index: 100;

  @media(min-width: 768px) {
   flex-direction: column;
   height: 100%;
   width: 20%;
   border-left: 15px solid #fee101;
   border-right: 5px solid #fee101;
   justify-content: center;
  }
`;

export const CampoIcone = styled(Link)`
   height: 100%;
   width: 100%;
   align-items: center;
   justify-content: center;
   display: flex;
   cursor: pointer; /* Mantém o comportamento de link */
   border-radius: 8px;

   
   &:hover {
      color: gray; /* Cor opcional para o estado de hover */
   }

     @media (min-width: 768px) {
      gap: 5%;
      padding-left: 10%;
      text-decoration: none;
   }
`

export const imgIcone = styled.img`
   height: 70%;
   width: 60%;

   @media(min-width: 768px){
      height: 70%;
      width: 60%;
   }
`

export const AreaImg = styled.div`
   width: 25%;
   height: 100%;
   align-items: center;
   display: flex;
`

export const AreaDescricao = styled.div`
   display: flex;
   flex-grow: 1;
`

export const DescricaoIcone = styled.span`
   font-size: 0.9vw;
   color: black;
   font-weight: bold;
   
`

// O restante do seu estilo não precisa ser alterado


export const ImgDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   width: 15%;
   border-radius: 8px;
   background-color: #666260; /* Cor padrão de fundo */

   @media (min-width: 768px) {
      height: 15%;
      width: 100%;
      border-radius: 0px;
   }
`;


export const ImgDivExtras = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 80%;
   width: 75%;
   border-radius: 8px;
   background-color: #666260;
`;

export const DivImgs = styled.div`
   display: flex;
   align-items: start;
   justify-content: space-evenly;
   height: 75%;
   width: 80%;

   @media (min-width: 768px) {
      flex-direction: column;
      height: 70%;
      width: 100%;
      justify-content: flex-start;
      padding-bottom: 10%;
   }
`;

export const DivImagensExtras = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   height: 330%;
   width:18%;
   position: absolute; /* Posiciona em relação a DivImgs */
   bottom: 100%; /* Alinhamento com a parte superior de DivImgs */
   right: 0; /* Alinhamento com a parte esquerda de DivImgs */
   background-color: white;
   border-left: solid 2px #d9d9d9;
   border-top: solid 2px #d9d9d9;
   transform: scaleY(${props => props.mostrar ? 1 : 0}); /* Animação de crescimento */
   transform-origin: bottom; /* Origem da transformação */
   transition: transform 0.3s ease-in-out; /* Tempo da animação */
`;
