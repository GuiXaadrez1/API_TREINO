// Retorne um novo array com todos os nomes em letras maiúsculas
const nomes: string[] = ["ana", "joão", "maria"];


// Usando o método map para retornar um array de strings com os nomes em letras maiúsculas
const nomesConvertidos: string[] = nomes.map((nome) => {return  nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();});

console.log('Array convertendo a primiera letra dos nomes para maiúsculo: ', nomesConvertidos);

// Usando o for 

const nomesConvertidos2: string[] = [];

for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i]; // fazendo slicing.. puxando pelo índicie... o i no for na verdade é o indicie
    const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    nomesConvertidos2.push(nomeFormatado);
}
 console.log('Array de nome com a primeira Letra Maiusucla usando o for: ',nomesConvertidos2);