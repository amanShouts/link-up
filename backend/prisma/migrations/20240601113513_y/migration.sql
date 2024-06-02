/*
  Warnings:

  - The primary key for the `UserLiked` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserLiked` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserLiked" DROP CONSTRAINT "UserLiked_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserLiked_pkey" PRIMARY KEY ("userId", "postId");
