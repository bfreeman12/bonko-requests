const express = require('express')
const app = express()
const db = require('./database.js')
const cors = require('cors')
const bodyParser = require('body-parser')

const http_port = 8000

app.use(cors({
    origin: 'http://10.0.0.248:3000'
}))
app.use(bodyParser.json())

app.listen(http_port, () => {
    console.log(`Server running on port ${http_port}`);
});

app.get("/api/requests", (req, res) => {
    const sql = "select * from ideaTable"
    const params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

app.post("/api/upvote", (req, res) => {
    const { id, upvotes } = req.body;
    const sql = "UPDATE ideaTable SET upvotes = ? WHERE uid = ?";
    const params = [upvotes, id];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": {
                id: id,
                upvotes: upvotes
            }
        });
    });
});


app.use(function (req, res) {
    res.status(404).send("404 - Not Found");
});