import {  Request, Response } from "express";
import httpsUtils from "../utils/httpsUtils";
import * as testService from "../services/testService";
import { ItestInput } from "../types/testTypes";

export async function createTest(req:Request,res:Response) {
    const test : ItestInput = req.body;
   const isCreated = await testService.createTest(test);
    res.status(httpsUtils.CREATED).send(isCreated);
}