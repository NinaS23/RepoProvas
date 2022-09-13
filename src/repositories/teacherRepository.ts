import prisma from "../config/database";

export async function findTeacherId(name:string) {
    const result = await prisma.teachers.findFirst({
        where: { name }
    })
    return result;
}