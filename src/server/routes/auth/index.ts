import { Router } from 'express';
import loginRouter from "./userlogin";
import registerRouter from "./userregister";

const router = Router();
router.use("/login", loginRouter);
router.use("/register", registerRouter);

export default router;