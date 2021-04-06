import * as express from 'express';
import got from 'got';

const router = express.Router();


const apiSecret = process.env.YELP_API_KEY
const clientSecret = process.env.YELP_CLIENT_ID



const apiHeaders = {
    'Authorization': `Bearer ${apiSecret}`,
    'client_id': `${clientSecret}`
};


//GET localhost:3000/yelp/food-truck/birmingham-al
router.get('/:searchterm/:searchlocation', async (req, res) => {
    const searchTerm = req.params.searchterm;
    const searchLocation = req.params.searchlocation;
    try {
        const yelpResponse = await got(`https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${searchLocation}`,
            {
                headers: apiHeaders
            })
        res.send(yelpResponse.body);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


//GET localhost:3000/yelp/id
router.get('/:foodtruckid', async (req, res) => {
    const foodtruckid = req.params.foodtruckid;
    try {
        const foodtruckResponse = await got(`https://api.yelp.com/v3/businesses/${foodtruckid}`,
            {
                headers: apiHeaders
            });
        res.send(foodtruckResponse.body);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

//GET localhost:3000/yelp/id/reviews
router.get('/:reviewsid/reviews', async (req, res) => {
    const userReviewsid = req.params.reviewsid;
    console.log("dnmasndjasd");
    try {
        const userReviewsResponse = await got(`https://api.yelp.com/v3/businesses/${userReviewsid}/reviews`,
        {
            headers: apiHeaders
        });
        res.send(userReviewsResponse.body);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

export default router;