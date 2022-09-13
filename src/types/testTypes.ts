import { tests } from "@prisma/client"

export type TtestsData = Omit <tests, "id" | "createdAt">

export interface ItestInput {
    name: string,
    pdfUrl: string,
    category: string,
    teacher: string
}