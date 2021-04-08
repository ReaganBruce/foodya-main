import * as express from 'express';
import apiRouter from './api';
import authRouter from './auth';
import yelpRouter from './yelpApi/yelp';

const router = express.Router();

//localhost:3000/api/
router.use('/api', apiRouter)
//localhost:3000/auth/
router.use('/auth', authRouter);
//localhost:3000/yelp/
router.use('/yelp', yelpRouter);



export default router;