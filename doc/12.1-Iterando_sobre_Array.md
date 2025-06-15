# Interando (usando for) sobre um Array

1. for clássico (com índice)

    const numeros = [10, 20, 30];

    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

    Uso: Quando você precisa do índice ou quer controle absoluto sobre o loop.

2. for...of (valores)

    const nomes = ["Ana", "Bruno", "Carlos"];

    for (const nome of nomes) {
        console.log(nome);
    }

    Uso: Quando você quer iterar apenas pelos valores. Mais legível que o for tradicional.


3. for...in (índices)

    const cores = ["azul", "verde", "vermelho"];

    for (const i in cores) {
    console.log(`${i}: ${cores[i]}`);
    }

   Uso: Retorna os índices. Útil se você precisa do índice como string (cuidado: não use para objetos com prototype alterado). 

4. forEach (função callback)

    const itens = ["maçã", "banana", "laranja"];

    itens.forEach((item, index) => {
        console.log(`${index}: ${item}`);
    });

    Uso: Muito usado para percorrer e executar lógica em cada item. Não pode usar break ou continue.

5. map() (transformar e retornar novo array)

    const numeros = [1, 2, 3];

    const dobrados = numeros.map(n => n * 2);
    console.log(dobrados); // [2, 4, 6]

    Uso: Quando você quer transformar cada item e gerar um novo array com o resultado.

6. Dica bônus: usar com filter, reduce, etc.

    const valores = [5, 10, 15];

    const soma = valores.reduce((acumulador, valor) => acumulador + valor, 0);
    console.log(soma); // 30
