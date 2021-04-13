import * as express from 'express';
import db from '../../../db/index';

const router = express.Router();


// GET user localhost:3000/api/user/
router.get('/:username', async (req, res) => {
    const username = req.params.username;
    try { 
        const [getUser] = await db.user.getUser(username);
        res.json(getUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})



export default router;