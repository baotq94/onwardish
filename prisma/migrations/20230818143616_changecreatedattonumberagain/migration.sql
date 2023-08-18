/*
  Warnings:

  - Changed the type of `created_at` on the `comments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "created_at",
ADD COLUMN     "created_at" INTEGER NOT NULL;
