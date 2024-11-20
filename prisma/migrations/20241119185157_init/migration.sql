/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Gift` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gift" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL
);
INSERT INTO "new_Gift" ("id", "image", "nome", "quantidade") SELECT "id", "image", "nome", "quantidade" FROM "Gift";
DROP TABLE "Gift";
ALTER TABLE "new_Gift" RENAME TO "Gift";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
