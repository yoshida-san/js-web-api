import express from "express";
import jwt from "jsonwebtoken";
import mongodbClient from "../../common/dbClient";
import noImpl from "../../common/noImpl";
import IUser from "../../documents/IUser";

const router = express.Router();

router.delete("/signout", noImpl);

router.post("/signin", (req, res, next) => {
    const uid: string = req.body.uid;
    mongodbClient((ce, client, db) => {
        if (ce) {
            client.close();
            res.status(500);
            res.json({
                message: ce.message,
                requestPath: req.path,
            });
            return next(ce);
        }

        const collection = db.collection<IUser>("users");
        collection.findOne({ uid }, (e, result) => {
            if (e) {
                client.close();
                res.status(500);
                res.json({
                    message: e.message,
                    requestPath: req.path,
                });
                return next(e);
            }

            client.close();

            if (result === null || result.password !== req.body.password) {
                res.json({ signin: false, message: "nothing uid or missing password" });
                return;
            } else {
                const payload = {
                    name: result.uid,
                };
                const token: string = jwt.sign(payload, "secretKey");
                res.json({
                    success: true,
                    token,
                });
            }
        });
    });
});

export default router;
