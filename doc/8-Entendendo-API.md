1 - O QUE É UMA API?

    
    API é um acrônimo para Application Programming Interface -> (Interface de Programação de Aplicações), ou seja, é uma interface que permite que sistemas diferentes se comuniquem entre si de forma padronizada. Em outras palavras, uma API define regras e contratos para o consumo de funcionalidades de um sistema sem que o consumidor precise saber como ele foi implementado. O termo que devemos focar é "interface". Sempre que nos depararmos com esse termo, devemos pensar em um ponto de contato.

2 - COMO FUNCIONA UMA APLICAÇÃO COM API?

    Analogia simples (mas técnica): Imagine que um sistema é um restaurante. A cozinha é onde a lógica acontece (back-end), mas você não entra lá para preparar seu prato. Em vez disso, você interage com um garçom (API) que recebe seu pedido (requisição), leva até a cozinha (processamento), e te traz o prato pronto (resposta). Você não precisa saber como a cozinha funciona — só como fazer o pedido certo.

    Em resumo: a comunicação começa no front-end, que envia uma requisição HTTP ao back-end solicitando dados de um livro ou enviando algum cadastro. Nessa requisição, podem estar incluídos dados de uma pessoa usuária, por exemplo. Na sequência, o back-end processa essas informações e vai até a seção de dados para acessar tais informações.

3 - ESTRUTURA DE UMA API WEB (REST):

    Endpoint: URL para acessar a API (/produtos, /clientes)

    Método HTTP:

    GET (ler),

    POST (criar),

    PUT (atualizar),

    DELETE (remover)

    Headers: Metadados (ex: autenticação)

    Body: Dados enviados (geralmente em JSON)

    Response: O retorno da API (também em JSON ou XML)

4 - EXEMPLO PRÁTICO:

    FRONT-END, envia uma requisição com método HTTP POST para URL(endpoint), contendo o seguinte body (Dados enviados, neste caso é um json)
    
    POST /clientes HTTP/1.1  

    Content-Type: application/json (nosso Headers, ou autentificador )

    {
        "nome": "João",
        "email": "joao@email.com"
    }

    POST -> Método HTTP para criar
    /clientes HTTP/1.1 -> URL/URI'S -> ENDPOINT
    Content-Type: application/json -> Body, nosso arquivo.json com dados enviados


    BACK-END processa esses dados e salva no banco de dados e retorna uma resposta contendo
    os dados que foram salvos em um arquivo.json ou xml.

    Status: 200
    Response:   

    {
        "id": 123,
        "nome": "João",
        "email": "joao@email.com"
    }


5 - GRÁFICO DE CONSOLE (ASCII) EXPLICANDO COMO FUNCIONA A API REST ACIMA

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


