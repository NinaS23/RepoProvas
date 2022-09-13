import { user } from "@prisma/client";


export type TuserData = Omit<user,"createdAt" |"id">;

export interface IuserData  {
    email: string,
    password: string,
    passwordRef: string

}