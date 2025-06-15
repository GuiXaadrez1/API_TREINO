
# O que é um Arquivo.json?

    É uma formatação utilizada para estruturar dados em formato de texto e transmiti-los de um sistema para outro, como em aplicações cliente-servidor ou em aplicativos móveis.
    O ou seja, com ele formamos nossa API (INTERFACE PROGRAMING APPLICATION).

    Na prática, .json é um arquivo que contém uma série de dados estruturados em formato texto e é utilizado para transferir informações entre sistemas. É importante dizer que, apesar de sua origem ser por meio da linguagem JavaScript, JSON não é uma linguagem de programação.

    Em vez disso, é uma notação para a transferência de dados que segue um padrão específico. Por isso, pode ser amplamente utilizada em diferentes linguagens de programação e sistemas.

    Os dados contidos em um arquivo no formato JSON devem ser estruturados por meio de uma coleção de pares com nome e valor ou ser uma lista ordenada de valores. Seus elementos devem conter:

        chave: corresponde ao identificador do conteúdo. Por isso, deve ser uma string delimitada por aspas;
    
        valor: representa o conteúdo correspondente e pode conter os seguintes tipos de dados: string, array, object, number, boolean ou null.

# O JSON é um Array de Objetos?

Não necessariamente. JSON (JavaScript Object Notation) é um formato de dados baseado em texto que pode representar:

    Um objeto – delimitado por {}:

    {
        "nome": "João",
        "idade": 30
    }
    
    Um array – delimitado por []:

        ["banana", "maçã", "uva"]
    
    Um array de objetos – que é uma forma muito comum de JSON, mas não obrigatória:

        [
        { "id": 1, "nome": "Maria" },
        { "id": 2, "nome": "Pedro" }
        ]

    Tipos primitivos isolados – como strings, números, booleanos ou null:

        "texto simples"
        42
        true
        null
            
    Ou seja, JSON é um formato, e esse formato pode conter arrays, objetos, valores primitivos, ou combinações disso. Um JSON válido pode ser um objeto, um array, ou até mesmo apenas um número.