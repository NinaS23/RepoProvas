import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMIddleware";
import { createUser,loginUser } from "../controllers/userController";
import { userLoginSchema,userRegisterSchema } from "../schemas/userSchema";

const userRouter = Router();

userRouter.post("/sign-up", validateSchemaMiddleware(userRegisterSchema), createUser )
userRouter.post("/sign-in", validateSchemaMiddleware(userLoginSchema), loginUser )

export default userRouter;