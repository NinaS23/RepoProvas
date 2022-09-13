import prisma from "../config/database";

export async function getTeacherDisciplines(teacherId: number, disciplineId:number) {
    const result = await prisma.teacherDisciplines.findFirst({
        where: {teacherId,disciplineId}

    });
    return result;
}