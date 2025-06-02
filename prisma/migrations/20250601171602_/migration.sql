-- CreateTable
CREATE TABLE "autor" (
    "idautor" SERIAL NOT NULL,
    "nome" VARCHAR(50),

    CONSTRAINT "autor_pkey" PRIMARY KEY ("idautor")
);

-- CreateTable
CREATE TABLE "livro" (
    "idlivro" SERIAL NOT NULL,
    "idautor" INTEGER NOT NULL,
    "titulo" VARCHAR(50),

    CONSTRAINT "livro_pkey" PRIMARY KEY ("idlivro")
);

-- AddForeignKey
ALTER TABLE "livro" ADD CONSTRAINT "livro_idautor_fkey" FOREIGN KEY ("idautor") REFERENCES "autor"("idautor") ON DELETE NO ACTION ON UPDATE NO ACTION;
