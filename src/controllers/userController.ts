import {  Request, Response } from "express";
import httpsUtils from "../utils/httpsUtils";
import * as userService from "../services/userService"

export async function createUser(req:Request,res:Response){
    const user = req.body;
    await userService.createUser(user)
    res.sendStatus(httpsUtils.CREATED)
}