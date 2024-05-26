-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT;

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyLogo" TEXT,
    "role" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "startYear" TEXT NOT NULL,
    "endYear" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
