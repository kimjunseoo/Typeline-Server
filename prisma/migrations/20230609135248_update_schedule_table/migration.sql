/*
  Warnings:

  - You are about to drop the column `date` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `yyyymm` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yyyymmdd` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "date",
DROP COLUMN "user_id",
ADD COLUMN     "yyyymm" INTEGER NOT NULL,
ADD COLUMN     "yyyymmdd" INTEGER NOT NULL;
