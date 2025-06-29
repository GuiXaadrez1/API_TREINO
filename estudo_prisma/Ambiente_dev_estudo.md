# Introdução

O objetivo deste arquivo.md é fazer um pequeno tutorial de comandos para realizar o nosso ambiente dev que vai está melhor descrito na pasta doc.

qualquer duvida dentro da pasta de documentação, vamos ter uma subpasta chamada: anotações_prisma, nela tem anotações mais elaboradas que podem te ajudar a tirar suas duvidas.

## Pré-requsitos:

- NODE.js instalado -> caso não tenha acesse: https://nodejs.org/en/download

obs.: Baixe e instale a versão recomendada para seu sistema

## Requerimentos:

- TYPESCRIPT (versão mais atual ou Baixe e instale a versão recomendada para seu sistema )-> caso de duvidas: https://www.typescriptlang.org/download/

importante, acesse: : https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping
para ter configurações básicas do typescript na versão instalada

- Prisma (versão mais atual ou Baixe e instale a versão recomendada para seu sistema )-> caso de duvidas: https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma


## Estrutura do nosso ambiente de estudos!

/treino_api
│
└── estudo_prisma
├── back/ # Backend da aplicação
│ ├── application/ # Camada principal da aplicação (controllers, casos de uso)
│ ├── service/ # Camada de lógica de negócio (regras de domínio)
│ ├── persistence/ # Camada de persistência (Prisma Client, repositórios)
│ └── route/ # Camada de roteamento (rotas HTTP da API)
│
└── prisma/ # Configuração do Prisma ORM
├── schema.prisma # Definição dos models, datasource e generator
├── migrations/ # Histórico das migrações do banco de dados
└── .env # Variável DATABASE_URL com conexão ao banco

## Criando ambiente back-end + prisma

- dentro da sua pasta de projeto ou estudo use o comando:

npm init -y -> vai gerar o nosso package.json gerenciamento, instalação de depedências, libs e pacotes

- instalando typescript, use o comando:

npx install typescript --save-dev -> vai instalar o typescript localmente na sua pasta de projetos junto com o node-modules e package-lock.json, eese comando é específico para desenvolvimento.

- crinado arquivo de configuração typescript, nosso famoso tsconfig.json

npx tsc --init -> acesse: https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping para obter as configurações básicas do typescript

- instalando lib, depedência, depedência_dev que faz o coplador automaticamente gerar, copilar um código typescript em javascript:

npm install typescript tsx --save-dev
npm install typescript @types/node -D
npm install tsx -D

- instalando o prisma na pasta do seu projeto

npm install prisma --save-dev -> instalar o prisma
npm install @prisma/client -> instalar dependência
npx prisma init -> inicializar o prisma

- quando o prisma é inicializado ele cria a seguinte pasta:

/prisma
| |--- shema.prisma
|--- arquivo.env

Dentro da pasta vamos ter o arquivo de configuração principal do prisma chamado de schema.prisma, esse arquivo define a estrutura do banco de dados, incluindo:

- modelos (model)
- fontes de dados (datasource)
- geradores (generator)

Geralmente contém:

Data souce: Define como o prisma se conecta ao banco de dados
Geradores: Especificam como o prisma deve gerar códigos para interagir com o Banco
Modelos: Representam tabelas dos bancos de dados e seus campos

O arquivo.env também é gerado, porém vamos passar ele para a  nossa pasta raiz do seu projeto

/seu_proejto
|-/back
|-/prisma
|- arquivo.env

É uma boa prática deixar o arquivo.env na pasta raiz, dentro dessa pasta raiz
iremos colocar a URLs do nosso banco de dados segue o exemplo:

    DATABASE_URL = "postgresql://postgresql:senha@localhost:5432/meubanco"

O que representa cada parte dessa URL? Veja a baixo:

postgresql://         -> protocolo do banco
postgres:             -> nome do usuário
********@             -> senha do usuário
localhost:5432/       -> host e porta
banco_banco           -> nome do banco de dados
?schema=public        -> schema usado no Prisma

Atenção ao schema:
    o schema = public, ao menos no postgresql, significa que ele está acessando
    um schema muito específico, ou que você específicou. Porque geralmente o
    shema = public é o mais utilizado

- instalando express e suas depedências

npm install express -> é um framework web minimalista e flexível para Node.js

npm install --save-dev @types/express -> para suportar tipagem typescript

npm i cors -> serve para habilitar ou restringir requisições entre diferentes origens (domínios). Ele implementa o mecanismo de CORS — Cross-Origin Resource Sharing.

npm install -D @types/cors -> Suporte para Tipagem para TypeScript (devDependency)

- instalando o dotenv  

npm install dotenv -> é uma biblioteca Node.js que carrega variáveis de ambiente definidas em um arquivo .env para dentro do process.env da aplicação.

npm install -D @types/dotenv

- colocando scripts no package.json

no parâmetro scripts do nosso projeto de estudos coloque:

"scripts": {
    
    "dev": "tsx watch back/application/app.ts",
    "prisma:generate": "npx prisma generate --schema=prisma/schema.prisma",
    "prisma:migrate": "npx prisma migrate dev --schema=prisma/schema.prisma",
    "prisma:studio": "npx prisma studio --schema=prisma/schema.prisma",
    "prisma:migrate-reset": "npx prisma migrate reset --schema=prisma/schema.prisma",
    "prisma:pull": "npx prisma db pull --schema=prisma/schema.prisma",

},

- criar arquivo gitignore

na sua pasta de projeto crie um arquivo com exatamente este nome:

.gitignore

- ignorando arquivos para o git não versionar e armazenar no github

ignore os seguintes arquivos:

*.env
.env
/node_modules/
package-lock.json
