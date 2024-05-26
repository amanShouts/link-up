/*
  Warnings:

  - You are about to drop the column `industryField` on the `User` table. All the data in the column will be lost.
  - Added the required column `company` to the `Entrepreneur` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company` to the `Mentor` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "IndustryType" AS ENUM ('NONE', 'SaaS', 'Ecommerce', 'Healthcare', 'Finance', 'Retail', 'RealEState', 'Manufacturing', 'Automotive', 'Education', 'Energy', 'Telecommunications', 'Media', 'Entertainment', 'Travel', 'Hospitality', 'Agriculture', 'Logistics', 'Construction', 'Pharmaceuticals', 'Biotechnology', 'Insurance', 'LegalServices', 'FoodandBeverage', 'Aerospace', 'Fashion', 'Gaming', 'Advertising', 'Consulting', 'Mining', 'Utilities');

-- DropForeignKey
ALTER TABLE "Entrepreneur" DROP CONSTRAINT "Entrepreneur_mentorId_fkey";

-- AlterTable
ALTER TABLE "Entrepreneur" ADD COLUMN     "company" TEXT NOT NULL,
ALTER COLUMN "mentorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Mentor" ADD COLUMN     "company" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "industryField",
ADD COLUMN     "bgImg" TEXT,
ADD COLUMN     "currDesignation" TEXT,
ADD COLUMN     "desc" TEXT;

-- CreateTable
CREATE TABLE "Industry" (
    "id" SERIAL NOT NULL,
    "usedId" INTEGER NOT NULL,
    "type" "IndustryType" NOT NULL DEFAULT 'NONE',

    CONSTRAINT "Industry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "usedId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Industry" ADD CONSTRAINT "Industry_usedId_fkey" FOREIGN KEY ("usedId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_usedId_fkey" FOREIGN KEY ("usedId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entrepreneur" ADD CONSTRAINT "Entrepreneur_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
