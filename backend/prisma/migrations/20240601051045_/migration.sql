/*
  Warnings:

  - You are about to drop the column `userId` on the `UserLiked` table. All the data in the column will be lost.
  - Added the required column `username` to the `UserLiked` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserLiked" DROP CONSTRAINT "UserLiked_userId_fkey";

-- AlterTable
ALTER TABLE "UserLiked" DROP COLUMN "userId",
ADD COLUMN     "username" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserLiked" ADD CONSTRAINT "UserLiked_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
