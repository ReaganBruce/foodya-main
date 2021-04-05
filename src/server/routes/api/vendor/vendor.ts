import * as express from 'express';
import db from '../../../db/index';

const router = express.Router();



router.get('/:vendorid', async (req, res) => {
    const vendorid = Number(req.params.vendorid);
    try {
        const [getVendor] = await db.vendor.getVendor(vendorid);
        res.json(getVendor);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }

})


export default router;