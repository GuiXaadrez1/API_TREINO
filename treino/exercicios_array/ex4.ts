import { todo } from "node:test";

// Retorne true se todos forem positivos
const numeros: number[] = [5, 10, -2, 8];


// Usando o método Every

const  validador: boolean = numeros.every((numero)=>{

    try{

        if(numero > 0 ){
            return true;
        }else{
            return false;
        };
    }catch(e){
        console.log('Aconteceu alguma cagada aqui: ', e);
    };
});

console.log('O resultado é: ', validador, 'Porque não são todos os números que são positivos.');

// Usando for

let todosPositivos:boolean = true;

for (let i:number = 0; i < numeros.length; i++){

    if(numeros[i] < 0 ){
        todosPositivos = false;
        break;
    }
};

console.log("Agora usando o for para isso: ", todosPositivos);