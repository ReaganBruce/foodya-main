import * as express from 'express';
import apiRouter from './api';
import authRouter from './api';

const router = express.Router();

//localhost:3000/api/
router.use('/api', apiRouter)
//localhost:3000/auth/
router.use('/auth', authRouter);


export default router;