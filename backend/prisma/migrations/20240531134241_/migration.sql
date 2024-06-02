/*
  Warnings:

  - Made the column `bgImg` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "img" TEXT,
ADD COLUMN     "link" TEXT,
ADD COLUMN     "video" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "type" DROP NOT NULL,
ALTER COLUMN "bgImg" SET NOT NULL,
ALTER COLUMN "bgImg" SET DEFAULT 'https://t4.ftcdn.net/jpg/04/19/76/07/360_F_419760725_gjProGIuCWJjwfQ2ljv9KAUyqcEAahz6.jpg';
