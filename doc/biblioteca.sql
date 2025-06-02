/* 

    Vamos criar um banco de dados que simula uma biblioteca

    Teremos apenas duas entidades: autor e livro

    uma instância de autor se relaciona com (0,N) instância de livro

    uma instância de livro se relaciona com (1,1) instância de autor

    relacionamento: (1,1) <--> (0,N)

    a fk de autor no libro terá uma constraint UNIQUE

*/

/*CREATE DATABASE biblioteca2;*/

CREATE TABLE autor(

    idautor SERIAL PRIMARY KEY,
    nome VARCHAR(50)

);

CREATE TABLE livro (
    
    idlivro SERIAL PRIMARY KEY,
    idautor INT NOT NULL,
    titulo VARCHAR(50),
    FOREIGN KEY (idautor) REFERENCES autor(idautor)

);

-- DROP TABLE livro;
-- DROP TABLE autor;