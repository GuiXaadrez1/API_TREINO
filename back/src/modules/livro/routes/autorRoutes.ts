/* Importando a classe Router do express */

import { Router } from "express";
import { json,Request,Response } from "express";


/* Fazendo a exportação do Service para os Routes */
import { AutorService } from "../service/AutorService";

const rounter:Router = Router();
const autorService:AutorService = new AutorService;


// ROTA GET
rounter.get('/listar_autores', async(req:Request,res:Response)=>{
    try{
        
        const autores = await autorService.listaAutores()
        res.status(200).json(autores)
    }
    catch(e){
        console.log(`Erro ao listar os autores: ${e}`);
    }; 
});

// ROTA GET
rounter.get('/visualizar_autor/:id', async(req:Request,res:Response)=>{
    try{
        const id = parseInt(req.params.id); // parseInt converte uma string em um inteiro
        const autor = await autorService.visualizarAutor(id)
        res.status(200).json(autor)
    }catch(e){

        console.log(`Erro ao Visualizar Autor: ${e}`)
    }
});

// ROTA POST
rounter.post('/registrar_autor', async (req:Request,res:Response) => {
    try{
        // const nome = req.body.nome;  // forma antiga
        const {nome} =  req.body; // forma atual, isso é uma desestruturação de objeto
        const novoAutor = await autorService.criarAutores({nome});
        res.status(201).json(novoAutor) //  Indica que a requisição criou um novo recurso 
    }catch(e){ 
        console.log(`Aconteceu algum erro ao inserir um autor:${e}`)
    };
});

// ROTA PUT 
rounter.put('/atualizar_autor/:id', async (req:Request,res:Response)=>{

    try{
        const id:number = parseInt(req.params.id);
        const {nome} = req.body;
        const autorAtualizado = await autorService.atualizarAutor(id,{nome});
        res.status(200).json(autorAtualizado);
    }catch(e){
        console.log(`Aconteceu alguma cagada aqui: ${e}`);
    };
});

// ROTA DELETE

rounter.delete('/deletar_autor/:id', async (req:Request,res:Response)=>{
    const id:number = parseInt(req.params.id);
    const autorDeletado = await autorService.deletarAutor(id);
    //res.status(204).send(); // NO CONTENT
    /*
        204 No Content é usado quando a requisição foi bem-sucedida, 
        mas não há nada para retornar no corpo da resposta.
    */
   res.status(200).send("Autor deletado com sucesso!")
});

export default rounter;

/*

    Resumo do código: Esse módulo define e exporta um conjunto de rotas HTTP para
    manipular autores em uma API REST, utilizando o framework Express. 
    O serviço AutorService encapsula a lógica de negócio.

*/


/*

    Anotações:



*/