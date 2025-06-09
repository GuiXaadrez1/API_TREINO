// Criando um servidor HTTP local para treinar conceitos de API REST

// Esse treino é com o servidor local nativo do type e javascript

                //Request       // Response
import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  
    // Definindo cabeçalho e status
  res.writeHead(200, { 'Content-Type': 'application/json' });

  /*
  
    writeHead -> é uma função que ira escrever, descrever uma cabeça da
    requisição, o Headers são metadados que contém informações da requisição
    e serve para autentificação, isso serve também para respostas.

    Os cabeçalhos contêm todas as informações necessárias para que a comunicação funcione
    corretamente. Exemplo:

        GET / HTTP/1.1
        Host: www.google.com  -> IP para quem foi feito a requisição

        User-Agent: curl/7.68.0 -> designa quem faz a requisição, podendo ser 
        um navegador, o Curl (programa de terminal) ou o Postman
        
        Accept: text/javascript ->  o tipo de dado aceito na requisição 
        
        X-Test: hello
    

    Primeiro parâmetro que esse cabeçalho rescebe é o status
    O segundo parâmetro é um objeto que irá informar o tipo de dado que vai 
    trafegar na requisição de teste, seja resposta do servidor ou requisição do cliente   
    Neste caso, application/json -> o tipo de dado que trafega é um arquivo.json
  
    */

  // Enviando dados como resposta JSON
  const data = {
    mensagem: 'Servidor Node.js com API REST funcionando', // uma mensagem em string
    metodo: req.method, // indica o método http como resposta
    url: req.url // indica a url que foi acessada, neste caso é a raiz / 
  };

  // Função que irá retornar uma resposta Json
  res.end(JSON.stringify(data)); // transforma o nosso objeto de dados em um json


});


// Iniciando o servidor na porta 3000
server.listen(3000, () => {
  console.log('Servidor HTTP rodando em http://localhost:3000');
});

// esse listen é responsável por capturar eventos


/*
    RESUMÃO DO CÓDIGO FONTE:

        IMPORTAMOS O MÓDULO http, PUXAMOS AS CLASSES: IncomingMessage, ServerResponse
        
        AFIM DE FAZER CALLBACK COM O A FUNÇÃO: createServer() para criar um servidor
        que irá resceber REQUISIÇÕES E ENVIAR RESPOSTAS.

        DEFINIMOS UM CABEÇALHO DE METADADOS DURANTE O TRÁFEGO DOS DADOS DE RESPOSTA
        DO SERVIDOR COMO: STATUS E O TIPO DE CONTÉUDO QUE ESTÁ SENDO ENVIADO.

        VEJA -> res.writeHead(200, { 'Content-Type': 'application/json' })
        
        [   {
                STATUS: 200 OK
                CONTENT-TYPE: application/Json 
            }
        ]   

        NESTE CABEÇALHO DE METADADOS ESTAMOS INFORMANDO O STATUS DA REQUISIÇÃO E QUAL
        TIPO DE DADO ESTÁ TRAFEGANDO NA RESPOSTA DO SERVIDOR, OU SEJA, UM JSON.

        APÓS DEFINIMOS OS DADOS QUE SERIAM ENVIADOS EM UM ARQUIVO.JSON EM UM OBJETO:

        const data = {
            mensagem: 'Servidor Node.js com API REST funcionando', // uma mensagem em string
            metodo: req.method, // indica o método http como resposta
            url: req.url // indica a url que foi acessada, neste caso é a raiz / 
        };

        RETORNAMOS UM RESPOSTA COM SERVIDOR SE A REQUISIÇÃO DO CLIENTE FOR FEITA:
        
        res.end(JSON.stringify(data));

        POR ÚLTIMO COLOCAMOS O SERVIDOR PARA ACOMPANHAR EVENTOS COM A FUNÇÃO:

        listen(porta_lógica_de_escuta()=>{})

*/