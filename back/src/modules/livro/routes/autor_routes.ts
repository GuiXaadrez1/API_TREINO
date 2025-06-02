/* importando a Classe Router do expressa para definirmos, mapear rotas */
import { Router } from 'express';
import { getAllAutor,getAllAutorById,createAutor,updateAutor,deleteAutor } from "../persistence/autor_persistence"; 

/*Criando um Objeto de Router */
const autorRouter = Router();

/* criando rota para visualizar todos os autores */
autorRouter.get('/visualizar', getAllAutor)
autorRouter.get('/:id', getAllAutorById)
autorRouter.post('/inserir', createAutor)
autorRouter.put('/atualizar/:id', updateAutor)
autorRouter.delete('/deletar/:id', deleteAutor)

export default autorRouter;