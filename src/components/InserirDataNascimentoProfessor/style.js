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
   display: flex;
   flex-direction: row;
   align-items: top;
   justify-content: center;
   width: 100%;
   height: 30%;
   gap: 2vw;

`;

export const div = styled.div`
   display: flex;
   flex-direction: column;
   align-items: left;
   justify-content: center;
   width: 100%;
   height: 100%;
`;

export const Dia = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    height: 100%;
    width: 30%;
    align-items: center;
    outline: none;

    :focus {
        outline: none; /* Remove o outline padrão */
        border: none; /* Remove a borda ao focar */
        box-shadow: none; /* Remove qualquer sombra que possa aparecer */
    }
`

export const Mes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    height: 100%;
    width: 30%;
    align-items: center;

    :focus {
        outline: none; /* Remove o outline padrão */
        border: none; /* Remove a borda ao focar */
        box-shadow: none; /* Remove qualquer sombra que possa aparecer */
    }
`

export const Ano = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    height: 100%;
    align-items: center;
    width: 40%;

    :focus {
        outline: none; /* Remove o outline padrão */
        border: none; /* Remove a borda ao focar */
        box-shadow: none; /* Remove qualquer sombra que possa aparecer */
    }
`

export const NomeEntrada = styled.div`
    font-size: 4vw;
`

export const EntradaInfo = styled.div`
   display: flex;
   flex-direction: row;
   gap: 2vw;
   width: 100%;
   height: 40%;
   align-items: center;
   border: solid 1px #d9d9d9;
   border-radius: 8px;
   justify-content: space-evenly;

      
   &:focus-within {
      border-color: #FEE101; /* Cor desejada quando o input estiver focado */
   }
`;


export const Input = styled.input`
    height: 60%;
    width: 50%;
    border: none;
    background-color: transparent;

    ::placeholder {
        font-size: 1vw; /* Ajuste o tamanho conforme necessário */
        color: #a9a9a9; /* Exemplo de cor para o placeholder */
    }
`;

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

export const Dropdown = styled.ul`
  position: absolute;
  top: 20px; /* Ajuste conforme necessário */
  width: 30%;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ddd;
  background-color: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const MensagemErro = styled.span`
  font-size: 3vw;
  color: red;`