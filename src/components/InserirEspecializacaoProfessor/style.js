import styled from "styled-components";

export const CampoCadastrar = styled.div`
   height: 80%;
   background-color: 28
   width: 100%;
   justify-content: left;
   display: flex;
   flex-direction: column;
   gap: 3vh;
`
export const Descricao = styled.span`
   font-size: 5.5vw;
   display: flex;
   flex-direction: column;
`;

export const CampoPreencher = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   height: 50%;
   width: 100%;
   background-color: green;
   gap: 1vh;
`;

export const Campos = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr); /* Cria duas colunas de igual tamanho */
   grid-template-rows: repeat(5, 1fr); /* Cria duas linhas de igual tamanho */
   align-items: center;
   width: 100%;
   height: 100%;
   gap: 2vh 3vw;
`;

export const Materia = styled.div`
   display: flex;
   flex-direction: row;
   gap: 2vw;
   align-items: center;
`;

export const CheckBox = styled.input`
   height: 100%;
   width: 15%;
`;

export const NomeMateria = styled.span`
   font-size: 4vw;
`

export const Botao = styled.div`
   background-color: #fee101;
   margin-top: 3vh;
   margin-left: auto;
   width: 50%;
   height: 10%;
   border-radius: 12px;
   display: flex;
   font-weight: bold;
   align-items: center;
   justify-content: center;
`