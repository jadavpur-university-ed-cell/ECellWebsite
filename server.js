"use strict";

const express = require("express");
const router = express.Router();

const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));
app.use(express.json());

//Parse URL-encoded bodies
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

//Routes
app.use("/", require("./routes/index"));
// app.get("*", function (req, res) {
//     res.render("pages/error", { originalUrl: req.originalUrl });
// });

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`E-Cell Website listening on port ${port}..`)
);