// Retorne apenas os números pares
const valores: number[] = [1, 2, 3, 4, 5, 6];


// USANDO O MÉTODO Filter

const numpares:number[] =  valores.filter((valor)=>valor%2 === 0)
console.log(`Retornando um array de numeros pares: `,numpares);

// USANDO FOR para isso:

const pares = []

for(let i:number = 0; i < valores.length; i++){

    if(valores[i] % 2 === 0){
        // utilizando o método push para adicionar o item ao final do array
        pares.push(valores[i])
    }
}

console.log('Array com pares utilizando for: ', pares);