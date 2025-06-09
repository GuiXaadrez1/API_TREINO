// Continuação do aprendizado do server http, vamos criar rotas

/*
    O que são rotas?

    Rota é o caminho que mapeia uma requisição HTTP a uma função específica no servidor. 
    Cada rota define:

        - Método HTTP (GET, POST, PUT, DELETE, etc.)
        - Caminho da URL (ex: /clientes, /produtos/1)
        - Função que será executada quando a requisição for recebida
*/

import http, { IncomingMessage, ServerResponse } from 'http';

// Dados que serão enviados
type Dados = {
  d1: string;
  d2: number;
  d3: boolean;
};

const dados: Dados = { d1: 'Olá Dev', d2: 100, d3: true };

// Criando o servidor
const server_http = http.createServer((req: IncomingMessage, res: ServerResponse) => {
 
    // FAZENDO ROTEAMENTO MANUALMENTE 
  
    const url = req.url; // req.url, ele pega o caminho da requisição
    const method = req.method; // req.method, ela pega o método

  if (method === 'GET' && url === '/receber_mensagem') {
    try {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(dados));
    } catch (e) {
      console.error(`Erro ao processar /receber_mensagem: ${e}`);
      res.writeHead(500);
      res.end('Erro interno do servidor');
    }
  } else if (method === 'GET' && url === '/') {
    try {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Ola, voce esta na pagina raiz!');
    } catch (e) {
      console.error(`Erro ao processar a rota raiz: ${e}`);
      res.writeHead(500);
      res.end('Erro interno do servidor');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Rota não encontrada');
  }
});

// Porta do servidor
const port: number = 3000;

server_http.listen(port, () => {
  console.log(`Servidor escutando na porta lógica: ${port}`);
});


/*

  ANOTAÇÃO: Comparativo entre http nativo e a biblioteca Express

  A biblioteca nativa http do Node.js permite criar servidores de forma simples, 
  mas é muito manual em diversos aspectos. Ao usar http, o desenvolvedor precisa:

    Tratar e comparar manualmente os métodos (req.method) e rotas (req.url)

    Configurar cabeçalhos de resposta (res.writeHead) diretamente

    Interpretar o corpo da requisição (req.on('data')) para métodos como POST

    Escrever respostas completas com res.end

  Esses pontos tornam o desenvolvimento mais verboso e sujeito a erros, 
  principalmente conforme o número de rotas e funcionalidades cresce.

  Em contraste, o Express.js:
  
    Possui sistema de rotas simples e legível (app.get, app.post, etc.)

    Faz parsing automático do body com express.json()

    Possui middlewares para modularização

    Gerencia cabeçalhos e status com métodos de alto nível (res.status().json())

  Resumo: usar http nativo é útil para aprendizado, controle total e construção de 
  aplicações simples, mas o Express é mais produtivo, legível e usado em aplicações reais. 
  
*/