import { PrismaClient } from "@prisma/client";
import autorRouter from "../routes/autor_routes";

export class AutorPersistence{

     private prisma: PrismaClient; 

     /* 
        Isso significa que a classe terá uma variável interna chamada prisma,
        e essa variável deve armazenar um objeto do tipo PrismaClient, que é
        o cliente do ORM
    */

  constructor(){

    this.prisma = new PrismaClient; // cria um objeto de PrismaCliente

    /* é chamado automaticamente quando você cria um novo objeto da classe.
    Essa linha garante que o Prisma esteja pronto para uso dentro da classe. */

  }

  /* Declarando uma função assícrona */
  async create(autorData:{nome:string}){

    try{
        const autor = await this.prisma.autor.create({data:autorData});
        return autor
    }catch(e){
        console.log(`Àconteceu alguma cagada aqui: ${e}`)
    };

    /* 
    
        Explicação: async → a função é assíncrona, ou seja, ela pode usar await para
        esperar promessas (como operações de banco de dados).

        create(...) → nome da função. Ela recebe um parâmetro, que é um Objeto na seguinte
        estrutura:
            
            {
                nome: string
            }

        Isso é uma forma de usar a tipagem direta no parâmetro.

        await this.prisma.autor.create({ data: AutorData }) -> Vamos desmiusar:

        await -> Espera a promessa resolver (a criação do autor no banco) antes de continuar

        this.prisma -. A instância do PrismaClient dentro da classe

        this.prisma.autor -> A tabela chamada autor (definida no seu schema Prisma)

        .create(...) -> Cria um novo registro na 
        
        { data: AutorData } -> Prisma espera um objeto com uma propriedade data contendo 
        os dados a serem inseridos

        Retorna o resultado da criação do autor (provavelmente um objeto com id e nome)
        para quem chamou a função.
    
    */

  };

  /* Declarando uma função assícrona */
  async findAll() {

        try{
            const autores = await this.prisma.autor.findMany();
            return autores;

            /*
                findMany -> Método do Prisma que busca todos os registros da tabela
            
            */
        }catch(e){
            console.log(`Erro ao selecionar todos os autores> ${e}`)
        };
    };

    // o correspondente de int no typescript é o number
    async findById(id:number){
        try{
            const autor = await this.prisma.autor.findUnique({
                where:{idautor:id}
            });
            return autor;

            /*
            
                findUnique é um método que retorna um unica registro    
            
            */

        }catch(e){
            console.log(`Aconteceu um erro ao selecionar o autor em específico: ${e}`)
        }
    }

    async update(id:number, autorData:{nome:string}){

        try{
            const AtulizarAutor = await this.prisma.autor.update({
                where:{idautor:id},
                data:autorData
            });
            return AtulizarAutor;

            /*
                update é uma função do prisma que atualiza o registro
            */
        }catch(e){
            console.log(`Erro ao atualizar o autor: ${e}`)
        };
    };

    async delete (id:number){
        try{
            const DeleteAutor = await this.prisma.autor.delete({
                where:{idautor:id},
            });
        }catch(e){
            console.log(`Erro ao deletar o autor: ${e}`)
        }
    }

};