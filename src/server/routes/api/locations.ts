import * as express from 'express';
import db from '../../db/index';

const router = express.Router();


//GET localhost:3000/api/locations/id
router.get('/:locationid?', async (req, res) => {
    const locationid = Number(req.params.locationid)
    try {
        if (locationid) {
            const [oneLocation] = await db.locations.oneLocation(locationid);
            res.json(oneLocation);
        } else {
            const allLocations = await db.locations.allLocations();
            res.json(allLocations);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//GET localhost:3000/api/location
router.get('/', async (req, res) => {
    try {
        const allLocations = await db.locations.allLocations();
        res.json(allLocations);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//POST localhost:3000/api/location
router.post('/', async (req, res) => {
    const postLocation = req.body;
    try {
        const postedLocation = await db.locations.insertLocations(postLocation);
        res.json(postedLocation);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//UPDATE localhost:3000/api/location/id
router.put('/:locationid?', async (req, res) => {
    const updateLocation = req.body;
    const locationid = Number(req.params.locationid);
    try {
        const updatedLocation = await db.locations.updateLocation(updateLocation, locationid);
        res.json(updatedLocation)
    } catch (error){
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

//DELETE localhost:3000/api/location/id
router.delete('/:locationid', async (req, res) => {
    const locationid = Number(req.params.locationid);
    try {
        const deletedLocation = await db.locations.deleteLocation(locationid);
        res.json(deletedLocation);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})




export default router;