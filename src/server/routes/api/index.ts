import * as express from 'express';
import businessRouter from './business';
import reviewRouter from './reviews';
import locationsRouter from './locations';
import hoursRouter from './hours';
import tagsRouter from './tags';
import businessTagsRouter from './businessTags';
import userTagsRouter from './userTags';
import userRouter from './user/user';
import vendorRouter from './vendor/vendor';
import userloginRouter from '../auth/userAuth/userlogin';
import vendorloginRouter from '../auth/vendorAuth/vendorlogin'








const router = express.Router();

//MAIN ROUTES

//localhost:3000/api/business
router.use('/business', businessRouter);
//localhost:3000/api/reviews
router.use('/reviews', reviewRouter);
//localhost:3000/api/location
router.use('/location', locationsRouter);
//localhost:3000/api/hours
router.use('/hours', hoursRouter);
//localhost:3000/api/tags
router.use('/tags', tagsRouter);
//localhost:3000/api/businesstags
router.use('/businesstags', businessTagsRouter);
//localhost:3000/api/usertags
router.use('/usertags', userTagsRouter);
//localhost:3000/api/user
router.use('/user', userRouter);
//localhost:3000/api/vendor
router.use('/vendor', vendorRouter);



//LOGIN ROUTES

//localhost:3000/auth/userlogin
router.use('/userlogin', userloginRouter);
//localhost:3000/auth/vendorlogin
router.use('/vendorlogin', vendorloginRouter);








export default router;