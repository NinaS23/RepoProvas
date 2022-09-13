import { Router } from "express";
import { createTest } from "../controllers/testController";
import { tokenMiddleware } from "../middlewares/tokenMIddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMIddleware";
import { testSchema } from "../schemas/testSchema";

const testRouter = Router();

testRouter.use(tokenMiddleware);

testRouter.post("/test", validateSchemaMiddleware(testSchema), createTest );

export default testRouter;