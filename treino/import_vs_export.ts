// O objetivo é entender como funciona a exportação e importação de módulos, pacotes e classes

import { defaultMaxListeners } from 'events';
import express,{Express,Request,Response} from 'express';


const server_express1:Express = express(); 

// a função require faz a mesma coisa que o import basicamente

// const server_express2:Express = require('express')

//const server_express3 = require('express')


// colocando o express para rodar na porta 8080
server_express1.listen(8080,():void => {

    console.log('Server rodando na porta: 8080')
})


/*


    Ambos os códigos fazem a importação de módulos para um arquivo.
    Estes módulos podem vir de uma biblioteca externa (como express)
    ou de outros módulos desenvolvidos internamente no projeto.

*/


// criando um tipo de dado específico para testes
type Dados = {

    d1:number,
    d2?:string,
    d3:boolean

}

// criando um objetos com aquele tipo de dado específico
const data:Dados = {d1:10,d2:'arroz',d3:true}

// exportando dados
export default data;