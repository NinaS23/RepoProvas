import prisma from "../config/database";
import { TuserData } from "../types/userTypes";


export async function findUserName(email:string) {
    const result = await prisma.user.findFirst({
        where: { email }
    })
    return result;
}

export async function insertUserData(user:TuserData) {
  await prisma.user.create({ data: user})
}