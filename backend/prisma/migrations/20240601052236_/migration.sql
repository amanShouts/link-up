/*
  Warnings:

  - You are about to drop the column `username` on the `UserLiked` table. All the data in the column will be lost.
  - Added the required column `userId` to the `UserLiked` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserLiked" DROP CONSTRAINT "UserLiked_username_fkey";

-- AlterTable
ALTER TABLE "UserLiked" DROP COLUMN "username",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserLiked" ADD CONSTRAINT "UserLiked_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
