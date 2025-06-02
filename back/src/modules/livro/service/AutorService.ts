/* Criando a camada de serviço */
// exportando objeto da camada persistence para conexão com o banco de dados

import { AutorPersistence } from '../persistence/AutorPersistence';

export class AutorService{

    private autorPersistence: AutorPersistence;

    constructor(){
        this.autorPersistence = new AutorPersistence();
    }

    async listaAutores () {
        
        return this.autorPersistence.findAll()
    };

    async visualizarAutor(id:number){
        return this.autorPersistence.findById(id)
    }

    async criarAutores(data:{nome:string}){

        return this.autorPersistence.create(data)
    }

    async atualizarAutor(id:number,data:{nome:string}){
        return this.autorPersistence.update(id,data)
    }

    async deletarAutor(id:number){
        return this.autorPersistence.delete(id)
    }

}