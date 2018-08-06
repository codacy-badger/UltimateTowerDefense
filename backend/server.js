const express = require("express");

const app = express();

const path = require("path");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const User = require("./../models/user");

const url = "mongodb://localhost:27017/TowerDefenseDB";

mongoose.connect(url, { useNewUrlParser: true });

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Adding user to the database
app.post("/api/addUser", (req, res) => {
    User(req.body.data).save(function (err, data) {
        if (err) {
            console.log("server.js " + "app.post ");
        }
        res.send(data);
    })
})

app.get("/api/user", (req, res) => {
    User.find({ userName: req.body.userName })
})


// Invalid url handling
app.use((req, res) => {
    res.status(404).json({
        error: {
            global: "Oops!! Something went wrong"
        }
    })
})


app.listen(8080, () => console.log("server running at 8080"));
