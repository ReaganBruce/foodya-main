import * as jwt from "jsonwebtoken";
import config from "../../config";
import { authenticate } from "passport";
import { Router } from 'express';
import { ReqUser } from "../../types"

const router = Router();


//done creates a req.body
router.post("/", authenticate("local"), async (req: ReqUser, res) => {
    console.log(req.body);
    try {
        //@ts-ignore
        const token = jwt.sign({ userid: req.user.id, username: req.user.username, role: 1 }, config.jwt.secret)
        res.json(token);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "my code sucks" });
    }
}) 

export default router;