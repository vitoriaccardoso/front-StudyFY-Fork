import styled from "styled-components";

export const ContainerNavegacao = styled.div`
   display: flex;
   flex-direction: row;
   min-height: 8%;
   height: 8%;
   width: 100%;
   background-color: white;
   border-top: solid #d9d9d9 5px;
   align-items: center;
   justify-content: space-between;
   position: fixed;
   bottom: 0;
   position: relative; /* Permite que DivImagensExtras seja posicionada em relação a ela */
   margin-top: auto;
   z-index: 100;
`;

export const ImgDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 75%;
   width: 15%;
   border-radius: 8px;
   background-color: #666260;
`;

export const ImgDivExtras = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 17%;
   width: 45%;
   border-radius: 8px;
   background-color: #666260;
`;

export const DivImgs = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   height: 100%;
   width: 80%;
`;

export const DivImagensExtras = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   height: 320%;
   width:18%;
   position: absolute; /* Posiciona em relação a DivImgs */
   bottom: 98%; /* Alinhamento com a parte superior de DivImgs */
   right: 0; /* Alinhamento com a parte esquerda de DivImgs */
   background-color: white;
   border-left: solid 5px #d9d9d9;
   border-top: solid 5px #d9d9d9;
   transform: scaleY(${props => props.mostrar ? 1 : 0}); /* Animação de crescimento */
   transform-origin: bottom; /* Origem da transformação */
   transition: transform 0.3s ease-in-out; /* Tempo da animação */
`;
