-- Active: 1749757574490@@127.0.0.1@5432@petagenda
-- Criando Tabela Cliente
CREATE TABLE cliente(

    idcliente INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    dthinsert TIMESTAMP DEFAULT NOW(),
    dthdelete TIMESTAMP CHECK(dthdelete >= datainsert OR dthdelete IS NULL),
    statusdelete BOOLEAN DEFAULT FALSE -- PARA DELETE LÓGICO

);

CREATE TABLE pet(

    idpet INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    idcliente INTEGER NULL, -- Vamos deixar NULL ABLE
    nomepet VARCHAR(255),
    FOREIGN KEY idcliente REFERENCES cliente(idcliente)    
);

-- Criando Tabela Admin 

CREATE TABLE admin(

    idadmin INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR (255) NOT NULL , 
    telefone VARCHAR(20) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Criando tabelasolicitação agendamento
CREATE TABLE soliagenda(
    idsoli INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    idcliente INT NOT NULL,
    dtsoli DATE DEFAULT CURRENT_DATE,
    idadmin INTEGER, -- VOU VOU DEIXAR NULL ABLE
    confirmsoli BOOLEAN, -- QUEM CONFIRMA A SOLICITAÇÃO É O ADMIN
    descricao VARCHAR(255),-- Descrição feita pelo admin após o mesmo não confirmar a solicitação
    
    CHECK(confirmsoli = FALSE OR descricao IS NOT NULL),
    
    FOREIGN KEY (idadmin) REFERENCES admin(idadmin),
    FOREIGN KEY (idcliente) REFERENCES cliente(idcliente)



);

-- Criando tabela agenda
CREATE TABLE agenda(

    idagenda INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    idsoli INT,
    diasemana VARCHAR(15),
    dthagenda TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(idsoli) REFERENCES soliagenda(idsoli)

);

/*

DROP TABLE cliente;
DROP TABLE admin;
DROP TABLE soliagenda;
DROP TABLE agenda;


-- FAZENDO DELETE BÁSICO

DELETE FROM cliente;

DELETE FROM admin;

DELETE FROM soliagenda;

DELETE FROM agenda;

*/
