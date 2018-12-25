import express from "express";

export default function noImpl(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(501).json({ success: false, message: "Not Implemented." });
}
