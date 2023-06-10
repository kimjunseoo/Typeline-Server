/*
  Warnings:

  - You are about to drop the column `yyyymm` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `yyyymmdd` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `dd` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mm` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yyyy` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "yyyymm",
DROP COLUMN "yyyymmdd",
ADD COLUMN     "dd" TEXT NOT NULL,
ADD COLUMN     "mm" TEXT NOT NULL,
ADD COLUMN     "yyyy" TEXT NOT NULL;
