import * as express from 'express';
import db from '../../db/index';

const router = express.Router();

//GET localhost:3000/api/businesstag/id
router.get('/:businesstagid?', async (req, res) => {
    const businesstagid = Number(req.params.businesstagid);
    try {
        if(businesstagid) {
            const [businesstag] = await db.businessTags.oneBusinessTag(businesstagid);
            res.json(businesstag);
        } else {
            const businessTags = await db.businessTags.allBusinessTags();
            res.json(businessTags);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//POST localhost:3000/api/businesstag
router.post('/', async (req, res) => {
    const postBusinessTag = req.body;
    try {   
        const newBusinessTag = await db.businessTags.postBusinessTag(postBusinessTag.tagid, postBusinessTag.businessid);
        res.json(newBusinessTag);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//DELETE localhost:3000/api/businesstag
router.delete('/:businesstagid', async (req, res) => {
    const businesstagid = Number(req.params.businesstagid);
    try {  
        const deleteBusinessTag = await db.businessTags.deleteBusinessTag(businesstagid);
        res.json(deleteBusinessTag);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})




export default router;