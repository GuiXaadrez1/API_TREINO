/* IMPORTANDO A LIB Lib EXPRESS */
import express,{Express,Request,response,Response} from 'express'; 

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
    método, ou seja, no Express.js é usado para enviar uma resposta ao cliente que fez a
    requisição. Ele faz parte do objeto Response (res) e pode enviar diferentes tipos de conteúdo, 
    como strings, objetos JSON, buffers ou até mesmo arquivos.
*/

app.post('/rescebendo_mensagem/:mensagem', async (req:Request,res:Response) => {

    try{
        
        const mensagem:string = req.params.mensagem;

        res.status(200).send(`Servidor rescebeu a mensgem da requisição post: ${mensagem}`);
    
    }catch(e){

    };

});


/* 

    Basicamente vai funcionar da mesma forma acima, porém com requisições tipos post!
    utilize o postman, isonimia ou a extensão REST CLIENT para fazer a requisição
    POST

    o req.params.mensagem -> é uma tributo específico do objeto Request que capita 
    uma parâmetro declarado na URL, esse parâmetro é declarado com : 

*/


// Simulando um banco de dados em memória

// criando um tipo, funciona igual ao type do C, basicamente definimos um tipo de dados para posterior mente ser criada
type Database_Pessoa= {
    id:number,
    nome?:string, /* onde tem ? significa que são variáveis que podem ou não ser utilizadas */
    ativo:boolean

}


let database: { [key: number]: Database_Pessoa } = {
    1: { id: 1, nome: "Carlos", ativo: true },
    2: { id: 2, ativo: false }
};
  

/* 

    EXPLICAÇÃO DETALHADA DA VARIÁVEL DATABASE:

    let database é uma variável que pode ser modificada e mudada ao longo do bloco código

    diferente do const, que é unico, fixo, costante naquele bloco de código 

    Esse formato { [key: number]: Database_Pessoa } é chamado de Index Signature no TypeScript
    
    Ele permite criar objetos onde: 
        
        - Cada chave (key) é um número. 
        - Cada valor segue o tipo Database_Pessoa.

    É uma forma dinâmica de armazenar múltiplos objetos do tipo Database_Pessoa,
    onde as chaves representam identificadores únicos (IDs).


    Agora: 

        {
            1: { id: 1, nome: "Carlos", ativo: true },
            2: { id: 2, ativo: false }
        };

    É um objeto em TypeScript onde:

        As chaves (1, 2) são números que representam identificadores únicos.

        Os valores associados a essas chaves são objetos, que contêm dados sobre usuários.

    Resumindo: 

        Criamos um objeto de objetos. Ou seja, database é um objeto principal, onde cada chave numérica
        (como 1, 2, 3) aponta para outro objeto que contém informações específicas.

*/


app.put('/atualizar_Moc/:id', async(req:Request,res:Response) => {

    try{

        const id:number = Number(parseInt(req.params.id));
        const novosDados: Partial<Database_Pessoa> = req.body; // Permite atualizar parcialmente o nosso banco de dados em memória

        // Verifica se o ID existe
        if(!database[id]){
            res.status(404).json({erro:'Registro não encontrado no banco de dados em memória'});
        }

        // Atualiza os dados mantendo os valores existentes

        database[id] = {...database[id], ...novosDados}; // esse objeto está adquirindo todos os atributos de database[id] e novosDados

        res.status(200).json({mensagem:'Dados Atualizados',dados:database})
    
    
    }catch(e){
        console.log(`Deu erro ao atualizar algum dado do nosso MOC: ${e}`);
        res.status(500).json({ erro: 'Erro interno no servidor' });
    };

});


/*FAZENDO O NOSSO SERVIDOR RODAR LOCALMENTE NA PORTA: 8080 */

                    //Atenção ao Arrow_Function ():tipo_de_retorno => {}
app.listen(8080, ():void =>{

    console.log('Servidor rodando na porta: 8080')
    
});