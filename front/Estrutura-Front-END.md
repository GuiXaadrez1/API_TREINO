# ESTRUTURA INICIAL GERADA PELO VITE

    vamos pegar o básico que o Vite + React + TS gera para gente com o comando:

        npm create vite@latest nome-do-projeto -- --template react-ts
        # ou usando pnpm/yarn

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

# ESTRUTURA FINAL/REAL DO NOSSO PROJETO: 

front/
│
├── index.html    # Arquivo HTML raiz, base da sua aplicação React
├── package.json  # Dependências, scripts e configurações do npm/pnpm
├── tsconfig.json  # Configuração do TypeScript
├── vite.config.ts  # Configuração do Vite (build, plugins, etc)
│
├── public/ # Arquivos estáticos servidos diretamente (favicon, robots.txt, imagens)
│
└── src/               # Código-fonte da aplicação React
    ├── main.tsx      # Ponto de entrada, onde ReactDOM monta o app no HTML
    ├── App.tsx       # Componente React principal
    ├── assets/       # Imagens, ícones, fontes, etc
    ├── components/   # Componentes React para UI (botões, cabeçalhos, cards, etc)
    ├── hooks/    # Custom hooks para lógica reutilizável (ex: useAuth, useFetch)
    ├── lib/      # Helpers, funções utilitárias e bibliotecas internas
    ├── pages/    # Componentes que representam páginas/rotas (Home, Login, Dashboard)
    └── service/                # Serviços para comunicação com APIs, chamadas HTTP, wrappers axios/fetch
