/* Importando a classe Router do express */

import { Router } from "express";
import { json,Request,Response } from "express";


/* Fazendo a exportação do Service para os Routes */
import { AutorService } from "../service/AutorService";

const rounter:Router = Router();
const autorService:AutorService = new AutorService;


// router GET

rounter.get('/ListarAutores', async(req:Request,res:Response)=>{
    try{
        
        const autores:JSON = await autorService.listaAutores()
        res.json(autores)
    }
    catch(e){
        console.log(`Erro ao listar os autores: ${e}`);
    }; 
});

// router GET

rounter.get('/VisualizarAutor/:id', async(req:Request,res:Response)=>{
    try{
        const id = parseInt(req.params.id);
        const autor:JSON = await autorService.visualizarAutor(id)
        res.json(autor).status(200)
    }catch(e){

        console.log(`Erro ao Visualizar Autor: ${e}`)
    }

});