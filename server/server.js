const express = require("express");
const app = express();
const db = require("./database.js");
const cors = require("cors");
const bodyParser = require("body-parser");

require('dotenv').config({ path: '../.env' });

ip_address = process.env.IP;
client_port = process.env.PORT;
server_port = process.env.SERVER_PORT

app.use(
  cors({
    origin: `http://${ip_address}:${client_port}`,
  })
);

app.use(bodyParser.json());

app.listen(server_port, () => {
  console.log(`Server running on port ${server_port}`);
});

app.get("/api/requests", (req, res) => {
  const sql = "select * from ideaTable";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.post("/api/upvote", (req, res) => {
  const { id, upvotes } = req.body;
  const sql = "UPDATE ideaTable SET upvotes = ? WHERE uid = ?";
  const params = [upvotes, id];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: {
        id: id,
        upvotes: upvotes,
      },
    });
  });
});

app.post("/api/submit-request", (req, res) => {
  const {
    request,
    description,
    requestor,
    email,
    office,
    daterequested,
    requestStatus,
  } = req.body;
  const sql =
    "INSERT INTO ideaTable (request, description, requestor, email, office, dateopened, status, upvotes) VALUES (?, ?, ?, ?, ?, ?, ?, 0)";
  const params = [
    request,
    description,
    requestor,
    email,
    office,
    daterequested,
    requestStatus,
  ];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
  });
});
app.post("/api/delete-request", (req, res) => {
  const { uid, id } = req.body;
  const sql = "DELETE from ideaTable where uid= ?";
  db.run(sql, uid, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
  });
});

app.post("/api/update-request", (req, res) => {
  const { uid, selectValue } = req.body;

  const sql = "UPDATE ideaTable SET status= ? where uid= ?";
  const params = [selectValue, uid];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
  });
});
app.use(function (req, res) {
  res.status(404).send("404 - Not Found");
});
