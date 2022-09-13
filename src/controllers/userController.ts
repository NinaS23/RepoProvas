import {  Request, Response } from "express";
import httpsUtils from "../utils/httpsUtils";
import * as userService from "../services/userService"
import { IuserData, TuserData } from "../types/userTypes";

export async function createUser(req:Request,res:Response){
    const user : IuserData = req.body;
    await userService.createUser(user)
    res.sendStatus(httpsUtils.CREATED)
}

export async function loginUser(req:Request,res:Response) {
    const user : TuserData = req.body;
    const userData = await userService.loginUser(user);
    res.status(httpsUtils.OK).send(userData);
}