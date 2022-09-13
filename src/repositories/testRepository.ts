import prisma from "../config/database";
import { TtestsData } from "../types/testTypes";



export async function insertTest(test:TtestsData) {
    await prisma.tests.create({data:test})
}