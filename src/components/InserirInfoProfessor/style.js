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
   gap: 1vh;
`;

export const Campo = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   padding-inline: 3vw;
   width: 100%;
   height: 100%;
   border: 1px solid #d9d9d9;
   border-radius: 8px;
   position: relative; /* Para que o label posicionado absoluto funcione */

   
   &:focus-within {
      border-color: #FEE101; /* Cor desejada quando o input estiver focado */
   }
`;

export const EntradaInfo = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   padding-left: 5%;
`;

export const Label = styled.label`
   position: absolute;
   left: 5%;
   top: 25%;
   font-size: 4vw;
   color: #d9d9d9;
   transition: all 0.3s ease;
   pointer-events: none; /* Para que o label não interfira nos cliques do input */
`;

export const Input = styled.input`
   font-size: 3vw;
   border: none;
   outline: none;
   background-color: transparent;
   width: 100%;
   height: 100%;
   box-sizing: border-box;

   &:focus + ${Label},
   &:valid + ${Label} {
      top: -20%;
      left: 0%;
      font-size: 3vw;
      color: #FEE101;
      background: white;
      padding: 0 2%;
      z-index: 1; /* Para que o label fique acima do input */
   }
`;

export const CadastroGoogle = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   gap: 2vw;
`

export const DescricaoGoogle = styled.span`
   font-size: 3.5vw;
`

export const CampoBotao = styled.div`
   width: 100%
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