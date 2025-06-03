/* Aqui que vamos criar a nossa aplicação principal */
import express, { json,Request,Response } from "express";

/* importando rota criada para visualizar todos os autores */
import rounter from "../livro/routes/autorRoutes";

/* definindo uma variável constante para o materializar o objeto express */
const app = express();

// definindo umavariável constante para armazenar a porta ao qual o express vai rodar

//const port = process.env.PORT || 3000;
const port = 3000;

/* 
    Ela obtém o valor da porta definida no ambiente. Isso é útil porque permite que
    um servidor se ajuste automaticamente à porta configurada pelo sistema, em vez de
    depender de um valor fixo no código. Caso de algo errado! 
    O servidor passa a rodar na porda 3000

*/

/* Configurando servidor para aceitar requisições json */
app.use((express.json()));

app.get('/',(req:Request,res:Response) => {

    const resposta = res.json({messagem:"Dretório Raiz"}).status(200);
    
    console.log(resposta)

});

// Definindo uma rota HTTP GET usando o métodos get do express
app.get('/ping', (req:Request,res:Response) => { 

    // quando o cliente faz uma requisição GET a função callback é executada
    // o req, res são handler da rota
    // res -> resposta do servidor
    // req -> requisição do cliente

    res.json({message:"pong"}).status(200);

    // o método acima devolve uma resposta no formato JSON contendo a menssagem PONG
    // .status, define o status da requisição HTTP

});

/* Configurando express para usar a rota! */
app.use('/autor',rounter)

app.listen(port, ():void => {

    let menssager:string = "Server rodando na porta: "+port;
    console.log(menssager)

    console.log('Teste1, Teste2')

} )