// AQUI FICARÁ NOSSO COMPONENTE PRINCIPAL

/*

    App.tsx: é o componente raiz da aplicação
    Contém a interface inicial da sua aplicação (o que será exibido).

    Deve exportar um componente React.

    Pode conter <Header />, <Footer />, rotas, etc.

*/


// importando o a função Cabecalho 
import { JSX } from "react";
import Cabecalho from "./components/Header";
import Conteiner from "./components/Conteiner";
import Titulo from "./components/Titulo";
import Footer from "./components/Footer";


// App é uma função que irá conter todos os componentes principais
function App():JSX.Element{

    return(
        <>
            <Cabecalho/>
            <Conteiner>
                <Titulo>Que Bagaceira é Essa?</Titulo>    
            </Conteiner> 
            <Footer/>
        </>
    );

    // <Cabecalho> é o nosso header que criamos no Header.tsx
    // é uma section div evoluida que criamos no Conteiner.tsx
    // <></> Só está para simbolizar como se fosse uma div, não tem valor semâtico
}

export default App;

/*
    export default exporta um único valor padrão de um arquivo.

    Quando outro módulo importa esse arquivo, esse valor é o que será
    retornado diretamente.
*/


/*
    ANOTAÇÕES

        importa um componente que será renderizado dentro da App.

        Pode conter HTML estilizado, lógicas, rotas, etc


        function App(): JSX.Element {...}

        Define um componente funcional chamado App.

            O (): JSX.Element é uma anotação de tipo do TypeScript:

            Indica que essa função retorna um elemento JSX válido, ou seja, algo como
            <div>, <p>, <Header />.

            JSX.Element é equivalente ao retorno de React.createElement(...).

        return <Cabecalho />;

            Renderiza o componente Cabecalho dentro do App.

            Você pode ter vários elementos aqui (<Header />, <Main />, <Footer />, etc).


        export default App;

        O que é?
            
        export default exporta um único valor padrão de um arquivo.

        Quando outro módulo importa esse arquivo, esse valor é o que será retornado
        diretamente.

*/