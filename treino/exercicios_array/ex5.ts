// Retorne o primeiro número maior que 50 ou undefined
const lista: number[] = [15, 22, 80, 10];

// usando o método some para isso!
const constListaFiltrada = lista.find( (numero) => { return numero > 50 });

// console.log(typeof(constListaFiltrada));

console.log("O primeiro número acima de 50 é: ", constListaFiltrada);