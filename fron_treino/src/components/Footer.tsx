
import { JSX } from 'react';
import styled from 'styled-components';

//import instagram from '../assets/instagram.png
//import facebook from '../assests/facebook.png


const FooterEstilizado = styled.footer`

  height: 100%;
  color: #0000FF;
  padding: 1em;
  background-color: #6495ED;
  text-align:center;
`

const ListaEstilizada = styled.ul`

  display: flex;
  justify-content: space-around;
  width:10%;
  margin: 1em auto;

`

const ItemEstilizado = styled.li`
  list-style-type:none;
`

// Tipagem: logos agora é obrigatório e um array de strings
interface LogosProps {
  logos?: string[];
}

const Footer = ({ logos }: LogosProps): JSX.Element => {
  return (
    <FooterEstilizado>
      <ListaEstilizada>
        {logos?.map((logo, index) => (
          <ItemEstilizado key={index}>
            <a href="#">
              <img src={logo} alt={`imagem da rede social ${index + 1}`} />
            </a>
          </ItemEstilizado>
        ))}
      </ListaEstilizada>
      <p>Mermão eu to tentando entender essa bagaceira aqui!</p>
    </FooterEstilizado>
  );
};

export default Footer;


/* 
    FORMA MAIS FÁCIL DE FAZER ISSO DINÂMIZADO SEM USAR ARRAY:

      Para inserir mais informações sobre redes sociais você vai, primeiro, precisar 
      importar as imagens delas:

      import whatsapp from './assets/whatsapp.png';
      import instagram from './assets/instagram.png';
      import google from './assets/google.png';Copiar código

        Depois, vai inserir o componente <ItemEstilizado> para substituir o elemento <li>
        e, dentro dele, inserir uma âncora para a rede social. Dentro dessa âncora, 
        vai a imagem referente a logo da rede social em específico.

      Faça isso para cada uma delas e chegue no resultado:

        <ItemEstilizado>
          <a href="#">
            <img src={whatsapp} alt="logo do whatsapp" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={google} alt="logo do google" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
            <a href="#">
                <img src={instagram} alt="logo do instagram" />
            </a>
        </ItemEstilizado>

      Basicamente: Você faria como se estivesse fazendo no HTML5 ou 4

*/



/*
  

RELATÓRIO DE COMO FUNCIONA O CÓDIGO DINÂMISADO COM ARRAY


🔍 EXPLICAÇÃO LINHA POR LINHA

import { JSX } from 'react';
import styled from 'styled-components';

  → Importamos o styled-components, uma biblioteca que permite criar componentes com
  estilo (CSS) embutido diretamente no JS/TS.

📦 COMPONENTES ESTILIZADOS

  const FooterEstilizado = styled.footer`
    height: 100%;
    color: #0000FF;
    padding: 1em;
    background-color: #6495ED;
    text-align:center;
  `
  → Criamos um componente estilizado com base em <footer> (rodapé HTML). 
  Esse estilo é aplicado apenas nesse componente.

  const ListaEstilizada = styled.ul`
    display: flex;
    justify-content: space-around;
    width:10%;
    margin: 1em auto;
  `
  → Componente baseado em <ul>. Os itens da lista ficam dispostos lado a lado (flex) e 
  espaçados igualmente.

  const ItemEstilizado = styled.li`
    list-style-type: none;
  `
  → Componente baseado em <li>. Removemos os marcadores de lista (bolinhas).

🔡 INTERFACE

  interface LogosProps {
      logos?: string[]; // Array de caminhos de imagens (ex: ['/logo1.png', '/logo2.png'])
    }
  
  → Definimos a interface LogosProps. O ? indica que a prop logos é opcional. 
  Se não for passada, não dá erro.


🧠 FUNÇÃO DO COMPONENTE Footer

  
  const Footer = ({ logos }: LogosProps): JSX.Element => {

  → Criamos o componente Footer, que espera um array de logos como props. 
  Ele retorna JSX (um bloco visual do React).

🧭 AQUI VEM O MAP()

  {logos?.map((logo, index) => (

🔹 logos?.map(...)
  
  → Se logos existir (não for undefined), executamos o .map().
  
  → O .map() é usado para iterar sobre cada item do array logos e retornar um novo array 
  de JSX. Cada imagem gera um item da lista.

🔹 (logo, index)
  
  → logo: representa o valor atual do array (ex: caminho da imagem).
  → index: representa a posição atual no array (0, 1, 2...).

🔹 key={index}
    
    → A key é obrigatória quando usamos .map() em elementos JSX.
    
    → O React usa essa key para rastrear e identificar os elementos na renderização, 
    especialmente em atualizações.
    
    → Aqui usamos o index como key por ser simples, mas o ideal em apps reais é usar uma
    id única (se disponível), para evitar problemas com reordenação de listas.

    <ItemEstilizado key={index}>
      <a href="#">
        <img src={logo} alt={`imagem da rede social ${index + 1}`} />
      </a>
    </ItemEstilizado>
    
    → Para cada imagem (logo), criamos um <li> estilizado.
    
    → Dentro dele, um <a> com o link (pode ser atualizado depois).

    → O <img> mostra a imagem da logo com um texto alternativo (alt) dinâmico com base
    no índice.

    <p>Mermão eu to tentando entender essa bagaceira aqui!</p>
    → Um parágrafo de teste que será exibido no rodapé.

  EXPORTAÇÃO
 
    export default Footer;
      → Exporta o componente para ser usado em outros arquivos, como no App.tsx.

  RESUMO DO map() NO JSX

    logos.map((logo, index) => (
      <ItemEstilizado key={index}>
        <img src={logo} alt={`imagem da rede social ${index + 1}`} />
      </ItemEstilizado>
    ));

    .map() serve para gerar JSX dinamicamente baseado em arrays.

    logo: o item do array em cada iteração.

    index: posição do item no array.

    key={index}: ajuda o React a manter o controle da lista renderizada.






















*/