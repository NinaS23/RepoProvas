import joi from "joi";
import { IuserData } from "../types/userTypes";

export const userRegisterSchema = joi.object<IuserData>({
    email: joi.string().email().required(),
    password: joi.string().required(),
    passwordRef: joi.string().valid(joi.ref("password")).required()
})

export const userLoginSchema = joi.object<IuserData>({
    email: joi.string().email().required(),
    password: joi.string().required()
})