# APRENDENDO A FAZER INTEGRAÇÃO DO FRONT-END PARA O BACK-END 
 
1. Vamos Montar um esquema para esclarecer como funciona a arquitetura API REST para conseguirmos fazer a integração do Front-end com o Back-end:


┌──────────────────────────── FRONT-END ─────────────────────────────┐
│                                                                    │
│   [ENVIA REQUISIÇÃO HTTP - POST]                                   │
│                                                                    │
│   Método:       POST                                               │
│   Endpoint:     /clientes HTTP/1.1                                 │
│   Headers:      Content-Type: application/json                     │
│   Body (JSON):                                                     │
│     {                                                              │
│       "nome": "João",                                              │
│       "email": "joao@email.com"                                    │
│     }                                                              │
│                                                                    │
│   ⇩⇩⇩ Requisição enviada para o servidor ⇩⇩⇩                       │
└──────────────────────┬─────────────────────────────────────────────┘
                           │
                           ▼
    ┌──────────────────────────── BACK-END ──────────────────────────────┐
    │                                                                    │
    │   [RECEBE E PROCESSA A REQUISIÇÃO]                                 │
    │                                                                    │
    │   ✔ Valida o JSON recebido                                        │
    │   ✔ Insere os dados no banco de dados                             │
    │   ✔ Gera resposta com status e dados salvos                       │
    │                                                                    │
    │   ⇧⇧⇧ Resposta enviada ao cliente ⇧⇧⇧                              │
    │                                                                    │
    │   Status:      200 OK                                              │
    │   Body (JSON):                                                     │
    │     {                                                              │
    │       "id": 123,                                                   │
    │       "nome": "João",                                              │
    │       "email": "joao@email.com"                                    │
    │     }                                                              │
    └────────────────────────────────────────────────────────────────────┘



2. ESTRUTURA DE UMA API WEB NA ARQUITETURA REST DE FORMA RESUMIDA:

    Endpoint: URL para acessar a API (/produtos, /clientes)

    Método HTTP:

    GET (ler),

    POST (criar),

    PUT (atualizar),

    DELETE (remover)

    Headers: Metadados (ex: autenticação)

    Body: Dados enviados (geralmente em JSON)

    Response: O retorno da API (também em JSON ou XML)


3. RESUMO DE COMO FUNCIONA A REQUISIÇÃO POR PARTE DO FRONT-END 

    - Basicamente o Front-End vai consumir dados de uma API externa criada pelo nosso back-end, ou seja... A missão do front-end é enviar uma requisição com os métodos http
    GET, POST, PUT, DELETE em uma URI, URL específica contendo um body (no caso um JSON) ao qual vai solicitar dados e resceber dados do back-end com essa requisição conforme o Body específicado. Exemplo:


    GET http://localhost:8080/visualizarCliente/1 (ENDPOINT-URL-URI)
    
    Content-Type: application/json (HEADER)
    [
        {
            "idcliente":"1",
            "nomecliente":"Pastelaria Uno"   NOSSO BODY - JSON
        } 
    ]


4. CRIANDO UM HOOK PADRÃO NA NOSSA PASTA HOOK QUE TERÁ SUPORTE A TODOS OS MÉTODOS HTTP

import { useState, useEffect } from "react";

interface FetchOptions extends RequestInit {} // tipagem do segundo parâmetro do fetch

function useFetch<T = unknown>(url: string, options?: FetchOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    fetch(url, options)
      .then((response:Response) => {
        if (!response.ok) throw new Error("Erro ao buscar dados");
        return response.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url, JSON.stringify(options)]); // garante que atualize se as opções mudarem

  return { data, loading, error };
}

export default useFetch;


# TUTORIAL PASSO A PASSO USANDO ESSE HOOK PARA FAZER A CONEXÃO FRONT-BACK-END:

1. Estrutura de arquivos (exemplo)
    
    /src
    /hook
        useFetch.ts    <-- seu hook está aqui
    /components
        MeuComponente.tsx  <-- componente onde vai usar o hook

2. Importe o hook no seu componente

    No arquivo MeuComponente.tsx, importe seu hook com o caminho relativo correto:


    import React from "react";

    // Caminho relativo para src/hook/useFetch.ts
    import useFetch from "../hook/useFetch";  

3. Usando o hook dentro do componente 


    Vamos supor que seu backend tem uma rota para listar clientes em: 
        http://localhost:3000/api/clientes.

    
    Você pode fazer assim:

        interface Cliente {
        id: number;
        nome: string;
        email: string;
        }

export default function MeuComponente() {
  
  const { data, loading, error } = useFetch<Cliente[]>("http://localhost:3000/api/clientes");

  if (loading) return <p>Carregando clientes...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!data) return null;

  return (
    <ul>
      {data.map(cliente => (
        <li key={cliente.id}>{cliente.nome} - {cliente.email}</li>
      ))}
    </ul>
  );
}

