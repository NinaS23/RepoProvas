import joi from "joi";
import { IuserData } from "../types/userTypes";

export const userSchema = joi.object<IuserData>({
    email: joi.string().email().required(),
    password: joi.string().required(),
    passwordRef: joi.string().required()
})