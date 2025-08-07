# O que é o prisma?

- O prisma é uma ORM (Object Relational Mapper) de côdigo aberto que Consiste nas seguintes partes:

Cliente Prisma : Construtor de consultas gerado automático e com tipo seguro para Node.js e TypeScript

Prisma Migrar : Sistema de migração

Estúdio Prisma : GUI para visualizar e editar dados em seu banco de dados.

O Prisma Client pode ser usado qualquer aplicação backend Node.js (versões suportadas) ou TypeScript (incluindo aplicações sem servidor e microsserviços). Pode ser uma REST API uma API GraphQL uma API gRPC ou qualquer outro aplicativo que necessita de um banco de dados.


### O que é uma ORM? 

- Conceito informal:

ORM (Object-Relational Mapper), também conhecido como Mapeador Objeto-Relacional, é um software ou biblioteca que atua como um tradutor entre os modelos de dados usados por bancos de dados relacionais e aqueles utilizados em linguagens de programação orientadas a objetos (POO). Essas duas abordagens — tabelas no banco de dados e objetos no código — não se integram naturalmente. O ORM preenche essa lacuna, permitindo a comunicação fluida entre o back-end orientado a objetos e o banco de dados relacional.

- Conceito mais técnico: 

ORM (Object-Relational Mapping) é uma técnica que permite mapear classes e objetos da programação orientada a objetos (POO) para tabelas e registros de bancos de dados relacionais. Seu propósito principal é eliminar a chamada impedância conceitual entre os dois paradigmas:

Paradigma relacional: organiza dados em tabelas, colunas, chaves e relacionamentos (joins).

Paradigma orientado a objetos: estrutura dados em objetos com atributos, métodos, herança e encapsulamento.

Ao utilizar um ORM, o desenvolvedor pode executar operações de CRUD (Create, Read, Update, Delete) diretamente sobre objetos, sem escrever SQL manualmente. O ORM se encarrega de gerar as queries SQL necessárias e de mapear os resultados de volta para objetos na aplicação.

- Vantagens do ORM:

Abstração da camada de persistência, favorecendo arquiteturas como MVC (Model-View-Controller) ou camadas como DAO/Persistence e Service.

Redução significativa de SQL bruto, promovendo um código mais limpo e expressivo.

Facilidade de manutenção e refatoração, por trabalhar diretamente com estruturas orientadas a objetos.

Modelagem de relacionamentos e validações no código, tornando o domínio de regras de negócio mais acessível sem exigir conhecimento profundo de SQL avançado.
- Exemplos de ORMs:

Python: SQLAlchemy, Django ORM

Java: Hibernate

C#: Entity Framework

JavaScript (Node.js): Sequelize, Prisma, TypeORM

Se quiser, posso montar uma explicação detalhada com exemplo prático usando alguma linguagem específica como Python, Java ou Node.js.

## Como o prisma funciona:

Prisma ORM vem com um schema Prisma . O schema Prisma permite que os desenvolvedores definam seus modelos de aplicação em uma linguagem de modelagem de dados intuitiva. Ele também contém uma conexão com o banco de dados e define um gerador. Exemplo do Schema.prisma abaixo:


datasource db {  
  provider = "postgresql"  # nosso banco de dados, fonte de dados  
  url      = env("DATABASE_URL") 
}

