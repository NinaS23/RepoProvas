/*
  Warnings:

  - You are about to drop the column `teachId` on the `teacherDisciplines` table. All the data in the column will be lost.
  - Added the required column `teacherId` to the `teacherDisciplines` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teacherDisciplines" DROP CONSTRAINT "teacherDisciplines_teachId_fkey";

-- AlterTable
ALTER TABLE "teacherDisciplines" DROP COLUMN "teachId",
ADD COLUMN     "teacherId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "teacherDisciplines" ADD CONSTRAINT "teacherDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
