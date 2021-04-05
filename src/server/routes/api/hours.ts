import * as express from 'express';
import db from '../../db/index';

const router = express.Router();

//GET localhost:3000/api/hours/id
router.get('/:hoursid?', async (req, res) => {
    const hoursid = Number(req.params.hoursid);
    try {
        if (hoursid) {
            const [getHour] = await db.hours.getHour(hoursid);
            res.json(getHour);
        } else {
            const getHours = await db.hours.getAllHours();
            res.json(getHours);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})

//GET localhost:3000/api/hours
router.get('/', async (req, res) => {
    try {
        const getHours = await db.hours.getAllHours();
        res.json(getHours)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//POST localhost:3000/api/hours
router.post('/', async (req, res) => {
    const postHours = req.body;
    try {
        const postedHours = await db.hours.postHours(postHours);
        res.json(postedHours);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})


//UPDATE localhost:3000/api/hours/id
router.put('/:hoursid', async (req, res) => {
    const hoursid = Number(req.params.hoursid);
    const updateHours = req.body;
    try {
        const updatedHours = await db.hours.updateHours(updateHours, hoursid);
        res.json(updatedHours);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})


//DELETE localhost:3000/api/hours/id
router.delete('/:hoursid', async (req, res) => {
    const hoursid = Number (req.params.hoursid)
    try {
        const [deleteHour] = await db.hours.deleteHours(hoursid);
        res.json(deleteHour);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

export default router;