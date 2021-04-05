import * as express from 'express';
import db from '../../db/index';

const router = express.Router();

//GET localhost:3000/api/tags/id
router.get('/:tagsid?', async (req, res) => {
    const tagsid = Number(req.params.tagsid);
    try {
        if (tagsid) {
            const [getTag] = await db.tags.oneTag(tagsid);
            res.json(getTag);
        } else {
            const getTags = await db.tags.allTags();
            res.json(getTags);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})


//GET localhost:3000/api/tags
router.get('/', async (req, res) => {
    try {
        const getTags = await db.tags.allTags();
        res.json(getTags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//POST localhost:3000/api/tags
router.post('/', (req, res) => {
    const postsTags = req.body;
    try {
         let postedTags = postsTags.forEach(async () => (
            await db.tags.postTag(postsTags)
        ));
        res.json(postedTags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }

})

//DELETE localhost:3000/tags/id
router.delete('/:tagsid', async (req, res) => {
    const tagsid = Number(req.params.tagsid);
    try {
        const deletedTags = await db.tags.deleteTag(tagsid);
        res.json(deletedTags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})


export default router;