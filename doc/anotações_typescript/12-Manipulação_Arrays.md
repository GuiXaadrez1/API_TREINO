# Introdução


# O que é um Array?

    Um array (ou vetor) é uma estrutura de dados linear usada para armazenar uma coleção ordenada de elementos, geralmente do mesmo tipo.

    É uma lista indexada onde cada item pode ser acessado por sua posição numérica (chamada de índice), começando em zero.


# Como declarar um Array em TypeScript?

    Lembre-se que typescript é tipado, ou seja, precisa de anotações de tipagem
    na hora de definir uma variável que irá comportar um array.

    1 - Forma Tradicional:

        const Array_Numérico: Array<number>= [1,2,3,4,5,6,7]

        *Observação: Criamos um array de números, só é admitido elementos com valor
        numérico/tipo number

    2 - Forma simples, não tradicional: 

        const Array_string: string[] = ['a','b','c']

        *Observação: Criamos um array de strings, só é admitido elementos com tipo string


# Tipos de Array:

    const Array_String:string[] = ['a','b','c']

    const Array_Number[] = [1,2,3,4,55,6]

    const Array_Boolean:Boolean[] = [true,false,false,true]

    // forma tradicional de criar um array de objetos
    const Array_Objeto:{nome:string, idade:number}[] = [
        {
            nome:'Guilherme Henrique',
            idade: 22
        },
        {
            nome:'Dara Rebeca Minha Vida',
            idade:22
        }
    ]

    
    // uma outra forma de criar um array de objetos utilizando o type

        type Pessoa = {
            nome: string,
            idade: number
        }

        obs.: o método type nos permite criar os nossos próprios tipos de dados

        const Array_Personalizado:Pessoa[] = [
            {
                nome:'Vicelendo',
                idade: 42  
            },{
                nome:'Isaque',
                idade: 21
            },{
                nome:'Joao Omatildo',
                idade: 32 
            }
        ]

# Tabela de métodos para manipulação de arrays
+------------------+------------------------------------------------+
| Método           | Descrição                                      |
+------------------+------------------------------------------------+
| push()           | Adiciona item(s) ao final                      |
| pop()            | Remove o último item                           |
| shift()          | Remove o primeiro item                         |
| unshift()        | Adiciona item(s) no início                     |
| map()            | Transforma cada item e retorna novo array      |
| filter()         | Filtra itens que passam em um teste            |
| reduce()         | Acumula os valores em um único resultado       |
| find()           | Retorna o 1º item que satisfaz a condição      |
| findIndex()      | Índice do 1º item que satisfaz a condição      |
| some()           | Verifica se ALGUM item passa no teste          |
| every()          | Verifica se TODOS os itens passam no teste     |
| includes()       | Verifica se contém determinado valor           |
| slice()          | Retorna fatia do array                         |
| splice()         | Remove/insere itens a partir de um índice      |
| concat()         | Junta arrays/valores em um novo array          |
| join()           | Junta os itens em uma string                   |
| reverse()        | Inverte a ordem dos itens                      |
| sort()           | Ordena os itens com base em uma função         |
+------------------+------------------------------------------------+
+-----------------------------+-----------------------------+
| Retorno                     | Modifica o Array Original   |
+-----------------------------+-----------------------------+
| Novo tamanho do array       | Sim                         |
| Item removido ou undefined  | Sim                         |
| Item removido ou undefined  | Sim                         |
| Novo tamanho do array       | Sim                         |
| Novo array transformado     | Não                         |
| Novo array com os filtrados | Não                         |
| Valor único acumulado       | Não                         |
| Item ou undefined           | Não                         |
| Índice ou -1                | Não                         |
| Boolean                     | Não                         |
| Boolean                     | Não                         |
| Boolean                     | Não                         |
| Novo array                  | Não                         |
| Itens removidos             | Sim                         |
| Novo array                  | Não                         |
| String                      | Não                         |
| Array invertido             | Sim                         |
| Array ordenado              | Sim                         |
+-----------------------------+-----------------------------+

