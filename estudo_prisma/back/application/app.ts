// Arquivo principal da aplicação (camada application)

import express,{Express,Request,Response} from 'express';
import dotev from 'dotenv';
import cors from 'cors';

// Inicializa as variáveis de ambiente definidas no arquivo .env
dotev.config();

// Cria a instância principal do Express, basicamente é um objeto
const app:Express = express();

// Define a porta lógica que o servidor irá escutar
const PORT = parseInt(process.env.PORT || '8080'); // Converte de string para number


// Configura o CORS para permitir requisições apenas da origem especificada
app.use(cors({
  origin: 'http://localhost:8080', // permite apenas essa origem
  methods: ['GET', 'POST'],        // permite apenas esses métodos
  credentials: true                // permite cookies/autenticação
}));

/*
  Alternativa para desenvolvimento (libera todas as origens).
  ⚠️ Não recomendado para produção.
  
  app.use(cors());
*/

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());

// Rota padrão para teste de funcionamento do servidor
app.get('/raiz',(req:Request,res:Response):void =>{

    if(res.status(200)){
        res.json({menssagem:'Esse é o nosso diretório raiz'})
    };
});

// Inicia o servidor e escuta a porta definida
app.listen(PORT,():void =>{
    try {
        console.log(`Servidor executando e escutando na porta: ${PORT}`);
    } catch (error: unknown) {
        console.error(`Erro ao iniciar o servidor na porta ${PORT}:`, error);
        throw new Error(`Falha crítica ao escutar a porta ${PORT}: ${(error as Error).message}`);
    }
});
