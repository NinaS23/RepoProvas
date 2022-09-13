import { Router } from "express";
import userRouter from "./userRoute";

const router = Router()

router.use(userRouter);

export default router;