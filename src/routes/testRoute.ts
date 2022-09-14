import { Router } from "express";
import { tokenMiddleware } from "../middlewares/tokenMIddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMIddleware";
import { testSchema } from "../schemas/testSchema";
import {
    createTest,
    getTestsByGroupBy
} from "../controllers/testController";

const testRouter = Router();

testRouter.use(tokenMiddleware);

testRouter.post("/test", validateSchemaMiddleware(testSchema), createTest);
testRouter.get("/tests", getTestsByGroupBy);

export default testRouter;