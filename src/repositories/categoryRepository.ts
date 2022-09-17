import prisma from "../config/database";

export async function findCategory(category: string) {
    const result = await prisma.categories.findFirst({
        where: { name: category }
    })
    
    return result;
}