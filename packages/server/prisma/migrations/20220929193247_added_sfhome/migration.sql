-- CreateTable
CREATE TABLE "SFHome" (
    "id" TEXT NOT NULL,
    "buildingId" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "chimney" BOOLEAN NOT NULL,

    CONSTRAINT "SFHome_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SFHome_buildingId_key" ON "SFHome"("buildingId");

-- AddForeignKey
ALTER TABLE "SFHome" ADD CONSTRAINT "SFHome_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
