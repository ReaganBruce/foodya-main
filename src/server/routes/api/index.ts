import * as express from 'express';
import examplesRouter from './examples';

const router = express.Router();


//localhost:3000/api/examples
router.use('/examples', examplesRouter);




export default router;