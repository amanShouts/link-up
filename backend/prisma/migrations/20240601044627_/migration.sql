-- CreateTable
CREATE TABLE "UserLiked" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "UserLiked_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserLiked" ADD CONSTRAINT "UserLiked_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLiked" ADD CONSTRAINT "UserLiked_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
