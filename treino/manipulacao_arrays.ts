// Criando um Array de Objetos -> Basicamente um Json

// criado um type para o nosso objeto

type Pessoa = {
    nome: string,
    idade: number
}

// Lembre-se que typescript é tipado
const Array_objeto:Pessoa[]= [
    {
        nome:'Ab',
        idade: 20  
    },{
        nome:'Abcd',
        idade: 10
    },{
        nome:'Abc',
        idade: 10 
    }
]

/*
    arrayObjetos: Pessoa[] -> Estamos utilizando uma **anotação de tipo** (type annotation).

    Essa anotação indica ao TypeScript que:
    
    - 'arrayObjetos' é uma variável que armazenará **um array**;
    - Cada **elemento desse array** deve obrigatoriamente ser um **objeto do tipo Pessoa**.

    Em outras palavras:
        Pessoa[] significa "array de objetos do tipo Pessoa".

    Isso garante que todos os itens do array terão as propriedades exigidas por Pessoa,
    como por exemplo:
        type Pessoa = {
            nome: string;
            numero: number;
        };
*/


/*

    Usando o método map para manipulação de Array

    O método map é basicamente, invoca uma função callback "chamar de volta" passada por
    argumento para cada elemento do Array e devolve um novo Array como resultado

*/
