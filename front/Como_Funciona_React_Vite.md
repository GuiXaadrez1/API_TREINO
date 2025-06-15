# REACT + VITE

    Ao roda o comando:

        npm create vite@latest nome-do-projeto -- --template react-ts
        # ou usando pnpm/yarn

    Ele gera uma estrutura básica que te dá um ambiente React + TS prontinho para começar Veja:

projeto/
│
├── index.html           ← Arquivo HTML raiz da aplicação, onde o React será renderizado
├── package.json         ← Gerenciador de dependências e scripts do projeto
├── tsconfig.json        ← Configuração do compilador TypeScript
├── vite.config.ts       ← Configurações do bundler Vite (plugins, paths, porta, etc.)
│
└── src/                 ← Código-fonte da aplicação
    ├── main.tsx    ← Ponto de entrada do React: renderiza o componente principal no DOM
    ├── App.tsx          ← Componente React principal que estrutura a UI da aplicação
    └── assets/          ← Pasta para imagens, ícones e outros arquivos estáticos usados pela aplicação



# O QUE CADA ARQUIVO DO DIRETÓRIO FAZ

1. index.html
    
    É o arquivo HTML principal carregado pelo navegador.

    Contém uma <div id="root"></div> — é aqui que o React “monta” a aplicação.

    Contém o <script type="module" src="/src/main.tsx"></script>, que carrega o código React compilado pelo Vite.

    Serve como template estático, que o Vite transforma no bundle final no build.

2. package.json
        
    Lista as dependências do projeto (React, ReactDOM, TypeScript, styled-components, etc).

    Define scripts úteis (dev, build, preview).

    Guarda metadados do projeto.

3. tsconfig.json

    Configura o compilador TypeScript.

    Define como o TS deve interpretar seu código (módulos, libs, JSX).

    Garante a tipagem estrita e segurança no desenvolvimento.

4. vite.config.ts

    Configura o Vite (plugin React, paths, proxy, alias, build, etc).

    Personaliza como a ferramenta de bundling funciona.

5. src/main.tsx

    Ponto de entrada da aplicação React.

    Importa ReactDOM.createRoot e monta o componente <App /> na div com id root do index.html.

    Normalmente envolve a aplicação em <React.StrictMode> para ajudar na detecção de problemas.

6. src/App.tsx
    
    Componente principal React.

    Serve como container dos seus componentes da UI.

    Começa simples, mas você expande criando outros componentes dentro da pasta components.

7. src/assets/

    Pasta para armazenar imagens, ícones, fontes e outros arquivos estáticos.

    Você importa esses arquivos nos componentes React via import, exemplo:

    import logo from './assets/logo.png'

    <img src={logo} alt="logo" />

8. src/components/
    
    Pasta onde você cria componentes React menores e reutilizáveis.

    Ajuda a organizar a UI e o código.


#  CICLO DO DESENVOLVIMENTO

    Quando você roda npm run dev ou pnpm dev, o Vite inicia um servidor local.

    O Vite observa os arquivos em src/ e recarrega o browser instantaneamente quando você salva.

    O index.html é servido na porta 5173 (default) e importa o bundle gerado do React a partir do main.tsx.

    ReactDOM monta sua aplicação na <div id="root"> dentro do HTML.


# RESUMO:

    O Vite gera um projeto leve, modular e rápido onde o index.html é a raiz estática da aplicação, o main.tsx ou index.tsx é o ponto de entrada que “monta” o React no DOM, e a pasta src guarda todo o código React e recursos da aplicação.