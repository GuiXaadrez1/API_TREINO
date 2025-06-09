/* 

    Vamos criar um arquivo somente para roteamento de caminhos que criamos para nossas 
    APIs, em vez  de deixar a nossa aplicação principal: 

        import app from '../treino/express'

    Vamos criar rotas e caminhos em uma pasta específica e exportar para a aplicação
    principal.

    Neste caso vamos exportar as seguintes propriedades do express: 
    
        - Class Rounter
        - Class Request
        - Class Response
*/


import {Router,Request,Response } from "express";
import { throwDeprecation } from "process";

// instanciândo uma variável que irá comportar nosso objeto/método Router
// o objetivo com isso é criar nossas rotas e exportar para aplicação principal
// que será: express2.ts

const way:Router = Router();


// Criando uma array de objetos que simula dados
const dados = [
    {   
        id:10, 
        nome:'GuiCoxinha'
    },
    {
        id:9,
        nome:'Fenômeno' 
    },
    {
        id:5,
        nome:'MocMOc'
    }
]

// Criando rota get, essa rota só rescebe requisições GET, GET PEGA DADOS
way.get('/ver-nome/:nome', async (req:Request, res:Response)=>{

    try{
        
        const nome:string = req.params.nome
        const dados_filtrados = dados.filter(dado => dado.nome.toLowerCase() === nome.toLowerCase()); 
        
        if (!nome || typeof nome !== 'string') {
        
            return res.status(400).json({ mensagem: 'Nome inválido ou não fornecido.' });
        }
        else{

            res.status(200).json(dados_filtrados);

        }
        
    }catch(e){
        console.log(`Erro ao visuzalizar o nome: ${e}`)
        throw e;
        
    }

});


// Post é uma requisição de enviar
way.post('/criar-dados', (req:Request,res:Response) => {
    try{

        const novo_dado = dados.push(req.body)
         
        if (novo_dado){

            return res.status(201).json(novo_dado)
        
        }else {

            return res.status(403).send('Não possível inserir um noco dado')

        }

    }catch(e){

        console.log(`Erro ao inserir um novo dado: ${e}`)
        throw e;
    }

})

export default way;