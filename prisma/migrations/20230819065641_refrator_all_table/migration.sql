/*
  Warnings:

  - You are about to drop the `comments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "comments";

-- CreateTable
CREATE TABLE "Comment" (
    "comment_id" VARCHAR(255) NOT NULL,
    "created_at" BIGINT NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("comment_id")
);