# Como fazer manipulção de arrays?

    1 - Manipulação comum com: 

        .push(...items: T[]) = Adiciona um ou mais elementos ao final do arry

            Parâmetros: 

                Parâmetros: Um ou mais elementos a serem adicionados ao final do array.

                Retorno: O novo tamanho do array.

                Modifica o array original: Sim.

            Exemplo: 

                type Automovel = {

                    marca: string,
                    modelo: string,

                    \\ aqui o parâmetro força admite dois tipos e não é obrigatório
                    força?: number | string, 
                    
                    ano: number

                }

                const carro1:Automovel[] = [];

                carro1.push({marca:'Toyota',modelo:'Corolla',ano: 2014})                

        .pop(): T | undefined = Remove o último elemento do Array

            Parâmetros: Nenhum.

            Retorno: O último item do array ou undefined se o array estiver vazio.

            Modifica o array original: Sim.

            Exemplo:

                const Array_number:Array<number> = [1,2,3,4,5]

                Array_number.pop() // saida -> [1,2,3,4]


        .shift(): T | undefined = Remove o primeiro elemento do array e retorna ele.

            Parâmetros: Nenhum.

            Modifica o array original: Sim.

            Exemplo: 

                const Array_String:Array<string> = ['a','b','c']

                Array_String.shift() // ['b','c']

        .unshift(...items: T[]); = Adiciona um ou mais elementos no início do array.

            Parâmetros: Um ou mais itens a adicionar no início.

            Retorno: Novo tamanho do array.

            Modifica o array original: Sim.

            Exemplo: 

                const numeros: number[] = [2, 3];
                numeros.unshift(1); // [1, 2, 3]

        .map<U>(callback: (value: T, index: number, array: T[]) => U): U[] = Retorna um novo array com o resultado da função aplicada em cada elemento.

            Parâmetros:
                callback: função aplicada a cada elemento.

                value: o valor atual.

                index: o índice atual.

                array: o array original.

            Retorno: Um novo array com os valores transformados.

            Modifica o array original: Não

            Exemplo:

                type Automovel = {
                    marca: string;
                    modelo: string;
                    força?: number | string; // Propriedade opcional
                    ano: number;
                };

                onst carro1: Automovel[] = [];

                // Adicionando um carro ao array
                carro1.push({ marca: 'Toyota', modelo: 'Corolla', ano: 2014 });

                // Usando map para formatar a saída
                const descricaoCarros = carro1.map(carro => {
                    
                    return `Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}`;
                });

                console.log(descricaoCarros);

            O que acontece aqui:

                Adicionamos um objeto ao array carro1 usando .push().

                Usamos .map() para criar um novo array contendo descrições dos carros.

                Cada elemento do array é chamado de carro dentro da função.

                Exibimos o resultado no console.


        .filter(callback: (value: T, index: number, array: T[]) => boolean): T[] = Cria um novo array apenas com os elementos que passarem em um teste.

            Parâmetros: função que retorna true para manter o item.

            Retorno: Novo array com os elementos filtrados.

            Modifica o array original: Não.

            Exemplo:

                    type Automovel = {
                        marca: string;
                        modelo: string;
                        força?: number | string; // Propriedade opcional
                        ano: number;
                    };

                    const carro1: Automovel[] = [];

                    // Adicionando carros ao array
                    carro1.push({ marca: 'Toyota', modelo: 'Corolla', ano: 2014 });
                    carro1.push({ marca: 'Honda', modelo: 'Civic', ano: 2018 });
                    carro1.push({ marca: 'Ford', modelo: 'Mustang', ano: 2014 });

                    // Filtrando os carros do ano 2014
                    const carrosFiltrados = carro1.filter(carro => carro.ano === 2014);

                    console.log(carrosFiltrados);

            O que acontece aqui:

                dicionamos vários carros ao array.

                Usamos .filter() para criar um novo array contendo apenas os carros cujo ano seja 2014.

                Cada elemento do array é chamado de carro dentro da função.

                Exibimos os carros filtrados no console.


        .reduce<U>(callback: (acc: U, curr: T, index: number, array: T[]) => U, initialValue: U): U = Executa uma função acumuladora e retorna um único valor.

            Parâmetros:

                callback: função acumuladora.

                initialValue: valor inicial do acumulador.

            Retorno: Valor único acumulado.

            Modifica o array original: Não.

            Exemplo:

                const numeros = [10, 20, 30, 40];

                // Usando reduce para somar os valores
                const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

                console.log(soma); // Saída: 100

            O que aconteceu aqui: 

                O método .reduce() percorre o array numeros e acumula um único valor.

                acumulador começa em 0 (valor inicial).

                Para cada número no array, ele soma ao acumulador.

                No final, soma contém o total de todos os números.

        .find(callback: (value: T, index: number, array: T[]) => boolean): T | undefined = Retorna o primeiro elemento que satisfaz a condição.

            Parâmetros: função que testa cada item.

            Retorno: Primeiro item que satisfaz a condição ou undefined.

            Modifica o array original: Não

            Exemplo:

                type Automovel = {
                    marca: string;
                    modelo: string;
                    ano: number;
                };

                const carros: Automovel[] = [
                    { marca: 'Toyota', modelo: 'Corolla', ano: 2014 },
                    { marca: 'Honda', modelo: 'Civic', ano: 2018 },
                    { marca: 'Ford', modelo: 'Mustang', ano: 2020 }
                ];

            // Usando .find() para encontrar um carro Honda
            const carroEncontrado = carros.find(carro => carro.marca === 'Honda');

            console.log(carroEncontrado);

            O que aconteceu aqui:

                O .find() percorre o array carros.
                
                Cada elemento do array é chamado de carro dentro da função.

                A função verifica se carro.marca === 'Honda'.

                O primeiro item que corresponde é retornado (o Honda Civic).

                Se nenhum item corresponder, o retorno será undefined.

        .findIndex(callback: (value: T, index: number, array: T[]) => boolean): number = Retorna o índice do primeiro elemento que satisfaz a condição.

            Parâmetros: igual ao find.

            Retorno: Índice do primeiro item que passar no teste ou -1.

            Modifica o array original: Não.

            Exemplo:

                type Automovel = {
                    marca: string;
                    modelo: string;
                    ano: number;
                };

                const carros: Automovel[] = [
                    { marca: 'Toyota', modelo: 'Corolla', ano: 2014 },
                    { marca: 'Honda', modelo: 'Civic', ano: 2018 },
                    { marca: 'Ford', modelo: 'Mustang', ano: 2020 }
                ];

                // Usando .findIndex() para encontrar a posição do carro Honda
                const indiceCarro = carros.findIndex(carro => carro.marca === 'Honda');

                console.log(indiceCarro); // Saída: 1

            O que aconteceu aqui:

                .findIndex() percorre o array carros.
                
                Cada elemento do array é chamado de carro dentro da função.

                A função verifica se carro.marca === 'Honda'.

                Retorna o índice do primeiro elemento que corresponde à condição.

                Se nenhum item corresponder, o retorno será -1.


        .some(callback: (value: T, index: number, array: T[]) => boolean): boolean = Retorna true se pelo menos um elemento satisfaz a condição.

            Parâmetros: função de teste.

            Retorno: true se algum item passar.

            Modifica o array original: Não.

            Exemplo:

                type Automovel = {
                    marca: string;
                    modelo: string;
                    ano: number;
                };

                const carros: Automovel[] = [
                    { marca: 'Toyota', modelo: 'Corolla', ano: 2014 },
                    { marca: 'Honda', modelo: 'Civic', ano: 2018 },
                    { marca: 'Ford', modelo: 'Mustang', ano: 2020 }
                ];

                // Verificando se há algum carro do ano 2014
                const existeCarro2014 = carros.some(carro => carro.ano === 2014);

                console.log(existeCarro2014); // Saída: true

            O que aconteceu aqui: 

                O método .some() percorre o array carros.

                A função verifica se pelo menos um carro tem ano === 2014.

                Retorna true se encontrar ao menos um caso correspondente.

                Retorna false se nenhum carro atender ao critério.
        
        .every(callback: (value: T, index: number, array: T[]) => boolean): boolean = Retorna true se todos os elementos satisfazem a condição.

            Parâmetros: função de teste.

            Retorno: true se todos os itens passarem.

            Modifica o array original: Não.

            Exemplo:

                type Automovel = {
                    marca: string;
                    modelo: string;
                    ano: number;
                };

                const carros: Automovel[] = [
                    { marca: 'Toyota', modelo: 'Corolla', ano: 2014 },
                    { marca: 'Honda', modelo: 'Civic', ano: 2018 },
                    { marca: 'Ford', modelo: 'Mustang', ano: 2020 }
                ];

                // Verificando se todos os carros são do ano 2010 ou mais recentes
                const todosSaoNovos = carros.every(carro => carro.ano >= 2010);

                console.log(todosSaoNovos); // Saída: true

            O que aconteceu aqui:

                O método .every() percorre todos os elementos do array.

                A função verifica se todos os carros têm ano >= 2010.

                Se todos atenderem ao critério, retorna true.

                Se pelo menos um não atender ao critério, retorna false.


        .includes(element: T, fromIndex?: number): boolean = Verifica se o array contém um determinado valor.

            Parâmetros:

                element: valor a buscar.

                fromIndex (opcional): índice de início.
            
            Retorno: true se o elemento for encontrado.

            Modifica o array original: Não.

            Exemplo:

                const marcas = ['Toyota', 'Honda', 'Ford', 'Chevrolet'];

                // Verificando se "Honda" está no array
                const temHonda = marcas.includes('Honda');

                console.log(temHonda); // Saída: true

            O que aconteceu aqui:    

                .includes() verifica se o array contém o elemento especificado.

                Se o elemento for encontrado, retorna true.

                Se o elemento não estiver no array, retorna false.


        .slice(start?: number, end?: number): T[] = Retorna uma cópia parcial do array.

            Parâmetros:
                start: índice inicial.

                end: índice final (não incluído).

            Retorno: Novo array com os elementos do intervalo.

            Modifica o array original: Não.

            Exemplo:

                const numeros = [10, 20, 30, 40, 50];

                // Extraindo os elementos da posição 1 até 3 (não inclui o índice 3)
                const parteDoArray = numeros.slice(1, 3);

                console.log(parteDoArray); // Saída: [20, 30]

            O que aconteceu aqui:            

                .slice(start, end) copia uma parte do array.

                O primeiro parâmetro (start) indica onde começa a extração.

                O segundo parâmetro (end) indica onde termina, mas não inclui esse índice.

                O array original não é modificado, pois .slice() retorna um novo array.            


        .splice(start: number, deleteCount?: number, ...items: T[]): T[] = Adiciona, remove ou substitui elementos modificando o array original.

            Parâmetros:

                start: índice inicial para remoção/inserção.

                deleteCount: quantos elementos remover.

                items: elementos a adicionar.

            Retorno: Array com os itens removidos.

            Modifica o array original: Sim.

            Exemplo:

                const numeros = [10, 20, 30, 40, 50];

                // Removendo 2 elementos a partir do índice 1 e adicionando novos valores
                const removidos = numeros.splice(1, 2, 25, 35);

                console.log(numeros);  // Saída: [10, 25, 35, 40, 50]
                console.log(removidos); // Saída: [20, 30]

            O que aconteceu aqui:

                .splice(start, deleteCount, item1, item2, ...) altera o array original.

                O primeiro parâmetro (start) define onde a modificação começa.

                O segundo parâmetro (deleteCount) indica quantos elementos serão removidos.

                Os demais parâmetros (item1, item2, ...) são valores a serem adicionados no local onde os elementos foram removidos.

                Retorna os elementos removidos e modifica o array original.

        .concat(...items: (T | T[])[]): T[] = Retorna um novo array resultado da concatenação.

            Parâmetros: um ou mais arrays ou valores.

            Retorno: Novo array resultante da concatenação.

            Modifica o array original: Não.

            Exemplo:

                const numeros1 = [1, 2, 3];
                const numeros2 = [4, 5, 6];

                // Concatenando os dois arrays
                const numerosCombinados = numeros1.concat(numeros2);

                console.log(numerosCombinados); // Saída: [1, 2, 3, 4, 5, 6]

            O que aconteceu aqui:

                .concat() não modifica os arrays originais.

                Ele cria um novo array, combinando os valores de numeros1 e numeros2.

                Você pode concatenar mais de dois arrays se necessá


        .join(separator?: string): string = Une os elementos do array em uma string, com separador definido.

            Parâmetros: separador entre os elementos (default: ,).

            Retorno: String com os elementos unidos.

            Modifica o array original: Não.

            Exemplo:

                const palavras = ['Olá', 'mundo', 'TypeScript'];

                // Unindo as palavras com um espaço entre elas
                const frase = palavras.join(' ');

                console.log(frase); // Saída: "Olá mundo TypeScript"

            O que aconteceu aqui:

                .join(separador) pega todos os elementos do array e os une em uma string.

                O parâmetro separador define o que será colocado entre os elementos (exemplo: espaço ' ').

                Se nenhum separador for definido, o padrão será uma vírgula (',').

        .reverse(): T[] = Inverte os elementos do array.

            Parâmetros: Nenhum.

            Retorno: Array invertido (o próprio array original é invertido).

            Modifica o array original:  Sim.

            Exemplo:

                const numeros = [1, 2, 3, 4, 5];

                // Invertendo o array
                const numerosInvertidos = numeros.reverse();

                console.log(numerosInvertidos); // Saída: [5, 4, 3, 2, 1]

            O que aconteceu:

                O método .reverse() modifica o array original, invertendo a ordem dos elementos.

                Ele também retorna o array invertido, caso queira armazená-lo em uma variável separada.

        .sort(compareFn?: (a: T, b: T) => number): T[] = Ordena os elementos do array.

            Parâmetros:

                compareFn: função de comparação que retorna:

                valor < 0 se a deve vir antes de b

                0 se a e b são equivalentes

                valor > 0 se a deve vir depois de b

            Retorno: Array ordenado (modifica o original).

            Modifica o array original: Sim.

            Exemplo:

                const numeros = [5, 2, 8, 1, 4];

                // Ordenando em ordem crescente
                const numerosOrdenados = numeros.sort((a, b) => a - b);

                console.log(numerosOrdenados); // Saída: [1, 2, 4, 5, 8]

            O que está acontecendo aqui:

                .sort() ordena os elementos do array.

                Por padrão, ele ordena como strings. Então, para números, usamos (a, b) => a - b para garantir a ordem correta.

                O array é modificado diretamente, mas também podemos armazená-lo em uma nova variável.


