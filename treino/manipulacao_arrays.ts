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


const informacoes_array_objeto:Object[] = Array_objeto.map(item=> {

    try {
        
        return `O nome da pessoa é: ${item.nome}, e sua idade é: ${item.idade}`
    } catch (error) {
    
        throw new Error(`Erro ao retornar um elemento do array: ${error}`)
    }
})

// vendo as informações do array de objeto pessoa no console
console.log(informacoes_array_objeto)

/* 
    SAIDA:

    [
        'O nome da pessoa é: Ab, e sua idade é: 20',
        'O nome da pessoa é: Abcd, e sua idade é: 10',
        'O nome da pessoa é: Abc, e sua idade é: 10'
    ]


    Obs1.: O map rescebe um array e devolve um outro array só que formatado, personalizado
    Obs2.: O parâmetro item, variável item, iterador item é o jeito que chamamos
    cada elemento do nosso array = item.nome (refere-se ao parâmetro nome), item.idade(
    refere-se ao parâmetro idade do nosso array )
*/

// Utilizando o método .filter

    const Array_objeto_filtrado = Array_objeto.filter(item => {
        try {
            
            return item.idade === 20;
           
            /* 
             a expressão acima é a mesma coisa que está:    
            
                if (item.idade === 20){
                    return `Nome pessoa desejada é: ${item.nome}, sua idade é: ${item.idade}`
                }*/
        
        } catch (error) {
        
            throw new Error(`Aconteceu um erro ao filtrar: ${error}`);
              
        }
    });

console.log(Array_objeto_filtrado[0]); // usando slicing no array
console.log()

// Usando Técnicas Spread e Destruturação:


interface Carro {
    marca: string,
    modelo:string,
    forca?:number | string,
    ano: number
}


const Array_Carro:Carro[]=[{

    marca:'Toyota',
    modelo:'Corolla',
    forca: 200,
    ano:2014
}]

console.log(Array_Carro)

/*
    usando a técnica spread + o método map() para adiciobar uma nova propriedade, parâmetro

    O operador(...) é chamado de Spread, serve para espalhar os elementos de um array 
    (ou as propriedades de um objeto) em outro lugar — geralmente na criação de um novo 
    array
*/
const New_Array_Carro:Object[] = Array_Carro.map(carro =>({

    ...carro, // espalhando, clonando cada elemento do Array_Carro
    pais_fundacao:'Japão' // Adicionando a cada elemento essa propriedade
}));

// Isso cria um novo array onde cada carro agora tem a propriedade pais_fundacao.
console.log(New_Array_Carro);

/*

Qual usar?
    Seu código atual é ideal para adicionar um novo item ao array.

    Use map se quiser modificar cada item existente do array.

*/



/* 

    USANDO A TÉCNICA DESTRUTURAÇÃO

    A desestruturação é usada para extrair valores de arrays ou objetos e armazená-los
    diretamente em variáveis.

    
    ➤ Quando usar destruturação?

    - Quando você precisa acessar elementos ou propriedades específicas de arrays ou objetos.
    - Quando quer extrair rapidamente o primeiro item de um array e separar o restante.
    - Quando está trabalhando com funções que recebem objetos como parâmetros.


*/


interface Cavalo{
    raca:string,
    velocidade_max:number,
    forca?: string | number
}

const Array_Cavalo:Cavalo[] = [
    {

        raca:'Puro Sangue',
        velocidade_max:45,
        forca:50    
    },
    {
        raca:'Cavalo Arábe',
        velocidade_max:50,
    },
    {
        raca:'Pé de Pano',
        velocidade_max:100,
        forca: 300
    }
]


// Extreindo valores com estruturação

const [primeiro_item,...objetos_restantes]:Object[] = Array_Cavalo

console.log(primeiro_item) // variável armazena o primeior objeto do Array_Cavalo

console.log() // quebra de linha

console.log(objetos_restantes)


// DESESTRUTURAÇÃO DE OBJETO - TAMBÉM É POSSÍVEL

// Exemplo prático: extrair propriedades específicas do primeiro cavalo
const { raca, velocidade_max, forca } = primeiro_item;

console.log(); // Quebra de linha

console.log("Desestruturação de objeto:");
console.log(`Raça: ${raca}, Velocidade: ${velocidade_max}, Força: ${forca}`);


/*

    RESUMÃO PRÁTICO DAS TÉCNICAS SPREAD E DESTRUTURAÇÃO:

    +----------------------------------------+-------------------+------------------------------------------------------------+
    | Caso de uso                            | Tipo de Spread     | Exemplo                                                    |
    +----------------------------------------+-------------------+------------------------------------------------------------+
    | Copiar um array                        | Array              | const copia = [...original];                              |
    | Concatenar arrays                      | Array              | const novo = [...arr1, ...arr2];                          |
    | Adicionar item no início ou fim        | Array              | const novo = [...arr, novoItem];                          |
    | Clonar objeto                          | Objeto             | const clone = { ...original };                            |
    | Mesclar objetos                        | Objeto             | const combinado = { ...obj1, ...obj2 };                   |
    | Sobrescrever propriedades              | Objeto             | const novo = { ...obj, propriedade: novoValor };          |
    | Passar argumentos para função (array)  | Array              | funcao(...args);                                          |
    +----------------------------------------+-------------------+------------------------------------------------------------+

    +-------------------------------+------------------------+----------------------------------------------------+
    | Caso de uso                   | Tipo de Desestruturação| Exemplo                                            |
    +-------------------------------+------------------------+----------------------------------------------------+
    | Pegar o primeiro item do array| Array                  | const [a, ...rest] = array;                        |
    | Extrair dados de objeto       | Objeto                 | const {nome, idade} = pessoa;                      |
    | Argumentos de função          | Objeto                 | function exibe({ nome }) { ... }                  |
    | Renomear variáveis            | Objeto                 | const { nome: apelido } = pessoa;                 |
    | Atribuir valores padrão       | Objeto ou Array        | const { idade = 18 } = pessoa;                    |
    +-------------------------------+------------------------+----------------------------------------------------+

*/