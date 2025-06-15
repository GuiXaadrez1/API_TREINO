// Essa é é o nosso código que terá um pedaço da nossa página que no caso é o cabeçalho

// esse logo é o nome que acabamos de dar para a imagem
import logo from "../assets/logo-goku.png";

// importando styled para estilizarmos os nossos components
import styled from 'styled-components';

// importando o JSX do react para o ts como anotação de tipagem
import { JSX } from 'react'; 


// variável que irá armazenar nossos código css kkk do componente 
const CabecalhoEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;   /*vamos substituir no lugar do <header></header>*/
  padding: 2em 4em;
`;

const Conteiner = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around; /* vamos colocar no lugar da div o Conteiner*/
    flex-grow: .1;

`

const LinkEstilizado = styled.a`

    color: #000080;
    font-weight: 700;
`

// função que retorna um elemento JSX
function Cabecalho():JSX.Element{
    

    // colocando para retornar esse bloco de código, no caso uma pedaço da página html
    return(
    
        <CabecalhoEstilizado>

            <img src = {logo} alt = "logo-goku"></img>
            <Conteiner>
                <p>Aqui tinhamos uma div, porém colocamos o conteiner no lugar</p>
                <LinkEstilizado href = "https://cursos.alura.com.br/course/react-typescript-area-administrativa/task/124444"> Redirencionar_Aula</LinkEstilizado>
            </Conteiner>

        </CabecalhoEstilizado>
    )
}

// exportando a nossa função Cabecalho que retorna um elemento do JSX
export default Cabecalho

/*

    JSX.Element é o tipo de retorno de um componente React escrito em TypeScript.

    Ele representa um objeto criado pela função React.createElement, que descreve como
    o React deve renderizar a interface do usuário


*/

/*

    Regra do React:

        1 - TUDO QUE FOR HTML4 OU 5 FICA COM LETRA MINUSCULA

        1.1 - Qualquer nome de componente com letra minúscula é interpretado como tag HTML 
        (<div>, <p>, etc.).

        2 - NOMES DE COMPONENTES REACT PRECISAM COMEÇAR COM LETRAS MAIÚSCULA
        
        2.1 - Qualquer nome de componente com letra maiúscula é tratado como componente 
        React (customizado).

*/