-- CreateTable
CREATE TABLE "Gift" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "Gift_pkey" PRIMARY KEY ("id")
);
