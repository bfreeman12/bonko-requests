const express = require('express')
const app = express()
const db = require('./database.js')
const cors = require('cors')

const hostIp = '10.0.0.248'
const http_port = 8000

app.use(cors({
    origin: `http://${hostIp}:3000`
}))

app.listen(http_port, () => {
    console.log(`Server running on port ${http_port}`);
});

app.get("/api/requests", (req, res,) => {
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
app.use(function (req, res) {
    res.status(404);
});