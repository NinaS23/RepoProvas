-- CreateTable
CREATE TABLE "teacherDisciplines" (
    "id" SERIAL NOT NULL,
    "teachId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "teacherDisciplines_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teachersDisciplineId_fkey" FOREIGN KEY ("teachersDisciplineId") REFERENCES "teacherDisciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "teacherDisciplines" ADD CONSTRAINT "teacherDisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "teacherDisciplines" ADD CONSTRAINT "teacherDisciplines_teachId_fkey" FOREIGN KEY ("teachId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
