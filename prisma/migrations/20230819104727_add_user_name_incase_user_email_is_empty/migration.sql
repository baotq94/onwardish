/*
  Warnings:

  - Added the required column `user_name` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "user_name" VARCHAR(255) NOT NULL;
