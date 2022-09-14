import prisma from "../config/database";


export async function findDisciplineId(name:string) {
    const result = await prisma.disciplines.findFirst({
        where:  { name }
    })

    return result;
}

