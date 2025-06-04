/* IMPORTANDO A LIB Lib EXPRESS */
import express,{Express,Request,Response} from 'express'; 

/*
 QUANDO COLOCAMOS {}, TODAS AS FUNÇÕES, MÓDULOS, ATRIBUTOS, CLASSES QUE ESTÃO DENTRO DE CHAVES, ESTAMOS IMPORTANDO
 
*/

/*

    QUANDO IMPORTAMOS  SEM O {} E O QUE QUEREMOS DENTRO DAS CHAVES, ESTAMOS APENAS EXPORTANDO A FUNCIONALIDADE PRINCIPAL
    DO EXPRESS, QUE NO CASO É UMA FUNÇÃO QUE CRIA UM SERVIDOR LOCAL

*/

/* CRIANDO UMA INSTÂNCIA DO OBJETO EXPRESS QUE REPRESENTA O NOSSO SERVIDOR */

const app: Express = express();

/*CONFIGURANDO O NOSSO SERVIDOR EXPRESS PARA ACEITAR REQUISIÇÕES JSON */
app.use(express.json())

/* 
    BASICAMENTE: é um middleware do Express. 
    Um middleware é uma função que roda antes de atingir as rotas finais. 
    Neste caso, ele é responsável por transformar o corpo da requisição HTTP em JSON, 
    para que possamos acessá-lo como um objeto JavaScript. 

    O MÉTODOS APP.USE() -> serve para registrar middlewares na aplicação. 
    Ou seja, qualquer requisição que chega ao servidor passará primeiro por express.json(), 
    garantindo que o corpo da requisição seja convertido corretamente.

    Logo, antes de adicionar express.json(), se tentarmos acessar o corpo de uma requisição POST com req.body,
    ele não estará definido. Isso acontece porque, por padrão, o Express não sabe como interpretar JSON.

*/


/* CRIANDO NOSSAS ROTAS QUE ESCUTAM REQUISIÇÕES API REST: GET, POST, PUT, DELETE */
                    
                    //Atenção ao Arrow_Function (variável:tipo,variável:tipo):tipo_de_retorno => {}, 
app.get('/', async (req:Request,res:Response)=>{

    try{
        const mensagem:string = 'Bem-vindo ao caminho, rota raiz da nossa aplicação express';
    
        res.status(200).send(mensagem);
    }catch(e){

        console.log(`Aconteceu algum erro aqui: ${e}`)
        res.status(404).send(`Aconteceu algum erro aqui: ${e}`)
    }
})

/*                                        esse cara é o nosso callback
    app.get('caminho_rota', (req: requisição do cliente, res: resposta do servidor) ) 
    
    no Express.js é usado para definir uma rota que responde às requisições HTTP do tipo GET. 
    Define uma rota que escuta requisições do tipo GET (usada geralmente para buscar dados).

    res.status(200) -> do nosso objeto Response, estamos utilizando um método chamado
    status(código_status_http) 

    res.send('mensagem de retorno') -> do nosso objeto Response, estamos utilizando um
    método
*/





/*FAZENDO O NOSSO SERVIDOR RODAR LOCALMENTE NA PORTA: 8080 */

                    //Atenção ao Arrow_Function ():tipo_de_retorno => {}
app.listen(8080, ():void =>{

    console.log('Servidor rodando na porta: 8080')
});