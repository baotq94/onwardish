-- CreateTable
CREATE TABLE "comments" (
    "comment_id" VARCHAR(255) NOT NULL,
    "created_at" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);
