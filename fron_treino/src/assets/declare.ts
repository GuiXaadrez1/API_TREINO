/*
    O TypeScript, por padrão, não entende arquivos de imagem (como .png) como módulos
    válidos. Para resolver isso, você precisa criar um declaration file.


    Ou seja Por padrão, o typescript não suporta ou reconhe arquivos de imagem para isso
    devemos criar um código que faça ele reconhecer esse tipo de arquivo

*/

// Criamos um arquivo typescript que reconhe imagens png, jpg, jpeg, svg

// declarando modulo e exportando o valor do módulo como uma string por padrão
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}


/*

    O declare module no TypeScript serve para informar ao compilador sobre a existência
    e estrutura de módulos que ele não conhece por padrão, como arquivos de imagem 
    (.png, .svg, etc.) ou bibliotecas sem tipos.

    Ele diz:
        
     " Qualquer arquivo com as extensões acima que for importado deve ser tratado como
        uma string "

*/