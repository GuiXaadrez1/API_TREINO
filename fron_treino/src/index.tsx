// AQUI É A PORTA DE ENTRADA, ONDE O REACT IRÁ RENDERIZAR NOSSOS COMPONENTES

/*
    index.tsx ou main.tsx 

    É responsável por inicializar o React e injetar o App na DOM.

    Só aparece uma vez no projeto inteiro.

    Usa ReactDOM.createRoot(...).render(...).

*/

// importando o REACT da lib ou módulo react
import React from "react";
import ReactDOM from 'react-dom/client';
import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
        <App />
  </React.StrictMode>

);


/*

    Anotações:

        import React from "react";

            Importa a biblioteca React.

            A partir do React 17+, não é obrigatório importar React para usar JSX, 
            mas muitas vezes ainda é feito por compatibilidade ou por ferramentas.

            JSX é transformado em React.createElement(...) internamente.


        import ReactDOM from 'react-dom/client';
        
            O react-dom/client é um módulo específico da nova API de criação de raiz
            com concurrent features (como Suspense e streaming).

            substitui o antigo ReactDOM.render(...) da versão 17.

        import App from './App';

            Está importando o componente raiz da aplicação, que foi exportado como
            default do arquivo App.tsx.

            Como foi feito com export default, você pode dar qualquer nome 
            aqui (App, MeuApp, Aplicativo...).


        ReactDOM.createRoot(document.getElementById('root')!)

            Cria uma raiz React conectada ao elemento <div id="root"></div> no index.html.

            createRoot é obrigatório desde o React 18 para usar o novo modo concorrente.

            O ! (non-null assertion operator) garante ao TypeScript que 
            getElementById('root') não é null.


        .render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );

            render(...) monta o conteúdo no DOM.

            <React.StrictMode> é um modo de verificação de segurança do React:

            Ajuda a detectar efeitos colaterais.

            Executa componentes duas vezes no dev-mode (monta/desmonta) para garantir
            que estão seguros.

            <App /> é seu componente raiz, que renderiza toda a interface da aplicação.


        import Cabecalho from "./components/Header";

            Importa um componente que será renderizado dentro da App.

            Pode conter HTML estilizado, lógicas, rotas, etc.

*/