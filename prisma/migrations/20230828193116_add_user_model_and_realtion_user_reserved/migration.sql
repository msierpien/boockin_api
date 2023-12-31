/*
  Warnings:

  - Added the required column `user_id` to the `Reserved` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reserved" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Reserved" ADD CONSTRAINT "Reserved_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
