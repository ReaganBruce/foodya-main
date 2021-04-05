import * as express from 'express';
import db from '../../db/index';



const router = express.Router();

//GET localhost:3000/api/usertag/id
router.get('/:usertagid?', async (req, res) => {
    const usertagid = Number(req.params.usertagid);
    try {
        if (usertagid) {
            const [userTag] = await db.userTags.userTag(usertagid);
            res.json(userTag)
        } else {
            const userTags = await db.userTags.userTags();
            res.json(userTags);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//GET localhost:3000/api/usertag
router.get('/', async (req, res) => {
    try {
        const userTags = await db.userTags.userTags();
        res.json(userTags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//POST localhost:3000/api/usertag
router.post('/', async (req, res) => {
    const postUserTags = req.body;
    try {
        const postedUserTags = await db.userTags.postUserTag(postUserTags.tagid, postUserTags.userid);
        res.json(postedUserTags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//DELETE localhost:3000/api/usertag/id
router.delete('/:usertagig', async (req, res) => {
    const usertagid = Number(req.params.usertagid);
    try {
        const deletedUserTag = await db.userTags.deleteUserTag(usertagid);
        res.json(deletedUserTag);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

export default router;