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
//DELETE
router.delete("/:username", async (req, res) => {
    const id = req.params.username

    try {
        const result = await db.user.destroy(id);
        res.json({ msg: `blog ${id} destroyed muhahaha!`, affectedRows: result.affectedRows});
    } catch (e) {
        console.log(e);
        res.sendStatus(500).json({ msg: "my code sucks!", e });
    }
});



export default router;