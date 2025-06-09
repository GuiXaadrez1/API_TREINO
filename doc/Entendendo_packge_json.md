INFORMAÇÕES SOBRE CADA PARÂMETRO A RESPEITO DO PACKAGE.JSON!

    LEMBRE-SE: É utilizado como arquivo manifesto, centralizando todas as informações necessárias para entender os componentes de um projeto,

    name: é onde se define o nome pelo qual seu módulo será chamado.
    
    version: versão atual do módulo. O NPM utiliza o chamado versionamento semântico (SemVer). Você pode saber mais sobre versionamento e como ele é utilizado neste artigo.
    
    description: define o que será este módulo. É ideal que seja uma descrição curta e clara sobre o objetivo principal.
    
    main: define o ponto de entrada da aplicação.
    
    scripts: essa sessão tem alguns scripts pré-definidos, mas você também pode definir os seus personalizados. Leia sobre scripts no npm Docs ter mais informações.
    
    keywords: é um array de palavras-chave sobre o projeto.
    
    author: são dados de autoria, podendo conter nome, e-mail, site etc.
    
    license: é a licença escolhida para o projeto. Existem diversas opções de licenças, caso tenha curiosidade você pode conferir a lista completa de licenças no site do SPDX.
    
    dependencies: define a lista de pacotes necessários para executar seu projeto num ambiente de produção.
    
    devDependencies: define a lista de pacotes necessários para executar o projeto em um ambiente de desenvolvimento e testes. Existem outras configurações que podem existir nesse arquivo, como repositório do Git, homepage, peerDependencies, entre outras que podem ser visualizadas na documentação oficial do NPM.