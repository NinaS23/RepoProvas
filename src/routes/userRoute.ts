import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMIddleware";
import { createUser } from "../controllers/userController";
import { userSchema } from "../schemas/userSchema";

const userRouter = Router();

userRouter.post("/sign-up", validateSchemaMiddleware(userSchema), createUser )

export default userRouter;