generator client {
  provider = "prisma-client-js"
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User?   @relation(fields: [authorId], references: [id])
  authorId  Int?
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

- No Schema.prisma você configura três coisas:

Fonte de dados (datasoure): especifica sua conexão com o banco de dados (por meio de uma variável de ambiente)

exemplo: datasource db {...}

Gerador (generator): Indica que você desenha gerar o Prisma Client

exemplo generator client {...}

Modelo de dados (model): definir seus modelos de aplicação

exemplo: model user {...}

## Expecificações sobre cada configuração do Schema.prisma:

### datasource:

datasource db {  
  provider = "postgresql"  # nosso banco de dados, fonte de dados  
  url      = env("DATABASE_URL") 
}

-- aqui no datasource db{...} definimos a nossa fonte de dados, base de dados, no caso o postgres

-- url = env("DATABASE_URL") ->  lê url no arquivo.env onde fica configurações de conexão com o nosso banco ce dado, exemplo:

- .env:

DATABASE_URL="postgresql://user:senha@localhost:5432/nomedobanco"


### generator:

generator client {
  provider = "prisma-client-js"
}

-- serve para gerar o Prisma Client, que é uma biblioteca TypeScript/JavaScript fortemente tipada. Essa biblioteca é usada para interagir com o banco de dados com base no seu modelo de dados definido no arquivo schema.prisma.

- o que ele faz?

1. lê o modelo de dados (model) definido no schema.prisma.

2. Gera automaticamente código TypeScript/JavaScript com métodos para:

3. findMany, findUnique, create, update, delete, etc.

4. Cada modelo vira uma classe com métodos tipados.

5. geralmente é gerado no caminho: node_modules/@prisma/client

6. Mas você pode customizar isso com a propriedade output, assim:

generator client {
  provider = "prisma-client-js"
  output   = "./path/custom"
}

- Exemplo usando o prisma:

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const users = await prisma.user.findMany()


### model

model User {
  id     Int     @id @default(autoincrement())
  email  String  @unique 
  name   String? // ? é o nosso NULL do postgres, indica que é Opcional
  posts  Post[]  // relação 1:N com Post
}

-- define um modelo de entidade chamado User dentro do schema.prisma. O Prisma usa esse model para gerar tabelas no banco de dados e classes no Prisma Client com métodos prontos para interação.

- Explicação detalhada de cada componente deste modelo que será transformada em uma entidade (tabela) no banco de dados postgres pelo schema.prisma:

🔸 id Int @id @default(autoincrement()) -> Campo id é do tipo Int (inteiro).

@id: define que é a chave primária da tabela.

@default(autoincrement()): define que o valor será gerado automaticamente, como um SERIAL no PostgreSQL.

🔸 email String @unique -> Campo email é uma string obrigatória (não pode ser null).

@unique: indica que os valores deste campo não podem se repetir, ou seja, é uma restrição de unicidade no banco de dados.

🔸 name String? -> Campo name é uma string opcional (pode ser null).

O ? -> define a nulabilidade, o que é mapeado diretamente no banco.

🔸 posts Post[] -> Define um relacionamento um-para-muitos com o modelo Post.

Um User pode ter vários Posts associados.

Isso só faz sentido se houver um campo no modelo Post que aponte de volta para User, por exemplo:

model Post {
  id     Int    @id @default(autoincrement())
  title  String
  user   User   @relation(fields: [userId], references: [id])
  userId Int
}

-- @relation(fields: [userId], references: [id]) ->  define explicitamente um relacionamento entre duas tabelas (ou models) no Prisma — no caso, entre Post e User.

-- Essa anotação define os detalhes técnicos da foreign key:

fields: [userId]: indica o campo local (em Post) que armazena o valor da chave estrangeira.

references: [id]: indica que esse campo faz referência ao campo id do model User.


- Resultado disso no Prisma Client:

Esse model User gera métodos como:

await prisma.user.findMany({
  include: { posts: true },
})

obs.: O include é uma instrução do Prisma Client usada para incluir dados relacionados em uma consulta — ou seja, ele realiza um join implícito. Isso quer dizer: “Busque todos os usuários e, junto com cada usuário, traga também seus posts relacionados.”

E também:

- create

- update

- delete

- findUnique

- findFirst

obs: Tudo com tipagem automática, sem precisar escrever SQL.

## Fontes:

https://www-prisma-io.translate.goog/docs/orm/overview/introduction/what-is-prisma?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc&_x_tr_hist=true