6 - TIPOS DE API (APPLICATION PROGRAMMING INTERFACE)

    6.1 - REST:

        REST é um estilo arquitetural para construção de APIs baseado em comunicação via HTTP, utilizando métodos padrão como GET, POST, PUT, DELETE para manipular recursos representados por URLs (endpoints). As mensagens geralmente utilizam o formato JSON (ou XML, em casos menos comuns) para envio e recebimento de dados.

        Cada recurso é identificado por uma URI única e as operações seguem a semântica dos métodos HTTP. Por exemplo:

            GET /clientes → obtém lista de clientes

            POST /clientes → cria um novo cliente

            PUT /clientes/123 → atualiza o cliente com ID 123

            DELETE /clientes/123 → remove o cliente com ID 123

        REST é sem estado (stateless), ou seja, cada requisição deve conter todas as informações necessárias para ser processada, sem depender de sessões no servidor.

        É o tipo de API mais utilizado atualmente devido à sua simplicidade, integração nativa com a Web e compatibilidade com praticamente todas as linguagens e frameworks. Pode operar de forma síncrona ou assíncrona, dependendo da implementação, mas geralmente é usada de forma síncrona.

        Principais vantagens:

            Simples de entender e implementar

            Compatível com cache HTTP

            Altamente interoperável 

    6.2 - GraphQL:
    
        GraphQL é uma linguagem de consulta para APIs, desenvolvida pelo Facebook, que permite ao cliente especificar exatamente os dados que deseja em uma única requisição. Ao invés de vários endpoints como no REST, há apenas um endpoint que aceita queries definidas pelo cliente. O servidor responde apenas com os campos solicitados. GraphQL é altamente eficiente, evitando o problema de overfetching (dados em excesso) e underfetching (dados insuficientes). É muito útil em aplicações com interface rica, como SPAs e apps móveis, que demandam controle fino sobre os dados. Seu ponto forte está na flexibilidade e eficiência. Em contrapartida, o uso de GraphQL exige uma implementação mais complexa no servidor, além de dificultar caching e uso de ferramentas HTTP tradicionais.

    6.3 - APIs SOAP (Simple Object Access Protocol): 
    
        SOAP é um protocolo padrão para troca estruturada de informações em serviços web. Utiliza o formato de dados XML para estruturar mensagens e pode operar sobre diversos protocolos, como HTTP, SMTP e TCP. As mensagens SOAP são rigidamente definidas e baseadas em contratos formais chamados WSDL (Web Services Description Language). Cada operação é tratada como uma chamada remota, com nomes de métodos e parâmetros definidos. É sincrona por natureza e exige validação rigorosa. Seu uso é comum em sistemas legados e ambientes corporativos que exigem alto nível de segurança, transações complexas e padronização rígida. Seus principais pontos fracos são a performance mais lenta devido ao XML e a complexidade de implementação e manutenção.

    6.4 APIs Event-Driven (Orientadas a Eventos):
     
        As APIs orientadas a eventos são baseadas em um modelo assíncrono, onde a comunicação ocorre por meio da emissão e do consumo de eventos. Ao contrário das APIs REST ou SOAP, não dependem de uma requisição direta do cliente. Em vez disso, clientes se inscrevem (subscribe) para receber notificações sobre determinados eventos que ocorrem no sistema. Quando um evento ocorre (como a criação de um novo usuário), ele é emitido e entregue a todos os consumidores interessados. São amplamente utilizadas com tecnologias como Webhooks, Kafka, RabbitMQ e outros sistemas de filas. Esse modelo promove baixo acoplamento entre componentes e alta escalabilidade, sendo ideal para arquiteturas de microserviços. A principal desvantagem está na dificuldade de rastrear fluxos e na complexidade adicional para garantir a consistência.

    6.5 - APIs gRPC (Google Remote Procedure Call):
     
        gRPC é um framework de comunicação remota baseado em chamadas de procedimento remoto (RPC), criado pelo Google. Ele utiliza o protocolo HTTP/2 e o formato binário Protocol Buffers (protobuf) para comunicação eficiente entre serviços. O foco do gRPC está em alto desempenho, suporte a múltiplas linguagens e possibilidade de comunicação síncrona ou assíncrona, incluindo suporte a streaming bidirecional. É amplamente adotado em ambientes com microserviços, devido à sua eficiência e ao baixo consumo de rede. No gRPC, o cliente pode chamar diretamente funções definidas no servidor como se fossem locais. Seus principais desafios são a necessidade de aprender e configurar Protocol Buffers e a complexidade na depuração e testes em comparação a REST.

    6.6 WebSocket API:
    
        WebSocket é um protocolo de comunicação que permite a manutenção de uma conexão aberta e bidirecional entre cliente e servidor. Diferente do modelo tradicional de APIs REST, que exige uma nova requisição HTTP para cada troca de dados, o WebSocket estabelece uma conexão única e persistente. 
        
        Após o handshake inicial via HTTP, a comunicação passa a ocorrer sobre um canal de baixa latência, permitindo a transmissão de dados em tempo real nos dois sentidos (cliente-servidor e servidor-cliente), sem necessidade de polling.Esse tipo de API é ideal para aplicações que demandam atualizações em tempo real, como chats, jogos multiplayer, sistemas de monitoramento, bolsas de valores e dashboards de IoT.
        
        WebSocket opera de forma assíncrona e eficiente, transmitindo mensagens em formato leve (geralmente texto ou binário), com menor overhead em comparação ao HTTP tradicional. A principal desvantagem é a complexidade maior no controle de estado da conexão e na escalabilidade do servidor.