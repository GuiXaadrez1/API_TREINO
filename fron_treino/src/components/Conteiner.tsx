// Importando a função styled do styled-components
// que permite criar componentes React com estilos CSS embutidos
import styled from 'styled-components';

// Criando um componente estilizado baseado na tag <section>
// Aqui estamos escrevendo CSS dentro de template literals (``)
const Conteiner = styled.section`
  background-color: #fff;       /* Cor de fundo branca */
  margin: 4em;                  /* Margem externa de 4 unidades */
  border-radius: 16px;          /* Bordas arredondadas com raio de 16px */
  padding: 2em;                 /* Espaçamento interno de 2 unidades */
  height: 100%;                 /* Altura ocupando 100% do espaço disponível */
`;

// Exportando o componente estilizado para ser usado em outros arquivos
export default Conteiner;

/*
    Observações importantes:
    
        styled.section retorna um componente React estilizado, que você pode usar como:

        <Conteiner>
            <p>Conteúdo aqui</p>
        </Conteiner>

        Ele não é uma função tradicional como function MeuComponente(), 
        mas sim uma constante que representa um componente estilizado.

        Você não precisa importar { JSX } de react nesse caso, pois você não está tipando
        uma função que retorna JSX — apenas exportando um componente pronto.

*/