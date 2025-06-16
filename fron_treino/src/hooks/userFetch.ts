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

/*

RELATÓRIO EXPLICATIVO DO CÓDIGO LINHA POR LINHA!


import { useState, useEffect } from "react";

    Você está importando dois hooks nativos do React:

    useState: permite criar variáveis reativas (estado).

    useEffect: permite executar efeitos colaterais, como requisições quando
    o componente renderiza ou muda.

interface FetchOptions extends RequestInit {}

    Você cria uma interface FetchOptions que herda de RequestInit.

    RequestInit é a tipagem oficial do segundo parâmetro do fetch(), e inclui:

    method (GET, POST, etc.)

    headers, body, mode, etc.

💡 Aqui você só reaproveita a tipagem original, sem precisar reescrever tudo.

function useFetch<T = unknown>(url: string, options?: FetchOptions)

    Cria um hook customizado genérico chamado useFetch.

    O <T = unknown> é um "generic", permitindo que você defina o tipo dos dados
    esperados de forma dinâmica.

        Exemplo: useFetch<User[]>('/users') → T vira User[].

    Se você não passar tipo, será unknown.

    url: string: URL da requisição.

    options?: FetchOptions: segundo parâmetro do fetch (opcional), usado para configurar
    método, headers, etc.

    const [data, setData] = useState<T | null>(null);
    
        Cria o estado data, que vai armazenar a resposta da API.

    T | null: a resposta pode ser:

        Do tipo T (quando chegar)

        Ou null (antes da resposta)

    setData é a função que altera o valor de data.

    const [loading, setLoading] = useState(true);

        Cria o estado loading para indicar se a requisição está em andamento.

        Começa como true, e depois vai para false.

    const [error, setError] = useState<string | null>(null);

        Cria o estado error para capturar possíveis erros.

        Começa como null, e vira string se um erro for lançado.

    useEffect(() => { ... }, [url, JSON.stringify(options)]);

Hook que executa o bloco interno quando:

    O componente for montado

    Ou quando url ou options mudarem

    [url, JSON.stringify(options)]:

    url: se mudar, refaz a requisição.

    options: precisa ser convertido para string, porque objetos em JS não são comparáveis
    por valor.

    Bloco interno do useEffect

    setLoading(true);

    Ativa o loading toda vez antes de iniciar a requisição.

    fetch(url, options)

        Chama a API usando o método e configurações passadas.

        Exemplo:

            fetch('/api', { method: 'POST', body: JSON.stringify({...}) })
            .then((response) => { ... })

    Quando a resposta chega, executa esta função.

    Verifica se response.ok (status 200 a 299).

    Se não for ok, lança erro → vai para o .catch(...).

    return response.json();

        Converte o body da resposta para JSON, retornando uma Promise.

    .then((json) => setData(json))
    
        Quando o JSON estiver disponível, ele:

    Chama setData(json), ou seja:

        Atualiza o estado data com os dados recebidos.

    .catch((err) => setError(err.message))

        Se qualquer erro ocorrer (rede, 404, etc.), ele:

       Atualiza o estado error com a mensagem do erro.

    .finally(() => setLoading(false));

        Sempre será executado no final, com ou sem erro.

        Marca o fim do carregamento.

    return { data, loading, error };

        O hook retorna um objeto com os 3 estados.

Você usa assim em um componente:

    const { data, loading, error } = useFetch<User[]>('/api/users');


✅ RESUMO FINAL
+----------------+-------------------------------------------------------------+
| Parte          | Explicação curta                                            |
+----------------+-------------------------------------------------------------+
| <T = unknown>  | Hook genérico que permite tipar o tipo esperado na resposta |
+----------------+-------------------------------------------------------------+
| data           | Armazena o resultado retornado pela API                    |
+----------------+-------------------------------------------------------------+
| loading        | Indica se a requisição está em andamento (true/false)      |
+----------------+-------------------------------------------------------------+
| error          | Armazena mensagem de erro, caso algo falhe                 |
+----------------+-------------------------------------------------------------+
| options        | Parâmetros do fetch: método, headers, body etc.            |
+----------------+-------------------------------------------------------------+
| useEffect      | Executa a requisição quando url ou options mudam           |
+----------------+-------------------------------------------------------------+


*/