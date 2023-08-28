-- CreateTable
CREATE TABLE "Reserved" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "availability_status" TEXT NOT NULL,
    "daily_price" DOUBLE PRECISION NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,
    "item_type_id" INTEGER NOT NULL,

    CONSTRAINT "Reserved_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReservedType" (
    "id" SERIAL NOT NULL,
    "type_name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReservedType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reserved" ADD CONSTRAINT "Reserved_item_type_id_fkey" FOREIGN KEY ("item_type_id") REFERENCES "ReservedType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
