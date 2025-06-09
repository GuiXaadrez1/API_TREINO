
O protocolo de comunicação HTTP é baseado em requisições e respostas e na comunicação cliente-servidor.
Todo processo de requisição-resposta usando HTTP é sempre iniciado pelo lado cliente da requisição. O lado servidor da requisição nunca envia “ativamente” nenhuma resposta para o lado cliente sem ser como resultado de uma requisição.

1 - Partes da requisição

    1.1 - As partes que podem compor uma requisição são:

        1.1.1 - URL, também chamado de caminho ou rota, sempre iniciado com http:// ou https://.

        1.1.2 - Header, também chamado de cabeçalho, envia informações referentes ao cliente ou ao tipo de requisição. Alguns dados enviados através dos cabeçalhos são:

        1.1.3 - host é o domínio do servidor que receberá a requisição.

        1.1.4 - User-agent identifica o cliente, por exemplo, dados do navegador de onde está saindo a requisição.

        1.1.5 - Content-Type é o formato do dado que está sendo enviado no body da requisição, por exemplo JSON, string etc. Confira a lista completa de tipos de dados e como devem ser declarados no header.

        1.1.6 - Authorization são as credenciais de autenticação para acesso a recursos protegidos.

        1.1.7 -Accept especifica o formato de retorno esperado na resposta, por exemplo, JSON.

        1.1.8 - Body ou corpo da requisição, onde são trafegados dados enviados pelo cliente para serem recebidos pelo servidor, normalmente utilizado para dados mais estruturados e em requisições POST, PUT or PATCH. O tipo de dado enviado pelo body deve ser o mesmo especificado no Content-Type, por exemplo, application/json.

        1.1.9 - Parâmetros são inseridos na URL para envio de dados específicos, muito utilizados, por exemplo, para envio de informações variáveis como termos de buscas, IDs etc.

    Método HTTP, entre os aceitos pela rota, especifica o tipo de operação solicitado pelo cliente. Os mais comuns são os métodos GET, POST, PUT e DELETE. Vamos trabalhar com estes métodos com mais profundidade durante o curso.

2 - Partes da resposta

    A resposta a uma requisição HTTP é enviada pelo lado servidor da comunicação, de volta ao lado cliente. A resposta contém informações referentes à requisição, que podem ser uma confirmação de operação, dados solicitados ou mesmo mensagens de erro pertinentes em caso de falha em algum ponto da comunicação.

    2.1 - As partes que podem compor a resposta são:

        2.1.1 - Status da resposta, que contém a versão HTTP utilizada, o código de status e a mensagem de status. Por exemplo, HTTP/1.1 200 OK.

        2.1.2 - Headers ou cabeçalhos, com informações adicionais sobre a resposta ou o conteúdo da resposta. Por exemplo:

        2.1.3 - Content-Type; Content-Length, que corresponde ao tamanho em bytes do corpo da resposta;
        
        2.1.4 - Cache-Control, que são as instruções de cache para a resposta;

        2.1.5 - Set-Cookie, que adiciona um valor de cookie ao navegador. Caso queira saber mais, confira este artigo sobre o que são cookies e como são utilizados.

        2.1.6 - Body, o corpo da resposta, que contém os dados ou o conteúdo solicitado pelo cliente através da requisição e enviado pelo servidor. O formato de dados do body vai depender do formato especificado em Content-Type, por exemplo JSON.

FONTES: 
    https://cursos.alura.com.br/course/node-js-api-rest-express-mongodb/task/137599
    https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
    https://www.alura.com.br/artigos/o-que-sao-cookies-como-funcionam