/* Apartir de agora essa será nossa aplicação principal no express */

import express,{Express} from "express";
import way from "../treino/routes_express";

const app:Express = express();

// middleware que configura o nosso servidor expressa para aceitar requisições JSON
app.use(express.json())

// Configurando o express para resceber os nossos caminhos/routes que eu chamei de way
app.use(way) 

// configurando a porta para o servidor escutar requisições nas rotas
const PORT = 5065


// colocando o servidor express para capturar eventos, no caso requisições
app.listen(5065,():void=>{

    console.log('Servidor escutando na porta lógica: 5065')

})