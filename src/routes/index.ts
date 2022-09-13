import { Router } from "express";
import userRouter from "./userRoute";
import testRouter from "./testRoute";

const router = Router()

router.use(userRouter);
router.use(testRouter);

export default router;