# Spread a destruturação

    O que é o Spread?

        O operador spread (...) serve para espalhar os elementos de um array (ou as propriedades de um objeto) em outro lugar — geralmente na criação de um novo array, na passagem de parâmetros, ou na clonagem.

        Exemplo básico:

            const numeros = [1, 2, 3];
            
            // usando spreed
            const outros = [...numeros, 10];
            
            console.log(outros); // [1, 2, 3, 10]
            
            Explicação:

                O ...numeros espalha os elementos do array numeros.

                Depois, adicionamos o 10 no final.

                O array outros contém uma cópia dos elementos + o novo valor.

        Exemplo com objetos:


            const usuario = { nome: "Ana", idade: 25 };
            const usuarioAtualizado = { ...usuario, cidade: "SP" };

            console.log(usuarioAtualizado); // { nome: "Ana", idade: 25, cidade: "SP" }

            Explicação:

                O ...usuario espalha as propriedades do objeto.

                A propriedade cidade é adicionada.

                Você também pode sobrescrever valores assim:

                    const novo = { ...usuario, idade: 30 };

        Spread em função:

            function soma(a: number, b: number, c: number) {
                return a + b + c;
            }

            const valores = [1, 2, 3];
            console.log(soma(...valores)); // 6

            Explicação:

                O ...valores espalha os elementos do array como parâmetros da função soma.


    O que é destruturação ([] ou {})?

        A desestruturação é usada para extrair valores de arrays ou objetos e armazená-los diretamente em variáveis.

        Destruturação de arrays:
            
            const numeros = [0, 2, 3];

            const [primeiro, ...resto] = numeros;

            console.log(primeiro); // 0
            console.log(resto);    // [2, 3]

            Explicação:

                primeiro pega o primeiro valor (índice 0).

                ...resto agrupa o restante dos valores em um novo array.

        Pular elementos:

            const valores = [10, 20, 30];

            const [, segundo] = valores;
            console.log(segundo); // 20

            Explicação:

                O valor 10 é ignorado, segundo pega o 20.

        Desestruturação de objetos:

            const produto = {
                nome: "Celular",
                preco: 1200,
                estoque: 10
            };

            const { nome, preco } = produto;
            
            console.log(nome); // Celular
            console.log(preco); // 1200
        
        Renomeando variáveis:

            const pessoa = {
                nome: "Carlos",
                idade: 30
            };

            const { nome: nomePessoa, idade } = pessoa;
            console.log(nomePessoa); // Carlos

        Parâmetros com desestruturação:

            function exibirUsuario({ nome, idade }: { nome: string, idade: number }) {
                console.log(`${nome} tem ${idade} anos`);
            }

            exibirUsuario({ nome: "Julia", idade: 22 });

    Dica prática
        
        Você pode combinar spread com desestruturação:

            const [a, ...resto] = [1, 2, 3, 4];
            const novoArray = [...resto, 5];
            console.log(novoArray); // [2, 3, 4, 5]
