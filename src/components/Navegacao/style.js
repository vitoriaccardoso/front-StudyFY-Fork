import styled from "styled-components";

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
`;

// O restante do seu estilo não precisa ser alterado


export const ImgDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   min-height: 100%;
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
   height: 75%;
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
   bottom: 100%; /* Alinhamento com a parte superior de DivImgs */
   right: 0; /* Alinhamento com a parte esquerda de DivImgs */
   background-color: white;
   border-left: solid 2px #d9d9d9;
   border-top: solid 2px #d9d9d9;
   transform: scaleY(${props => props.mostrar ? 1 : 0}); /* Animação de crescimento */
   transform-origin: bottom; /* Origem da transformação */
   transition: transform 0.3s ease-in-out; /* Tempo da animação */
`;
