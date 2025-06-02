/* importando o prisma para realizar CRUD no banco de dados POSTGRESQL */
import { PrismaClient } from "../../../../../prisma/generated/prisma";
import { Response,Request } from "express";

/* Materializando um objeto PrismaClient */
const autorClient = new PrismaClient();

//getAllAutor -> pegar todos os autores 
export const getAllAutor = async (req:Request,res:Response) => {
    try{
        const AllAutor = await autorClient.autor.findMany({
        include: {
            livro: true
        }});
        res.status(200).json({ data : AllAutor })
    
    }catch (e) {
        console.error(`Aconteceu algum erro aqui: ${e}`);
        res.status(500).json({ error: "Erro ao buscar autores." });
    }
};

/* 
    O bloco de código acima exporta um Objeto cujo retorna dados em json caso a requisição
    seja código 200
 */

//getAllAutorById -> pegar todos os autores pelo id

export const getAllAutorById = async (req:Request,res:Response) => {
    try{
        const autorID = Number(req.params.id)
        const autor = await autorClient.autor.findUnique({
            where: {
                idautor: autorID
            },
            include: {

                livro: true,
           },
        });
        res.status(200).json({ data : autor })
    }catch(e){
        
        console.error(`Aconteceu algum erro aqui: ${e}`);
        res.status(500).json({ error: "Erro ao buscar o autor pelo id." });
    }

}

//createAutor -> criar um autor
export const createAutor = async (req:Request,res:Response) => {

    try {
        const autorData = req.body
        const autor = await autorClient.autor.create({
            data: autorData
        });      
        res.status(200).json({ data : autor })
    }catch(e){
        console.error(`Aconteceu algum erro aqui: ${e}`);
        res.status(500).json({ error: "Erro ao inserir um novo autor" });
    }
} 

//updateAutor
export const updateAutor = async (req:Request,res:Response) => {
    try {
        const autorID = Number(req.params.id);
        const autorData = req.body;
        const autor = await autorClient.autor.update({
            where:{
                idautor: autorID
            },
            data:autorData
        });
        res.status(200).json({data:autor})
    } catch (e) {
        console.error(`Aconteceu algum erro aqui: ${e}`);
        res.status(500).json({ error: "Erro ao atualizar o autor" });
    };
};

//deleteAutor

export const deleteAutor = async(req:Request,res:Response) => {
    try{
        const autorID = Number(req.params.id)
        const autor = await autorClient.autor.delete({
            where:{
                idautor:autorID
            },
        });
        res.status(200).json({data:{}})
    
    }catch(e){
        console.error(`Aconteceu algum erro aqui: ${e}`);
        res.status(500).json({ error: "Erro ao deletar o autor" });
    }
}