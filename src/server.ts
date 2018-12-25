import bodyParser from "body-parser";
import express from "express";
import log from "./common/log";
import verifyToken from "./common/verifyToken";
import auth from "./routes/auth/index";
import test from "./routes/test/index";
import users from "./routes/users/index";

log.init();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", auth);
app.use("/users", verifyToken, users);
app.use("/test", verifyToken, test);

app.use((req, res) => {
    res.status(404);
    res.json({
        message: "API Not Found",
        requestPath: req.path,
    });
});

app.listen(3000, () => {
    log.systemTrace("listening on port 3000!");
});

export default app;
