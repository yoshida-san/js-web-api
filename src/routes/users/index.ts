import express from "express";
import mongodbClient from "../../common/dbClient";
import noImpl from "../../common/noImpl";
import IDocumentUser from "../../documents/IUser";
const router = express.Router();

router.post("/signup", noImpl);
router.put("/:user", noImpl);
router.delete("/:user", noImpl);

router.get("/:user", (req, res, next) => {
    const uid: string = req.params.user;
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

        const collection = db.collection<IDocumentUser>("users");
        collection.findOne({ uid: String }, (e, result) => {
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

            if (result === null) {
                res.status(404).json({
                    message: "Not Found.",
                });
            }
            res.json(result);
        });
    });
});

export default router;
