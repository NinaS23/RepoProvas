import prisma from "../config/database";
import { TtestsData } from "../types/testTypes";



export async function insertTest(test: TtestsData) {
    await prisma.tests.create({ data: test })
}

//relation with test
export async function findByDiscipline() {
    const result = prisma.terms.findMany({
        include: {
            disciplines: {
                select: {
                    id: true,
                    name: true,
                    teacherDisciplines: {
                        select: {
                            id: true,
                            disciplines: {},
                            teachers: {},
                            tests: {
                                select: {
                                    id: true,
                                    name: true,
                                    pdfUrl: true,
                                    categories: {}
                                }
                            },

                        }
                    }
                }
            }
        }
    })
    return result;
}
//relation with test
export async function findByTeacher() {
    const result = prisma.teachers.findMany({
        include: {
            teacherDisciplines: {
                select: {
                    disciplines: {
                        select: {
                            name: true,
                            terms: {}
                        }
                    },
                    tests: {
                        select: {
                            id: true,
                            name: true,
                            pdfUrl: true,
                            categories: {}
                        }
                    },
                }
            }
        }
    })
    return result;
}