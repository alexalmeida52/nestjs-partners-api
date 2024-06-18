/*
  Warnings:

  - Added the required column `ticketKind` to the `ReservationHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ReservationHistory` ADD COLUMN `ticketKind` ENUM('full', 'half') NOT NULL;
