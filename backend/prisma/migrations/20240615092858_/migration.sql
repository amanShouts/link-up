-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "authorId" INTEGER,
ADD COLUMN     "category" TEXT,
ADD COLUMN     "link" TEXT;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
