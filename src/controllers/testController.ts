import {  Request, Response } from "express";
import httpsUtils from "../utils/httpsUtils";
import * as testService from "../services/testService";
import { ItestInput } from "../types/testTypes";

export async function createTest(req:Request,res:Response) {
    const test : ItestInput = req.body;
    console.log(test)
    await testService.createTest(test);
    res.sendStatus(httpsUtils.CREATED);
}