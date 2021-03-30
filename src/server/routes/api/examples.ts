import * as express from 'express';
import db from '../../db/index'

const router = express.Router();

//GET localhost:3000/api/examples
router.get('/', async (req, res) => {
    try {
        const examples = await db.examples.getAllExamples();
        res.json(examples);
    } catch (err){
        console.log(err);
        res.status(500).json({ msg: 'Reagan ruined this boilerplate entirely', error: err.message});
    }
})


export default router;