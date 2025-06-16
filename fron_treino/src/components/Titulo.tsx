// importando o nosso JSX do react para elementos
import { JSX } from "react";

// importando nossas imagens
import grafico from '../assets/imgem_ale.png'
import pikachu from '../assets//Pokemon.png'


// importando o nosso estilizador ao qual podemos colocar css embutido em componetes
import styled from "styled-components";

/* 
    Outra forma de criar componentes: ao invés de usar funções com `function nome()`,
    podemos fazer uma Arrow Function, que é uma função mais enxuta kkk

    Vamos fazer um componente dinâmico. Pode ser utilizando arrow function ou
    utilizando a function padrão mesmo. O importante é fazer dar certo. Porém,
    desta vez eu vou optar por fazer com arrow function.

    Como vai ser dinâmico, fica uma breve explicação: 
    Basicamente vamos passar um valor (parâmetro) para o nosso arrow function,
    e esse valor será consumido pelo bloco de código retornado pelo arrow function,
    ou seja, o bloco de código depois da setinha =>{...}
*/

/*
    Criando uma interface (quase a mesma coisa do type) para
    realizar a Tipagem correta para os parâmetros do componente:

 */

interface TituloProps {
  imagem?: string;               // Caminho da imagem (pode ser local ou URL externa)
  children?: React.ReactNode;    // Conteúdo inserido dentro da tag <Titulo>...</Titulo>
}
// Lembrando que ? significa que o parâmetro admite Nan ou underfind
// ou seja não é obrigatório colocar

interface IImagens {

    pikachu: string,
    grafico: string,
}


// Criando Componente span estilizado

const SpanEstilizado = styled.span<TituloProps>`

    background-repeat: no-repeat;
    background-position:center;
    background-size: cover;
    width: 25 px;
    height: 25px;
    background-image ${Titulopros =>Titulopros.imagem? `url(${Titulopros.imagem})`: 'none'}

`

// Criando Componente Título Estilizado

const TituloEstilizado = styled.h2`
    color: #FFA500;
`

// Criando Componente Conteiner Estilizado

const ConteinerEstilizado = styled.div`

    background-color: #000;
    display: flex;
    align-items: center 
`


// Componente funcional com arrow function
const Titulo = ({ imagem, children}: TituloProps): JSX.Element => {

    const ListaImagens: IImagens = {
        pikachu:pikachu,
        grafico: grafico
    }

    return (
        <ConteinerEstilizado>
            {imagem && <SpanEstilizado imagem={ListaImagens[imagem as keyof IImagens]}/>}
            <TituloEstilizado>{children}</TituloEstilizado>
        </ConteinerEstilizado>
  );
};

export default Titulo;

/* 
    Lembrando: Podemo retronar do JSX.Elemnt um HTML tranquilo, porém é interessante usar
    todo o poder do React para a construção de components
*/


/*
    
RELATÓRIO DETALHADO DESTE CÓDIGO:


1–3. Importações essenciais

import { JSX } from "react";

Importa o tipo JSX do React, usado para tipar corretamente componentes que retornam 
elementos JSX.

import grafico from '../assets/imgem_ale.png';
import pikachu from '../assets//Pokemon.png';

Importa duas imagens locais do projeto para uso no componente. 
Cada importação atribui um caminho de imagem a uma variável.

import styled from "styled-components";
Importa a função styled da biblioteca styled-components, que permite criar componentes com estilos CSS encapsulados, diretamente no JavaScript/TypeScript.

7–15. Tipagem com Interface

interface TituloProps {
  imagem?: string;
  children?: React.ReactNode;
}

Define a interface TituloProps, que representa os tipos esperados das props do 
componente Titulo.

imagem?: string indica que o prop imagem é opcional e deve ser uma string 
(ex: nome da imagem).

children?: React.ReactNode também é opcional e representa o conteúdo JSX que será inserido 
dentro do componente.

interface IImagens {
  pikachu: string;
  grafico: string;
}

Define a interface IImagens usada para mapear as imagens importadas para uso dinâmico
no componente.

18–25. Componente estilizado: Span

const SpanEstilizado = styled.span<TituloProps>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  withh: 25 px;
  height: 25px;
  background-image: ${Titulopros => Titulopros.imagem ? `url(${Titulopros.imagem})` : 'none'}
`;

Cria um componente span estilizado com base nas props de TituloProps.

Define um background-image condicional baseado na prop imagem. Se a imagem for passada,
aplica a URL, senão define como none.


27–29. Componente estilizado: Título

const TituloEstilizado = styled.h2`
  color: #FFA500;
`;

Define um título h2 estilizado com a cor laranja (#FFA500).

31–34. Componente estilizado: Container

const ConteinerEstilizado = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
`;

Define um div container com fundo preto e alinhamento horizontal com centralização
vertical.

37–47. Componente principal: Titulo

const Titulo = ({ imagem, children }: TituloProps): JSX.Element => {
Componente funcional Titulo, usando arrow function e tipagem explícita de props.

Editar
  const ListaImagens: IImagens = {
    pikachu: pikachu,
    grafico: grafico
  };

Cria um objeto ListaImagens que associa nomes simbólicos (pikachu, grafico) às imagens
importadas.

return (
    <ConteinerEstilizado>
      {imagem && <SpanEstilizado imagem={ListaImagens[imagem as keyof IImagens]} />}
      <TituloEstilizado>{children}</TituloEstilizado>
    </ConteinerEstilizado>
  );
};

Estrutura JSX que define o retorno visual do componente.

Se imagem estiver definida, exibe o SpanEstilizado com a imagem correspondente do objeto
ListaImagens.

O conteúdo (children) é exibido dentro do h2.

49. Exportação padrão

export default Titulo;

Exporta o componente Titulo como exportação padrão, permitindo sua importação por
outros arquivos com:

import Titulo from './caminho/Titulo';
    
*/