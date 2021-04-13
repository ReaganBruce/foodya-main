import * as jwt from "jsonwebtoken";
import config from "../../config";
import db from "../../db";
import { Router } from 'express';
import { generateHash } from "../../utils/passwords";

const router = Router();


//done creates a req.body
router.post("/", async (req, res) => {
    const newUser = req.body;
    try {
        newUser.password = generateHash(newUser.password)
        // console.log(newUser.password);
        const result = await db.user.insert(newUser);
        // console.log(newUser);
        //@ts-ignore
        const token = jwt.sign({ userid: result.insertId, email: newUser.email, role: 1 }, config.jwt.secret)
        res.json(token);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "my code sucks" });
    }
})

export default router;