import * as express from 'express';
import db from '../../db/index';

const router = express.Router();


//GET localhost:3000/api/buisness/id
router.get('/:businessid?', async (req, res) => {
    const businessid = Number(req.params.businessid);
    try{
        if (businessid) {
            const [business] = await db.business.singleBusiness(businessid);
            res.json(business);
            console.log(business);
        } else {
            const businessess = await db.business.allBusinessess();
            res.json(businessess);
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})


//GET localhost:3000/api/business
router.get('/', async (req, res) => {
    try {
        const businessess = await db.business.allBusinessess();
        res.json(businessess);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
})


//POST localhost:3000/api/business
router.post('/', async (req, res) => {
     const postBusiness = req.body;
     console.log(postBusiness);
    try {
        const businessPosted = await db.business.insertBusiness(postBusiness);
        res.json(businessPosted);
        console.log(businessPosted);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})

//UPDATE localhost:3000/api/business/id
router.put('/:businessid?', async (req, res) => {
    const businessUpdated = req.body;
    const businessid = Number(req.params.businessid);
    console.log({ businessid, businessUpdated })
    try {
        const updatedBusiness = await db.business.updateBusiness(businessUpdated, businessid);
        res.json(updatedBusiness);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})


//DELETE localhost:3000/api/business/id
router.delete('/:businessid', async (req, res) => {
    const businessid = Number(req.params.businessid);
    console.log(businessid);
    try {
        const businessDeleted = await db.business.deleteBusiness(businessid);
        res.json(businessDeleted);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})

export default router;