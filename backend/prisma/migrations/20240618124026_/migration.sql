-- CreateTable
CREATE TABLE "Follower" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "followerUsername" TEXT NOT NULL,

    CONSTRAINT "Follower_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Follower_username_followerUsername_key" ON "Follower"("username", "followerUsername");

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_followerUsername_fkey" FOREIGN KEY ("followerUsername") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
