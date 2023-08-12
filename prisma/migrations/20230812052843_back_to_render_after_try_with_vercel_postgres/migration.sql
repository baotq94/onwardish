-- CreateTable
CREATE TABLE "views" (
    "slug" VARCHAR(255) NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "views_pkey" PRIMARY KEY ("slug")
);