4. Executando o projeto

    Certifique-se que o backend está rodando em localhost:8080 (ou ajuste a URL no hook)

    Rode seu front-end (por exemplo, npm start ou yarn start)

    Acesse o componente para ver os dados carregados da API

5. Fazendo requisição POST, PUT, DELETE com useFetch

    Para esses métodos que exigem body e disparo manual (por clique, por exemplo), seu hook atual precisa ser adaptado, porque ele dispara automaticamente no useEffect.

    Por enquanto, se quiser usar seu hook original, o jeito é mudar a URL ou options para forçar o re-fetch.

    Mas a recomendação para POST, PUT e DELETE é criar uma função que chame o fetch com as opções corretas.

Recapitulando:

    Importe seu hook com caminho relativo correto

    Chame useFetch passando URL e (opcional) opções

    Use os retornos { data, loading, error } para renderizar estados

    Para GET, o hook atual funciona automático e simples

    Para POST/PUT/DELETE, ideal usar um disparo manual


# EXEMPLOS USANDO NOSSO HOOK UNIVERSAL COM SUPORTE PARA 4 MÉTODOS HTTP


1. GET (buscar dados)


const { data, loading, error } = useFetch<MyDataType>("https://meu-backend/api/recursos");

Sem opções, pois o fetch usa GET por padrão.

2. POST (criar um recurso)

const novoRecurso = { nome: "Exemplo", valor: 123 };

const { data, loading, error } = useFetch<MyDataType>("https://meu-backend/api/recursos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(novoRecurso),
});

3. PUT (atualizar um recurso)

const recursoAtualizado = { nome: "Exemplo Atualizado", valor: 456 };

const { data, loading, error } = useFetch<MyDataType>("https://meu-backend/api/recursos/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(recursoAtualizado),
});

4. DELETE (deletar um recurso)

const { data, loading, error } = useFetch("https://meu-backend/api/recursos/1", {
  method: "DELETE",
});


5. OBSERVAÇÕES A RESPEITO DESSE TIPO DE HOOK:

    Para POST e PUT, o body deve ser uma string JSON.

    Sempre defina o header "Content-Type": "application/json" para enviar JSON.

    Quando usar métodos que modificam dados (POST, PUT, DELETE), geralmente não faz sentido disparar a requisição automaticamente no useEffect só pela URL e opções (a não ser que você queira executar assim).

    Nesses casos, é comum usar uma função para disparar a requisição manualmente (exemplo 
    abaixo).


# EXEMPLOS DE REQUISIÇÕES MAUNAIS OU DESPARAOS MANUAIS 


. POST – Criar recurso manualmente

function criarCliente() {
  fetch("http://localhost:3000/api/clientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: "João Silva",
      email: "joao@email.com",
    }),
  })
    .then(res => {
      if (!res.ok) throw new Error("Erro ao criar cliente");
      return res.json();
    })
    .then(data => console.log("Cliente criado:", data))
    .catch(err => console.error("Erro:", err));
}

✅ 2. PUT – Atualizar recurso manualmente

function atualizarCliente() {
  fetch("http://localhost:3000/api/clientes/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: "João Atualizado",
      email: "joao.novo@email.com",
    }),
  })
    .then(res => {
      if (!res.ok) throw new Error("Erro ao atualizar cliente");
      return res.json();
    })
    .then(data => console.log("Cliente atualizado:", data))
    .catch(err => console.error("Erro:", err));
}

✅ 3. DELETE – Excluir recurso manualmente

function deletarCliente() {
  fetch("http://localhost:3000/api/clientes/1", {
    method: "DELETE",
  })
    .then(res => {
      if (!res.ok) throw new Error("Erro ao deletar cliente");
      return res.json();
    })
    .then(data => console.log("Cliente deletado:", data))
    .catch(err => console.error("Erro:", err));
}

✅ 4. Exemplo completo com botões no componente React

import React from "react";

export default function ClienteActions() {
  
  function criarCliente() {
    
    fetch("http://localhost:3000/api/clientes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: "Maria", email: "maria@email.com" }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Criado:", data));
  }

  function atualizarCliente() {
    
    fetch("http://localhost:3000/api/clientes/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: "Maria Atualizada", email: "nova@email.com" }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Atualizado:", data));
  }

  function deletarCliente() {
    fetch("http://localhost:3000/api/clientes/1", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log("Deletado:", data));
  }

  return (
    <div>
      <button onClick={criarCliente}>Criar</button>
      <button onClick={atualizarCliente}>Atualizar</button>
      <button onClick={deletarCliente}>Deletar</button>
    </div>
  );
}