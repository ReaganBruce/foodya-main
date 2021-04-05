import * as express from 'express';
import db from '../../db/index';

const router = express.Router();

//GET localhost:3000/api/reviews/id
router.get('/:reviewsid?', async (req, res) => {
    const reviewsid = Number(req.params.reviewsid);
    try {
        if (reviewsid) {
            const [oneReview] = await db.reviews.oneReview(reviewsid);
            res.json(oneReview);
        } else {
            const allReviews = await db.reviews.allReviews();
            res.json(allReviews);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})


//GET localhost:3000/api/reviews
router.get('/', async (req, res) => {
    try {
        const allReviews = await db.reviews.allReviews();
        res.json(allReviews);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})


//POST localhost:3000/api/reviews
router.post('/', async (req, res) => {
    const insertReview = req.body;
    try {
        const insertedReview = await db.reviews.insertReview(insertReview);
        res.json(insertedReview);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})


//DELETE localhost:3000/api/reviews/id
router.delete('/:reviewsid', async (req, res) => {
    const reviewsid = Number(req.params.reviewsid);
    try {
        const deletedReview = await db.reviews.deleteReview(reviewsid);
        res.json(deletedReview);    
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})



export default router;

