import styled from "styled-components";

export const ContainerNavegacao = styled.div`
   display: flex;
   flex-direction: row;
   height: 7%;
   width: 100%;
   background-color: #302F2F;
   bottom: 0;
   align-items: center;
   justify-content: space-between;
   position: relative; /* Permite que DivImagensExtras seja posicionada em relação a ela */
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

export const DivImgs = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   height: 100%;
   width: 80%;
`;

export const DivImagensExtras = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width:10%;
   position: absolute; /* Posiciona em relação a DivImgs */
   bottom: 100%; /* Alinhamento com a parte superior de DivImgs */
   right: 0; /* Alinhamento com a parte esquerda de DivImgs */
   background-color: white;
   border-radius: 8px;
   padding: 10px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
   transform: scaleY(${props => props.mostrar ? 1 : 0}); /* Animação de crescimento */
   transform-origin: bottom; /* Origem da transformação */
   transition: transform 0.3s ease-in-out; /* Tempo da animação */
`;
