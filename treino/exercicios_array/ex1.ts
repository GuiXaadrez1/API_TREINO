/*   Some números de um Array 
    // Some todos os valores do array e retorne o resultado

*/


// usando o método .reduce, usa-se uma função callback que retorna um único acumulado.
const numeros: number[] = [10, 20, 30, 40];

const soma:number = numeros.reduce((somador,valorsomado) => somador + valorsomado ,0);

console.log("A soma é:", soma);

// utilizando o for
let somar: number = 0;  
for( let i:number = 0; i < numeros.length; i++){

    somar += numeros[i];
};
console.log(`O valor da soma utilizando for é: ${somar}`)

