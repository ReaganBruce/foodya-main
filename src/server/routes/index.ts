import * as express from 'express';
import apiRouter from './api';

const router = express.Router();

//localhost:3000/api/
router.use('/api', apiRouter)


export default router;